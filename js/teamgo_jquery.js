const valueOfChina =['你好吖~ ^_^','初めまして、^o^','よろしくお願いいたします! O_O','富强','民主','文明','和谐','おはよう～　^0^','自由','平等','公正','法治','こんにちは～　^.^','爱国','敬业','诚信','友善','こんばんは～　=.=','我累了...','注意休息呀~','工作你就输了!','可愛いは正義だ　>_<','おやすみ～　😴'];
var clickNum = 0;
const projectCard = " <div class=\"card-container\"><div class=\"outer\"><div class=\"container\"><div class=\"container-content\"><div class=\"container-content-header\"></div><div class=\"container-content-footer\"><div class=\"project-name\">新建项目</div></div></div></div></div></div>";



$(document).ready(function(){
	
	$('.menu-item').click(function(){
		var m=window.innerWidth-document.body.clientWidth;//滚动条的宽度
		document.documentElement.style.paddingRight=m+"px";
		$('div[data-modal='+$(this).data('modal')+']').css("display","flex");
		$('.next-overlay-wrapper').hide();
		document.getElementsByClassName("next-overlay-wrapper")[0].style.display = "none";
		document.documentElement.style.overflowY = 'hidden'; 
		document.documentElement.style.overflowX = 'hidden';
		
		$('.creator-header div[data-modal='+$(this).data('modal')+']').click(function(){
			$('div[data-modal='+$(this).data('modal')+']').hide();
			document.documentElement.style.overflowY = 'scroll';
			document.documentElement.style.paddingRight="0px";
		});
	});
	
	$("li.navbar-detail-app,.avator-menu-item-item,.menu-item,.tabs-bar-item").mouseover(function(){

		var div = $("#hello");
		div.show();
		div.css({
			'top':event.clientY+'px',
			'left':event.clientX+50+'px',
			'position':'absolute',
			'backgroundColor':'#ded0e5'
		});
		div.html($(this).text());
		
	   
	});
	$('li.navbar-detail-app,.avator-menu-item-item,.menu-item,.tabs-bar-item').mouseout(function(){
		$("#hello").hide();
	});
	$(".Leave *,#leave").mouseover(function(){

		var div = $("#hello");
		div.show();
		div.css({
			'top':event.clientY+'px',
			'left':event.clientX+50+'px',
			'position':'absolute',
			'backgroundColor':'#ded0e5'
		});
		div.html($("#saysomething").text());
		
	   
	});

	$(".closeBoardBtn").mouseover(function(){
	
		var div = $("#hello");
		div.show();
		div.css({
			'top':event.clientY+'px',
			'left':event.clientX+50+'px',
			'position':'absolute',
			'backgroundColor':'#ded0e5'
		});
		div.html('关闭');
		
	   
	});
	$('.closeBoardBtn').mouseout(function(){
		$("#hello").hide();
	});

	$(".card-grid").on("mouseover",".card-container",function(){
		var div = $("#hello");
		div.show();
		div.css({
			'top':event.clientY+'px',
			'left':event.clientX+50+'px',
			'position':'absolute',
			'backgroundColor':'#ded0e5'
		});
		div.html($(this).text());
	});
	
	$(".card-grid").on("mouseout",".card-container",function(){
		$("#hello").hide();
	});
	$(".search-result-wrap").on("mouseover",".result-list-item",function(){
		var div = $("#hello");
		div.show();
		div.css({
			'top':event.clientY+'px',
			'left':event.clientX+50+'px',
			'position':'absolute',
			'backgroundColor':'#ded0e5'
		});
		div.html($(this).text());
	});
	$(".search-result-wrap").on("mouseout",".result-list-item",function(){
		$("#hello").hide();
	});
	
	function getcl(){
	 var arr = []//定义一个空的数组
	 i =0;//为while循环定义i的初始值
	 C = '0123456789ABCDEF';
	 //定义颜色代码的字符串
	 while(i++ < 6){//循环6次
	 x=Math.random()*16;
	 //取0-16之间的随机数给变量x
	 b=parseInt(x);//取0-16之前的整数给变量b
	 c=C.substr(b,1);
	 //由第b（0-16之间的整数）位开始取一个字符
	 arr.push(c);
	 //通过6次循环得到的随机位置取得的字符组合在一起把值给到arr这个数组
	 }
	 var cl = "#"+ arr.join('');
	 //去掉之前数组之间的逗号，前面再加一个井号，
	 //这样颜色随机的颜色代码就生成了，并且把颜色代码赋值给变量cl
	 return cl;//把cl的值返回给函数getcl()
	 }
	
	$("#web-content").click(function(){
		var div = $("#hello");
		var time = 800;
		div.show();
		div.css({
			'top':event.clientY-10+'px',
			'left':event.clientX-10+'px',
			'opacity':1,
			'position':'absolute',
			
			'backgroundColor':'#ded0e5'
			
			//'backgroundColor':getcl()
		});
		div.html(valueOfChina[clickNum]);
		if(valueOfChina[clickNum].length>=10){
			time = 1500;
		}else if(valueOfChina[clickNum].length>=3){
			time = 1200;
		}
		
		clickNum=(clickNum+1)%valueOfChina.length;
		
		div.animate({
			top:'-=20px',
			left:'-=20px'
		}).fadeOut(time);
		
	});
	
	$('.executor-name .mybutton').click(function(){
		
	});
	
	function showProjects(){
		$.ajax({
			type:"GET",
			url:"test/project.json",
			dataType:"json",
			timeout:10000,
			cache:false,
			success:function(data){
				$(".card-grid").html("");
				$.each(data,function(i,n){
					var newCard = $("<div class=\"card-container\"><div class=\"outer\"><div class=\"container\"><div class=\"container-content\"><div class=\"container-content-header\"></div><div class=\"container-content-footer\"><div class=\"project-name\">"+n['projectName']+"</div></div></div></div></div></div>");
					
					//newCard.text(n['projectName']);
					
					$("#card").append(newCard);
					console.log(n['projectName']);
				});
				$("#web-content").show();
			}
		});
	}
	
	$("li[data-app=project]").click(function(){
		showProjects();
	});
	var myVar;
	window.onload = function(){
		showProjects();
		myVar = setInterval(function(){
				showProjects();
			},10000);
	}
	
	function refleshCheck(checkbox) {
		if(document.getElementById("reflesh").checked == true){
			clearInterval(myVar);
		}else{
			myVar = setInterval(function(){
				showProjects();
			},10000);
		}
		// body...
	}
});


/*
function closeTaskCreatorView(){
	var closer = document.getElementsByClassName("modal fade in")[1];
	closer.style.display = "none";
	document.documentElement.style.overflowY = 'scroll'; 
	document.documentElement.style.paddingRight="0px";
}
function showTaskCreatorView(){
	var m=window.innerWidth-document.body.clientWidth;//滚动条的宽度
	document.documentElement.style.paddingRight=m+"px";
	var opener = document.getElementsByClassName("modal fade in")[1];
	opener.style.display = "flex";
	document.getElementsByClassName("next-overlay-wrapper")[0].style.display = "none";
	document.documentElement.style.overflowY = 'hidden'; 
}
$('.mybutton').click(function(event){
			    $('div[data-something=' + $(this).data('something') + ']').toggle();
				console.log($(this).data('somthing'));
				stopBubble(event);
				$(document).bind("click",function(e){ 
				var target = $(e.target); 
				if(target.closest(".dropdown").length == 0){ 
				$(".dropdown").hide(); 
				} 
				}) 
			});
*/

