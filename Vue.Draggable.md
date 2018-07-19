# Vue.Draggable

## install

```
npm install vuedraggable

看到某些文章中 要安装sortablejs: npm install sortablejs
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

## demo

两个列表拖拽操作，

```
<template>
  <div class="template-wrap">
    <div class="template-contain">
    <!-- 头部标题 -->
      <div class="template-head">
        <div class="template-title flex-1">
          <img src="/static/img/card-mould-logo.png" alt="logo"/>
          <span></span>
        </div>
        <div class="template-btns flex-1 flex-r">
          <el-button type="primary" plain @click="saveAndBack">保存并启用</el-button>
        </div>
      </div>
      <!-- 模板body -->
      <div class="template-body">
        <!-- 左侧 -->
        <div class="template-cell template-cell-l">
          <!-- tab 切换 -->
          <el-tabs v-model="activeName" >
            <el-tab-pane label="系统字段" name="first">
              <div class="filed-item-title">基本信息</div>
              <ul>
                <draggable id="list1" @clone="baseInfoClone" :list="baseInfo" class="compenent" :options="{group:{name:'people', pull:'clone', put:false},'sort': false,disabled: false}" :move="onMove" @start="isDragging=true" @end="itemMoveEnd"><!-- @end="itemMoveEnd" -->
                  <li class="compenent-item" :data-type='item.key' v-for="item in baseInfo"  >
                    <span v-if="item.key == 'A1'" @click="clickItem(item)" aria-hidden="true">姓名</span>
                    <span v-if="item.key == 'A2'" @click="clickItem(item)" aria-hidden="true">性别</span>
                    <span v-if="item.key == 'A3'" @click="clickItem(item)" aria-hidden="true">生日</span>
                    <span v-if="item.key == 'A4'" @click="clickItem(item)" aria-hidden="true">职业</span>
                    <span v-if="item.key == 'A5'" @click="clickItem(item)" aria-hidden="true">文化程度</span>
                    <span v-if="item.key == 'A6'" @click="clickItem(item)" aria-hidden="true">邮箱</span>
                  </li>
                </draggable>
              </ul>
              <div class="filed-item-title">家庭信息</div>
              <ul>
                <draggable id="list2"  :list="familyInfo" class="compenent" :options="{group:{name:'people', pull:'clone', put:false},'sort': false}">
                  <li class="compenent-item" :data-type='item.key' v-for="item in familyInfo">
                    <span v-if="item.key == 'B1'">婚姻状况</span>
                    <span v-if="item.key == 'B2'">是否有孩</span>
                    <span v-if="item.key == 'B3'">宝宝信息</span>
                    <span v-if="item.key == 'B4'">结婚纪念日</span>
                  </li>
                </draggable>
              </ul>
              <div class="filed-item-title">资产信息</div>
              <ul>
                <draggable id="list3"  :list="assetInfo" class="compenent" :options="{group:{name:'people', pull:'clone', put:false},'sort': false}">
                  <li class="compenent-item" :data-type='item.key' v-for="item in assetInfo">
                    <span v-if="item.key == 'C1'">是否有房</span>
                    <span v-if="item.key == 'C2'">是否有车</span>
                    <span v-if="item.key == 'C3'">年收入</span>
                  </li>
                </draggable>
              </ul>
              <div class="filed-item-title">其他信息</div>
              <ul>
                <draggable id="list4"  :list="otherInfo" class="compenent" :options="{group:{name:'people', pull:'clone', put:false},sort: false}">
                  <li class="compenent-item" :data-type='item.key' v-for="item in otherInfo">
                    <span v-if="item.key == 'D1'">你个人爱好</span>
                    <span v-if="item.key == 'D2'">期望消息推送</span>
                    <span v-if="item.key == 'D3'">你购物的周期</span>
                    <span v-if="item.key == 'D4'">喜好的礼品类型</span>
                  </li>
                </draggable>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="自定义字段" name="second">
              <div class="filed-item-title">其他信息</div>
              <ul>
                <draggable id="list5"  :list="otherInfo" class="compenent" :options="{group:{name:'people', pull:'clone', put:false},sort: false}">
                  <li class="compenent-item" :data-type='item.key' v-for="item in defineInfo">
                    <span v-if="item.key == 'E1'">单选框</span>
                    <span v-if="item.key == 'E2'">多选框</span>
                    <span v-if="item.key == 'E3'">日期</span>
                    <span v-if="item.key == 'E4'">单行输入框</span>
                    <span v-if="item.key == 'E5'">组块</span>
                  </li>
                </draggable>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
        <!-- 中间 -->
        <div class="template-cell template-cell-m">
          <div class="phone-view">
            <div class="phone-show-content">
              <!-- 拖拽展示区域 -->
              <div class="drag-show-content">
                <div class="view-container">
                  <ul class="view-content" id="showPhoneView">
                    <draggable :options="{group:{name:'people', pull:false, put:true },sort: true}"
                            v-model="tempaletDataList" class="drag-wrap" @add="addItem">
                        <li :class="['filed-item',currentIndex == index? 'active-item': '']" v-for="(item,index) in tempaletDataList" @click="selectItem(item.key,index)" >
                          <!-- 删除 -->
                          <span class="item-close" @click="deleteItem(item.key,index)"><i class="el-icon-close"></i></span>
                          <!-- item -->
                          <div>
                            <div class="opencard-item-title">{{item.name}}</div>
                            <div class="draged-item-show">
                              <span class="show-warm-text show-warm-text-flag">{{item.placeHolder}}</span>
                            </div>
                          </div>
                        </li>
                    </draggable>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
        <!-- 右侧 -->
        <div class="template-cell template-cell-r">
          <el-tabs v-model="rightName" >
            <el-tab-pane label="控件设置" name="first">

                <div id="edit-box">
                  <div class="edit-view baby-info-flag baby-info">
                    <template v-for="(item,index) in tempaletDataList">
                      <!-- 公共 -->
                      <template v-if="currentIndex == index&& item.key != 'B3'&& (item.key !== 'E1'|| item.key !== 'E2'|| item.key !== 'E3'|| item.key !== 'E4'|| item.key !== 'E5')">
                        <div class="edit-item ">
                          <div class="edit-item-title"> 标题 </div>
                          <!-- <el-input class="w-340" v-model="item.name" placeholder="" disabled></el-input>
                          <span class="tip"><span class="len_span">2</span>/10</span> -->
                          <add-input :inputValue="item.name" :disFlag="1" :maxLength="10" @itemInput="itemInput"></add-input>
                        </div>
                        <div class="edit-item ">
                          <div class="edit-item-title">提示文字最多15个字</div>
                          <!-- <el-input class="w-340" v-model="item.placeHolder" placeholder=""></el-input> -->
                          <add-input :inputValue="item.placeHolder" :disFlag="0" :maxLength="15" @itemInput="itemInput"></add-input>
                        </div>
                      </template>
                      <!-- 自定义中 -->
                      <template v-if="currentIndex == index&& (item.key == 'E1'|| item.key == 'E2'|| item.key == 'E3'|| item.key == 'E4'|| item.key == 'E5')">
                        <div class="edit-item ">
                          <div class="edit-item-title"> 标题 </div>
                          <!-- <el-input class="w-340" v-model="item.name" placeholder="" disabled></el-input>
                          <span class="tip"><span class="len_span">2</span>/10</span> -->
                          <add-input :inputValue="item.name" :titleName="'title'" :disFlag="0" :maxLength="10" @itemInput="itemInput"></add-input>
                        </div>
                        <div class="edit-item ">
                          <div class="edit-item-title">提示文字最多15个字</div>
                          <!-- <el-input class="w-340" v-model="item.placeHolder" placeholder=""></el-input> -->
                          <add-input :inputValue="item.placeHolder" :disFlag="0" :maxLength="15" @itemInput="itemInput"></add-input>
                        </div>
                      </template>
                      <!-- 姓名 生日个人爱好-->
                      <template v-if="currentIndex == index && (item.key == 'A1' || item.key == 'A4' || item.key == 'D1')">

                        <div class="edit-item ">
                          <div class="edit-item-title">类型</div>
                          <template v-for="(types,ind) in item.type">
                            <el-checkbox v-model="types.checked=='checked'? true:false" :disabled="types.isEdit==0? true: false">{{types.name}}</el-checkbox>
                          </template>
                        </div>
                        <div class="edit-item ">
                          <div class="edit-item-title">长度限制</div>
                          <el-input v-model="item.minLength" placeholder="" disabled class="w-120"></el-input>
                          <label class="label-txt">至</label>
                          <el-input v-model="item.maxLength" placeholder="" disabled class="w-120"></el-input>
                          <label class="label-txt">位字符</label>
                        </div>

                      </template>
                      <!-- 性别 -->
                      <template v-if="currentIndex == index && item.key == 'A2'">
                        <div class="edit-item ">
                          <div class="edit-item-title">类型</div>
                          <template v-for="(types,ind) in item.type">
                            <el-radio v-model="types.checked" :label="types.checked">{{types.name}}</el-radio>
                          </template>

                        </div>
                        <div class="edit-item ">
                          <div class="edit-item-title">选项</div>
                          <div>
                            <el-input class="w-340" v-model="item.male" placeholder="" disabled></el-input>
                          </div>
                          <div class="margin-t-15">
                            <el-input class="w-340" v-model="item.female" placeholder="" disabled></el-input>
                          </div>
                        </div>
                      </template>

                      <!-- 生日 结婚纪念日-->
                      <template v-if="currentIndex == index && (item.key == 'A3'||item.key == 'B4')">

                        <div class="edit-item ">
                          <div class="edit-item-title">数字</div>
                          <template v-for="(types,ind) in item.type">
                            <el-checkbox v-model="types.checked=='checked'? true:false" :disabled="types.isEdit==0? true: false">{{types.name}}</el-checkbox>
                          </template>
                        </div>
                        <div class="edit-item ">
                          <div class="edit-item-title">长度限制</div>
                          <el-input v-model="item.minLength" placeholder="" disabled class="w-120"></el-input>
                          <label class="label-txt">至</label>
                          <el-input v-model="item.maxLength" placeholder="" disabled class="w-120"></el-input>
                          <label class="label-txt">位字符</label>
                        </div>

                      </template>

                      <!-- 文化程度 婚姻状况 是否有房 是否有车-->
                      <template v-if="currentIndex == index && (item.key == 'A5'|| item.key == 'B1' || item.key == 'C1' || item.key == 'C2')">
                        <div class="edit-item ">
                          <div class="edit-item-title">类型</div>
                          <template v-for="(types,ind) in item.type">
                            <el-radio v-model="types.checked" :label="types.checked">{{types.name}}</el-radio>
                          </template>
                        </div>
                        <div class="edit-item ">
                          <div class="edit-item-title">选项</div>
                          <template v-for="(types,ind) in item.list">
                            <div class="margin-t-15">
                              <add-input :inputValue="types.name" :disFlag="1" :maxLength="10" @itemInput="itemInput"></add-input>
                            </div>
                          </template>
                        </div>
                      </template>

                      <!-- 邮箱 -->
                      <template v-if="currentIndex == index && item.key == 'A6'">
                        <div class="edit-item ">
                          <div class="edit-item-title">类型</div>
                          <template v-for="(types,ind) in item.type">
                            <el-checkbox v-model="types.checked=='checked'? true:false" :disabled="types.isEdit==0? true: false">{{types.name}}</el-checkbox>
                          </template>
                        </div>
                      </template>

                      <!-- 婚姻状况 文化程度相同 是否有房 是否有车-->

                      <!-- 宝宝信息 -->
                      <template v-if="currentIndex == index && item.key == 'B3'">
                        <div class="edit-item ">
                          <div class="edit-item-title">标题最多10个字</div>
                            <template v-for="(nameItem,idx) in item.nameList">
                              <div class="checkbox-cell">
                                <el-checkbox :label="nameItem.fieldName" :key="nameItem.fieldName">{{ }}</el-checkbox>
                                <el-input class="w-316" v-model="nameItem.fieldName" placeholder="" disabled></el-input>
                              </div>
                            </template>

                        </div>
                      </template>

                      <!-- 结婚街纪念日 生日 相同 -->
                      <!-- 是否有房 是否有车 文化程度 婚姻状况 相同-->

                      <!-- 年收入 购物周期  喜好的礼品-->
                      <template v-if="currentIndex == index && (item.key == 'C3' ||item.key == 'D3' || item.key == 'D4' )">
                        <template v-if="item.key == 'C3' || item.key == 'D3'">
                          <div class="edit-item ">
                            <div class="edit-item-title">类型</div>
                            <template v-for="(types,ind) in item.type">
                              <el-radio v-model="types.checked" :label="types.checked">{{types.name}}</el-radio>
                            </template>
                          </div>
                        </template>
                        <template v-if="item.key == 'D4'">
                          <div class="edit-item ">
                          <div class="edit-item-title">类型</div>
                          <template v-for="(types,ind) in item.type">
                            <el-checkbox v-model="types.checked=='checked'? true:false" :disabled="types.isEdit==0? true: false">{{types.name}}</el-checkbox>
                          </template>
                        </div>
                        </template>
                        <div class="edit-item ">
                          <div class="edit-item-title">选项 <span v-if="item.key == 'D4'">最多20项，每项最多10个字</span> <span v-if="item.key != 'D4'">最多5项，每项最多10个字</span></div>
                          <template v-for="(types,ind) in item.list">
                            <div class="margin-t-15">
                              <add-input :inputValue="types.name" :childIndex="ind" :childItem="(item.key == 'D3'||item.key == 'C3' || item.key == 'D4')? 'C3':''"  :disFlag="0" :maxLength="10" @itemInput="itemInput"></add-input>
                              <i class="opt-btn el-icon-remove-outline del-item" @click="delChildItem(index,ind,item)"></i>
                              <i class="opt-btn el-icon-circle-plus-outline add-item" v-if="ind == item.list.length-1" @click="addChildItem(index,ind,item)"></i>
                            </div>
                          </template>
                        </div>
                      </template>

                      <!-- 期望消息推送 -->
                      <template v-if="currentIndex == index && item.key == 'D2'">

                        <div class="edit-item ">
                          <div class="edit-item-title">类型</div>
                          <template v-for="(types,ind) in item.type">
                            <el-checkbox v-model="types.checked=='checked'? true:false" :disabled="types.isEdit==0? true: false">{{types.name}}</el-checkbox>
                          </template>
                        </div>
                        <div class="edit-item ">
                          <div class="edit-item-title">选项</div>
                          <template v-for="(types,ind) in item.list">
                            <div class="margin-t-15">
                              <add-input :inputValue="types.name" :disFlag="1" :maxLength="10" @itemInput="itemInput"></add-input>
                            </div>
                          </template>
                        </div>
                      </template>

                      <!-- 公共 -->
                      <template v-if="currentIndex == index && item.key != 'E5'">
                        <div class="edit-item ">
                          <div class="edit-item-title">验证</div>
                          <el-checkbox v-model="item.validate" >必填</el-checkbox>
                        </div>
                        <!-- 生日时才有 -->
                        <template v-if="item.key == 'A3' ">
                          <div class="edit-item ">
                            <div class="edit-item-title">修改次数限制</div>
                            <div class="margin-t-30">
                              <el-radio v-model="item.modifyTimetype" label="0">最多修改</el-radio>
                              <el-input class="w-60" v-model="item.modifyTime" placeholder=""></el-input>
                            </div>
                            <div class="margin-t-30">
                              <el-radio v-model="item.modifyTimetype" label="1">每月最多修改1次</el-radio>
                            </div>
                            <div class="margin-t-30">
                              <el-radio v-model="item.modifyTimetype" label="2">每年最多修改1次</el-radio>
                            </div>
                          </div>
                        </template>
                        <div class="edit-item ">
                          <div class="edit-item-title">适用商户<el-checkbox :indeterminate="item.isIndeterminate" v-model="item.checkAll" @change="checkAllChange($event,item)" class="margin-l-15">全选</el-checkbox></div>
                          <el-checkbox-group v-model="item.checkedList" @change="checkedChange($event,item)">

                            <template v-for="(merchantItem,idx) in item.merchantOptions">
                              <div class="checkbox-cell">
                                <el-checkbox :label="merchantItem" :key="merchantItem.id">{{ }}</el-checkbox>
                                <el-input class="w-316" v-model="merchantItem.name" placeholder="" disabled></el-input>
                              </div>
                            </template>

                          </el-checkbox-group>
                        </div>
                      </template>

                    </template>

                  </div>
                </div>

            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
