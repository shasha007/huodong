/**
 * Created by huqiwen on 16/4/20.
 */
var GetRankUrl = 'http://pocketuni.net/index.php?app=wap&mod=Asking&act=allRanking&id=3';
//var urlTest = 'http://192.168.1.17/index.php?app=wap&mod=Asking&act=allRanking&id=2';
var RankNum = 1;
var loadingShow = false;
var page = 2;
$(function () {
    getrank();
});


function getrank() {
    $.ajax({
        url: GetRankUrl,
        type: 'post',
        dataType: "json",
        data: {
            page:1
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
                    html = html + '<li><span>第' + RankNum + '名&emsp13;:&emsp13;</span><span>' + data.data[i].uname + '</span></li>';
                    RankNum++;
                }
                $('.h-rank-ul').append(html);
            } else {
                $('.h-rank-ul').append('<li> <span>暂无排名</span></li>');
            }
        }
    });
}

$(window).scroll(function () {
    var document = window.document;
    var top = document.body.scrollTop || document.documentElement.scrollTop
        || 0;
    top += document.documentElement.clientHeight;
    var height = document.documentElement.scrollHeight;
    if (height - top < 100) {
        if (!loadingShow) {
            loadingShow = true;
            getAjaxNews();
        }
    }
});
function getAjaxNews() {
    $.ajax({
        url: GetRankUrl,
        type: 'post',
        dataType: "json",
        data: {
            page:page
        },
        success: function (data) {
            if (data.status == '1') {
                var html = '';
                for (var i = 0; i < data.data.length; i++) {
                    html = html + '<li><span>第' + RankNum + '名&emsp13;:&emsp13;</span><span>' + data.data[i].uname + '</span></li>';
                    RankNum++;
                }
                page++;
                $('.h-rank-ul').append(html);
                loadingShow = false;
            } else {
                $('.h-rank-ul').append('<li> <span>暂无排名</span></li>');
            }
        }
    });
}