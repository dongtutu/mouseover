//@ sourceURL=head.js
// rem布局----------------------------------------
document.documentElement.style.fontSize = innerWidth / 16 + 'px';
onresize = function () {
    document.documentElement.style.fontSize = innerWidth / 16 + 'px';
};
lec = {
 pcNav:function(){
 if($(document.body).outerWidth() >760 ){
  	//pc延时导航
  $('.nav-li').hover(function(){
    $(this).find("a:first").css({"color":"#000"});
    $(this).addClass('active');
  },function(){
    $(this).find("a:first").css({"color":"#000"});
    $(this).removeClass('active');
  }).trigger("mouseout");
  $('.nav-li').hover(function(){
    $(this).find("a").siblings().stop().slideToggle(50);
  })	
 }else{
    var myDiv = $(".head-nav");
    var conTen = $('.content')
    $(".nav-cli").click(function(event) {
        // showDiv();//调用显示DIV方法
        $(myDiv).toggle();
        $(conTen).toggle();
        $('.index-ma').on("click",
        function() { //对document绑定一个影藏Div方法
            $(myDiv).hide();
            $(conTen).css({'height':'auto','display':'block'});
        });
        event.stopPropagation(); //阻止事件向上冒泡
    });
    $(myDiv).click(function(event) {
        event.stopPropagation(); //阻止事件向上冒泡
    });
　　　　
function showDiv() {
    $(myDiv).fadeIn();
    $(conTen).height(500);
}
  
  
 }
 
 },
 navCli:function(){
 	//当前页面导航高亮
 (function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
          }
        })(jQuery);
 	var _url = $.getUrlParam('name');
 	
 	$(".head-nav .nav-li-child").each(function(){  
        $this = $(this);  
        if($this[0].href==String(window.location) || _url == $this.attr('data')){  
            $this.parent().addClass("current");  
         } 
    });  
 },
 lecMa:function(){
 	//首页锚点
 	var _path = window.location.pathname;
 	var _result = _path.substring(_path.lastIndexOf('/')+1); 
   	if( _result == 'index.html' ) {
 	 $(".re_t").on("click",function(){	
		var catid=$(this).attr("catid");
		var top=$(".lec-all div[catid='"+catid+"']").offset().top;
		$(window).scrollTop(top);
	});	
   	}
   	if(_result != 'index.html'){
   	  $(".re_t").on("click",function(){	
   	  	window.open('index.html','_self');
	});
   	}
 },
    topShow:function(){
	 $(window).bind("scroll", function(){
       var top = $(this).scrollTop(); // 当前窗口的滚动距离
        if(top > 400){
         $('.masage-top').show();	
        }else{
         $('.masage-top').hide();	
        }
   });
  }
  
 
}
lec.pcNav();
//lec.navCli();
lec.lecMa();
lec.topShow();