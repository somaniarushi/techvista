app.controller("menuCtrl", function($scope, $http, $location, $rootScope){
    $scope.showContact = true;
    $scope.showMenu = false;
    $scope.showIcons = false;
    $scope.clickedHome = false;
    $scope.showMenuAnimation = false;
    $scope.searchAndVoice = false;
    $scope.showVoicePrompt = false;
    $scope.showSearchBox = false;
    $scope.expand= true;
    $scope.musicOrSearch = false;
    $scope.showMusicList = false;
   
   
    // Home Menu Tiles
    
     $rootScope.tileList = [
        {
            "label":"Events",
            "link":"Events",
            "pic": "images/tileMenuLogo/2.png",
            "sizeId":"row2col3"
            
        },
        {
            "label":"Team",
            "link":"Team",
            "pic": "images/tileMenuLogo/3.png",
            "sizeId":"row2col2"
            
        }, 
        {
            "label":"Schedule",
            "link":"Schedule",
            "pic": "images/tileMenuLogo/6.png",
            "sizeId":"row1col2"
            
        },
        {
            "label":"Contact",
            "link":"Contact",
            "pic": "images/tileMenuLogo/4.png",
            "sizeId":"row1col1"
        },
        {
            "label":"Treasure I.T. : Online Quiz",
            "link":"TreasureIT",
            "pic": "images/tileMenuLogo/4.png",
            "sizeId":"row1col1"
        }
    ];
    $scope.showContact = function(method){
        $scope.show = method;
        
        $scope.showContact = true;
    }
    $scope.contact = [
        {
            "map":'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6058388386923!2d81.00921661547433!3d26.852486369143637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2e87a8c13dd%3A0x8c7fded4d6f6b6ed!2sSeth+M.+R.+Jaipuria+School%2CFaizabad!5e0!3m2!1sen!2sin!4v1469615184792" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
        },
        {
            "call":'<h2>School Administration:</h2><p>+91 522 2391660</p><h2>Teacher Co-ordinator:</h2><p>+91 9935459283<br>( Arun Kumar Singh )</p><h2>Student Co-ordinator:</h2><p>+91 8604091992<br>( Kanishk Singh )</p>'
        },
        {
            "email":"<p>techvista@jaipuria.com</p><p>contact@techvista.com</p>"
        }
    ]
    
    
    // Left Menu Pane
    $rootScope.contentList = [];
     $scope.menuList = [];
    var menuList = [
        {
            "label":"",
            "ico": "partials/buttons/homeIco.html",
            
        },
        {
            "label":"Events",
            "ico": "partials/buttons/eventIco.html"
            
        },
        {
            "label":"Team",
            "ico": "partials/buttons/teamIco.html"
            
        }, 
        
        {
            "label":"Schedule",
            "ico": "partials/buttons/scheduleIco.html"
            
        },
         {
            "label":"Contact",
            "ico": "partials/buttons/contactIco.html"
            
        },
          {
            "label":"TreasureIT",
            "ico": "partials/buttons/quizIco.html",
            
        }
    ];
     var treasureITMenuList = [
        {
            "label":"",
            "ico": "partials/buttons/homeIco.html",
            
        },
        {
            "label":"Events",
            "ico": "partials/buttons/eventIco.html"
            
        },
        {
            "label":"Team",
            "ico": "partials/buttons/teamIco.html"
            
        }, 
        
        {
            "label":"Schedule",
            "ico": "partials/buttons/scheduleIco.html"
            
        },
         {
            "label":"Contact",
            "ico": "partials/buttons/contactIco.html"
            
        },
          {
            "label":"TreasureIT",
            "ico": "partials/buttons/quizIco.html",
            
        },
          {
            "label":"Leaderboard",
            "ico": "partials/buttons/leaderboardIco.html"
            
        },
    ];
    
    //Menu for quiz Site
    var quizCreateMenuList = [
         {
            "label":"Createuser",
            "ico": "partials/buttons/profileIco.html"
            
        },
         {
            "label":"Setting",
            "ico": "partials/buttons/settingIco.html"
            
        },
        {
            "label":"Logout",
            "ico": "partials/buttons/logoutIco.html"
            
        }
    ];
    var quizMenuList = [
         {
            "label":"Profile",
            "ico": "partials/buttons/profileIco.html"
            
        },
        {
            "label":"Questions",
            "ico": "partials/buttons/questionIco.html",
            
        },
        {
            "label":"Leaderboard",
            "ico": "partials/buttons/leaderboardIco.html"
            
        },
        {
            "label":"Guidelines",
            "ico": "partials/buttons/guideIco.html"
            
        },
        {
            "label":"Settings",
            "ico": "partials/buttons/settingIco.html"
            
        },
         {
            "label":"Logout",
            "ico": "partials/buttons/logoutIco.html"
            
        }
    ];
     $scope.$on('$routeChangeStart', function(event,current,previous) {
         var path = current.originalPath;
         
         if(path=="/Profile" || path=="/Questions" || path=="/Settings" || path=="/Guidelines" || path=="/Leaderboard")
             {
                 $scope.menuList = quizMenuList;
                 
             }
         else if(path=="/Createuser" || path=="/CreateSchoolUser" || path=="/Setting")
             {
                 $scope.menuList = quizCreateMenuList;
             }
         else
             {
                 $scope.menuList = menuList;
                 
             }
     });
    $scope.menuToggle = function(label){
        
            
            $scope.showMenuAnimation = true;
            
            
            $scope.showMenu = !$scope.showMenu;
            $scope.clickIcon(label);
        
    };
    
    $scope.expandMenu = function(expand){
        
        
        var width = $(".menuIcons").width();
        $scope.expand = !$scope.expand;
        
    
        $scope.showMenuAnimation = false;
        if(expand==true){
            $(".menu").css({"overflow":"visible"});
            $(".menuIcons").animate({"width":230},300,"swing");
            $(".menuLabel").show(0);
        }
        else{
             $(".menuIcons").animate({"width":60},300,"swing",function(){
                $(".menu").css({"overflow":"hidden"});
            });
            
            $(".menuLabel").hide(0);
        }
    };
    $scope.clickIcon = function(label){
        
        
        $scope.clickedHome = true;
        
        if(label=="expand") 
        {
            $scope.expandMenu($scope.expand);
            
        }    
       
        else
            {
            $scope.expand = true;
            $(".menuIcons").animate({"width":40},300);
            $(".menuLabel").hide(0);
            $scope.showMusic = false;
            
         if(label!="Home")
        {
            $(".menu").animate({"opacity":1});    
        }
        else
        {
            $(".menu").animate({"opacity":0});    
        }
                
                       
        
        /*---------------Add Pages---------------------*/
        var path = "/"+label;
        $location.path(path);
            }
            
    };
  
 
});