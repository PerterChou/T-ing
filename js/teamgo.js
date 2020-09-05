const searchPane = "<div class=\"panel-component search-result-panel\"><div class=\"panel-title\">项目</div><div class=\"panel-body search-result-panel-body\"><div class=\"result-list\"></div></div></div>";
const returnItem = " <div class=\"result-list-item\"><div class=\"result-list-item-title\"><div class=\"item-title-img\"><span class=\"title-img\"></span></div><div class=\"item-title-name\">Project 1</div></div></div>";

/*addProject()实现异步获取projectReturn.php页面的
projectName,并将其输出到TeamgGo.html(并不显示(<ul style='display:none'>),
然后获取该内容用于更改project-name,实现异步局部刷新.这么做的是为了将php的内容传给js
*/

function showAllSearch(){
	var xmlhttp1;
	if(window.XMLHttpRequest){
		xmlhttp1 = new XMLHttpRequest();
	}
	else{
		xmlhttp1=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp1.onreadystatechange = function(){
		var tabpanes = document.getElementsByClassName("search-result-wrap")[0];
		var info = document.getElementById("infospace");
		var list = document.querySelectorAll("#infospace>ul");
		tabpanes.innerHTML = "";
		
		if(xmlhttp1.readyState==4 && xmlhttp1.status == 200){
			info.innerHTML = xmlhttp1.responseText;
			for(var i=0;i<list.length;i++){
				var newPane = document.createElement("div");
				newPane.innerHTML = searchPane;
				newPane.getElementsByClassName("panel-title")[0].innerText = list[i].id;
				console.log(list[i].id);
				tabpanes.appendChild(newPane);
				var infoList = list[i].getElementsByTagName("li");
				for(var j=0;j<infoList.length;j++){
					var infoListChild = document.createElement("div");
					infoListChild.innerHTML = returnItem;
					infoListChild.getElementsByClassName("item-title-name")[0].innerText = infoList[j].innerText;
					tabpanes.getElementsByClassName("result-list")[i].appendChild(infoListChild);
				}
			}
			console.log(info.innerText);
		}
	}
	xmlhttp1.open("GET","projectReturn.php?t="+Math.random(),true);//获取服务器端projectReturn.php的内容
	xmlhttp1.send();
}
//document.querySelectorAll('.tabs-bar-scroll>ul>li')[0].addEventListener("click",showAllSearch);

/*将隐藏的web-content节点显示出来*/

function test(){
	document.getElementById("web-content").style.display = "none";
}
/*
var createNum = 0;
function showcreateMenu(){
	if(createNum%2==0){
		document.getElementsByClassName("next-overlay-wrapper")[0].style.display = "block";
	}else{
		document.getElementsByClassName("next-overlay-wrapper")[0].style.display = "none";
	}
	createNum++;
}
*/
function showSearchBoard(){
	var m=window.innerWidth-document.body.clientWidth;//滚动条的宽度
	document.documentElement.style.marginRight=m+"px";
	var sVar = document.getElementsByClassName("next-overlay-wrapper searcher");
	sVar[0].getElementsByClassName("next-overlay-wrapper-board")[0].style.opacity = 0.3;
	sVar[0].style.display = "flex";
	showAllSearch();
	document.getElementsByClassName('tabs-tabpane')[0].classList.add("active");
	document.documentElement.style.overflowY = 'hidden'; 
	document.documentElement.style.overflowX = 'hidden';
}
function closeSearchBoard(){
	var sVar = document.getElementsByClassName("next-overlay-wrapper searcher");
	sVar[0].getElementsByClassName("next-overlay-wrapper-board")[0].style.opacity = 0;
	sVar[0].style.display = "none";
	document.documentElement.style.overflowY = 'scroll';
	document.documentElement.style.marginRight="0px";
	
}
function changeBorder1(){
	document.getElementsByClassName("next-input next-medium input")[0].style.borderColor = "dodgerblue";
}
function changeBorder2(){
	document.getElementsByClassName("next-input next-medium input")[0].style.borderColor = "gray";
}
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
*/
