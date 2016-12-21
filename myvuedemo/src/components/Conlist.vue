<template>
	<div>
		<div>
	      <mt-cell v-for="(item,index) in songList" :title="item.title" @click.native="playAudio(index)">
	        <img src="../assets/images/download_icon.png" alt="" width="20" height="20">
	      </mt-cell>
	    </div>
	</div>
</template>

<script>
import { Cell } from 'mint-ui';
import list_index from '../jsons/listindex'
export default{
	data(){
      return {
        songList: []
      }
    },
    created(){
      this.get()
    },
    components: {},
    methods: {
      get(){
        this.parseData(list_index);
      },
      parseData(data){
        setTimeout(()=> {
          this.songList = data;
        }, 1000)
      },
      playAudio(index){
        var hash = this.songList[index].hash;
        this.$store.dispatch('getSong', hash);
        this.$store.dispatch('getLrc', hash);
      }
    }
}
</script>

<style>
  .mint-cell-title{
    padding: 0px 5px;
  }
  .mint-cell-title img {
    margin-right: 5px !important;
  }
</style>