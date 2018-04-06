// 2014/01/08 에 서버 페이지가 변경됨

﻿function hideElement(id)
{
	var element = document.getElementById(id);

	if (element)
  		element.style.display='none';
}

function hideElementByClass(className)
{
  	var tags=document.getElementsByClassName(className);
  	
	for (var i = 0; i < tags.length; ++i) {
  		var element = tags[i];
  		element.style.display='none';
  	}		
}

function css(selector, property, value) {
    for (var i=0; i < document.styleSheets.length; ++i) {
        try { 
        	document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {
        }
    }
}

hideElement('crumbs');
hideElement('divpop_50');
hideElement('divpop_51');
hideElement('divpop_52');
hideElement('divpop_53');
hideElement('supple');
hideElement('bottom');
hideElementByClass('right');

css("body", "font-size", "24px");
css("tr, td, th", "font-size", "24px");
css(".container", "width", "860px");
css("#cont .left", "width", "1349px");
css(".container", "text-align", "left");


//css("body", "background-color", "rgba(255, 255, 255, 0.01)");
//css("#listWrap.index h2 span", "background-color", "rgba(255, 255, 255, 0.01)");
//css("body", "font-size", "24px");
//css("a:link", "font-size", "24px");
//css("a:visited", "font-size", "24px");
//css("a:hover", "font-size", "24px");
//css("tr, td, th", "font-size", "24px");
//css("tr, td, th", "font-size", "24px");
//css("table.bbslist td#tdate", "font-size", "1px");





//css("input", "background-color", "rgba(255, 255, 255, 0.01)");

window.setTimeout("agate.runScript('caller.showNow')", 500);

