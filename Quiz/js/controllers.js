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
            console.log("logged in ", userData.uid)
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
        })
        
    };
    $scope.logout = function(functionFactory){
        console.log("okay");
        functionFactory.logout();
        
        
    }
    
    
});

    /*-------------------------------------------------------------------------*/


    /*--------------------Getting data from firebase arrays file---------------*/
    
app.controller('home',function($scope, $location, $rootScope, $http, $firebaseObject, $firebaseArray, functionFactory, $firebaseAuth, $cookies)
{
   

    var ref = new Firebase("https://techvista.firebaseio.com");
    $scope.UserId = ref.getAuth().uid;
    $rootScope.userData = $firebaseObject(ref.child($scope.UserId));
    
    $rootScope.userData.$loaded(function(data){
        
        
        console.log(data);
        $rootScope.displayName = data.Name;
        $rootScope.questionNo = data.questionNumber;
        $cookies.put('questionNo', $rootScope.questionNo );
        $cookies.put('Name', $rootScope.displayName);
        $(".home").removeClass("home");
        
    });
    
    
});
/*--------------------Quiz Page Controller---------------*/
    
app.controller('quiz',function($scope, $location, $rootScope, $http, $firebaseObject, $firebaseArray, functionFactory, $firebaseAuth, $cookies)
{
    var ref = new Firebase("https://techvista.firebaseio.com");
    $scope.questionNo = $cookies.get('questionNo');
    $scope.questionNo = parseInt($scope.questionNo);
    console.log($scope.questionNo);
    $rootScope.quizObj = $firebaseObject(ref.child($scope.questionNo));
    $rootScope.quizObj.$loaded(function(data){
        
        
        console.log(data);
        $rootScope.currentAns = data.A;
        $rootScope.currentQuestion = data.Q;
        $(".home").removeClass("home");
        
        
    }); 
        
    $(document).keypress(function(e) {
        if(e.keyCode == 13) {
            $scope.submitAns($scope.ans);
        }
    });
    $scope.submitAns = function(ans){
        if(ans == $rootScope.currentAns){
            
            $scope.ans = ""
            $scope.errorColor = "black";
            $scope.wrongMsg = "Correct";
            $('#username').removeClass('animated shake');
            //Updating Question No in the Cookie
            $scope.questionNo = $scope.questionNo +1;
            $cookies.put('questionNo', $scope.questionNo);
            $scope.questionNo = $cookies.get('questionNo');
            $scope.questionNo = parseInt($scope.questionNo);
            $rootScope.updateNo = $scope.questionNo;
            console.log($scope.questionNo);
            $rootScope.quizObj = $firebaseObject(ref.child($scope.questionNo));
            $rootScope.quizObj.$loaded(function(data){
        
                    
                console.log(data);
                $scope.wrongMsg = "";
                $rootScope.currentAns = data.A;
                $rootScope.currentQuestion = data.Q;



            }); 
            //Updating Userdata in the database
            var UserId = ref.getAuth().uid;
            var updateObj = {};
            updateObj.questionNumber = $rootScope.updateNo;
            
            
           
            $scope.refUpdate = ref.child(UserId);
            $scope.refUpdate.update(updateObj);
            
            
            
            
            
        }
        else
        {
            $('#username').addClass('animated shake');
            $scope.errorColor = "red";
            $scope.wrongMsg = "Incorrect Answer. Try Again";
        }
    }
});
    /*
    $rootScope.userData = {
        
        
        indexNo: $rootScope.index,
        questionNo: $rootScope.database.questionNumbers[$scope.index],
        username: $rootScope.database.teams[$scope.index],
        question: $rootScope.database.questions[$rootScope.questionNo],
        answer: $rootScope.database.answers[$rootScope.questionNo],
        hintUrl: $rootScope.database.hintUrl[$rootScope.questionNo]
    }
    console.log($rootScope.userData);
    
    
    
    
    
});/*
//Some problem here
app.controller('quiz', function($scope, $location, $rootScope, $http, $firebaseObject)
{
    
    $scope.questionNo= $rootScope.questionNo;
    $scope.currentQuestion= $rootScope.question;
    $scope.index=$rootScope.index;
    $scope.hintClass=$rootScope.hintUrl[$scope.questionNo];
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
                $scope.refToQues = refForUpdate.child('questionNumbers');
            $scope.refToQues.update(updateObj);
            refForUpdate.on('value', function(snapshot) {
                $rootScope.database = snapshot.val();
            });
            console.log($scope.index);
           $scope.questionNo = $rootScope.database.questionNumbers[$scope.index];
           $scope.currentQuestion = $rootScope.database.questions[$scope.questionNo];
            console.log($scope.currentQuestion);
           $scope.currentAns = $rootScope.database.answers[$scope.questionNo];
           $scope.hintClass = $rootScope.database.hintUrl[$scope.questionNo];
            
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
