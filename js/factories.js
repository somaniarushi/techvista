
app.factory('functionFactory', function($firebaseAuth, $location, $firebaseObject) {
        var functionFactory = {};
        var ref = new Firebase("https://techvista.firebaseio.com");
        var authObj= $firebaseAuth(ref);                
        var uid = "";
            functionFactory.authenticate = function(username, password){

                    
                    /*-------------Authentication---------------*/
                        
                      return authObj.$authWithPassword({

                            email: username,
                            password: password


                        })};
    
            functionFactory.auth = function(){
                
                return authObj;
            };
            
    
            functionFactory.logout = function(){
                authObj.$unauth();
            
            };
            
           
            functionFactory.create = function(email, password){
        
                
                return authObj.$createUser({
                    email: email,
                    password: password
            })};
    
            functionFactory.addUserDetails = function(userData, username, name){
                
                var updateObj = {
                    Name : username,
                    questionNumber : 1,
                    parent: name,
                    type : "student"
                    
                }
                var refUpdate = ref.child("allUsers").child(userData.uid);
                refUpdate.update(updateObj);
            };
            

            
            
            return functionFactory;
    
});
