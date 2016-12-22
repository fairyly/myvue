<template>
  <div class="hello">
   <mt-swipe :auto="5000">
      <mt-swipe-item>
        <img src="../assets/banner1.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/banner2.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/banner3.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/banner4.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem,Indicator,Cell } from 'mint-ui';
export default {
  name: 'hello',
  data () {
    return {
      msg: ''
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
        setTimeout(()=> {
          Indicator.close()
        }, 1000)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.mint-swipe {
  height: 39vw !important;
}

.mint-swipe-indicator {
  width: 12px !important;
  height: 12px !important;
}

.mint-swipe-indicators {
  bottom: 5px !important;
}
img{
  border: 0 none;
  width: auto\9;
  height: auto;
  width: 100%;
  vertical-align: top;
  -ms-interpolation-mode: bicubic;
}
</style>
