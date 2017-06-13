var $ = require("jquery");
var swi = require("../lib/swiper.min.js");
$(function(){
	var foodPage = {
		foodInit:function(){
			this.foodSlide();
			this.foodTab();
		},
	//	首页轮播图
		foodSlide:function(){
			var swiper = new Swiper('.swiper-container', {
		        loop: true,
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        nextButton: '.swiper-button-next',
	        	prevButton: '.swiper-button-prev'
		    });
		},
	//	底部tab切换
		foodTab:function(){
			$(".js-food .js-food-list").eq(0).show().siblings().hide()
			$(".js-food-footer-anchor").on("click",function(){
	//			每个页面的tab切换
				$(this).addClass("food-footer-house-active").siblings().removeClass("food-footer-house-active");
				$(".js-food .js-food-list").eq($(this).index()).show().siblings().hide();
	//			spa的应用	
				var index = $(this).index(); //			获取当前对象的下标
				var para = $(this).data("anchor");
				var tabUrl = location.href + "#" + para;
				location.hash = "#" + para;
			})
			$(function(){
					var para = $('.js-food-footer-anchor').data("anchor");
					var tabUrl = location.href + "#" + para;
					console.log(tabUrl);
					location.hash = "#" + para;
			})
		}
	}
	foodPage.foodInit();
})

