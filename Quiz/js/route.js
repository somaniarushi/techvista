var app = angular.module('quizApp', ['ngRoute','firebase','ngCookies']);

/*-------------Handling Routes-------------*/

app.config(function($routeProvider) { 

    $routeProvider
    .when('/login', {    //homepage
        
        templateUrl: 'html/login.html',
        controller: 'loginCtrl'
    })
    .when('/logout', {   
        
        templateUrl: 'html/login.html',
        controller: 'loginCtrl',
        resolve : {
            "logout": ["functionFactory", function(functionFactory) {
            functionFactory.logout();
                $location.path = '/login';
        
    }]
        }
    })
    .when('/', {    //profile
        
        templateUrl: 'html/home.html',
          controller: 'home',
        resolve: {
    
    "currentAuth" : ["functionFactory", function(functionFactory) {
        var  authObj = functionFactory.auth();
        
        return authObj.$requireAuth();
        
    }],
    "checkType" : function($location,$firebaseObject, $firebaseAuth) {
        
    var ref = new Firebase("https://techvista.firebaseio.com");
    var UserId = ref.getAuth().uid;
    var userData = $firebaseObject(ref.child("allUsers").child(UserId));

                userData.$loaded(function(data){
                
                if(data.type=="institute"){
                    $location.path("/createuser");
                }

                });
                
            
        
    }
         }
        
    })
    .when('/quiz',{
        
        templateUrl: 'html/quiz.html',
         controller: 'quiz',
        resolve: {
    
    "currentAuth" : ["functionFactory", function(functionFactory) {
        var  authObj = functionFactory.auth();
       
        return authObj.$requireAuth();
        
        }]
    
       }
    })
    .when('/guidelines',{
        
        templateUrl: 'html/guide.html',
        resolve: {
    
    "currentAuth" : ["functionFactory", function(functionFactory) {
        var  authObj = functionFactory.auth();
        
        return authObj.$requireAuth();
        
    }]
        }
    })
    .when('/leaderboards',{
        
        templateUrl: 'html/leader.html',
        controller : "leaderboardsCtrl",
        resolve: {
        
    "currentAuth" : ["functionFactory", function(functionFactory) {
        var  authObj = functionFactory.auth();
        
        return authObj.$requireAuth();
        
    }]
        }
    })
    .when('/settings',{
        
        templateUrl: 'html/settings.html',
        controller : "settingCtrl",
        resolve: {
        
    "currentAuth" : ["functionFactory", function(functionFactory) {
        var  authObj = functionFactory.auth();
        
        return authObj.$requireAuth();
        
    }]
        }
    })
    .when('/createuser',{
        
        templateUrl: 'html/createUser.html',
        controller : "createUserCtrl",
        resolve: {
        
    "currentAuth" : ["functionFactory", function(functionFactory) {
        var  authObj = functionFactory.auth();
        
        return authObj.$requireAuth();
        
    }]
        }
    })
    
    .otherwise({
        
        templateUrl: 'html/pageNotFound.html'
       
    });
    
});
app.run(['$rootScope','$location', function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(event, next, previous, error){
        console.log(error);
        if(error = 'AUTH_REQUIRED'){
            console.log(error);
            $location.path("/login");
        }
    })
    
}]);
