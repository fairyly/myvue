# vue绑定图片路径数据问题

如果直接引入一般没问题

```
  <img src="../assets/images/20130929090405.jpg" />
```

如果使用数据引入: 就有问题
```
 <template v-for="(item,index) in swiperArr">
    <swiper-slide><img :src="item.src" :alt="item.title" :title="item.title"/></swiper-slide>
  </template>
  
  swiperArr: [
    {
      id: 1,
      title:"",
      src: '../assets/images/20130929090401.jpg'
    },
    {
      id: 2,
      title:"",
      src: '../assets/images/20130929090402.jpg'
    }
  ]

```

## 解决方法

- 使用require(../assets/images/20130929090402.jpg)

- 直接将你的图片源文件放在项目目录的static文件夹里，然后和正常写图片路径那样写就可以
