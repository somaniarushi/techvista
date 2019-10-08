app.controller('createUserCtrl', function(functionFactory, $scope,$rootScope, functionFactory, $firebaseArray,$firebaseObject, $firebaseAuth)
{
    
        var ref = new Firebase("https://techvista.firebaseio.com");
        $scope.UserId = ref.getAuth().uid;
        var updateObj ={};
        $scope.successMsg = "";
    console.log($scope.UserId);
        $scope.userData = $firebaseObject(ref.child("allUsers").child($scope.UserId));
    
        $scope.userData.$loaded(function(data){
            console.log($scope.userData);
            
        $(".home").removeClass("home");
            console.log(data);
        $scope.create = function(){
            console.log(data.Name);
            var result= functionFactory.create($scope.email, $scope.password);
            console.log(result);
            result.then(function(userData) {
                $scope.successMsg ="User Created";
                console.log("Successfully created user account with uid:", userData.uid);
                
                updateObj = {
                    "Name": $scope.username,
                    "type": "student",
                    "questionNumber": 1,
                    "parent": data.Name
                    
                } 
                $scope.refUpdate = ref.child("allUsers").child(userData.uid);
                $scope.refUpdate.update(updateObj);
           
            }, function(error){
                console.log(error.code);
                if(error.code=="EMAIL_TAKEN")
                    {
                
                        $scope.successMsg = "A User Id already exists with this email";
                    }
                if(error.code=="INVALID_EMAIL")
                    {
                        $scope.successMsg = "Invalid email";
                    }
                
                
            })};
 
        });
    
});