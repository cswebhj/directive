# directive
vue中拖拉窗 口进行移动
1.main.js 中引入
 import directive from './js/directives';  //定义自定义指令
2.使用时
<div class="dialog">
    <div class="mask"></div>
    <div class="dialog-content" style="width:500px;">
      <div class="dialog-header clearfix">
        <h3 class="title col-xs-11" v-drag>编辑</h3>
        <sub class="glyphicon glyphicon-remove dialog-remove col-xs-1 pointer" @click="cancel"></sub>
      </div>
      
      <div class="dialog-body">
          <div>弹窗中的内容</div>
      </div>

      <div class="btnGroup">
        <div class="btn rightLine col-xs-6" @click="confirm">
          <span class="glyphicon glyphicon-ok active"></span>确定
        </div>
        <div class="btn  col-xs-6" @click="cancel">
          <span class="glyphicon glyphicon-remove"></span>取消
        </div>
      </div>
    </div>
  </div>
  注意： <h3 class="title col-xs-11" v-drag>编辑</h3>  添加了 v-drag 指令
