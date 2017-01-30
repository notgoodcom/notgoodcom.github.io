'use strict';

$(function(){
		var menu = $('#nav_all_menu');
		var menubt = $('.menu_bt');
		menubt.mouseenter(function(){
		menu.css('display','block');
		});
		menu.mouseenter(function(){
		menu.css('display','block');
		});
		menu.mouseleave(function(){
		menu.css('display','none');
		});
}); /* mouseover 전체메뉴*/


$(function(){
	var mobile_menu = $('#toggle_menu');
	var mobile_menubt = $('.fix_menu_left');
	var mobile_close = $('.close');
	
	mobile_menubt.click(function(){
		mobile_menu.animate(
		{left:0},1500);
	$('body').append('<div id="overlay_bg"></div>');
	$('body').css('overflow','hidden');
	});	
	
	mobile_close.click(function(){
		mobile_menu.animate(
		{left:-300},1500);
	$('#overlay_bg').remove();
	$('body').css('overflow','auto');
	});	
});/* 모바일메뉴 */

$(function(){
	
	$('.m_sub1').click(function(){
		$('.m_sub_on1').slideDown(700);
		$('.m_sub_on2').slideUp(700);
		$('.m_sub_on3').slideUp(700);
		$('.m_sub_on4').slideUp(700);
	});
	$('.m_sub2').click(function(){
		$('.m_sub_on1').slideUp(700);
		$('.m_sub_on2').slideDown(700);
		$('.m_sub_on3').slideUp(700);
		$('.m_sub_on4').slideUp(700);
	});
	$('.m_sub3').click(function(){
		$('.m_sub_on1').slideUp(700);
		$('.m_sub_on2').slideUp(700);
		$('.m_sub_on3').slideDown(700);
		$('.m_sub_on4').slideUp(700);
	});
	$('.m_sub4').click(function(){
		$('.m_sub_on1').slideUp(700);
		$('.m_sub_on2').slideUp(700);
		$('.m_sub_on3').slideUp(700);
		$('.m_sub_on4').slideDown(700);
	});
	$('.close').click(function(){
	$('.m_sub_on1').slideUp(700);
	$('.m_sub_on2').slideUp(700);
	$('.m_sub_on3').slideUp(700);
	$('.m_sub_on4').slideUp(700);
	});
});	




	  
	  
$(function(){
	$(".1f").click(function(){
	$("#map_img1").css('display','block');
	$("#map_img2").css('display','none');
	$("#map_img3").css('display','none');
	});
	$(".2f").click(function(){
	$("#map_img1").css('display','none');
	$("#map_img2").css('display','block');
	$("#map_img3").css('display','none');
	});
	$(".3f").click(function(){
	$("#map_img1").css('display','none');
	$("#map_img2").css('display','none');
	$("#map_img3").css('display','block');
	});
	
});	/* about_탭메뉴*/







/*$(function(){
	var menu = $("#nav_all_menu");
	var menubt = $(".menu_li");
	  menubt.mouseenter(function(){
	  menu.stop().slideDown(700);
	  });
	  menu.mouseenter(function(){
	  menu.stop();
	  });
	  menubt.mouseleave(function(){
	  menu.slideUp(700);
	  });
 }); /* 슬라이드메뉴 */
