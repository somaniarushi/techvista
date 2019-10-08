
/*--------------------Quiz Page Controller---------------*/
    
app.controller('quiz',function($scope, $location, $rootScope, $http, $firebaseObject, $firebaseArray, functionFactory, $firebaseAuth, $cookies, $window)
{
    var ref = new Firebase("https://techvista.firebaseio.com");
    
    $scope.questionNo = $cookies.get('questionNo');
    $scope.questionNo = parseInt($scope.questionNo);
    $scope.currentQuestionNo = $scope.questionNo;
    $scope.hints = {}
    $rootScope.ifUpdateTrue = true;
    $rootScope.quizObj = $firebaseObject(ref.child($scope.questionNo));
    $rootScope.quizObj.$loaded(function(data){
        
        $scope.hints = data.hints;
        $location.search({hint:$scope.hints.hint1});
        console.clear();
        console.log($scope.hints.hint2);
        $scope.hint3 = $scope.hints.hint3;
        var pos=Math.random()*500;
        $(".hint3").animate({"left":pos});
        pos=Math.random()*500;
        $(".hint3").animate({"top":pos});
        $rootScope.currentAns = data.A;
        $rootScope.currentQuestion = data.Q;
        $(".home").removeClass("home");
        
        
    }); 
        
    $(document).keypress(function(e) {
        
        
        if($(".previousOverlay").hasClass("hiddenOverlay"))
            {
                 if(e.keyCode == 13) {
                    $scope.submitAns();
                 }  
            }
       
        
    });
    $scope.submitAns = function(){
        
        //formatting ans
        $scope.ans= $scope.ans.replace(/\s/g,"");
        
        if($scope.ans == $rootScope.currentAns){
            
            $scope.ans = ""
            $scope.errorColor = "black";
            $scope.wrongMsg = "Correct";
            $('#username').removeClass('animated shake');
            
            //Updating Question No in the Cookie
            $scope.questionNo = parseInt($scope.questionNo);
            $scope.questionNo = $scope.questionNo +1;
            $scope.currentQuestionNo = $scope.questionNo;
            $cookies.put('questionNo', $scope.questionNo);
            $scope.questionNo = $cookies.get('questionNo');
            $scope.questionNo = parseInt($scope.questionNo);
            $rootScope.updateNo = parseInt($scope.questionNo);
            
            $rootScope.quizObj = $firebaseObject(ref.child($scope.questionNo));
            $rootScope.quizObj.$loaded(function(data){
        
                    
                
                $scope.hints = data.hints;
                $location.search({hint:$scope.hints.hint1});
                console.clear();
                console.log($scope.hints.hint2);
                $scope.hint3 = $scope.hints.hint3;
                var pos=Math.random()*500;
                $(".hint3").animate({"left":pos});
                pos=Math.random()*500;
                $(".hint3").animate({"top":pos});
                
                $scope.wrongMsg = "";
                $rootScope.currentAns = data.A;
                $rootScope.currentQuestion = data.Q;



            }); 
            //Updating Userdata in the database
            var UserId = ref.getAuth().uid;
            var updateObj = {};
            updateObj.questionNumber = $rootScope.updateNo;
            $scope.refUpdate = ref.child("allUsers").child(UserId);
            $scope.refUpdate.update(updateObj);
            $scope.previousQuestions();
                }
        
        else
        {
            
            $scope.errorColor = "red";            
            $scope.wrongMsg = "Incorrect Answer. Try Again";
            $scope.ans = "";
            if($scope.ans!="")
                {
                    $scope.errorColor = "black";            
                    $scope.wrongMsg = "";
            
                    
                }
        }
    }
    
    //For Previous Questions------------------------------------------------------------
    
    
    
    $scope.previousQuestions = function(){
      
       
       $scope.questionArray = [];
        
        $scope.questionNo = $cookies.get('questionNo');
        var i;
        for(i = 1; i <$scope.questionNo;i++)
            {
                $rootScope.quizObj = $firebaseObject(ref.child(i));
                
                $rootScope.quizObj.$loaded(function(data){
                    
                    $scope.questionArray.push({
                        "Q": data.Q,
                        "A": data.A,
                        "questionNo": data.$id
                        
                    });
                
                    //($scope.questionArray[$scope.questionArray.length-1]);
                }); 
            };
            
        
    };
    $scope.previousQuestions();
    
    
    
    $scope.questionSelect =function(questionNo){

        questionNo = parseInt(questionNo);
        //(questionNo);
        
        $(".previousOverlay").fadeIn(500);
        //$(".question").fadeIn(500);
        var target = "."+questionNo;
        //(target);
        $(target).fadeIn(500);
        
    };
    $scope.hide = function(questionNo){
        $(".previousOverlay").fadeOut(500);
        questionNo = parseInt(questionNo);
        var target = "."+questionNo;
        //(target);
        $(target).fadeOut(500);
        $scope.errorColor = "black";
        $scope.wrongMsg = "";
        
    };
    $scope.submitAnsButNoUpdate = function(correctAnswer, givenAns, questionNo){
      //(givenAns);
        //(correctAnswer);
        questionNo = parseInt(questionNo);
        //(questionNo+1);
        $("#Q"+questionNo).attr("id")
        {
            
        }
        if(correctAnswer == givenAns)
            {
                $scope.randomPrevAns = ""
                $scope.errorColor = "black";
                $scope.wrongMsg = "Correct";
                $('#username').removeClass('animated shake');
            }
        else
            {
                $scope.errorColor = "red";            
            $scope.wrongMsg = "Incorrect Answer. Try Again";
                
            }
    };
    
    
    
    $("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});
   
    
    
    
    
    
    
    
    
});
