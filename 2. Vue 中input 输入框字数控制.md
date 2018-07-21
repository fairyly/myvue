# Vue 中input 输入框字数控制

```
<template>
  <div class="input-line-cell">
    <el-input class="w-340" v-model="itemValue" placeholder="" :disabled="disableInput==0? false: true"  @focus="inputFocus(c3Index)" @keyup.native="(value) => toInput(value)"></el-input>
    <span class="tip"><span class="len_span">{{inputNum}}</span>/{{limitLength}}</span>
  </div>

</template>
<script>
  import strLength from '@/common/js/strlen';
  export default {
    name: "addinput",
    props: {
      childItem: String,   // 传入是不是 C3
      childIndex: Number,  // 传入的 C3 索引

      titleName: String,  //传入的标题子段
      inputValue: String, // 传入 input value
      maxLength: Number, // 限制长度
      disFlag: Number,  // 禁用标志,0: false,1: true
    },
    data() {
      return {
        inputNum: 0,
        limitLength: 10,
        itemValue: '',
        disableInput: false,

        c3Flag: '',
        c3Index: '',

        titleFlag: '',
      }
    },
    methods: {
      inputFocus(num) {
        var that = this
        console.log(num)
      },
      // 输入
      toInput: function(value) {
        var that = this;
        console.log(value)

        var temp = '';
        var temp = strLength.getByteVal(value.target.value,that.limitLength)
        // console.log(temp)
        that.itemValue= temp.trim()

        that.inputNum = strLength.getZhLen(that.itemValue);

        // 如果是标题
        if (that.titleFlag == 'title') {
          var obj = {}
          obj.value = that.itemValue;
          obj.title = that.titleFlag;

          that.$emit('itemInput',obj)
          return;
        }

        // console.log(that.inputNum )
        if (that.c3Flag == 'C3') {
          var obj = {}
          obj.value = that.itemValue;
          obj.flag = that.c3Flag;
          obj.c3Index = that.c3Index;
          that.$emit('itemInput',obj)
          return;
        }
        that.$emit('itemInput',that.itemValue)
      },
    },
    watch: {
      maxLength: function(newData,oldData){
        var that = this;
        that.limitLength = newData
      },
      inputValue: function(newData,oldData){
        var that = this;
        that.itemValue = newData
        that.inputNum = strLength.getZhLen(that.itemValue)
      },
      disFlag: function(newData,oldData){
        var that = this;
        that.disableInput = newData
      },
      childItem: function(newData,oldData){
        var that = this;
        that.c3Flag = newData
      },
      childIndex: function(newData,oldData){
        var that = this;
        that.c3Index = newData
      },

      titleName: function(newData,oldData){
        var that = this;
        that.titleFlag = newData
      },
    },
    /* 接收数据 */
    mounted(){
      var that = this;
      console.log(that.childIndex)
      that.limitLength = that.maxLength;
      that.itemValue = that.inputValue || '';
      that.inputNum = strLength.getZhLen(that.inputValue);
      that.disableInput = that.disFlag || 0;

      that.c3Flag = that.childItem || '';
      that.c3Index = that.childIndex==0? 0: that.childIndex;
      that.titleFlag = that.titleName
    },
  }
</script>
<style lang="less" scoped>

.input-line-cell {
  display: inline-block;
}

.w-340 {
  width: 340px;
  /deep/ .el-input__inner {
    font-size: 12px;
    color: #fff;
    background-color: rgba(255,255,255,.1);
  }
}
.el-input {
  /deep/ .el-input__inner {
    font-size: 12px;
    color: #fff;
    background-color: rgba(255,255,255,.1);
  }

  .is-disabled{

    /deep/ .el-input__inner {
      font-size: 12px;
      color: #fff;
      background-color: rgba(255,255,255,.1);
    }
  }
}

.edit-item {
  color:#fff;

  .tip {
      margin-left: -40px;
      color: rgba(255,255,255,0.7);
      width: 30px;
      display: inline-block;
      text-align: right;
      margin-right: 10px;
      font-size: 12px;
  }
}
</style>


++++++++++++++++++++++++++++++++++++

子和字符控制



/*
 * 判断字符长度
 * @param: str
 */

export default {
  /*
  * 一个汉字算两个字符,一个英文字母或数字算一个字符
  */
 getByteLen: function(val) {
      var len = 0;
      for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) != null) {
          len += 2;
        }
        else {
          len += 1;
        }
      }
      return len;
  },
   /*
  * 一个汉字算一个字,一个英文字母或数字算半个字
  */
  getZhLen: function (val) {
      var len = 0;
      for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) != null) {
          len += 1;
        }
        else {
          len += 0.5;
        }
      }
      return Math.ceil(len);
  },

  /*暂无用*/
  cutStr: function(str, len,type){
    var char_length = 0;
    for (var i = 0; i < str.length; i++){
        var son_str = str.charAt(i);
        if(type==1) {
          encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5;
        }
        if(type==2) {
           char_length += 1 ;
        }
        if (char_length >= len){
            var sub_len = char_length == len ? i+1 : i;
            return str.substr(0, sub_len);

        }
    }
  },

  /*
  * 限制字数用, 一个汉字算一个字,两个英文/字母算一个字
  */
  getByteVal: function(val, max) {
    var returnValue = '';
    var byteValLen = 0;
    for (var i = 0; i < val.length; i++) {
        if (val[i].match(/[^\x00-\xff]/ig) != null)
        byteValLen += 1;
        else
        byteValLen += 0.5;
        if (byteValLen > max)
        break;
        returnValue += val[i];
    }
    return returnValue;
  },

  /*
  * 限制字符数用, 一个汉字算两个字符,一个英文/字母算一个字符
  */
  getCharVal: function (val, max) {
    var returnValue = '';
    var byteValLen = 0;
    for (var i = 0; i < val.length; i++) {
        if (val[i].match(/[^\x00-\xff]/ig) != null)
        byteValLen += 2;
        else
        byteValLen += 1;
        if (byteValLen > max)
        break;
        returnValue += val[i];
    }
    return returnValue;
  },

  /*
  * 正则校验,校验非负数字
  */
  regPos: function(v) {
    var regTest = /^\d+(\.\d+)?$/;
    return regTest.test(v);
  }
}
```
