app.controller('leaderboardsCtrl', function($scope,$rootScope, functionFactory, $firebaseArray, $firebaseAuth)
{
    $scope.showLoader = true;
    var ref = new Firebase("https://techvista.firebaseio.com");
    
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
       $scope.showLoader = false;
        for(i=0;i<$rootScope.allUsers.length;i++)
            {
                
                if($rootScope.allUsers[i].questionNumber >=1 && $rootScope.allUsers[i].parent != "Seth MR Jaipuria School")
                    {
                        $scope.leaderBoardArray.push($rootScope.allUsers[i]);
                    }
            }
        
    });

    
    
});