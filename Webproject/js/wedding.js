'use strict'

window.onload=function(){
	var list=document.getElementById('carousel_Box');
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	

	function animate(offset){
		var newLeft=parseInt(list.style.left)+offset;
		list.style.left=newLeft+'px';
		if(newLeft<-5500){
			list.style.left=-1100+'px';
		}
		if(newLeft>-1100){
			list.style.left=-5500+'px';
		}

		
	}
	prev.onclick=function(){
		index-=1;
		if(index<1){
			index=6;
		}
		buttonShow();
		animate(1100);
	}
	next.onclick=function(){
	    index+=1;
	    if(index>6){
	    	index=1;
	    }
	    buttonShow();
		animate(-1100);
	}
	var timer;
	function play(){
		timer=setInterval(function(){
			next.onclick();
		},3000);
	}
	play();
	var container=document.getElementById('carousel');
	function stop(){
		clearInterval(timer);
	}
	container.onmouseover=stop;
	container.onmouseout=play;
	
	
	var buttons=document.getElementById("list").getElementsByTagName("li");
	var index=1;
	function buttonShow(){
		for(var i=0;i<buttons.length;i++){
		if(buttons[i].className=='on'){
				buttons[i].className='';
			}
		}
		buttons[index-1].className='on';
	}
	
	for(var i=0;i<buttons.length;i++){
		(function(i){buttons[i].onclick=function(){
			console.log(i);
			var clickIndex=parseInt(this.getAttribute('index'));
			var offset=1100*(index-clickIndex);
			animate(offset);
			index=clickIndex;
			buttonShow();
		}
		})(i);
		
			
		
	}
	var wrap=document.getElementById('wrap');
	var	pic = document.getElementById('pic').getElementsByTagName("li");
	var index=0;
	var time;
	time=setInterval(autoPlay,2000);
	wrap.onmouseover=function(){clearInterval(time);};
	wrap.onmouseout=function(){setInterval(autoPlay,2000);};
	function autoPlay() {
		if(++index >= pic.length) 
		index = 0;
		changePic(index);
	}

	// 定义图片切换函数
	function changePic(curIndex) {
		for(var i = 0; i < pic.length; i++) {
			pic[i].style.display = "none";
		}
		pic[curIndex].style.display = "block";
		
	}

	}
	
