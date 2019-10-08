app.controller('loginCtrl', function($scope,$rootScope, $window,$location, functionFactory, $firebaseObject,$timeout,$firebaseAuth)
{
    $scope.alert = "";
    $scope.errorColor = "white";
    $scope.changePass = true;
    $scope.username = "";
    $(document).keypress(function(e) {
        if(e.keyCode == 13) {
            $scope.submit();
        }
    });
    $scope.submit = function(){
    
      $scope.loginLoader = true;
      var result = functionFactory.authenticate($scope.username, $scope.password);
        result.then(function(userData){
            //("logged in ", userData.uid)
            $scope.loginLoader = false;
            $rootScope.userId = userData.uid;
            $rootScope.loggedIn = true;
            $window.location.href="#/Profile";
            $scope.changePass = false;
        },function(error){
             if(error.code=='INVALID_USER')
            {
                $scope.loginLoader = false;
                $('#username').addClass('animated shake');
                $scope.alert = "Unidentified User"
                $scope.changePass = true;
                $timeout(function () { $scope.alert = ""; }, 2000);
                $scope.errorColor="#cc0000";
                $scope.username="";
                $scope.password="";
            }
            else
            {
                $scope.loginLoader = false;
                $('#password').addClass('animated shake');
                $scope.alert = "Incorrect Password";
                $scope.changePass = true;
                $timeout(function () { $scope.alert = ""; }, 2000);
                $scope.errorColor="#cc0000";
                $scope.password="";

                // add more error styles here
            }
        })};
    $scope.logout = function(functionFactory){
        //("okay");
        functionFactory.logout();
        
        
    }
    
   
     $scope.openPasswordResetWindow = function(){
        document.getElementById("passwordResetCont").style.display = "block"
    };
    $scope.closeforgotpass = function(){
        document.getElementById("passwordResetCont").style.display = "none"
    };
    
    $scope.passReset = function(){
    //var ref = new Firebase("https://techvista.firebaseio.com");
    $scope.forgotLoader = true;
    var ref = new Firebase("https://techvista.firebaseio.com");
    var authObj= firebase.auth(); 
        console.log($scope.emailid)
    authObj.sendPasswordResetEmail($scope.emailid).then(function() {
            
            alert("Password Reset Email Sent");
            document.getElementById("passwordResetCont").style.display = "none";
        }, function(error) {
              document.getElementById("passwordResetCont").style.display = "none";
            alert("Password reset link could not be sent")
        });  
    };
    
    
    
    
    
    
    
    
    
    
    
    $scope.listOfSchools = [
        {
            "name":"St. Agnes' Loreto Day",
            "email":"loretoagnes@gmail.com"
        },
        {
            "name":"Modern Academy",
            "email":"modernacademy@gmail.com"
        },
        {
            "name":"LPC Sahara States",
            "email":"lpc_jkpm@yahoo.in"
        },
        {
            "name":"CMS Gomtinagar Extension",
            "email":"siddhartha.shankar@cmseducation.org"
        },
        {
            "name":"APS LBS Marg",
            "email":"apslbslko@gmail.com"
        },
        {
            "name":"La Martiniere Girls' College",
            "email":"ridhima.tripathi86@gmail.com"
        },
         {
            "name":"CMS Aliganj-I",
            "email":"aliganj1@cmseducation.org"
        },
        {
            "name":"St. Fidelis College",
            "email":"stfidelislko@yahoo.co.in"
        },
        {
            "name":"LPC Sahara States",
            "email":"lpc_jkpm@yahoo.in"
        },
        {
            "name":"Gurukul Academy",
            "email":"gurukulians@rediffmail.com"
        },
        {
            "name":"La Martiniere College",
            "email":"shebas@lamartinierelucknow.org"
        },
        {
            "name":"CMS Gomti Nagar-I",
            "email":"gomtinagar1@cmseducation.org"
        },
        {
            "name":"CMS Chowk",
            "email":"chowk@cmseducation.org"
        },
        {
            "name":"St. Dominic College",
            "email":"puriharsh@yahoo.com"
        }
    ];
    
    
});