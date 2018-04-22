# Vue原理解析之Virtual Dom

* https://segmentfault.com/a/1190000008291645
* https://blog.csdn.net/yczz/article/details/51292169

- https://github.com/DDFE/DDFE-blog/issues/18
- DDFE: https://github.com/DDFE/DDFE-blog


Virual DOM是用JS对象记录一个dom节点的副本，当dom发生更改时候，先用  
虚拟dom进行diff，算出最小差异，然后再修改真实dom。

vue的virtual dom的diff算法是基于snabbdom算法改造而来，与react的diff算法一样  
仅在同级的vnode间做diff，递归的进行同级vnode的diff，最终实现整个DOM树的更新。

* 虚拟DOM的缺点：

```
1. 代码更多，体积更大

2. 内存占用增大

3. 小量的单一的dom修改使用虚拟dom成本反而更高，不如直接修改真实dom快
```


## 深度剖析：如何实现一个 Virtual DOM 算法

* https://github.com/livoras/blog/issues/13
