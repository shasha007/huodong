function share(){
    try{
        Android.share("“一站到底”校园争夺赛，邀你来战。 http://pocketuni.net/zhuanti/question/index.html", "“一站到底”校园争夺赛，邀你来战。", "http://pocketuni.net/zhuanti/question/index.html", "http://pic.pocketuni.net/data/sys_pic/question/shareHeader.jpeg");
    }catch (e){
        setTimeout(function () {
            try{
                Android.share("“一站到底”校园争夺赛，邀你来战。 http://pocketuni.net/zhuanti/question/index.html", "“一站到底”校园争夺赛，邀你来战。", "http://pocketuni.net/zhuanti/question/index.html", "http://pic.pocketuni.net/data/sys_pic/question/shareHeader.jpeg");
            }catch (e){
                alert("请在PU中打开答题");
            }
        }, 500);
    }
}

function  GoQuestion(){
    if( typeof(Android)!=="undefined"){
        window.location.href='question.html';
    }else{
        setTimeout(function () {
            if(typeof(Android)!=="undefined"){
                window.location.href='question.html';
            }else{
                alert("请在PU中打开答题");
            }
        }, 200);
    }
}