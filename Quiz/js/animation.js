/*----------------------Left Nav Animation-----------------------*/
            
            $(".nav").on("mouseover", function(){
               $(this).animate({"margin-left":"200px"}, 200);
                $(this).on("mouseleave", function(){
                    $(this).animate({"margin-left":"5px"}, 200);
                });
            });
           