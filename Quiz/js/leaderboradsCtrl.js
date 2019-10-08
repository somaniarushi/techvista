app.controller('leaderboardsCtrl', function($scope,$rootScope, functionFactory, $firebaseArray, $firebaseAuth)
{
    
    var ref = new Firebase("https://techvista.firebaseio.com");
    $scope.UserId = ref.getAuth().uid;
    $scope.filter = function(p){
    if (p.state === null){
        return false;
    } else{
        return;
    }
};
    $rootScope.allUsers = $firebaseArray(ref.child("allUsers"));
    $scope.leaderBoardArray = [];
    $rootScope.allUsers.$loaded(function(data){
       
        for(i=0;i<$rootScope.allUsers.length;i++)
            {
                
                if($rootScope.allUsers[i].questionNumber >=1)
                    {
                        $scope.leaderBoardArray.push($rootScope.allUsers[i]);
                        
                    }
                
            }

        


        $(".home").removeClass("home");
    
        
    });
    
    
});