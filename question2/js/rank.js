/**
 * Created by huqiwen on 16/4/20.
 */
var GetRankUrl = 'http://pocketuni.net/index.php?app=wap&mod=Asking&act=allRanking&id=3';
var RankNum = 1;
var page = 2;
var isend = false;
$(function () {
    getrank(1);
    document.getElementsByClassName("RankPic")[0].onload=function(){
        getheight();
    }
    var nScrollHight = 0;
    var nScrollTop = 0;
    var nDivHight = $(".h-rank-ul").height();
    $(".h-rank-ul").scroll(function () {
        nScrollHight = $(this)[0].scrollHeight;
        nScrollTop = $(this)[0].scrollTop;
        if (nScrollTop + nDivHight >= nScrollHight) {
            if (!isend && page!==null) {
                getrank(page);
                page = page + 1;
            }else if(isend && page==null){
                $('.h-rank-ul').append('<li> <span>暂无排名</span></li>');
            }

        }
    })
});


var getheight = function () {
    var img_height = $(".h-rank-header img").height();
    $(".h-rank-ul").css({"top": "-" + (img_height - 80) + "px", "height": (img_height - 200) + "px"});
    $(".h-rank-footer").css("top", "-" + (img_height - 80) + "px");
};

function getrank(page) {
    $.ajax({
        url: GetRankUrl,
        //url : "json/dd.json",
        type: 'post',
        dataType: "json",
        data: {
            page: page
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        },
        success: function (data) {
            if (data.status == '1') {
                var html = '';
                for (var i = 0; i < data.data.length; i++) {
                    //html = html + '<li><p>第'+RankNum+'名&emsp13;:&emsp13;'+data.data[i].uname+'</p><p>'+data.data[i].schoolName+'</p></li>';
                    html = html + '<li> <div>第' + RankNum + '名</div><div> <p>' + data.data[i].uname + '</p><p>' + data.data[i].schoolName + '</p> </div> </li>';
                    RankNum++;
                }
                if(page=="1"){
                    getheight();
                }
                $('.h-rank-ul').append(html);
            } else {
                isend = true;
                page = null;
            }
        }
    });
}
