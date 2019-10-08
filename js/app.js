app.controller('loginCtrl', function($scope, $location, $rootScope, $http, $firebaseAuth)
{

    
    $rootScope.errorColor = "black";
    $rootScope.passColor = "black";
    var ref = new Firebase("https://techvista.firebaseio.com");
    /*-------------Authentication---------------*/
    $scope.submit = function(){
        
        $scope.authObj= $firebaseAuth(ref);
        $scope.Uname = $scope.username;
        $scope.authObj.$authWithPassword({
            
            email: $scope.Uname,
            password: $scope.password
        
            
        }).then(function(authData){
            
            $rootScope.username = $scope.username;
            $rootScope.uid= authData.uid;
            $rootScope.loggedIn = true;
            $scope.errorColor="black";
            $(".menus").fadeIn(0);
            $location.path("/home");
            
        }).catch(function(error){
            
            
            if(error.code=='INVALID_USER')
            {
                $scope.alert = "Unidentified User"
                $rootScope.errorColor="red";
                $scope.username="";
                $scope.password="";
            }
            else
            {
                $scope.alert = "Incorrect Password";
                $rootScope.passColor="red";
                $scope.password="";

                // add more error styles here
            }
        });
        
        $scope.users={};
        ref.on('value', function(snapshot){
        $scope.users = snapshot.val();
        var uid= '56465c4f-56b7-4dbf-b3b9-2d01165c5b22';
        
    });
    
    };
});

    /*-------------------------------------------------------------------------*/


    /*--------------------Getting data from firebase arrays file---------------*/
    
app.controller('home', function($scope, $location, $rootScope, $http)
{
    $rootScope.loggedIn = true;
    var ref = new Firebase("https://techvista.firebaseio.com");
    $scope.username = $rootScope.username;
    $scope.uid= $rootScope.uid;
    
    ref.on('value', function(snapshot) {
        $rootScope.database = snapshot.val();
    });
    $scope.index = $rootScope.database.uid.indexOf($scope.uid);
    $rootScope.index = $scope.index;
    $rootScope.questionNo = $rootScope.database.questionNumbers[$scope.index];
    $scope.Username = $rootScope.database.teams[$scope.index];
    $rootScope.question = $rootScope.database.questions[$scope.questionNo];
    $rootScope.answer = $rootScope.database.answers[$scope.questionNo];
    
    
});


app.controller('quiz', function($scope, $location, $rootScope, $http, $firebaseObject)
{
    
    $scope.questionNo= $rootScope.questionNo;
    $scope.currentQuestion= $rootScope.question;
    $scope.index=$rootScope.index;
    
    $scope.currentAns = $rootScope.answer;
    $scope.wrongMsg="";
    $scope.submitAns = function(){
        $scope.givenAns = $scope.ans.toLowerCase();
        
        if($scope.currentAns == $scope.givenAns)
        {
            $scope.ans="";
            $rootScope.errorColor="black";
            $scope.wrongMsg="";
            
            var updateObj = {};
            updateObj[$rootScope.index]=$scope.questionNo+1;
                var refForUpdate = new Firebase("https://techvista.firebaseio.com");
                //var databseArray = $firebaseObject(refForUpdate);
                $scope.refToQues = refForUpdate.child('questionNumbers');
            $scope.refToQues.update(updateObj);
            refForUpdate.on('value', function(snapshot) {
                $rootScope.database = snapshot.val();
            });
           $scope.questionNo = $rootScope.database.questionNumbers[$scope.index];
           $scope.currentQuestion = $rootScope.database.questions[$scope.questionNo];
           $scope.currentAns = $rootScope.database.answers[$scope.questionNo];
           $rootScope.currentQuestionNO= $scope.questionNo;
           
        
            
        }
        else
        {
            $scope.ans= "";
            $rootScope.errorColor="red";
            $scope.wrongMsg="Incorrect. Try Again";
        }
            
    };
});
/*
app.controller('quiz', function($scope, $location, $rootScope, $http, $firebaseObject)
{
    
    $scope.questionNo= $rootScope.questionNo;
    $scope.currentQuestion= $rootScope.question;
    $scope.index=$rootScope.index;
    $scope.currentAns = $scope.ans;
    $scope.wrongMsg="";
    $scope.submitAns = function(){
        
        $scope.currentAns = $rootScope.answer;
        if($scope.currentAns == $scope.ans)
        {
            $scope.ans="";
            $rootScope.errorColor="black";
            $scope.wrongMsg="";
            
            
                var refForUpdate = new Firebase("https://techvista.firebaseio.com");
                //var databseArray = $firebaseObject(refForUpdate);
                $scope.stufff = refForUpdate.child('questionNumbers');
            $scope.stufff.update({
            1: $scope.questionNo+1
                
            });
            refForUpdate.on('value', function(snapshot) {
                $rootScope.database = snapshot.val();
            });
           $scope.questionNo = $rootScope.database.questionNumbers[$scope.index];
           $scope.currentQuestion = $rootScope.database.questions[$scope.questionNo];
           $scope.currentAns = $rootScope.database.answers[$scope.questionNo];
            console.log($scope.currentAns);
           
        
            
        }
        else
        {
            $scope.ans= "";
            $rootScope.errorColor="red";
            $scope.wrongMsg="Incorrect. Try Again";
        }
            
    };
});
*/
