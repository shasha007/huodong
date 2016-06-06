function getId(){
	var sId;
	try{
		sId=Android.getUid();
		
	}
	catch(e){
		sId="-1";
	}
	return sId;
}
var _url="http://pocketuni.net/index.php?app=home&mod=Public&act=doAddObtain";
function getData(url,target){
	var target=target;
	var uid=getId();
	var xmlhttp;
	var _url=url;
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("POST",_url+"&uid="+uid);
	xmlhttp.send();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.status==200&&xmlhttp.readyState==4){
			var status=JSON.parse(xmlhttp.response).status;
			if(status==1){
				alert(JSON.parse(xmlhttp.response).msg);
			}
			else{
				if(target==1){
					showTip();	
				}
				else{
					
					try{
						Android.openInternalPage("eventDetails", "", "", "187270", "", "", "");
					}
					catch(e){
						alert(e);
					}
				}
			}
		}
	}
}
function showTip(){
	var tip=document.getElementsByClassName("active_tips")[0];
	tip.style.display="block";
	setTimeout(function(){
		tip.style.display="none";
		window.location.href="active_sort.html";
	},1000);
}
