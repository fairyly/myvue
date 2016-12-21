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
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
        this.parseData(list_index);
      },
      parseData(data){
        setTimeout(()=> {
          Indicator.close()
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