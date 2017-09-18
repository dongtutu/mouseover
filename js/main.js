lecCen = {
  tabShow:function(){
 $('.deposit-cli li').hover(function(){
 $(this).addClass("active").siblings().removeClass();
 $("deposit-tab").addClass('.active').siblings().removeClass()
  $('.deposit-sel').hide().eq($('.deposit-cli li').index(this)).show();
}); 
 },
 basShow:function(){ 	
  $('.basics-dl li').hover(function(){
    $(this).find(".basics-dl-cen").hide();
    $(this).find(".basics-sel").css({'top':'0'});
    $(this).css({'border-bottom-width':'0px'});
  },function(){
    $(this).find(".basics-dl-cen").show();
     $(this).find(".basics-sel").css({'top':'100%'});
     $(this).css({'border-bottom-width':'4px'});
  }).trigger("mouseout");
  $('.basics-dl li').hover(function(){
    $(this).find(".basics-dl-top").siblings().stop().slideToggle(50);
  })
 }
 
 
}
lecCen.tabShow();
lecCen.basShow();




