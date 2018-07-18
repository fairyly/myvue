# Vue.Draggable

## install

```
npm install vuedraggable
```
## use

```
import draggable from 'vuedraggable'

options
Object

配置项
group: string or array 分组用的，同一组的不同list可以相互拖动
sort: boolean 定义是否可以拖拽
delay:number 定义鼠标选中列表单元可以开始拖动的延迟时间
touchStartThreshold:number (不清楚)
disabled: boolean 定义是否此sortable对象是否可用，为true时sortable对象不能拖放排序等功能
store:
animation: umber 单位:ms 动画时间
handle: selector 格式为简单css选择器的字符串，使列表单元中符合选择器的元素成为拖动的手柄，只有按住拖动手柄才能使列表单元进行拖动
filter: selector 格式为简单css选择器的字符串，定义哪些列表单元不能进行拖放，可设置为多个选择器，中间用“，”分隔
preventOnFilter: 当拖动filter时是否触发event.preventDefault()默认触发
draggable: selector 格式为简单css选择器的字符串，定义哪些列表单元可以进行拖放
ghostClass: selector 格式为简单css选择器的字符串，当拖动列表单元时会生成一个副本作为影子单元来模拟被拖动单元排序的情况，此配置项就是来给这个影子单元添加一个class，我们可以通过这种方式来给影子元素进行编辑样式
chosenClass: selector 格式为简单css选择器的字符串，目标被选中时添加
dragClass:selector 格式为简单css选择器的字符串，目标拖动过程中添加
forceFallback: boolean 如果设置为true时，将不使用原生的html5的拖放，可以修改一些拖放中元素的样式等
fallbackClass： string 当forceFallback设置为true时，拖放过程中鼠标附着单元的样式
dataIdAttr： data-id
scroll：boolean当排序的容器是个可滚动的区域，拖放可以引起区域滚动
scrollFn：function(offsetX, offsetY, originalEvent, touchEvt, hoverTargetEl) { … } 用于自定义滚动条的适配
scrollSensitivity: number 就是鼠标靠近边缘多远开始滚动默认30
scrollSpeed: number 滚动速度
函数配置

setData: 设置值时的回调函数
onChoose: 选择单元时的回调函数
onStart: 开始拖动时的回调函数
onEnd: 拖动结束时的回调函数
onAdd: 添加单元时的回调函数
onUpdate: 排序发生变化时的回调函数
onRemove: 单元被移动到另一个列表时的回调函数
onFilter: 尝试选择一个被filter过滤的单元的回调函数
onMove: 移动单元时的回调函数
onClone: clone时的回调函数
以上函数对象的属性： 
to: 移动到的列表的容器
from：来源列表容器
item: 被移动的单元
clone: 副本的单元
oldIndex：移动前的序号
newIndex：移动后的序号
```

## 


## 参考资料
- https://blog.csdn.net/zjiang1994/article/details/79809687
