$(function() {
    
    
  const $polygons1 = $('.left > polygon');

  const ANIM1 = {
    duration: 0.7,
    stagger: 0.009,
    
    from: {
      opacity: 0,
      scale: 0,
      transformOrigin: 'center center',
      force3D: true
    },
        
    to: {
      opacity: 1,
      scale: 1,
      ease: Elastic.easeInOut,
      force3D: true
    }
  };
  
  const timeline1 = new TimelineMax({
    delay: 0,
    repeat: 0,
    //repeatDelay: 0.5,
    //yoyo: true
  });
    
    
    
    
    
      const $polygons2 = $('.right > polygon');

  const ANIM2 = {
    duration: 0.7,
    stagger: 0.009,
    
    from: {
      opacity: 0,
      scale: 0,
      transformOrigin: 'center center',
      force3D: true
    },
        
    to: {
      opacity: 1,
      scale: 1,
      ease: Elastic.easeInOut,
      force3D: true
    }
  };
  
  const timeline2 = new TimelineMax({
    delay: 0,
    repeat: 0,
    //repeatDelay: 0.5,
    //yoyo: true
  });
    

  timeline1.staggerFromTo($polygons1, ANIM1.duration, ANIM1.from, ANIM1.to, ANIM1.stagger, 0);
  timeline2.staggerFromTo($polygons2, ANIM2.duration, ANIM2.from, ANIM2.to, ANIM2.stagger, 0);
  //TweenMax.staggerFromTo(polygons, ANIM.duration, ANIM.from, ANIM.to, ANIM.stagger);
  
  $('body').addClass('loaded');
  setTimeout(function(){  
    $('.techvistaHeading').show();
  }, 2000);
  
  
 
  
  
    
    $(".arrow").on("click", function(){
     $(".secondView").animate({"top":"0px"}, 800);  
     $(".techvista").animate({"top":"8%"},400, function(){
       
        $("body").css("overflow-y","scroll");
        
        
        $(".arrow").hide();
         $(".footer").show();
     })
     
        
    });
    
     $(".secondView").waypoint(function() {
        $('.menuTiles').addClass('fadeInLeft');
    }, { offset: '100%'});
    
    
    $(".menuTiles").on("click", function(){
        
    })
    
//    menuWrapper
    
    var height = $(".view").css("height");
    
    $(".secondView").css("height",height);
    var show1 = setInterval(function(){ 
        if($("#last").css("opacity")==1)
        {
            // Any Elements to be displayed after animation
            $(".techvistaHeading").animate({"margin-left":"-30px"},300,function(){
                $("body").css("background-color","#18092b");
                $(".loaderSvg").fadeIn(500);  
                $(".fixedBottom").fadeIn(500);
                $(".fixedBottom").css("display","inline-block");
            });
            
            
            
            clearInterval(show1);
        }
    }, 500);
     var show = setInterval(function(){ 
        if($("#first").css("opacity")==1)
        {
            // Any Elements to be displayed after animation
            $(".mainLoad").hide();
            
            
            
            clearInterval(show);
        }
    }, 500);
    
    
// Reload
    
    
    window.onbeforeunload = function(event)
    {
        $(window).scrollTop(0);
        $("body").css("overflow-y","scroll");
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
// Contact
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    });