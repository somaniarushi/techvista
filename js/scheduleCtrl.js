app.controller("scheduleCtrl", function($scope, $rootScope) {
        $scope.show = $rootScope.contentList;
        $scope.close = function(){
        $rootScope.contentList=[];
    
    };
});

