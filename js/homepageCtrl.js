app.controller("homepageCtrl" , function($scope,$http){
    $scope.tileList = [
        {
            "label":"Events",
            "pic": "images/tileMenuLogo/2.png",
            "sizeId":"row2col3"
            
        },
        {
            "label":"Team",
            "pic": "images/tileMenuLogo/3.png",
            "sizeId":"row2col2"
            
        }, 
        {
            "label":"Contact",
            "pic": "images/tileMenuLogo/4.png",
            "sizeId":"row1col1"
        },
        {
            "label":"Music",
            "pic": "images/tileMenuLogo/6.png",
            "sizeId":"row1col2"
            
        }
    ];
    

   $scope.o = "okay";
    
});