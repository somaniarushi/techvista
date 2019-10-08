

app.controller("teamCtrl", function($scope, $location, $http)
{
      $(".view").show();
      $scope.show = false;
      $scope.showRight = false;
        
      $scope.members = [
            {
              "name":"Arushi Somani",
              "post":"President",
              "pic":"images/team/Arushi Profile.jpg",
              "data": "Error 404. "    
          },
           {
              "name":"Kushagra Goyal",
              "post":"Director of Communication",
              "pic":"images/team/Kushagra Profile.jpg",
              "data": "Kushagra is a twelfth grader pursuing science with computer applications and regrets. A Queen fan, you can often see him break out into Bohemian Rhapsody at a moment's notice. However, his one true love remains 90's Hindi music, which he constantly obsesses over. Having achieved a doctorate in handling people, anyone talking to him immediately feels the warmth in him. A hard worker at heart, you will probably see him running around throughout the day (because class ain't good enough). Find him, if you can, for we certainly can't."
          },
           {
              "name":"Anusha Chitranshi",
              "post":"Coordinator: Hamsterjam",
              "pic":"images/team/Anusha Profile.jpg",
               "data":"A gem of a person, Anusha is a twelfth grader pursuing the science stream with computers, a choice she regrets everyday. Known for her mega-watt smile, she loves music, dancing, painting, puzzles and sleeping (not in that order). An avid writer and reader, anyone dumb enough to go against her in a battle of wits would be crushed immediately. She hopes to make the jamming session a memorable experience for all the participants!"

           },
         
           {
              "name":"Aniket Chauhaan",
              "post":"Coordinator: Clash Of Titans",
              "pic":"../images/team/Aniket Profile.jpg",
              "data":"Aniket is a twelfth grader pursuing Humanities, and is our dear Head Boy. Authorative and firm, his dry wit is unparelleled, and sends us into peals of laughter more often than not. He loves 'Suits' and constantly tries to emmulate Harvey Spectre. A total food lover, he'd probably rattle off a long list of restaurants if you ask him for suggestions. A hard line debator, anyone going up against him is going to be crushed (he might just sit on you). Beware, fellow debators. This is one terrifying man."
          },
           {
              "name":"Vibhor Chandra",
              "post":"Coordinator: Clash Of Titans",
              "pic":"../images/team/vibhor Profile.jpg",
              "data":"Vibhor is a twelfth grade pursuing Humanities. A man of his word, Vibhor is always ready with a cutting remark for every situations. Charming and eloquent, his sharp wit sterrifies everyone. A believer in the communist manifesto, do not (and we repeat, DO NOT) criticize it in front of him-- unless you want a two and a half hour lecture about why you're wrong, that is. Don't try to fool this guy, because you knows so much more than he lets on. He hopes to make your debating experience better than ever before-- and he's going to make sure he succeeds." 
              
          },
           {
              "name":"Shivi Chola",
              "post":"Coordinator: Clash Of Titans",
              "pic":"../images/team/Shivi Profile.jpg",
              "data":"Shivi is a twelfth grader pursuing Commerce with Maths. A happy-go-lucky person, her hair scream just about as much as she does. She is a dramatist (and dramatic) and an eloqutionist. She holds the capability to rejoice in the darkest of situations and make others smile when no one wishes to. Beware of her jokes, we hear that they're deadly (unfortunately, we have no victims left alive to confirm). A CLAT aspirant, her intelligence is beyond reproach. She hopes to make TechVista an event to remember, and is going to make sure that happens."
              
          },
           {
              "name":"Pragyanshi Tewari",
              "post":"Coordinator: HiveMind",
              "pic":"../images/team/Pragyanshi Profile.jpg",
              "data":"Adjectives fails to suffice for this amazing person, who is seemingly a human, but has capabilities much beyond that. She can blow your mind with her intellectual stories and facts, and yet make you roll your eyes with her jokes at the very next instant. A biology student, she is, however, known for her incredibly jovial nature. A NEET aspirant, she works impossibly hard to get what she wants, and always (ALWAYS) achieves what she wished to. She also happens to be our Vice Head Girl, and we love her for that. Words whimper in her presence, and so, we think, should you."
              
          },
           {
              "name":"Shivika Singh",
              "post":"Coordinator: Hermes Troops",
              "pic":"../images/team/Shivika Profile.jpg",
              "data":"Shivika is a twelfth grader pursuing Humanities with Economics. Drama personified, she is a literary wizard widely known for her oratory skills. Her interests (and excellence) range from literature to sports to music. Having headed the press corps at various events across the city, Shivika sure will make your TechVista experience one of a kind."
              
          },
            
           {
              "name":"Shambhavi Singh",
              "post":"Coordinator: Hermes Troops",
              "pic":"../images/team/Shambhavi Profile.jpg",
              "data":"Shambhavi Singh is a 12th grader pursuing  humanities with economics. She's a Jaipurian and hence her tastes are simple, being easily satisfied with just the best. Being a DC fan, she can often be seen criticizing Marvel. She is a 'Suits' fan and dreams to emulate Jessica Pearson. Apart from listening to country music, she's an Indie pop lover. Having won many awards, Shambhavi excels in her photography skills. Her taste in photography is impeccable. She is very technical with cameras and knows how to capture the best moments. Shambhavi looks forward to providing a great experience to all photographers in Shuttersberg at TechVista'18."

              
          },   
           {
              "name":"Pratul Chaturvedi",
              "post":"Coordinator: Maze Runner",
              "pic":"../images/team/Pratul Profile.jpg",
              "data":"Pratul is a twelfth grader pursuing Humanities with computers and mathematics. Needless to say, he is one strange gentleman. With his keen interest in world politics, he wishes to pursue foreign relations as his career. A national-level quizzer, his knowlegde in the field is unparalleled. Kind and confident, he is often defined as a marshmellow who reads a lot. After everything, the only thing which you need to know about Pratul is that he will love you if you get him food. Be prepared for a whole new level of questions you never even thought about, because that is precisely what Pratul Chaturvedi is."
              
          },   
          
          {
              "name":"Madhav Agarwal",
              "post":"Coordinator: BITSKrieg",
              "pic":"../images/team/Madhav Profile.jpg",
              "data":"Madhav is a twelfth grader pursuing Humanities with economics and mathematics. An incredibly bright individual, he is one of the smartest people we have ever known. A TCS IT Wiz semifinalist, it's easy to say that he knows his 'tech'. An information monger, you'll often find him pondering over a new piece of information. If you get the opportunity to talk to him, tell him that Vivo isn't the same as Apple (because it's really not, Madhav) and console him over Apple's one trillion stock market price (it'll be alright, Madhav). Be cautious before talking to him, though, for he almost certainly knows more about what you're saying than you do."
          },
           
           {
              "name":"Anand Prakash Gupta",
              "post":"Coordinator: CodeX",
              "pic":"../images/team/Anand Profile.jpg",
              "data":"Anand is a twelfth grader pursuing the science stream. An ideal student, he's a cricket fan at heart. He is an avid PUBG enthusiast. He is a JEE aspirant and loves to study physics. An absolute technical wizard, he made it to the National Round of the International Robot Olympiad. A programmer at heart, he will test your coding skills to the extreme."
          },
            {
              "name":"Kushal Khare",
              "post":"Coordinator: Weave A Web",
              "pic":"../images/team/Kushal Profile.jpg",
              "data":"Kushal is a twelfth grader pursuing the science stream along with the love of his life, computer science. An absolute technical wizard, his web designing skills are an asset to the institution. The seventeen year old has already designed two major successful websites for the school, and is also the designer of the TechVista website. This computer genius is an aspiring IITian and hopes to crack JEE before his head explodes. A believer of actions speaking louder than words, Kushal hopes to make TechVista a rich experience for all particiants."
          },
           {
              "name":"Mohitaksh Srivastava",
              "post":"Coordinator: Brain Bug",
              "pic":"../images/team/Mohitaksh Profile.jpg",
              "data":"If we are asked to sum him up in one word, it’ll be “UNIQUE”. Shikhar Vaish is one of the smartest coder for his age, and is currently working on his very own JAVA IDE because apparently all the other IDEs presented him with a lot while all he wanted was a simple one. This tells a lot about SVR8(we don’t even know why we call him that). A simpleton, he’ll always find the simplest and the efficient way to do things, be it day-to-day chores, or his JAVA codes. Having served as the school’s Technical Vice-Captain, this guy has a quotient for tech that is rare to find within others. The exceptional coder that he is, expect him to test you in such a way that it requires you to use all your brains and come up with the best solutions."
          },
           {
              "name":"Pratham Tatraiya",
              "post":"Coordinator: Metamorphosis",
              "pic":"../images/team/Pratham Profile.jpg",
              "data":"Pratham is a twelfth grader pursuing science with computers. A master at Photoshop, send him an image and he'll happily make it beautiful (or distort it beyond belief, depending on the kind og relation you have with him, really). He dreams of becoming a big Youtube personality with millions of followers (we're sure it'll happen one day). A Nazi enthusiast, Heil Hitler in front of him and he'll probably hug you in joy (we're kidding, everybody. We're kidding). Whatever he cooks up for his event will sure be a challenge for everyone involved, because this gentlemen does not know how to take no for an answer."
          },
          
          {
              "name":"Akshansh Singh",
              "post":"Coordinator: GameCon",
              "pic":"../images/team/Akshansh Profile.jpg",
              "data":"Akshansh is a twelfth grader persuing the science stream with physical education and computer science. Known for his height, Akshansh is a physically dominating personality. However, he is still a kid at heart. If you find him, ask him to do the floss, and then stand in awe of his perfect rendition of the same. An expert gamer, he hopes to make it to the proessional leagues someday. Gamers, take note: your coordinator spends his afternoons with rainbow seige six, and has no intention of changing that anytime soon."
          },
          
           {
              "name":"Vatsal Sharma",
              "post":"Coordinator: Reason Treason",
              "pic":"../images/team/vatsal Profile.jpg",
              "data":"The youngest member of our team (she’s only fourteen), Ummul Baneen Jafri serves as the Subhead of Administration of TechVista 16. Another huge One Direction fan, you can also find her spending hours watching Marcus Butler videos on YouTube. And when she won’t, she’ll be busy stalking others on Instagram (she’s the best stalker around, believe us). She’s possibly the biggest Harry Styles fangirl (meh) but if there’s one thing that she loves more, it’s food. She has a black hole for a stomach and is inseparable from food. She’s a people’s person, one who loves to talk all the time and knows how to get along with everyone. She knows how to get people to do their work and she’ll be using these skills to get TechVista done!"
          },
           {
              "name":"Shubhrali Pratap",
              "post":"Coordinator: Paint Polo",
              "pic":"../images/team/Shubhrali Profile.jpg",
              "data":"Undoubtedly the most talented member of the Lazarus core team, Utpal is known for being efficient, hardworking and idol. He’s one among the almost extinct species of human, who keep their classwork and homework updated and shares all of it on Google Drive, with his entire bunch of classmates!(amazing, yea? Saviour must be the word!) He is our go-to guy for anything, absolutely anything and, he’ll make sure that you are satisfied with what he has done. As the Multimedia Co-Head, Utpal is adept at a lot of skills, which range from video editing to photo editing and  audio editing. He’s so good that when we say that everything you see representing TechVista was digitalised by him, it won’t be an exaggeration."
          },
         
          {
              "name":"Gunja Pandey",
              "post":"Coordinator: Trademarked",
              "pic":"../images/team/Gunja Profile.jpg",
              "data":"Goonja",
              "color":"red"
              
          },
            {
              "name":"Brahmansh Dwivedi",
              "post":"Head Of Logistics",
              "pic":"../images/team/Brahmansh Profile.jpg",
              "data":"Brahmansh is a twelfth grader pursuing Humanities. His favourite passtime is procrastination until, of course, he finally does what's given to him perfectly (We are so jealous of that skill). We don't know what his career choices will be, but one thing we do know is that he is not going to become a comedian (for his jokes fall flatter than the dosas of our canteen). You'll almost certainly find him running around trying to help out. Anyone in his path to provide water bottles is going to turn into road splatter (trust us, been there, done that). Ask him for help, and he'll turn the world upside down before he tells us that it can't be done.",
              "color":"red"
              
          },
          {
              "name":"Siddarth Jaitly",
              "post":"Official Event Videographer",
              "pic":"../images/team/Jaitly Profile.jpg",
              "data":"Siddarth is a science student currently in class 10+2, even though he does not like mathematics. He specialising in everything related to videography-- VFX, video making, video editing-- you name it, he knows it. With his messy hair and incredible camera 'skillz', we are sure that he will perform his job with utmost diligence and care. Be careful, ladies and gentlemen, for he's got his eye (and camera) on you at all times (and we do mean... ALL times).",
              "color":"red"
              
          },
           {
              "name":"Raunak Raj",
              "post":"Official Event Reporter",
              "pic":"../images/team/Raunak Profile.jpg",
              "data":"Raunak is a class tweflth student, pursuing science along with pain. He has been evolving himself in extracurricular activities for only the past year, but has created a decent name for himself in the short while. He specialises in report writing and creative writing and hopes to do his job to the best of his abilities. Beware his mighty writing skills, for it is the best in the land. Raunak will sure make your experience at TechVista something worth remembering.",
              "color":"red"
              
          },
           {
              "name":"Ananya Bajpai",
              "post":"",
              "pic":"../images/team/Ananya Profile.jpg",
              "data":"This girl was last found solemn way back in 1857. Nothing in this world can deter her spirits, not even a petrifying report card! Ananya is a twelfth grader pursuing Humanities with economics and mathematics. A lover of Alvin and the Chipmunks (don't ask us why), you will be hardpressed to find a more nerdy person. You better listen to what she says, because if you don't? Well, she's going to make you listen to her anyway. One thing we've realised in due time is that everything is a paradox when it comes to this person, and trying to figure it out is a paradox in itself.",
              "color":"red"
              
          },
           {
              "name":"Riya Sidhu",
              "post":"",
              "pic":"../images/team/Riya Profile.jpg",
              "data":"Riya is a tweflth grader pursuing science with computers. A JEE aspirant, she is a determined (LOL) FIITJEE student who absolutely totally 100% does not miss any classes of the same. She is a jolly individual, and you'll always find her smiling no matter what the situation (trust us, we are well aware). She loves dancing, and is akin to break out into dance in the most unlikely of situations. She'll always be ready to help you out, so if you need a hand, this one is the most dependable you can get.",
              "color":"red"
              
          },
          
         
        
           
        
         
          
          
          
           
          
     
      ];
    $scope.showData = function(member){
       
        $scope.rightPane = !$scope.rightPane;
        if($scope.rightPane==true)
    {
         $scope.currentName = member.name;
        $scope.currentData = member.data;
        $scope.currentPost = member.post;
        $scope.currentPic= member.pic;
        
        $("body").removeAttr('style');
        $("body").css("overflow=y","hidden");
        $("body").css("background-color","#18092b");
        
        
    }
    else
    {
        $("body").css("overflow-y","scroll");
    }
    
     
    };
      $scope.show = true;
    
    
    
    
    
});  
