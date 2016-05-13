$(function(){
	//保存问题
		var questions=[
	{questionNo:'测试题1/10',question:'1.你每月的生活费是多少？',keyA:'A.800-1200',keyB:'B.1200+',keys:''},
	{questionNo:'测试题2/10',question:'2.你每月哪方面的支出最大？',keyA:'A.吃饭',keyB:'B.娱乐',keys:''},
	{questionNo:'测试题3/10',question:'3.你怎么形容校园恋爱？',keyA:'A.纯真,浪漫,美',keyB:'B.玫瑰,巧克力,烛光晚餐',keys:''},
	{questionNo:'测试题4/10',question:'4.校园内停留时间最长的地方(寝室除外)？',keyA:'A.食堂',keyB:'B.图书馆',keys:''},
	{questionNo:'测试题5/10',question:'5.外表和才华,你觉得哪个最重要？',keyA:'A.外表',keyB:'B.才华',keys:''},
	{questionNo:'测试题6/10',question:'6.吃饭时你一般会点什么饮品？',keyA:'A.茶水',keyB:'B.饮料',keys:''},
	{questionNo:'测试题7/10',question:'7.11月11日是什么节日？',keyA:'A.购物节',keyB:'B.单身节',keys:''},
	{questionNo:'测试题8/10',question:'8.吃口香糖时,你会',keyA:'A.两粒一起吃',keyB:'B.一粒慢慢嚼',keys:''},
	{questionNo:'测试题9/10',question:'9.只打一通电话,你有把握向朋友借到1000块钱吗？',keyA:'A.有把握',keyB:'B.没把握',keys:''},
	{questionNo:'测试题10/10',question:'10.下面那句话最让你感同身受？',keyA:'A.吃薯片都会舔手指',keyB:'B.为什么人只有2颗肾？',keys:''}
	];
	//保存答案
	var answers=[
	{questionNo:'测试题1/10',keys:''},
	{questionNo:'测试题2/10',keys:''},
	{questionNo:'测试题3/10',keys:''},
	{questionNo:'测试题4/10',keys:''},
	{questionNo:'测试题5/10',keys:''},
	{questionNo:'测试题6/10',keys:''},
	{questionNo:'测试题7/10',keys:''},
	{questionNo:'测试题8/10',keys:''},
	{questionNo:'测试题9/10',keys:''},
	{questionNo:'测试题10/10',keys:''}
	];
	//下一题
	var num=1;
	var maxnum=10;
	var nextFlag=0;
	var upFlag=0;
	var Flag=0;
	$("#next").click(function (){
		//标记点击事件，防止两次点击返回(一次去掉黄色背景一次再显示题目)
		nextFlag=1;
		if(Flag==1 && nextFlag==1){
			num=num+1;
			Flag=0;
		}
		//没有选择的场合禁止下一题
		if(num<maxnum && ($(".btnA").attr('src')=='img/btn1.png' || $(".btnB").attr('src')=='img/btn1.png')){
			setquestion(num);
			alert(num);
			setKeys(num);
			num++;
		}else if(num==maxnum){
			//测试结果跳转
			if(anANum==10){
				window.location.href="result2.html";
			}else if(anBNum==10){
				window.location.href="result3.html";
			}else{
				window.location.href="result.html";
			}
		}
		//隐藏第一题的【上一题】标签
		if($("#qNo").html().trim()=='测试题1/10'){
			$("#up").hide();
		}else{
			$("#up").show();
		}
	});
	//上一题
	$(".upDiv").click(function(){
		//标记点击事件，正确返回上一题
		upFlag=1;
		Flag=1;
		if(nextFlag==1){
			num=num-2;
			nextFlag=0;
		}else if(upFlag==1){
			num=num-1;
			upFlag=0;
		}
		setquestion(num);
		setKeys(num);
		$(".qcontentA").click(function(){
			$(".btnA").attr("src","img/btn1.png");
			$(".btnB").attr("src","img/btn2.png");
			answers[num].keys='A';
		});
		$(".qcontentB").click(function(){
			$(".btnA").attr("src","img/btn2.png");
			$(".btnB").attr("src","img/btn1.png");
			answers[num].keys='B';
		});
		//隐藏第一题的【上一题】标签
		if($("#qNo").html().trim()=='测试题1/10'){
			$("#up").hide();
		}else{
			$("#up").show();
		}
	});
	//选择答案显示,将结果保存数组answers
	var anANum=0;
	var anBNum=0;
	var i=0;
	$(".qcontentA").click(function(){
		$(".btnA").attr("src","img/btn1.png");
		$(".btnB").attr("src","img/btn2.png");
		alert($(".qNo").html().trim())
		answers[i].keys='A';
		alert('nextFlag'+nextFlag);
		alert('upFlag'+upFlag);
		alert('Flag'+Flag);
		if(nextFlag==1){
			i++;	
		}
		anANum=anANum+1;
	});
	$(".qcontentB").click(function(){
		$(".btnA").attr("src","img/btn2.png");
		$(".btnB").attr("src","img/btn1.png");
		answers[i].keys='B';
		if(nextFlag==1){
			i++;
		}
		anBNum=anBNum+1;
	});
	//题目显示
	function setquestion(num){
		$(".btnA").attr("src","img/btn2.png");
		$(".btnB").attr("src","img/btn2.png");
		$("#qNo").html(questions[num].questionNo);
		$("#qTitle").html(questions[num].question);
		$("#qcontentAcon").html(questions[num].keyA);
		$("#qcontentBcon").html(questions[num].keyB);
	}
	//通过数组answers，显示选择答案
	function setKeys(i){
		if(answers[i].keys=='A'){
	    	$(".btnA").attr("src","img/btn1.png");
	    	$(".btnB").attr("src","img/btn2.png");
	    }else if(answers[i].keys=='B'){
	    	$(".btnA").attr("src","img/btn2.png");
	    	$(".btnB").attr("src","img/btn1.png");
	    }
	}
});	