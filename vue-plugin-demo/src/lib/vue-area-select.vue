<template>
  <div class="test1">
    <div class="area-select">
      <el-cascader
        :options="options"
        v-model="selectedOptions"
        @change="handleChange">
      </el-cascader>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';

  Vue.use(ElementUI);
  export default {
    name: 'vue-area-select',
    props: ['payPopOptions'],
    data () {
      return {
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }],
        selectedOptions:[]
      }
    },
    methods: {
       handleChange(value) {
        console.log(value,this.selectedOptions);
        //选择完毕后将值传递给父组件
        this.$emit('selected', value)
      }
    },
  }
</script>

<style>
  .area-select {
    position: relative;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
