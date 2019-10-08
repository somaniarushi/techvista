app.controller('loginCtrl', function($scope,$rootScope, $window,$location, functionFactory, $firebaseObject)
{
    
 
    $(document).keypress(function(e) {
        if(e.keyCode == 13) {
            $scope.submit();
        }
    });
    $scope.submit = function(){
        
      var result = functionFactory.authenticate($scope.username, $scope.password);
        result.then(function(userData){
            //("logged in ", userData.uid)
            $rootScope.userId = userData.uid;
            $('#username').removeClass('animated shake');
            $('#password').removeClass('animated shake');
            $window.location.href="/";  
            
        },function(error){
             if(error.code=='INVALID_USER')
            {
                $('#username').addClass('animated shake');
                $scope.alert = "Unidentified User"
                $rootScope.errorColor="red";
                $scope.username="";
                $scope.password="";
            }
            else
            {
                $('#password').addClass('animated shake');
                $scope.alert = "Incorrect Password";
                $rootScope.passColor="red";
                $scope.password="";

                // add more error styles here
            }
        })};
    $scope.logout = function(functionFactory){
        //("okay");
        functionFactory.logout();
        
        
    }
    
    
});