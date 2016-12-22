<template>
  <div class="container plist">
    <mt-cell v-for="(item,index) in plist" :title="item.title" is-link :label="item.countPlay" :to="item.location">
      <img slot="icon" :src="item.imgUrl" width="60" height="60">
    </mt-cell>
  </div>
</template>

<script type="es6">
  import { Cell,Indicator } from 'mint-ui'
  import list_plist from '../jsons/listplist'
  export default {
    data(){
      return {
        plist: []
      }
    },
    created(){
      this.getList()
    },
    methods: {
      getList(){
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
        this.parseList(list_plist)
      },
      parseList(data){
        setTimeout(()=> {
          Indicator.close()
          this.plist = data;
        }, 1000)
      }
    }
  }
</script>

<style>
.mint-cell-title img {
	margin-right: 5px !important;
}
.plist .mint-cell-wrapper {
	padding: 10px 5px;
}
.plist .mint-cell-text{
	position: absolute;
	left: 80px;
	top: 23px;
	padding-right: 40px;
	height: 16px;
	overflow: hidden;
	line-height: 16px;
}
.plist .mint-cell-label:before{
	content: '';
	display: inline-block;
	width: 12px;
	height: 12px;
	background: url(../assets/images/icon_music.png) no-repeat center;
	background-size: 100%;
}
.plist .mint-cell-label {
	position: absolute;
	left: 80px;
	top: 38px;
}
</style>
