
function imgSlide(cname){
	//第一模块图片轮播
	var imgList = document.getElementById('index_one').getElementsByTagName('img');
	//console.log(imgNum);
	var imgNum =imgList.length;
	var contsNum = 0;
	var time1=null;
	var time2=null;
	clockFun();
	function clearClockFun(){
		clearInterval(time2);
	}
	function clockFun(){
		time2=setInterval(imgApperFun,2000);
	}
	function imgApperFun(){
		contsNum++;
		if(contsNum==imgNum){
			contsNum=0;
		}
		if(contsNum == -1){
			contsNum =imgNum-1;
		}
		for(var i=0;i<imgNum;i++){
			if(time1){
				clearInterval(time1)
			}
			clearClockFun();
			$('#'+cname+' img').eq(i).css('z-index','0');
			$('#'+cname).next().find('p').eq(i).css('display','none');
		}
		$('#'+cname+' img').eq(contsNum).css('z-index','1');
		$('#'+cname).next().find('p').eq(contsNum).css('display','block');
		var opcNum=0;
		//透明度变化的函数
		function opcityFun(){
			opcNum+=0.1;
			if(opcNum>=1){
				clearInterval(time1);
				opcNum=1;
				for(var j=0;j<imgNum;j++){
					$('#'+cname+' img').eq(j).css('opacity','0');
					$('#'+cname+' img').eq(j).css('filter','alpha(opacity=0)');
					$('#'+cname).next().find('p').eq(j).css('opacity','0');
					$('#'+cname).next().find('p').eq(j).css('filter','alpha(opacity=0)');
				}
				clockFun();
			}
			$('#'+cname+' img').eq(contsNum).css('opacity',opcNum);
			$('#'+cname+' img').eq(contsNum).css('filter','alpha(opacity='+Math.ceil(opcNum*100)+')');
			$('#'+cname).next().find('p').eq(contsNum).css('opacity',opcNum);
			$('#'+cname).next().find('p').eq(contsNum).css('filter','alpha(opacity='+Math.ceil(opcNum*100)+')');
		}
		time1=setInterval(opcityFun,50);
	}
}