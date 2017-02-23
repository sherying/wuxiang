/**
 * Created by Ibokan on 2016/12/15.
 */

$(function(){
	imgSlide('index_one');
	//首页tab切换功能开始
	$('.menuDiv').each(function(){
		$(this).find('.index_title').each(function(){
			$(this).find('a').each(function(){
				$(this).click(function(){
					var num=$(this).parent().index();

					if(num==0){
						imgSlide('index_one');
					}
					if(num==1){
						imgSlide('index_two');
					}
					if(num==2){
						imgSlide('index_three');
					}
					if(num==3){
						imgSlide('index_four');
					}
					if(num==4){
						imgSlide('index_five');
					}




					$(this).parents('.index_title').find('a').removeClass('index_focus');
					$(this).parents('.menuDiv').find('.index_content').removeClass('index_tabFocus');
					$(this).addClass('index_focus');
					$(this).parents('.menuDiv').find('.index_content').eq(num).addClass('index_tabFocus');
				})
			})
		})
	})
	//首页tab切换功能结束

	
	//产品切换滚动功能
// 	var apperH = $('.index_leftthirdAppear').height();
// 	var scrollT = $('.index_leftthirdAppear').scrollTop();
// 	//console.log(scrollT);

// 	function scrollFun(speed){
// 		scrollT+=speed;
// 		if(scrollT<=0){
// 			scrollT=0;
// 		}
// 		else if(scrollT>=apperH){
// 			scrollT=apperH;
// 		}
// 		$('.index_leftthirdAppear').scrollTop(scrollT);
// 	}
// 	 $('.index_choseUp').click(function(){
// 		 scrollFun(-10);
// 	 });
// 	$('.index_choseDown').click(function(){
// 		scrollFun(10);
// 	});
    
		$('.smallMenu li').each(function(){
			$(this).click(function(){
				var num=$(this).index();
				$('.smallMenu li').css('background','white');
				$(this).css('background','#F2F2F2');
				$(this).parent().parent().find('.index_AppearIn').removeClass('index_tabFocus');
				$(this).parent().parent().find('.index_AppearIn').eq(num).addClass('index_tabFocus');
			});
		});
});

