//@ sourceURL=masage.js
lecMa = {
alertShow:function(){
  	//email提交
 	$('.masage-email').click(function(){
 		$('.email-alert').show();
 	});
 	$('.email-close').click(function(){
 		$('.email-alert').hide();
 	});
 
 },
  phoneShow:function(){
 	//电话延时
  $('.masage-phone').hover(function(){
    $(this).find("a:first").css({"color":"#fff"});
  },function(){
    $(this).find("a:first").css({"color":"#fff"});
  }).trigger("mouseout");
  $('.masage-phone').hover(function(){
    $(this).find("a").siblings().stop().slideToggle(50);
  })
 },
chartShow:function(){
   	//微信图片延时
$('.masage-chart').hover(function(){
    $(this).find("a:first").css({"color":"#fff"});
},function(){
    $(this).find("a:first").css({"color":"#fff"});
}).trigger("mouseout");
$('.masage-chart').hover(function(){
    $(this).find("a").siblings().stop().slideToggle(50);
})
   }
   
}
lecMa.alertShow();
lecMa.phoneShow();
lecMa.chartShow();