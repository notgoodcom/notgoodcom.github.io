'use strict';


$(function(){
	
	var menu_on = 0;
	$('#search_down').css('display','none');
	
	$(window).scroll(function(event){
		
		var scroll_h = $(this).scrollTop();
	
		
		if(scroll_h>menu_on){
			
			
			$('.gnb li a').css('color','#666').css('text-shadow','none');
			$('.top_menu li a').css('color','#666');
			$('nav').addClass('nav_on').removeClass('nav_off');	
			$('nav').css('background','#fff')
			$('#mobile_gnb').css('background','#fff');
			$('#search').css('display','none');
			$('#search_down').css('display','block');
			
			// scroll-down시 메뉴
			
		}else if(scroll_h==0){
			
			$('.gnb li a').css('color','#eee').css('text-shadow','1px 1px 2px #555');
			$('.top_menu li a').css('color','#ddd');
			$('nav').removeClass('nav_on').addClass('nav_off');
			$('nav').css('background','transparent')
			$('#mobile_gnb').css('background','rgba(0,0,0,0.2)');
			$('#search').css('display','block');
			$('#search_down').css('display','none');
			
			//// scroll-up시 메뉴
			
		}
		menu_on = scroll_h; 
	});
	
});
