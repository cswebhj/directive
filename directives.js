import Vue from 'vue';


//用于弹框的鼠标拖拽移动 定义的自定义指令  在想要移动的弹框上加 v-drag 就可以了    这个js要在main.js中引用
Vue.directive('drag',function(el){
  el.onmousedown = function(e){
    e.stopPropagation()
    //获取鼠标点击处分别与div左边和上边的距离：鼠标位置-div位置
    let left =  el.parentNode.parentNode.offsetLeft;
    let top =  el.parentNode.parentNode.offsetTop;
    // let left =  el.offsetLeft;
    // let top =  el.offsetTop;


    let divx = e.clientX -left ;//el.offsetLeft;
    let divy = e.clientY -top ;//el.offsetTop;
    //包含在onmousedown里，表示点击后才移动，为防止鼠标移出div，使用document.onmousemove
    document.onmousemove = function(e){
      e.stopPropagation()
      //获取移动后div的位置：鼠标位置-divx/divy
      // console.log(e)
      // console.log(e.clientY)
      let y = e.clientY < 10 ? 10 :e.clientY;
      let l = e.clientX - divx;
      let t = y - divy;
      // l = l < 0 ? 0 : l;
       //t = e.clientY < 10 ? 80 : t;
      // console.log("t="+t);
      el.parentNode.parentNode.style.left=l+'px';
      el.parentNode.parentNode.style.top=t+'px';
      // el.style.left=l+'px';
      // el.style.top=t+'px';
    }
    document.onmouseup = function(e){
      e.stopPropagation()
      document.onmousemove = null;
      document.onmouseup = null;
      // el = null;
    }
  }

})
export {Vue}