import AddInput from '@/components/memberShip/add-input';

import strLength from '@/common/js/strlen';
import { getRequest, postRequest, postForm } from '@/api/api';

export default {
  name: "memberInfoTemplate",
  data() {
    return {
      // tab
      activeName: 'first',
      // right tab
      rightName: 'first',
      // 移动后禁止再移动
      disabledList:{
        "A1": false,
        "A2": false,
        "A3": false,
        "A4": false,
        "A5": false,
        "A6": false,
        "B1": false,
        "B2": false,
        "B3": false,
        "B4": false,
        "C1": false,
        "C2": false,
        "C3": false,
        "D1": false,
        "D2": false,
        "D3": false,
        "D4": false,
        "E1": false,
        "E2": false,
        "E3": false,
        "E4": false,
        "E5": false,
      },
      selectKey: '',

      // 基本信息
      baseInfo: [
        {
          key: "A1",
          name: '姓名',
          fixed: false,
          placeHolder: '请输入',
          type: [
            {'type':'checkbox','name':'中文', 'checked':'checked','isEdit':0},
            {'type':'checkbox','name':'数字', 'checked':'checked','isEdit':0},
            {'type':'checkbox','name':'字母', 'checked':'checked','isEdit':0},
            {'type':'checkbox','name':'符号', 'checked':'checked','isEdit':0}
          ],
          minLength: 1,
          maxLength: 10,
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
          applyMerchant: [],
        },
        {
          key: "A2",
          name: '性别',
          fixed: false,
          placeHolder: '请选择',
          type: [{'type':'radio','name':'单选', 'checked':'checked','isEdit':0}],
          male: '男',
          female: '女',
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
          applyMerchant: [],
        },
        {
          key: "A3",
          name: '生日',
          fixed: false,
          placeHolder: '请填写8位数字，例如19900101',
          type: [{'type':'checkbox','name':'数字', 'checked':'checked','isEdit':0}],
          minLength: 8,
          maxLength: 8,
          validate: true,
          modifyTimetype: '',
          modifyTime: 1,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
          applyMerchant: [],
        },
        {
          key: "A4",
          name: '职业',
          fixed: false,
          placeHolder: '请输入',
          type:  [
            {'type':'checkbox','name':'中文', 'checked':'checked','isEdit':0},
            {'type':'checkbox','name':'数字', 'checked':'checked','isEdit':0},
            {'type':'checkbox','name':'字母', 'checked':'checked','isEdit':0},
            {'type':'checkbox','name':'符号', 'checked':'checked','isEdit':0}
          ],
          minLength: 1,
          maxLength: 20,
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
          applyMerchant: [],
        },
        {
          key: "A5",
          name: '文化程度',
          fixed: false,
          placeHolder: '请选择',
          type: [{'type':'radio','name':'单选', 'checked':'checked','isEdit':0}],
          list: [
            {'type':'radio','name':'本科'},
            {'type':'radio','name':'硕士及以上'},
            {'type':'radio','name':'大专'},
            {'type':'radio','name':'高中'},
            {'type':'radio','name':'高中以下'}
          ],
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
          applyMerchant: [],
        },
        {
          key: "A6",
          name: '邮箱',
          fixed: false,
          placeHolder: '请输入',
          type: [{'type':'checkbox','name':'邮箱', 'checked':'checked','isEdit':1}],
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
          applyMerchant: [],
        },
      ],
      // 家庭信息
      familyInfo:[
        {
          key: 'B1',
          name: '婚姻状况',
          fixed: false,
          placeHolder: '请输入',
          type: [{'type':'radio','name':'单选', 'checked':'checked','isEdit':0}],
          validate: true,
          list:[
            {'type':'radio','name':'未婚'},
            {'type':'radio','name':'已婚'},
            {'type':'radio','name':'筹备婚礼'},
            {'type':'radio','name':'恋爱'},
            {'type':'radio','name':'单身'}
          ],
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
        },
        {
          key: 'B2',
          name: '婚姻状况',
          fixed: false,
          placeHolder: '请输入',
          type: [{'type':'radio','name':'单选', 'checked':'checked','isEdit':0}],
          validate: true,
          list: [
            {'type':'radio','name':'有','sysFiled':'k203','isShow':1},
            {'type':'radio','name':'无','sysFiled':'k203','isShow':0}
          ],
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
        },
        {
          key: 'B3',
          name: '宝宝信息',
          nameList: [
            {
              fieldDescription: '请输入',
              fieldName: '宝宝名称',
              fieldType: 0,
              limitCountMax: 20,
              limitCountMin: 1,
            },
            {
              fieldDescription: '请输入',
              fieldName: '宝宝性别',
              fieldType: 0,
              limitCountMax: 20,
              limitCountMin: 1,
            },
            {
              fieldDescription: '请输入',
              fieldName: '宝宝生日',
              fieldType: 0,
              limitCountMax: 20,
              limitCountMin: 1,
            },
             {
              fieldDescription: '请输入',
              fieldName: '宝宝身高(cm)',
              fieldType: 0,
              limitCountMax: 20,
              limitCountMin: 1,
            },
            {
              fieldDescription: '请输入',
              fieldName: '宝宝体重(kg)',
              fieldType: 0,
              limitCountMax: 20,
              limitCountMin: 1,
            },
            {
              fieldDescription: '请输入',
              fieldName: '鞋码(码)',
              fieldType: 0,
              limitCountMax: 20,
              limitCountMin: 1,
            },
          ],
          fixed: false,
          placeHolder: '请输入',
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
        },
        {
          key: 'B4',
          name: '结婚纪念日',
          fixed: false,
          placeHolder: '请填写8位数字，例如19900101',
          type: [{'type':'checkbox','name':'数字', 'checked':'checked','isEdit':0}],
          minLength: 8,
          maxLength: 8,
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
        }
      ],
      // 资产信息
      assetInfo: [
        {
          key: 'C1',
          name: '是否有房',
          fixed: false,
          placeHolder: '请选择',
          type: [{'type':'radio','name':'单选', 'checked':'checked','isEdit':0}],
          list: [{'type':'radio','name':'有'},{'type':'radio','name':'无'}],
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
        },
        {
          key: 'C2',
          name: '是否有车',
          fixed: false,
          placeHolder: '请选择',
          type: [{'type':'radio','name':'单选', 'checked':'checked','isEdit':0}],
          list: [
            {'type':'radio','name':'有'},
            {'type':'radio','name':'无'}
          ],
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
        },
        {
          key: 'C3',
          name: '是否有车',
          fixed: false,
          placeHolder: '请选择',
          type: [{'type':'radio','name':'单选', 'checked':'checked','isEdit':0}],
          list: [
            {'type':'radio','name':'5万及以下'},
            {'type':'radio','name':'5万至10万'},
            {'type':'radio','name':'10万至20万'},
            {'type':'radio','name':'20万至30万'},
            {'type':'radio','name':'30万及以上'}
          ],
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
        }
      ],
      // 其他信息
      otherInfo: [
        {
          key: 'D1',
          name: '你个人的爱好',
          fixed: false,
          placeHolder: '请输入',
          type: [
            {'type':'checkbox','name':'中文', 'checked':'checked','isEdit':0},
            {'type':'checkbox','name':'数字', 'checked':'checked','isEdit':0},
            {'type':'checkbox','name':'字母', 'checked':'checked','isEdit':0},
            {'type':'checkbox','name':'符号', 'checked':'checked','isEdit':0}
          ],
          minLength: 1,
          maxLength: 20,
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
        },
        {
          key: 'D2',
          name: '期望消息推送',
          fixed: false,
          placeHolder: '请选择',
          type: [{'type':'checkbox','name':'多选', 'checked':'checked','isEdit':0}],
          list:[
            {'type':'checkbox','name':'新品首发'},
            {'type':'checkbox','name':'会员活动'},
            {'type':'checkbox','name':'热销推荐'},
            {'type':'checkbox','name':'店铺活动'},
            {'type':'checkbox','name':'促销活动'}
          ],
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
        },
        {
          key: 'D3',
          name: '你购物的周期',
          fixed: false,
          placeHolder: '请输入',
          type: [{'type':'radio','name':'单选', 'checked':'checked','isEdit':0}],
          list: [
            {'type':'radio','name':'一周'},
            {'type':'radio','name':'半个月'},
            {'type':'radio','name':'一个月'},
            {'type':'radio','name':'两个月'},
            {'type':'radio','name':'一季度'}
          ],
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
        },
        {
          key: 'D4',
          name: '喜好的礼品类型',
          fixed: false,
          placeHolder: '请选择',
          type: [{'type':'checkbox','name':'多选', 'checked':'checked','isEdit':0}],
          list: [
            {'type':'checkbox','name':'影视会员'},
            {'type':'checkbox','name':'游戏皮肤'},
            {'type':'checkbox','name':'家用小物'},
            {'type':'checkbox','name':'超市购物卡'},
            {'type':'checkbox','name':'流量话费券'},
            {'type':'checkbox','name':'电影票'},
            {'type':'checkbox','name':'商品优惠券'}
          ],
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
        }
      ],
      // 自定义
      defineInfo: [
        {
          key: 'E1',
          name: '单选框',
          fixed: false,
          placeHolder: '请选择',
          type: [{'type':'radio','name':'单选', 'checked':'checked','isEdit':1}],
          list: [
            {'type':'radio','name':'选项1'},
            {'type':'radio','name':'选项2'},
            {'type':'radio','name':'选项3'},
          ],
          minLength: 1,
          maxLength: 20,
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
        },
        {
          key: 'E2',
        },
        {
          key: 'E3',
        },
        {
          key: 'E4',
          name: '单行输入框',
          fixed: false,
          placeHolder: '请输入',
          type: [
            {'type':'checkbox','name':'中文', 'checked':'checked','isEdit':1},
            {'type':'checkbox','name':'数字', 'checked':'checked','isEdit':1},
            {'type':'checkbox','name':'字母', 'checked':'checked','isEdit':1},
            {'type':'checkbox','name':'符号', 'checked':'checked','isEdit':1}
          ],
          minLength: 1,
          maxLength: 20,
          validate: true,
          checkAll: false,
          isIndeterminate: false,
          checkedList: [],
          merchantOptions:[
            {
              name: '达摩',
              id: '0',
            },
            {
              name: '江南布衣',
              id: '1',
            },
          ],
        },
        {
          key: 'E5',
        }
      ],

      // 中间数据集合
      currentIndex: 0, //当前选择的 item
      currentKey: '', // 当前选择的 item key
      tempaletDataList:[],
    }
  },
  created() {
    // this.selectReplayStyle()
  },
  methods: {

    // baseInfoClone
    baseInfoClone() {
      var that = this
      that.baseInfo = JSON.parse(JSON.stringify(that.baseInfo))
    },

    // 点击 item
    clickItem(item) {
      var that = this
      console.log(item)
      item.fixed = !item.fixed
    },

    // move
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      console.log(relatedElement,draggedElement)
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },

    // move end
    itemMoveEnd(evt) {
      var that = this
      that.isDragging = false;
      console.log(evt,evt.clone.dataset.type)
      that.selectKey = '';
      that.selectKey = evt.clone.dataset.type
      // that.baseInfo.forEach(function(ele,index){
      //   if (ele.key == that.selectKey) {
      //     ele.fixed = true
      //   }
      // })
      that.selectKey = '';
      console.log(that.baseInfo)
    },

    // 中间部分方法
    // 选择 item
    selectItem(key,index) {
      var that = this
      console.log(key,index)
      that.currentKey = key;
      that.currentIndex = index;
    },

    // 删除 item
    deleteItem(key,index) {
      var that = this
      console.log(key,index)
      that.tempaletDataList.splice(index,1)
      that.disabledList[key] = false;
    },

    //右侧方法
    addItem(evt) {
      var that = this;
      console.log(evt)
    },

    // 全选
    checkAllChange(e,item){
      var that = this
      console.log(e,item)
      item.checkedList = (e==true ? item.merchantOptions: []);
      item.isIndeterminate = false;
      console.log(item.checkedList)
    },
    checkedChange(e,item){
      var that = this
      console.log(e,item)
      let count = e.length;
      item.checkAll = (count == item.merchantOptions.length);
      item.isIndeterminate  = count > 0 && count< item.merchantOptions.length
    },

    // 添加删除选项
    delChildItem(index,ind,item) {
      var that = this
      console.log(index,ind,item)
      item.list.splice(ind,1)
    },
    addChildItem(index,ind,item) {
      var that = this
      console.log(index,ind,item)
      item.list.forEach(function(ele,index) {
        if (ele.name) {}
      })

      if (item.key == "D4") {
        if (ind == 19) {
          that.$message.error({
            duration: 1000,
            message: "最多可添加 20 项"
          })
        }else {
          item.list.push(
            {'type':'radio','name':'请输入选项'},
          )
        }
        return;
      }
      if (ind == 4) {
        that.$message.error({
          duration: 1000,
          message: "最多可添加 5 项"
        })
        return;
      }
      item.list.push(
        {'type':'radio','name':'请输入选项'},
      )
    },

    // 改变输入框的值,子组件触发方法
    itemInput(val) {
      var that = this
      console.log(val)
      // 如果是标题
      if (!!val && val.title == 'title') {
        that.tempaletDataList[that.currentIndex].name = val.value;
        return;
      }
      // 如果是年收入/
      if (!!val && val.flag == 'C3') {
        that.tempaletDataList[that.currentIndex].list[val.c3Index].name = val.value;
        return;
      }
      that.tempaletDataList[that.currentIndex].placeHolder = val;
    },


    //路由跳转
    changeRoute(route) {
      this.$router.push(route);
    },

    // 保存
    saveAndBack() {
      var that = this
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue){
        this.delayedDragging= true
        return
      }
      this.$nextTick( () =>{
           this.delayedDragging =false
      })
    }
  },
  components: {
    draggable,
    AddInput
  }
}

