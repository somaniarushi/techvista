

app.controller("eventCtrl", function($scope, $location, $http)
{
    $scope.showEvents=true;
    
var eventPics = [
        "images/events/CodeALine.jpg",
        "images/events/BrainBug.jpg",
        "images/events/WeavingWeb.jpg",
        "images/events/StormTheFront.jpg",
        "images/events/Timeline.jpg",
        "images/events/RiddlersQuest.jpg",
        "images/events/TakeITEasy.jpg",
        "images/events/ReasonTreason.jpg",
        "images/events/FedoraTheExplorer.jpg",
        "images/events/Crossword.jpg",
        "images/events/Ham-ster-Dam.jpg",
        "images/events/TheJanusArgument.jpg",
        "images/events/WeGotItCovered.jpg",
        "images/events/AdAddnAddy.jpg",
        "images/events/Trademark.jpg"
        
        
    ];
    var image = new Image();
    var c=0;
   
    image.onload = function () {
        $scope.showEvents=true;
        
    }
    image.src = "images/events/Trademark.jpg"; 
    

      $scope.showEventDetails=false;
      $scope.events = [
          {
              "eventName":"CodeX",
              "realEventName":"Programming",
              "head":"Anand Gupta",
              "img":"images/events/CodeALine.jpg",
              "contact":{
                      "phone":"8957757878",
                      "mail":"prakash.anand0403@gmail.com",
                      "fb":"https://www.messenger.com/t/urfrend.anand",
              },
              "data":[
                  "Number of participants per school : 2",
                  "Number of rounds : 2",
                  "Time Duration : 2 hours per round",
                  "The participants will have to write a program for a given set of problems.",
                  "The participants are only allowed to use Java or C++.",
                  "The top 6 teams will be selected for the final round based on their performance in the first round. ",
                  "The teams would be judged on the time they take to complete the task, and the efficiency of the code."
              ],
              "about":"The feeling of instructing a computer to do your job is an amazing one. But are you the best at it?<br>Find out at <strong>Code-a-Line</strong>, a <strong>Programming</strong> event designed to test your skills against other coders and a ticking clock.",
              "color1":"black",
              "color2":"black"
              
          },
          {
              "eventName":"BrainBug",
              "realEventName":"Debugging",
              "head":"Mohitaksh Srivastava",
              "img":"images/events/BrainBug.jpg",
              "contact":{
                      "phone":"9721451235",
                      "mail":"mohitech26@gmail.com",
                      "fb":"https://www.messenger.com/t/mohitaksh26",
              },
              "timings":"",
              "data":[
                  "Number of participants per school : 1",
                  "Number of rounds: 1",
                  "All codes in the questions will be in Java and C++ languages.",
                  "The questions mentioned will be of the following types:",
                  "Error rectification: The participants will have to rectify the errors in the program so as to get the given output.",
                  "Hidden Code: Participants are to fill the missing code so as to get the given output.",
                  "Rearrangement: Participants are to rearrange the disordered parts in correct order to get the given output.",
                  "Predict the Output: participants are to predict the desired output."
              ],
              "about":" Everybody makes mistakes and so did we, intentionally. You don’t know what they are, but you will find them, and kill them (or maybe just correct them).",
              "color1":"#57C2B2",
              "color2":"#57C2B2"
              
          },
          {
              "eventName":"Weave-a-Web",
              "realEventName":"Web Designing",
              "head":"Kushal Khare",
              "img":"images/events/WeavingWeb.jpg",
              "contact":{
                      "phone":"9005232661",
                      "mail":"gaurangkhare123@gmail.com",
                      "fb":"https://www.messenger.com/t/100006747044894",
              },
              "data":[
                  "Each school will be represented by <strong>one</strong> participant.",
                  "Participants will be given a set of tasks to complete within the given time frame.",
                  "The following files/data will be provided to each participant-<br><ul><li><strong>Libraries:</strong><ul><li>Jquery</li><li>Animate.css</li><li>Bootstrap</li></ul><li><strong>Others:</strong><ul><li>Data (as per the requirement)</li><li>Icon Packs</li><li>Color Palette</li></ul></ul>",
                  "Completion of the tasks must be purely code-based. The use of designing and animation libraries will be entertained. However, <strong>NO web designing software</strong> will be provided to the participants.",
                  "The text editor, Visual Studio Code will be installed on the system given to the participants to work on.",
                  "Criteria of Judgement will be mentioned along with the given task.",
                  "The duration of the event is  <strong>1 hour.</strong>"
              ],
              "color2":"#CE282C",
              "color1":"black"
              
          },
          {
              "eventName":"GameCon",
              "realEventName":"Gaming",
              "head":"Akshansh Singh",
              "img":"images/events/StormTheFront.jpg",
              "contact":{
                      "phone":"8052789627",
                      "mail":"ritikgupta4@gmail.com",
                      "fb":"https://www.messenger.com/t/ritik.gupta.7965",
              },
              "data":[
                  "Number of participants: 1",
                  "Number of rounds: 2",
                  "The participants are not allowed to bring their own gear for the event, and they must use the gear provided to them.",
                  "Round 1 will be a first person shooting game, from which top 8 participants will qualify for the second round.",
                  "The participants must be familiar with both PC and console gaming.",
                  "If any participant is found using unfair means, he/she will be disqualified."
              ],
              "color2":"#29317C",
              "color1":"#2D61AD"
              
          },
          {
              "eventName":"Timeline",
              "realEventName":"Video Editing",
              "head":"Shikhar Vaish",
              "img":"images/events/Timeline.jpg",
             "contact":{
                      "phone":"8127730749",
                      "mail":"shikhar.vaish90@gmail.com",
                      "fb":"https://www.messenger.com/t/svr8svr8",
              },
              "data":[
                  "Each school will be represented by <strong>one participant.</strong>",
                  "The participants will have to make a <strong>1 minute</strong> video from the resource files provided.",
                  "The following softwares will be provided to each participant:<ul><li>Sony Vegas Pro 13</li><li>Adobe Premiere Pro CC</li></ul>",
                  "Each participant will have to bring their own headphones.",
                  "The duration for this event is <strong>1 hour and 30 minutes.</strong>"
              ],
              "color2":"#406AB4",
              "color1":"#6E51A3"
              
          },
          {
              "eventName":"Riddler’s Quest",
              "realEventName":"Treasure Hunt",
              "head":"Veer Singh",
              "img":"images/events/RiddlersQuest.jpg",
              "contact":{
                      "phone":"8009709463",
                      "mail":"veer.vs19@gmail.com",
                      "fb":"https://www.messenger.com/t/veer.vs19",
              },
              "data":[
                  "Each School will be represented by a team of <strong>two</strong> participants.",
                  "Each team will be provided with a computer and a clue to begin with.",
                  "Teams shall follow the trail of clues and riddles to finally find the “Treasure”, which will be somewhere in their computer in the form of a word or a phrase.",
                  "The first team to complete the challenge wins, but the competition continues to decide the runner-ups.",
                  "If a team is not able to complete the challenge within the given time, their progress in the hunt will be the basis of judgement.",
                  "The time limit for this event is <strong>1 hour.</strong>",
                  "Further details will be provided at the start of the event."
              ],
              "color2":"#764972",
              "color1":"#0B5637"
              
          },
          {
              "eventName":"BITSkrieg",
              "realEventName":"Quiz",
              "head":"Madhav Agrawal",
              "img":"images/events/TakeITEasy.jpg",
              "contact":
                  {
                      "phone":"9839017601",
                      "mail":"madhav.official27@gmail.com",
                      "fb":"https://www.messenger.com/t/agarwal.madhavj.madhav52"
                      
                  },
              "data":[
                  "Number of participants: 2 (Making one team)",
                  "Number of rounds : 2",
                  "Time Duration : Round 1: 1 hour & Round 2: 1 hour 30 minutes",
                  "The quiz will be related to software, hardware, IT buzzwords, acronyms, abbreviations, recent technological developments, eminent personalities, IT companies etc.",
                  "The preliminary round will be a written round, comprising 20 questions. ",
                  "The questions would be displayed on a projector, and the teams would be required to answer the questions on the sheet of paper provided to them.",
                  "The teams with the top 6 scores would qualify for the final round.",
                  "The final round will be a stage round, the rules for which will be explained on the stage itself.",
                  "The decision of the quiz master would be final and abiding on all the participant teams. "
              ],
              "color1":"#D10053",
              "color2":"#7568AE",
              "shift":"shift"
          },
          {
              "eventName":"Reason Treason",
              "realEventName":"Reasoning",
              "head":"Ritik Gupta",
              "img":"images/events/ReasonTreason.jpg",
             "contact":{
                      "phone":"8052789627",
                      "mail":"ritikgupta4@gmail.com",
                      "fb":"https://www.messenger.com/t/ritik.gupta.7965",
              },
              "data":[
                  "Each school will be represented by a team of <strong>two</strong> participants.",
                  "The participants will have to use lateral thinking to answer questions based on logic and reasoning",
                  "Scratch paper will be provided for rough work",
                  "Starred (*) questions will be used to break ties.",
                  "Use of any electronic device, calculators and other unfair means will lead to disqualification.",
                  "The duration for this event is <strong>1 hour</strong>."
              ],
              "color1":"#FD1642",
              "color2":"#20F6D2",
              "shift":"shift"
          },
          {
              "eventName":"feDora, The Explorer",
              "realEventName":"Surprise Software",
              "head":"Sudhanshu Dhar Sharma",
              "contact":{
                      "phone":"9305592072",
                      "email":"sudhanshu.harsh@gmail.com",
                      "fb":"https://www.messenger.com/t/DjSudy"
               },
              "img":"images/events/FedoraTheExplorer.jpg",
              "data":[
                  "Each school will be represented by a team of <strong>two</strong> participants.",
                  "The application/software to be used will be disclosed on the spot.",
                  "The first <strong>30 mintues</strong> is to be used for exploring the application/software.",
                  "The teams will be given a task related to that application/software on the spot, which they will have to finish within <strong>the provided time.</strong>",
                  "No request for grace-marking or change of application/software or the assignment shall be entertained.",
                  "The duration of this event is <strong>2 hours</strong>."
              ],
              "color2":"black",
              "color1":"#25F16E"
             
          },
          {
              "eventName":"Maze Runner",
              "realEventName":"Crossword",
              "head":"Pratul Chaturvedi",
              "img":"images/events/Crossword.jpg",
               "contact":
                  {
                      "phone":"9839188217",
                      "mail":"pratulchaturvedi@gmail.com",
                      "fb":"https://www.messenger.com/t/PratulChaturvedi"
                      
                      
                  },
              "data":[
                  "Number of participants: 1",
                  "Number of rounds : 2",
                  "The preliminary round would be a written round.",
                  "The top six teams would qualify for the stage round.",
                  "In the stage round, each participant would be given 15 seconds to answer a question.",
                  "If the answer is correct in the first attempt, ten points will be awarded. A passed question would be worth 5 points.",
                  "The questions will be based on technology."
              ],
              "color1":"#FF6B01",
              "color2":"#53C9FE"
              
          },
          {
              "eventName":"Hamsterjam",
              "realEventName":"Half a minute",
              "head":"Anusha Chitanshi",
              "contact":{
                      "phone":"6388198808",
                      "mail":"anusha.chitranshi@gmail.com",
                      "fb":"https://www.messenger.com/t/anusha.chitranshi",
                },
              "img":"images/events/Ham-ster-Dam.jpg",
              "data":[
                  "Number of participants: 1<br>Round 1 HAM (30 seconds) <br>Round 2 JAM (60 seconds)",
                  "Participants will be asked to speak on a given topic for the given time period.",
                  "Only six top-scoring participants will qualify for Round 2 (JAM) from Round 1 (HAM).",
                  "The participants would be required to speak for 30 seconds and 60 seconds, for Round 1 and Round 2 respectively.",
                  "The delivery must be without repetition, deviation or hesitation. The participants can interject each other on account of any of the above, and must give a valid reason for interjection",
                  "If the interruption is found to be <strong>valid</strong>, the ‘interrupter’ is required to speak for the remaining time on the same topic. A further interruption is also possible."
              ],
              "color1":"#01A2FA",
              "color2":"#FF2C6F"
              
          },
          {
              "eventName":"Janus’ Argument",
              "realEventName":"Turncoat",
              "head":"Saurav Banerjee",
              "contact":{
                      "phone":"8565829731",
                      "email":"banerjee.saurav6@gmail.com",
                      "fb":"https://www.messenger.com/t/Shady.SB"
               },
              
              "img":"images/events/TheJanusArgument.jpg",
              "data":[
                  "Each school will be represented by <strong>one</strong> participant",
                  "The topic will be disclosed at the venue. Paricipants will have <strong>40 minutes</strong> of preparation time",
                  "They will then present their arguments before the house in an order decided by a draw of lots.",
                  "The participants are requested to note that they will be required to speak for <strong>1 minute and 30 seconds</strong>. both for the topic and against it. This will be followed by a confutation of one minute",
                  "During the 40 minutes the participants are given to prepare, they are allowed to use dictionaries and thesauruses. The participants are requested to note that the use of electronic devices is strictly prohibited.",
                  "While presenting their arguments, any use of hand-gestures and/or objectionable language is not allowed. If used, they will be penalised.",
                  "The participants will be scored on the following grounds:<ul><li>Content</li><li>Line of Argument</li><li>Delivery</li><li>Expression</li><li>Rebuttal</li></ul>"
              ],
              "color1":"#2686FE",
              "color2":"#FF01FF"
          },
          {
              "eventName":"We Got IT Covered",
              "realEventName":"Phone Cover Designing",
              "head":"Bhavya Batra",
              "contact":{
                      "phone":"8948832330",
                      "mail":"bhavya.batra07@gmail.com",
                      "fb":"https://www.messenger.com/t/bhavya.batra07",
              },
              "img":"images/events/WeGotItCovered.jpg",
              "data":[
                  "Each school will be represented by <strong>one</strong> participant.",
                  "The theme will be given on the spot.",
                  "The participants will have to bring their own equipments. Acrylic paints are recommended. They may use other art gear like glitter, sharpies, sequins, etc.",
                  "The participants will be provided with a clear plastic case to design on.",
                  "Judgement will be based on their creativity and skill.",
                  "The duration of the event will be <strong>1 hour and 30 minutes</strong>."
              ],
              "color1":"#4489CA",
              "color2":"#60CAE4"
          },
          {
              "eventName":" Ad Add n Addy",
              "realEventName":"Advertising",
              "head":"Bhavya Batra",
              "contact":{
                      "phone":"8948832330",
                      "mail":"bhavya.batra07@gmail.com",
                      "fb":"https://www.messenger.com/t/bhavya.batra07",
              },
              "img":"images/events/AdAddnAddy.jpg",
              "data":[
                  "Each school will be represented by a team of <strong>two</strong> participants.",
                  "The participants will be provided with a product for which they’ll have to create an advertisement (in the form of a brochure/pamphlet etc.).",
                  "This advertisement has to be completely original",
                  "They may improvise on the product if they so desire.",
                  "They’ll be provided with an <strong>A3 sized Linen Sheet</strong> to draw their advertisement on. They are required to bring their own stationery and painting material.",
                  "Criteria for judgment:<ul><li>Innovation</li><li>Creativity</li><li>Concept</li></ul>",
                  "The duration of the event will be <strong>2 hours</strong>."
              ],
              "color2":"#F3ED27",
              "color1":"#8051A1"
          },
          {
              "eventName":"Trademark",
              "realEventName":"Logo Designing",
              "head":"Harshi Lal",
              "contact":{
                      "phone":"8953096881",
                      "mail":"harshilal15@gmail.com",
                      "fb":"https://www.messenger.com/t/harshi.lal",
              },
              "img":"images/events/Trademark.jpg",
              "data":[
                  "Each school will be represented by <strong>one</strong> participant.",
                  "At the start of the event, participants will be provided with the name and a short description of a production company/ organisation (which may or may not be fictional) and they'll be required to design a logo for the same",
                  "An <strong>A4 sized Linen Sheet</strong> sheet will be provided to each participant. Any painting material or stationery the participant wishes to use must be brought by him/her.",
                  "Criteria for judgement:<ul><li>Originality</li>Creativity</li><li>Relevance</li></ul>",
                  "The duration for this event is <strong>1 hour and 30 minutes</strong>."
              ],
              "color1":"#2BB351",
              "color2":"#326EB6"
          }/*
          {
              "eventName":"Treasure I.T.",
              "realEventName":"Online Event",
              "img":"images/events/StormTheFront.jpg",
              "data":[
                  "This is an open online event",
                  "This event will start on <strong>13th of August, 2016</strong> and will continue for a week.",
                  "Login details will be mailed to the teacher in-charge of the respective schools after registration.",
                  "For further details refer to <strong>techvista.in</strong>"
              ]
              
          }*/
          
      ];
      
      $scope.triggerEventDetails = function(event){
    
    $scope.showEventDetails=!$scope.showEventDetails;
    if($scope.showEventDetails==true)
    {
        $("body").removeAttr('style');
        $("body").css("overflow=y","hidden");
        $("body").css("background-color","#18092b");
        
        
    }
    else
    {
        $("body").css("overflow-y","scroll");
    }
    
    $scope.currentEvent = event;
          
          
      };
  
});  
 