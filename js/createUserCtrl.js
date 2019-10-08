app.controller('createUserCtrl', function(functionFactory, $scope,$rootScope, functionFactory, $firebaseArray,$firebaseObject, $firebaseAuth,$timeout)
{
    
        var ref = new Firebase("https://techvista.firebaseio.com");
        $scope.UserId = ref.getAuth().uid;
        var updateObj ={};
        $scope.alert = "";
        $scope.errorColor = "";
        $scope.loginLoader = false;
        $scope.password = "iowenq21nkw";
        
        $scope.userData = $firebaseObject(ref.child("allUsers").child($scope.UserId));
    
        $scope.userData.$loaded(function(data){
            
            
        $(".home").removeClass("home");
            $scope.name = data.Name;
        $scope.create = function(){
            $scope.loginLoader = true;
            var result= functionFactory.create($scope.email, $scope.password);
            
            result.then(function(userData) {
                $scope.loginLoader = false;
                $scope.alert = "User Created. Account details sent to the mentioned email id.";
                $timeout(function () { $scope.alert = ""; }, 2000);
                $scope.errorColor = "#00796B";
                ref.resetPassword({
                email : $scope.email
                }, function(error) {
                    
                    if (error === null) {
                    
                    $scope.errorColor = "#00796B";
                    } 
                    else {
                    
                    $scope.errorColor = "#cc0000";
                    }
                });
                
                if(data.Name=="Admin")
                    {
                        updateObj = {
                    "Name": $scope.username,
                    "type": "institute"
                    }
                       
                    }
                else{
                    
                updateObj = {
                    "Name": $scope.username,
                    "type": "student",
                    "questionNumber": 1,
                    "parent": data.Name
                    
                }
                }
                $scope.refUpdate = ref.child("allUsers").child(userData.uid);
                $scope.refUpdate.update(updateObj);
                $scope.picUpdate = ref.child("userPics").child(userData.uid);
                $scope.picUpdate.update({"pic":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHDxAPBxINFhEQDw0OFRMOEBAREA8PFREXGBgSExUYHSghGRslGxYXITEhJjUrLi4vGB8zODMsNygtLisBCgoKDg0OFxAQGyslIB8uLC0tKzctNysuKysrLTUrLS03LS0tLSstLSstNzgvKystLS4tKysrLSstLSstMi0rK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYEBQcDAv/EADkQAQACAQECCwcCBAcAAAAAAAABAgMEBREGITEyQVFhcXKRsRIiMzSBobJS0RRDYsETQlNzgpKi/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAQDAgEF/8QAIBEBAAIBBAIDAAAAAAAAAAAAAAECAwQRITEyQRJRcf/aAAwDAQACEQMRAD8AvAD7r5oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMbU6/S6X496xPVv3z5Qwb8I9BXm/wCLPdWI9Zh1FLT1DyZiG3Gnrwk0M8sZY76x/aWbptp6LU8WK9d/VPuz5STS0dwfKGWA5egAAAAAAAAAAAAAAAAAAAAPLVajHpaWvmn3ax59kdoPnV6rDo6zfPO6POZnqiOlV9o7c1Oq3xi9ynVXnT3z+zD2hrcuvvNsv0r0Vjqj92MtxYIrzbtla+6EgocCOVIDYbP2xqtFuiJ9qn6bzv4v6Z6Fq2fr8Gvr7WGeOOWs86sqK9dLqMulvF8E7pjymOqeuGGTDFuY7dVvML+MbZ2tx6/HF8fdMb981t1MlDMbTs2AAAAAAAAAAAAAAAAAAFW4T62cuSMVJ92nHPbef2haL2ikTa3JETM90Q59lyWzWm1+W0zae+ZUaeu9t/pxeeNnyAtZAAAAAANlwf1s6TNEWn3Mm6k9k9E+fquTnfcvmz838Rix3nltSsz37uP7o9TXmJaY59MgBM0AAAAAAAAAAAAAAAAYu1bTXBlmP9O/ooq+bRpOTDliOnHf0ULlV6bqWeRICpmAAAAAALjwct7Wmp2TeP8A1KnLnwfp7Gmx9vtW85lPqfGHePtsQETUAAAAAAAAAAAAAAAA71C12nnSZL45/wAtp3eHo+y+tDwn0E5IjNijjrG626OWu/in6b22C/xtt9uLxvCsgL2QAAAAAD6x0tltFactpisd8r9gxRgpWleSta18o3K5wY0E3t/j5I4q74rv6bbuOfos6LUX3naPTWkcbgCd2AAAAAAAAAAAAAAAAImInilICo7b2RbRzN8Eb8c8f+32T2drUuiTETytHtHg9izb7aOYrP6Z5k93Uqx5/VmdqfSrjK1OzdZpfjUtu6496POGIqiYnpnskRvhkafQ6rU/Apee3dujzniJmI7GO2Oydl5NoW3zvjHHLbr7K9rZ6Dg5Ebra6d/9FZ4v+U9P0b+lK44itIiIiN0RHFEQmyZ46q7rT7Rix0w1iuKIiIjdER0Q+wSNQAAAAAAAAAAAAAAAAAAAACd0cv3Aed8GG/PrSfFWs+r4vrdLj5+THHfaHlO1NBH83H5vYifRwyK6fBTmUxx3UrHpD0YcbV0E/wA3H5vum0NHfm5MX/aCYsbwyRFL1vzJie6YlLx6ADwAAAAAAAAAAAAAAAAHhq9Vh0dfa1ExEfeZ6ojpVjaG3dRqd8YN9Kdk+/Mds9H0d0x2v08m0Qses2lpNH8e0b/0x71vKGm1PCa3JpaR35J3/aFfnj5RVXT1jvlnN5Z2fbGvzc7JaOym6vowr2tk48kzPimZ9UDaKxHUON0RxciQdAhICI4uOPsy8O0tbg+Hkyd0z7UfdijyYiezdu9Pwk1NPmK0tHXG+tv2bbSbc0Wp4pn2bdV+KPpPIpwxtgpLqLy6JExPIKPodp6rQ/Ctvr+m2+a+XR9Fo2ZtXBtCN1fdv00mePvrPTCa+G1GkWiWwAZOgAAAAAAAAAB4a7V49FScmXkjojlmeiIe6q8KdTOTLGOOSkRM+K0b/Tc7x0+dtnlp2hrNbrM2tvN889kRHJWOqHgD6MREcQwAHoAAAAAAAAAAJpe1JiaTMTE74mOWJQPBcdh7T/j6bsvxKRG/+qP1R/ds1F2VqJ0ubHaOT2orPhtO6V6QZqfG3Dak7wAMnQAAAAAAAApW3/msvfT8KrqpW3/msvfT8KqNN5T+OMnTAAWsgAAAAAAAAAAAAAE4+dXxV9XQ3PMfOr4q+roaPU9w0xgCZoAAAAAAAAKVt/5rL30/Cq6qVt/5rL30/CqjTeU/jjJ0wAFrIAAAAAAAAAAAAABOPnV8VfV0NzzHzq+Kvq6Gk1PppjAErQAAAAAAAAUrb/zWXvp+FV1Urb/zWXvp+FVGm8p/HGTpgALWQAAAAAAAAAAAAACcfOr4q+robnmPnV8VfV0NJqfTTGAJWgAAAAAAAApW3/msvfT8KpFGm8p/HGTprwFrIAAAAAAAAAAAAABOPnV8VfV0MEmp9NMYAlaAAAAP/9k="})
           
            }, function(error){
                $scope.loginLoader = false;
                $scope.errorColor = "#cc0000";
                if(error.code=="EMAIL_TAKEN")
                    {
                
                        $scope.alert = "An Account already exists with this email.";
                        $timeout(function () { $scope.alert = ""; }, 2000);
                    }
                if(error.code=="INVALID_EMAIL")
                    {
                        $scope.alert = "Invalid email.";
                        $timeout(function () { $scope.alert = ""; }, 2000);
                    }
                
                
            })
            
        
        };
 
        });
    
});