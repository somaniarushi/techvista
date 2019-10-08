var app = angular.module('routingApp', ['ngRoute','ngAnimate','ngSanitize','firebase','ngCookies']);


/*-------------Handling Routes-------------*/

app.config(function($routeProvider) { 

    $routeProvider
    .when('/', {
        templateUrl: 'html/homepage.html',
        controller:"menuCtrl",
        resolve: {
            loading: function($rootScope){
                $rootScope.$on("$routeChangeStart", function(){
                   
                    $rootScope.showLoadingIndicator = true;
                    
                });
                $rootScope.$on("$routeChangeSuccess", function(){
                    
                    $rootScope.showLoadingIndicator = false;
                    
                });
                $(".headingWrapper").show();
                $(".techvista").show();
                $(".bg-bubbles").show();
                $(".contactMenu").css("z-index","5");
                $(".contactMenu").css("opacity","1");
                $(".fixedBottom").fadeIn(500);
                $(".menu").hide();
                if($(".arrow").css("display")=='none')
                    {
                       $("body").css("overflow-y","scroll");
                        
                    }
                
            }
        }
    })
    .when('/Events', {
        
        templateUrl: 'html/events.html',
        controller: 'eventCtrl',
         resolve: {
            loading: function($rootScope){
                $rootScope.$on("$routeChangeStart", function(){
                   
                    $rootScope.showLoadingIndicator = true;
                    
                });
                $rootScope.$on("$routeChangeSuccess", function(){
                    
                    $rootScope.showLoadingIndicator = false;
                    
                });
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400); $(".secondView").animate({"top":"0px"}, 800);  
                $(".fixedBottom").fadeOut(100);
                
                
                
            }
        }
        
    })
    .when('/Team',{
        templateUrl:'html/team.html',
        controller: 'teamCtrl',
        resolve: {
            loading: function($rootScope){
                $rootScope.$on("$routeChangeStart", function(){
                   
                    $rootScope.showLoadingIndicator = true;
                    
                });
                $rootScope.$on("$routeChangeSuccess", function(){
                   
                    $rootScope.showLoadingIndicator = false;
                    
                });
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".secondView").animate({"top":"0px"}, 800);  
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400);
                $(".fixedBottom").fadeOut(100);
                
            }
        }
        
        
    })
    
    .when('/Schedule',{
        templateUrl:'html/schedule.html',
        controller: '',
        resolve: {
            loading: function($rootScope){
                $rootScope.$on("$routeChangeStart", function(){
                    
                    $rootScope.showLoadingIndicator = true;
                    
                });
                $rootScope.$on("$routeChangeSuccess", function(){
                    
                    $rootScope.showLoadingIndicator = false;
                    
                });
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".secondView").animate({"top":"0px"}, 800);  
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400);
                $(".fixedBottom").fadeOut(100);
                
            }
        }
        
    })
    .when('/Gallery',{
        templateUrl:'html/gallery.html',
        controller: 'galleryCtrl',
        resolve: {
            loading: function($rootScope){
                $rootScope.$on("$routeChangeStart", function(){
                    
                    $rootScope.showLoadingIndicator = true;
                    
                });
                $rootScope.$on("$routeChangeSuccess", function(){
                   
                    $rootScope.showLoadingIndicator = false;
                    
                });
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".secondView").animate({"top":"0px"}, 800);  
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400);
                $(".fixedBottom").fadeOut(100);
              
            } 
        }
        
    })
    .when('/Contact',{
        templateUrl:'html/contact.html',
        controller: '',
        resolve: {
            loading: function($rootScope){
                $rootScope.$on("$routeChangeStart", function(){
                    
                    $rootScope.showLoadingIndicator = true;
                    
                });
                $rootScope.$on("$routeChangeSuccess", function(){
                    
                    $rootScope.showLoadingIndicator = false;
                    
                });
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".secondView").animate({"top":"0px"}, 800);  
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400);
                $(".fixedBottom").fadeOut(100);
               
            } 
        }
        
    })
    
    
    .when('/TreasureIT', {    //homepage
        
        templateUrl: 'html/login.html',
        controller: 'loginCtrl',
         resolve: {
            loading: function($rootScope){
                $rootScope.$on("$routeChangeStart", function(){
                   
                    $rootScope.showLoadingIndicator = true;
                    
                });
                $rootScope.$on("$routeChangeSuccess", function(){
                    
                    $rootScope.showLoadingIndicator = false;
                    
                });
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400); $(".secondView").animate({"top":"0px"}, 800);  
                $(".fixedBottom").fadeOut(100);
               
                
            }
        }
    })
    .when('/Logout', {   
        
        templateUrl: 'html/login.html',
        controller: 'loginCtrl',
        resolve : {
            "logout": function($firebaseAuth,$location,$window) {
            //functionFactory.logout();
                 var ref = new Firebase("https://techvista.firebaseio.com");
                var authObj= $firebaseAuth(ref);
                authObj.$unauth();
                $window.location.href="#/TreasureIT";
                console.clear();
                
               
        
    }
        }
    })
    .when('/Profile', {    //profile
        
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
                    $location.path("/Createuser");
                }

                });
                
            
        
    },
              loading: function($rootScope){
               
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400); $(".secondView").animate({"top":"0px"}, 800);  
                $(".fixedBottom").fadeOut(100);
                  console.clear();
                
            }
            
         }
        
    })
    .when('/Questions',{
        
        templateUrl: 'html/quiz.html',
         controller: 'quiz',
        resolve: {
    
    "currentAuth" : ["functionFactory", function(functionFactory) {
        var  authObj = functionFactory.auth();
       
        return authObj.$requireAuth();
        
        }],
          loading: function($rootScope){
                
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400); $(".secondView").animate({"top":"0px"}, 800);  
                $(".fixedBottom").fadeOut(100);
              console.clear();
                
                
            }
    
       }
    })
    .when('/Guidelines',{
        
        templateUrl: 'html/guide.html',
        resolve: {
    
    "currentAuth" : ["functionFactory", function(functionFactory) {
        var  authObj = functionFactory.auth();
        
        return authObj.$requireAuth();
        
    }],
              loading: function($rootScope){
               
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400); $(".secondView").animate({"top":"0px"}, 800);  
                $(".fixedBottom").fadeOut(100);
                  console.clear();
                
                
            }
        }
    })
    .when('/Leaderboard',{
        
        templateUrl: 'html/leader.html',
        controller : "leaderboardsCtrl",
        resolve: {
        
              loading: function($rootScope){
                
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400); $(".secondView").animate({"top":"0px"}, 800);  
                $(".fixedBottom").fadeOut(100);
                  console.clear();
               
                
            }
        }
    })
    .when('/Settings',{
        
        templateUrl: 'html/settings.html',
        controller : "settingCtrl",
        resolve: {
        
    "currentAuth" : ["functionFactory", function(functionFactory) {
        var  authObj = functionFactory.auth();
        
        return authObj.$requireAuth();
        
    }],
      loading: function($rootScope){
               
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400); $(".secondView").animate({"top":"0px"}, 800);  
                $(".fixedBottom").fadeOut(100);
          console.clear();
               
                
            }
        }
    })
    .when('/Setting',{
        
        templateUrl: 'html/schoolSettings.html',
        controller : "settingCtrl",
        resolve: {
        
    "currentAuth" : ["functionFactory", function(functionFactory) {
        var  authObj = functionFactory.auth();
        
        return authObj.$requireAuth();
        
    }],
      loading: function($rootScope){
               
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400); $(".secondView").animate({"top":"0px"}, 800);  
                $(".fixedBottom").fadeOut(100);
          console.clear();
               
                
            }
        }
    })
    .when('/Createuser',{
        
        templateUrl: 'html/createUser.html',
        controller : "createUserCtrl",
        resolve: {
        
    "currentAuth" : ["functionFactory", function(functionFactory) {
        var  authObj = functionFactory.auth();
        
        return authObj.$requireAuth();
        
    }],
              loading: function($rootScope){
                
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400); $(".secondView").animate({"top":"0px"}, 800);  
                $(".fixedBottom").fadeOut(100);
                  console.clear();
              
                
            }
        }
    })
      .when('/CreateSchoolUser',{
        
        templateUrl: 'html/createSchoolUser.html',
        controller : "createUserCtrl",
        resolve: {
        
              loading: function($rootScope){
                
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400); $(".secondView").animate({"top":"0px"}, 800);  
                $(".fixedBottom").fadeOut(100);
                console.clear();
              
                
            }
        }
    })
    
    .otherwise({
        
        templateUrl: 'html/pageNotFound.html',
         resolve: {
            loading: function($rootScope){
                
                $(".contactMenu").css("opacity","0");
                $(".contactMenu").css("z-index","-1");
                $(".menu").fadeIn(100);
                $("body").css("overflow-y","scroll");
                $(".headingWrapper").hide();
                $(".bg-bubbles").hide();
                $("body").css("background-color","#18092b");
                $(".secondView").animate({"top":"0px"}, 800);  
                $(".arrow").hide();
                $(".techvista").animate({"top":"8%"},400);
                $(".fixedBottom").fadeOut(100);
                console.clear();
            } 
        }
        
       
    });
    
});
app.run(['$rootScope','$location', function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(event, next, previous, error){
        
        if(error = 'AUTH_REQUIRED'){
            
            $("#quizMenu").hide();
            $("#mainMenu").show();
            $location.path("/TreasureIT");
        }
    })
    
}]);