/**
 * Created by huqiwen on 16/4/20.
 */
var GetRankUrl = 'http://pocketuni.net/index.php?app=wap&mod=Asking&act=allRanking&id=3';
//var GetRankUrl = "json/dd.json";
var RankNum = 1;
$(function () {
    getrank();
    getheight();
});

var getheight = function () {
    var img_height = $(".h-rank-header img").height();
    $(".h-rank-ul").css({"top":"-"+(img_height-80)+"px","height":(img_height-200)+"px"});
    $(".h-rank-footer").css("top","-"+(img_height-80)+"px");
};

function getrank(){
    $.ajax({
        url:GetRankUrl,
        type: 'post',
        dataType : "json",
        data: {
            page:1
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        },
        success: function (data) {
            if(data.status=='1'){
                var html = '';
                for(var i = 0;i<data.data.length;i++){
                    html = html + '<li><p>第'+RankNum+'名&emsp13;:&emsp13;'+data.data[i].uname+'</p><p>'+data.data[i].uname+'</p></li>';
                    RankNum ++ ;
                }
                $('.h-rank-ul').append(html);
            }else{
                $('.h-rank-ul').append('<li> <span>暂无排名</span></li>');
            }
        }
    });
}
