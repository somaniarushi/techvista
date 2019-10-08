app.controller('quizCtrl',function($scope, $location, $rootScope, $http, $firebaseObject, $firebaseArray, functionFactory, $firebaseAuth, $cookies)
{
   
    
    var ref = new Firebase("https://techvista.firebaseio.com");
    $scope.UserId = ref.getAuth().uid;
    $scope.showLoader = true;
    $scope.showdpLoader = true;
    $rootScope.userData = $firebaseObject(ref.child("allUsers").child($scope.UserId));
    
    $rootScope.userData.$loaded(function(data){
        
        
        ////(data);
            
        $scope.showLoader = false;
        $rootScope.displayName = data.Name;
        $rootScope.questionNo = data.questionNumber;
        $cookies.put('questionNo', $rootScope.questionNo);
        $cookies.put('Name', $rootScope.displayName);
       
        
    });
    $rootScope.userPic = $firebaseObject(ref.child("userPics").child($scope.UserId));
    
    $rootScope.userPic.$loaded(function(data){
        $scope.pic = data.pic;        
        $scope.showdpLoader = false;
    });
    
    
});
