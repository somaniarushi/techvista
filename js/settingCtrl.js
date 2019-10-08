app.controller('settingCtrl', function($scope, $rootScope, functionFactory, $firebaseAuth, $firebaseObject,$timeout)
{
    $scope.showdpLoader = true;
    $scope.showLoader = true;
    var ref = new Firebase("https://techvista.firebaseio.com");
    $scope.UserId = ref.getAuth().uid;
    $scope.email = ref.getAuth().password.email;
    $rootScope.userPic = $firebaseObject(ref.child("userPics").child($scope.UserId));
    
    $rootScope.userPic.$loaded(function(data){
        $scope.pic = data.pic;       
        $scope.showdpLoader = false;
    });
    
    $scope.userData = $firebaseObject(ref.child("allUsers").child($scope.UserId));
    
    $scope.userData.$loaded(function(data){
                $(".home").removeClass("home");
                $scope.showLoader = false;
                $scope.updateObj = {};
                $scope.currentUsername = data.Name;
                $scope.alert = "";
                $scope.changeToUsername = "";
                $scope.oldPass = "";
                $scope.newPass = "";
                $scope.changedPic = "";
        
        // Uploading Image
        
         File.prototype.convertToBase64 = function(callback){
            var reader = new FileReader();
            reader.onload = function(e) {
                 callback(e.target.result)
            };
            reader.onerror = function(e) {
                 callback(null);
            };        
            reader.readAsDataURL(this);
    };

    $("#img").on('change',function(){
      var selectedFile = this.files[0];
        
      selectedFile.convertToBase64(function(base64){
           $scope.changedPic = base64;
      }) 
    });
        
        
        $scope.changePic = function(){
          if($scope.changedPic==""){
            $scope.alert = "Please choose a file.";
            $timeout(function () { $scope.alert = ""; }, 2000);return;
          }
         $scope.updateObj={
             "pic":$scope.changedPic
         };
                    
                    $scope.refUpdate = ref.child("userPics").child($scope.UserId);
                    $scope.refUpdate.update($scope.updateObj);
                    $scope.userData = $firebaseObject(ref.child("allUsers").child($scope.UserId));

                        $scope.userData.$loaded(function(data){

                            
                            $scope.alert = "Profile Picture Changed Sucessfully"
                            $timeout(function () { $scope.alert = ""; }, 2000);
                        });
            
            
        };
               
                $scope.changeUsername = function(){
                    
                    if($scope.changeToUsername==""){
                        $scope.alert = "Please fill username.";
                        $timeout(function () { $scope.alert = ""; }, 2000);
                        return;
                    }
                    $scope.updateObj.Name = $scope.changeToUsername;
                    
                    $scope.refUpdate = ref.child("allUsers").child($scope.UserId);
                    $scope.refUpdate.update($scope.updateObj);
                    $scope.userData = $firebaseObject(ref.child("allUsers").child($scope.UserId));

                        $scope.userData.$loaded(function(data){

                            $scope.currentUsername = data.Name;
                            $scope.alert = "Username Changed Sucessfully"
                            $timeout(function () { $scope.alert = ""; }, 2000);
                        });

                };
                $scope.changePass = function(){
                    if($scope.oldPass=="" && $scope.newPass==""){
                        $scope.alert = "Please fill the password inputs.";
                        $timeout(function () { $scope.alert = ""; }, 2000);
                        return;
                    }
                   if($scope.oldPass==""){
                        $scope.alert = "Please fill Old Password.";
                        $timeout(function () { $scope.alert = ""; }, 2000);
                        return;
                    }
                    if($scope.newPass==""){
                        $scope.alert = "Please fill New Password.";
                        $timeout(function () { $scope.alert = ""; }, 2000);
                        return;
                    }
                ref.changePassword({
                  email: $scope.email,
                  oldPassword: $scope.oldPass,
                  newPassword: $scope.newPass
                }, function(error) {
                  if (error) {
                      if(error.code=="INVALID_PASSWORD")
                          {
                          $(".invalidPass").show();
                            $timeout(function () { $(".invalidPass").hide(300); }, 2000);
                        }
                      else
                          {
                        $(".sucessMsg").show();
                       $timeout(function () { $(".sucessMsg").hide(300); }, 2000);       
                          }
                  }
                   else {
                       $(".sucessMsg").show();
                       $timeout(function () { $(".sucessMsg").hide(300); }, 2000);
                   }
            });
        
                
                };
    });
    
});