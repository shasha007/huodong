function getranking(){$.ajax({url:GetRankingUrl,type:"post",dataType:"json",data:{},error:function(n,t,a){console.log(n.status),console.log(n.readyState),console.log(t)},success:function(n){"1"==n.status?$(".h-wisdom-index-pai").html("第"+n.data+"名"):$(".h-wisdom-index-pai").html("暂无排名")}})}var GetRankingUrl="http://pocketuni.net/index.php?app=wap&mod=Asking&act=myRanking&id=2";$(function(){getranking()});