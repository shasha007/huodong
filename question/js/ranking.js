/**
 * Created by huqiwen on 16/4/20.
 */
var GetRankingUrl = 'http://pocketuni.net/index.php?app=wap&mod=Asking&act=myRanking&id=3';
$(function () {
    getranking();
});

function getranking(){
    $.ajax({
        url:GetRankingUrl,
        type: 'post',
        dataType : "json",
        data: {

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        },
        success: function (data) {
            if(data.status=='1'){
                $('.h-wisdom-index-pai').html('第'+data.data+'名');
            }else{
                $('.h-wisdom-index-pai').html('暂无排名');
            }
        }
    });
}
