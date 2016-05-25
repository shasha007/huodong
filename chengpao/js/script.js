var yNum=document.getElementById("yearNum");
		var mNum=document.getElementById("monthNum");
		var cal=document.getElementById("calendar");
		var year=parseInt(cal.getAttribute("data-year"));
		var month=parseInt(cal.getAttribute("data-month"));
		var days=setDays(year,month);
		yNum.innerText=year+"年";
		mNum.innerText=month+"月";
		//填充日历,参数为预设的该月第一天是周几,后两个变量为下一个月及上一个月的第一天是周几
		var initWeek=6,nextMinit,prevMinit;
		var weekArray=["一","二","三","四","五","六","日"];
		writeCal(initWeek);
		function writeCal(init){
			for(i=0;i<7;i++){
				var calDay=document.createElement("li");
				calDay.innerText=weekArray[i];
				cal.appendChild(calDay);
			}
			if(init!=7){
				for(var i=0;i<init;i++){
					var calDay=document.createElement("li");
					cal.appendChild(calDay);
				}
			}
			for(i=1;i<=days;i++){
				var calDay=document.createElement("li");
				calDay.innerText=i;
				cal.appendChild(calDay);
			}
			nextMinit=(days-7+init)%7;
			var prevMis=month-1;
			prevMinit=7-(setDays(year,prevMis)-init)%7;
			selectDay();
		}
		//下一月
		function nextM(){
			month=month+1;
			if(month>12){
				alert("不能超过本年");
			}
			else{
				initWeek=nextMinit;
				for(var i=cal.getElementsByTagName("li").length-1;i>=0;i--){
					cal.getElementsByTagName("li")[0].remove();
				}
				mNum.innerText=month+"月";
				days=setDays(year,month);
				writeCal(initWeek);
			}
		}
		//上一月
		function prevM(){
			month=month-1;
			if(month<1){
				alert("不能超过本年")
			}
			else{
				initWeek=prevMinit;
				for(var i=cal.getElementsByTagName("li").length-1;i>=0;i--){
					cal.getElementsByTagName("li")[0].remove();
				}
				mNum.innerText=month+"月";
				days=setDays(year,month);
				writeCal(initWeek);	
			}
		}
		//设置天数
		function setDays(y,m){
			if(m==1||m==3||m==5||m==7||m==8||m==10||m==12){
				return 31;
			}
			else if(m==4||m==6||m==9||m==11){
				return 30;
			}
			else{
				if((y%4==0&&y%100!=0)||(y%100==0&&y%400==0)){
					return 29;
				}
				else{
					return 28;
				}
			}
		}
		for(var i=17;i<20;i++){
			cal.getElementsByTagName("li")[i].className="hasSign";
		}
		//添加点击当天的事件
		function selectDay(){
			for(var i=(7+initWeek);i<cal.getElementsByTagName("li").length;i++){
				cal.getElementsByTagName("li")[i].addEventListener("touchstart",function(){
					if(this.classList.length==0){
						for(var i=(7+initWeek);i<cal.getElementsByTagName("li").length;i++){
							if(cal.getElementsByTagName("li")[i].className=="current"){
								cal.getElementsByTagName("li")[i].className="";
							}
						}
						this.className="current";
					}
				});
			}
		}
//解析字符串
function parseUrl(){
//	http://my.oschina.net/wangkunYHY?disp=1&catalog=0&sort=time&
	var u=window.location.href;
	var parmeArr=[];
	var parme=u.substring(u.indexOf("?")+1);
	var signId;
	parme=parme.split("&");
	for(var i=0;i<parme.length;i++){
		parmeArr[i]=parme[i].split("=");
	}
	for(var i=0;i<parmeArr.length;i++){
		for(var j=0;j<parmeArr[i].length;j++){
			if(parmeArr[i][j]=="sign_id"){
				signId=parmeArr[i][j+1];
			}
		}
	}
	return signId;
}
//去除html标签
function wipeLabel(content){
	var c=content;
	//广播站信息
	var bcInfo=c.substring(c.indexOf(">")+1,c.lastIndexOf("<"));
	return bcInfo;
}
//获取数据
function getData(){
	//获取当前URL id
//	var signId=parseUrl();
	var month=parseInt(document.getElementById("monthNum").innerText);
	var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","http://pocketuniv.com/index.php?app=wap&mod=DaySign&act=geteUserSignInfo&sign_id=1"+"&month="+month,true);
	xmlhttp.send();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.status==200&&xmlhttp.readyState==4){
			console.log(xmlhttp.response)
		}
	}
}
window.onload=function(){
	getData();
}