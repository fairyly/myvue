# 1.9.1 滚动锚点导航栏


```
<template>
    <div>
        <ol class="titt" ref="control_Bar">
            <a :class="activeIndex == index?'cur':''" v-for="(item, index) in list" :key="index" @click="handleToggle(index)">{{item.tit}}</a>
        </ol>
        <ul class="conttt">
            <li ref='panelRef' v-for="(item, index) in list" :key="index">
                <h3>{{item.tit}}</h3>
                <p>{{item.cont}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      list: [],
      activeIndex: 0
    }
  },
  methods: {
    handleTab() {
      //   元素上边到视窗上边的距离   getBoundingClientRect().top
      for (let index = 0; index < this.$refs.panelRef.length; index++) {
        if (this.$refs.panelRef[index].getBoundingClientRect().top < 0) {
          this.activeIndex = index
        }
      }
    },
    // 点击导航栏，滚动条移动到内容所对应的位置
    handleToggle(index) {
      this.activeIndex = index
      //   网页被卷去的高   offsetTop
      window.scrollTo(0, this.$refs.panelRef[index].offsetTop + 1)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleTab)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleTab)
  }
}
</script>
```
