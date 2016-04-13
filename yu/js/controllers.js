/**
 * Created by huqiwen on 16/3/1.
 */
var PuWebApp = angular.module('pucontroller', []);


PuWebApp.controller('indexctrl', ['$scope','$location', function ($scope,$location) {
    $('#showyu2').modal('hide');
    $scope.goto = function (id) {
        console.log(id)
        //$('#showyu2').modal('hide')
            $location.path('/yu3/'+id);
    }
}]);

PuWebApp.controller('yu2ctrl', ['$scope', '$location',function ($scope,$location) {
    $scope.goto = function (id) {
        console.log(id)
        //$('#showyu2').modal('hide')
        $location.path('/yu3/'+id);
    }

}]);
PuWebApp.controller('yu3ctrl', ['$scope','$routeParams','$location', function ($scope,$routeParams,$location) {
    $('#showyu2').modal('hide');
    var id = $routeParams.id;
    $scope.imgid = "1";
    $scope.imgflag = 0;
    $scope.imgflag1 = 10;
    $scope.imgid = gettype(id,$scope);
    $scope.dislike = function (picid) {
        $scope.imgid = gettype (id,$scope);
    }
    $scope.go = function () {
        $location.path('/yu4');
    }
}]);
function  gettype (type,flag){
    if(type=='1'){
        if(flag.imgflag >=10){
            return flag.imgflag = 1;
        }else{
            flag.imgflag  = flag.imgflag+1;
            return flag.imgflag;
        }

    }else if(type == '2'){
        if(flag.imgflag1  >= 20){
            return flag.imgflag1 = 11;
        }else{
            flag.imgflag1  = flag.imgflag1+1;
            return flag.imgflag1;
        }
        return Math.floor(Math.random()*10)+11;
    }else{
        return Math.floor(Math.random()*20)+1;
    }
}
PuWebApp.controller('yu4ctrl', ['$scope','$location', function ($scope,$location) {
    $scope.go = function (id) {
        $location.path('/yu4_1');
    }
}]);
PuWebApp.controller('yu41ctrl', ['$scope','$location', function ($scope,$location) {
    $scope.go = function (id) {
        $location.path('/yu5');
    }
}]);
PuWebApp.controller('yu5ctrl', ['$scope','$location',function ($scope,$location) {
    $scope.imgid = Math.floor(Math.random()*20)+1;
    $scope.go = function () {
        //window.location="http://localhost:63342/work/svn/web/yu/yu6.html";
        $location.path('/yu6');
    }
    $scope.back = function () {
        $location.path('/yu1');
    }
}]);

PuWebApp.controller('yu6ctrl', ['$scope','$location', function ($scope,$location) {
    $scope.share = function(){
        $('#show').modal('show');
        //var url = location.href.replace('#/yu6','#/yu1');
        //Android.share("“愚”乐圈"+url,"“愚”乐圈",url,"");
    }

}]);

