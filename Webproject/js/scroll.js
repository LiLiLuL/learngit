var marqueesHeight = 300;
var stopscroll = false;
with(marquees) {
	style.width = 0;
	style.height = marqueesHeight;
	style.overflowX = "visible";
	style.overflowY = "hidden";
	noWrap = true;
	onmouseover = new Function("stopscroll=true");
	onmouseout = new Function("stopscroll=false");
}
document.write('<div id="templayer" style="position:absolute;z-index:1;visibility:hidden"></div>');

var preTop = 0;
var currentTop = 0;

function init() {
	templayer.innerHTML = "";
	while(templayer.offsetHeight < marqueesHeight) {
		templayer.innerHTML += marquees.innerHTML;
	}
	marquees.innerHTML = templayer.innerHTML + templayer.innerHTML;
	setInterval("scrollUp()", 60); //越大越慢
}
document.body.onload = init;

function scrollUp() {
	if(stopscroll == true) return;
	preTop = marquees.scrollTop;
	marquees.scrollTop += 1;
	if(preTop == marquees.scrollTop) {
		marquees.scrollTop = templayer.offsetHeight - marqueesHeight;
		marquees.scrollTop += 1;
	}
}