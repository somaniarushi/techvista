app.controller('settingCtrl', function($scope,$rootScope, functionFactory, $firebaseAuth,$firebaseObject)
{
    var ref = new Firebase("https://techvista.firebaseio.com");
    $scope.UserId = ref.getAuth().uid;
    $scope.email = ref.getAuth().password.email;
    
    $scope.userData = $firebaseObject(ref.child("allUsers").child($scope.UserId));
    
    $scope.userData.$loaded(function(data){
                $(".home").removeClass("home");
                $scope.updateObj = {};
                $scope.currentUsername = data.Name;
                $scope.changedNameMsg = "";
                $scope.changedPassMsg = "";
                $scope.changeToUsername = "";
                $scope.oldPass = "";
                $scope.newPass = "";
                $scope.changeUsername = function(){

                    if($scope.changeToUsername==""){
                        $scope.changedNameMsg = "Please fill username.";return;}
                    $scope.updateObj.Name = $scope.changeToUsername;
                    console.log(data);
                    $scope.refUpdate = ref.child("allUsers").child($scope.UserId);
                    $scope.refUpdate.update($scope.updateObj);
                    $scope.userData = $firebaseObject(ref.child("allUsers").child($scope.UserId));

                        $scope.userData.$loaded(function(data){

                            $scope.currentUsername = data.Name;
                            $scope.changedNameMsg = "Username Changed Sucessfully"
                        });

                };
                $scope.changePass = function(){
                    if($scope.oldPass==""&&$scope.newPass=="")
                        {
                        $scope.changedPassMsg = "Please fill above Inputs";return;     
                        }
                   if($scope.oldPass==""){
                        $scope.changedPassMsg = "Please fill Old Password.";return;}
                    if($scope.newPass==""){
                        $scope.changedPassMsg = "Please fill New Password.";return;}
                ref.changePassword({
                  email: $scope.email,
                  oldPassword: $scope.oldPass,
                  newPassword: $scope.newPass
                }, function(error) {
                  if (error) {
                        if(error.code=="INVALID_PASSWORD") {

                            $scope.changedPassMsg ="The specified user account password is incorrect.";
                        }
                        if(error.code=="INVALID_USER") {
                            $scope.changedPassMsg = "The specified user account does not exist.";
                        }

                    }
                   else {
                      console.log("Password changed successfully!");
                    $scope.changedPassMsg= "Password changed successfully!";
                  }
            });
        
                
                };
    });
    
});