lecBan = {
banner:function(){
		//初始化轮播组件，接受一个可选的 object 类型的 options 参数，并开始幻灯片循环。
        $('.carousel').carousel({
            interval: 3000 // in milliseconds
            })
         //: 从左到右循环各帧。
         $('.carousel').carousel('cycle');
         //: 停止轮播。
        $('#myCarousel').hover(function () { 
            $(this).carousel('pause') 
          })
        $('#myCarousel').mouseout(function () { 
            $(this).carousel('cycle'); 
         })
        //: 将轮播定位到指定的帧上（帧下标以0开始，类似数组）。
        $("#carousel_nav").click(function(){ 
         var item = 3; 
        $('#home_carousel').carousel(item); 
           return false; 
         });
	},
	bannerImg:function(){
	 if($(document.body).outerWidth() >760 ){
	 var oWrap=document.getElementById("first");
     var aImg=oWrap.getElementsByTagName("img");
     var iMax=2;
//获取图片的初始位置
for(var i=0;i<aImg.length;i++){
 aImg[i].startX=parseInt(getStyle(aImg[i],'left'))
 aImg[i].startY=parseInt(getStyle(aImg[i],'top'))
 aImg[i].lastX=parseInt(getStyle(aImg[i],'left'))
 aImg[i].lastY=parseInt(getStyle(aImg[i],'top'))
}
oWrap.onmousemove=function(ev){
 ev=ev||window.event;
 //获取鼠标的位置与大盒子中心点位置的距离
 var iX=ev.clientX-(oWrap.offsetLeft+this.offsetWidth/2)
 var iY=ev.clientY-(oWrap.offsetTop+this.offsetHeight/2)
 for(var i=0;i<aImg.length;i++){
 //获取每个img的z-index
 var iZindex=getStyle(aImg[i],'zIndex')
 //Zindex越大移动的相对距离越小
 var iDisL=-parseInt(iX/iMax*(iMax-iZindex)/30)
 var iDisT=-parseInt(iY/iMax*(iMax-iZindex)/10)
 //图片的距离等于原先的距离加上计算的距离
 aImg[i].style.left=aImg[i].startX+iDisL+'px'
 aImg[i].style.top=aImg[i].startY+iDisT+'px'
 }
}
function getStyle(obj,attr)
{
 if( obj.currentStyle){
 return obj.currentStyle[attr]; 
 }
 return getComputedStyle(obj)[attr]; 
}	
}
	},
bannerImga:function(){
 if($(document.body).outerWidth() >760 )	 {	
	 var oWrap=document.getElementById("header");
     var aImg=oWrap.getElementsByTagName("img");
     var iMax=2;
//获取图片的初始位置
for(var i=0;i<aImg.length;i++){
 aImg[i].startX=parseInt(getStyle(aImg[i],'left'))
 aImg[i].startY=parseInt(getStyle(aImg[i],'top'))
 aImg[i].lastX=parseInt(getStyle(aImg[i],'left'))
 aImg[i].lastY=parseInt(getStyle(aImg[i],'top'))
}
oWrap.onmousemove=function(ev){
 ev=ev||window.event;
 //获取鼠标的位置与大盒子中心点位置的距离
 var iX=ev.clientX-(oWrap.offsetLeft+this.offsetWidth/2)
 var iY=ev.clientY-(oWrap.offsetTop+this.offsetHeight/2)
 for(var i=0;i<aImg.length;i++){
 //获取每个img的z-index
 var iZindex=getStyle(aImg[i],'zIndex')
 //Zindex越大移动的相对距离越小
 var iDisL=-parseInt(iX/iMax*(iMax-iZindex)/30)
 var iDisT=-parseInt(iY/iMax*(iMax-iZindex)/10)
 //图片的距离等于原先的距离加上计算的距离
 aImg[i].style.left=aImg[i].startX+iDisL+'px'
 aImg[i].style.top=aImg[i].startY+iDisT+'px'
 }
}
function getStyle(obj,attr)
{
 if( obj.currentStyle){
 return obj.currentStyle[attr]; 
 }
 return getComputedStyle(obj)[attr]; 
}	
}
	},
bannerImgb:function(){
 if($(document.body).outerWidth() >760 )	 {	
	 var oWrap=document.getElementById("secend");
     var aImg=oWrap.getElementsByTagName("img");
     var iMax=2;
//获取图片的初始位置
for(var i=0;i<aImg.length;i++){
 aImg[i].startX=parseInt(getStyle(aImg[i],'left'))
 aImg[i].startY=parseInt(getStyle(aImg[i],'top'))
 aImg[i].lastX=parseInt(getStyle(aImg[i],'left'))
 aImg[i].lastY=parseInt(getStyle(aImg[i],'top'))
}
oWrap.onmousemove=function(ev){
 ev=ev||window.event;
 //获取鼠标的位置与大盒子中心点位置的距离
 var iX=ev.clientX-(oWrap.offsetLeft+this.offsetWidth/2)
 var iY=ev.clientY-(oWrap.offsetTop+this.offsetHeight/2)
 for(var i=0;i<aImg.length;i++){
 //获取每个img的z-index
 var iZindex=getStyle(aImg[i],'zIndex')
 //Zindex越大移动的相对距离越小
 var iDisL=-parseInt(iX/iMax*(iMax-iZindex)/30)
 var iDisT=-parseInt(iY/iMax*(iMax-iZindex)/10)
 //图片的距离等于原先的距离加上计算的距离
 aImg[i].style.left=aImg[i].startX+iDisL+'px'
 aImg[i].style.top=aImg[i].startY+iDisT+'px'
 }
}
function getStyle(obj,attr)
{
 if( obj.currentStyle){
 return obj.currentStyle[attr]; 
 }
 return getComputedStyle(obj)[attr]; 
}	
}
	}
}
lecBan.banner();
lecBan.bannerImg();
lecBan.bannerImga();
lecBan.bannerImgb();