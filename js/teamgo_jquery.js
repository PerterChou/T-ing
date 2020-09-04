const valueOfChina =['富强','民主','文明','和谐','自由','平等','公正','法治','爱国','敬业','诚信','友善'];
var clickNum = 0;

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
	
	$("#web-content").click(function(){
		var div = $("#hello");
		div.show();
		div.css({
			'top':event.clientY-20+'px',
			'left':event.clientX-20+'px',
			'opacity':1,
			'position':'absolute',
			'backgroundColor':'#ded0e5'
		});
		div.html(valueOfChina[clickNum]);
		clickNum=(clickNum+1)%12;
		div.animate({
			top:'-=20px',
			left:'-=20px'
		}).fadeOut(800);
	});
	
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
