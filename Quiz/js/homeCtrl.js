
    /*-------------------------------------------------------------------------*/

    
app.controller('home',function($scope, $location, $rootScope, $http, $firebaseObject, $firebaseArray, functionFactory, $firebaseAuth, $cookies)
{
   

    var ref = new Firebase("https://techvista.firebaseio.com");
    $scope.UserId = ref.getAuth().uid;
    
    $rootScope.userData = $firebaseObject(ref.child("allUsers").child($scope.UserId));
    
    $rootScope.userData.$loaded(function(data){
        
        
        ////(data);
        $rootScope.displayName = data.Name;
        $rootScope.questionNo = data.questionNumber;
        $cookies.put('questionNo', $rootScope.questionNo );
        $cookies.put('Name', $rootScope.displayName);
        $(".home").removeClass("home");
        
    });
    
    
});
