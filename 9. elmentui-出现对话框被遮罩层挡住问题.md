
# 出现对话框被遮罩层挡住问题


## 原因

造成这个问题的原因是对话框组件的父元素的position有fixed或者relative值，比较简单易行的办法如下

##解决方法

- 设置` modal-append-to-body `遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上
```
modal-append-to-body="false"
```
