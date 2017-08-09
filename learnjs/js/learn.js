//alert("hello world");
alert("have fun");
var ar1=['1','2','3'];
for(var i=0;i<ar1.length;i++){
	console.log(ar1[i]);
};
//字符串操作
var name="chen";
var age="20 years";
var message="ni"+name+age;
alert(message);
var people={
        name:'张三',
        age:'28',
 };
 console.log(`哈哈,${people.name}都${people.age}岁了`);
var s="reposity sun flowers";
s.toUpperCase();
s.indexOf("sun");
s.substring(0,5);
 
var arr=[[1,2,3],[200,500,300],20];
console.log(arr[1][1]);

 var xm = { name: '小明', 
 birth: 2000, 
 school:'No.1 Middle School', 
 height: 1.70, 
 weight: 65, 
 score: null }; 
 for(var i in xm){ console.log(xm[i]); }
 
var cxq = {
	name:'chenxiaoqing',
	age:21,
	school:'jilin university'
};
for(var key in cxq){
	console.log(cxq[key]);
}


var height=parseFloat(prompt("请输入身高(m):"));
var weight=parseFloat(prompt("please input the weight(kg):"));

var bmi = weight/(height*height);
if (bmi<18.5){
    console.log("过轻");
}else if(bmi>18 && bmi<25){
    console.log("正常");
}else if(bmi<28){
   console.log("过重");
}else if(bmi<32){
   console.log("肥胖");
}else{
console.log("严重肥胖");
}