</script>
<style lang="less" scoped>
.template-wrap {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: url('/static/img/template-bg.png') no-repeat center center;
  background-size: 100% 100%;

  .template-contain {
    width: 1200px;
    margin: 0 auto;
  }

  .template-head {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;

    .flex-1 {
      -webkit-flex: 1;
      -moz-flex: 1;
      -ms-flex: 1;
      -o-flex: 1;
      flex: 1;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      align-items: center;
    }

    .flex-r {
      justify-content: flex-end;
    }
  }

  .template-body {
    width: 100%;
    position: relative;
    overflow: hidden;

    .template-cell {

    }
    /* 左侧 */
    .template-cell-l {
      width: 350px;
      float: left;
      height: 812px;
      padding-top: 40px;

      .el-tabs{
        /deep/ .el-tabs__item {
          width: 50%;
          width: 175px;
          /*padding: 0;*/
          color: rgba(255,255,255, .5);
          &.is-active {

          }
        }
      }

      .compenent-item {
        width: 148px;
        height: 42px;
        margin: 0 15px 15px 0;
        line-height: 40px;
        padding: 0 10px;
        display: inline-block;
        text-align: center;
        cursor: move;
        color: #fff;
        padding: 0;
        overflow: hidden;
        font-size: 12px;
        border: 1px dashed rgba(255, 255, 255, 0.6);
        background: rgba(255, 255, 255, 0.1);
        &.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
      .filed-item-title {
          padding: 15px 0;
          font-size: 14px;
          color: #FFFFFF;
      }
    }
    /* 中间 */
    /* 模板 */
    .template-cell-m {
      float: left;
      width: 410px;
      height: 740px;
      margin: 0 20px;
      position: relative;
    }

    .drag-wrap {
      min-height: 530px;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .phone-container{
      margin-top:40px;
    }
    .phone-view{
      background: url(/static/img/iphone.png) no-repeat;
      background-size: 100%;
      width: 410px;
      height: 740px;
      margin: 0 20px;
      position: relative;
    }

    .phone-show-content{
      width: 330px;
      height: 537px;
      position:absolute;
      left:41px;
      top: 83px;
      overflow-y: auto;
    }

    .opend-card-item {
      height: 46px;
      line-height: 46px;
      background: #fff;
      border-bottom: 1px solid #e7e7eb;
      font-size: 14px;
      position: relative;

      &.sex::after {
        content: '';
        width: 100%;
        height: 100%;
        z-index: 2;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }

    .opend-card-group-title {
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
    }

    .opend-card-item {
      height: 46px;
      line-height: 46px;
      background: #fff;
      border-bottom: 1px solid #e7e7eb;
    }

    .phone-list-item{
      height:44px;
      line-height:44px;
      background: #fff;
      margin-bottom:5px;
    }

    .item-title {
      width: 100px;
      float: left;
      padding-left: 10px;
    }

    .filed-item {
      background: #fff;
      height: 46px;
      width: 100%;
      height: auto;
      background: #fff;
      position: relative;
      cursor: move;
      padding: 0px;
      margin: 0;
      font-size: 12px;
      color: #292929;

      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      &.active-item {
        border: 1px solid #409eff;
      }

      &+.filed-item {
        margin-top: 5px;
      }
      /*删除*/
      .item-close {
        position: absolute;
        top: 0;
        right: 0;
        width: 18px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        background: #409eff;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        display: none;
        z-index: 2;
      }
      &:hover{
        border: 1px dashed #409eff;
        .item-close {
          display: block;
        }
      }


    }



    .opencard-drag {
      background: #fff;
      height: 46px;
    }

    .opencard-item-title{
      width: 120px;
      height:46px;
      line-height:46px;
      text-align: left;
      float:left;
      padding-left:10px;
    }

    .show-warm-text{
      color:#C8C8CD;
      width:185px;
      text-align: left;
      display:inline-block;
      white-space: nowrap;
      height:46px;
      line-height:46px;
    }


    /* 右侧 */
    .template-cell-r{
      width: 400px;
      float: left;
      overflow: hidden;
      padding-top: 40px;

      .el-tabs {
        /deep/.el-tabs__item {
          width: 175px;
          /* padding: 0; */
          /*color: rgba(255, 255, 255, 0.5);*/
        }
      }

      .label-txt {
        margin: 0 10px;
        font-size: 14px;
        color: #fff;
      }

      .margin-t-15 {
        margin-top: 15px;
      }

      .margin-t-30 {
        margin-top: 30px;
      }

      .margin-l-15 {
        margin-left: 15px;
      }

      .w-60 {
        width: 60px;
      }

      .w-120 {
        width: 120px;
      }

      .w-316 {
        width: 316px;
      }

      .w-340 {
        width: 340px;
        /deep/ .el-input__inner {
          color: #fff;
          background-color: rgba(255,255,255,.1);
        }
      }

      .opt-btn {
        cursor: pointer;
      }

      .checkbox-cell {
        &+.checkbox-cell {
          margin-top: 15px;
        }
        color: #fff;
      }

      .el-checkbox {
        /deep/ span.el-checkbox__label {
          color: #fff;
        }
        &.is-disabled {
          /deep/ span.el-checkbox__label {
            color: #fff;
          }
        }

      }

      .el-radio {
        /deep/ span.el-radio__label {
          color: #fff;
        }
        &.is-disabled {
          /deep/ span.el-radio__label {
            color: #fff;
          }
        }

      }

      .el-input {
        /deep/ .el-input__inner {
          color: #fff;
          background-color: rgba(255,255,255,.1);
        }

        .is-disabled{

          /deep/ .el-input__inner {
            color: #fff;
            background-color: rgba(255,255,255,.1);
          }
        }
      }

      .el-checkbox {
        color: #fff;
      }

      .edit-view {
        height:700px;
        overflow-y:auto;
        margin-top:40px;
      }

      .edit-item {
        color:#fff;

        .tip {
            margin-left: -40px;
            color: rgba(255,255,255,0.7);
            width: 30px;
            display: inline-block;
            text-align: right;
            margin-right: 10px;
            font-size: 12px;
        }
      }

      .edit-item-title {
        color: #FFFFFF;
        font-size: 14px;
        font-weight: normal;
        padding: 20px 0 20px 0;
      }

      .edit-item-title span {
        font-size: 12px;
        margin-left:5px;
      }
    }
  }
}

</style>

```


## 参考资料
- https://blog.csdn.net/zjiang1994/article/details/79809687
- https://github.com/RubaXa/Sortable#event-object-demo
- 
