
var han={name:"han",image: "assets/images/han.jpg",
attackPoints:30,
counterPoints:20,
health:1000,
card:'<div class="card image" id="han" class="col-md-3"><img class="card-img-top" src="assets/images/han.jpg" alt="Card image cap"><div class="card-body">  <p class="card-text hanText"></p></div></div>',updateStatus:function(){$(".hanText").text("Han Solo  Health:"+han.health)}};

var kylo={name:"kylo",image: "assets/images/kylo.jpg",
attackPoints:30,
counterPoints:20,
health:100,
card:'<div class="card image" id="kylo" class="col-md-3"><img class="card-img-top" src="assets/images/kylo.jpg" alt="Card image cap"><div class="card-body">  <p class="card-text kyloText"></p></div></div>',updateStatus:function(){$(".kyloText").text("Kylo Ren  Health:"+kylo.health)}};

var leia={name:"leia", image: "assets/images/leia.jpg",
attackPoints:30,
counterPoints:20,
health:100,
card:'<div class="card image" id="leia"class="col-md-3"><img class="card-img-top" src="assets/images/leia.jpg" alt="Card image cap"><div class="card-body">  <p class="card-text leiaText"></p></div>',
updateStatus:function(){$(".leiaText").text("Leia  Health:"+leia.health)}};

var yoda={name:"yoda", image: "assets/images/yoda.jpg",
attackPoints:30,
counterPoints:20,
health:100,
card:'<div class="card image" id="yoda" class="col-md-3"><img class="card-img-top" src="assets/images/yoda.jpg" alt="Card image cap"><div class="card-body">  <p class="card-text yodaText"></p></div></div>',
updateStatus:function(){$(".yodaText").text("Yoda   Health:"+yoda.health)}};

gameStatus="not started";




function hide(char){
    switch(char){
        case "kylo":
        $("#kylo").hide();
        console.log("hiding kylo");
        break;
        case "han":
        $("#han").hide();
        console.log("hiding han");
        break;
        case "leia":
        $("#leia").hide();
        console.log("hiding leia");
        break;
        case "yoda":
        $("#yoda").hide();
        console.log("hiding yoda");
        break;
    };
};
function show(char){
    switch(char){
        case "kylo":
        $("#kylo2").show();
        console.log("showing defeated kylo");
        break;
        case "han":
        $("#han2").show();
        console.log("showing defeated han");
        break;
        case "leia":
        $("#leia2").show();
        console.log("showing defeated leia");
        break;
        case "yoda":
        $("#yoda2").show();
        console.log("showing defeated yoda");
        break;
    };
};

var defeated=0;
var player;
var opponant;


function start(){
    $("#yoda2").hide();
   $("#kylo2").hide();
   $("#han2").hide();
   $("#leia2").hide();
   han.updateStatus();
   kylo.updateStatus();
   leia.updateStatus();
   yoda.updateStatus();
   
    console.log( "ready!" );
    $("#instructions").html("Select your Charactor!");
    console.log("instructions shown");
    $("#han").off().click(function(){console.log("han clicked"); setName(han);});
    $("#kylo").off().click(function(){console.log("kylo clicked");setName(kylo);});
    $("#leia").off().click(function(){console.log("leia clicked");setName(leia);});
    $("#yoda").off().click(function(){console.log("yoda clicked");setName(yoda);});


};

function setName(name){
    if(gameStatus==="not started"){
        player=name;
        console.log("start Game!!")
        console.log(player.name);
        startGame();
        gameStatus="started";
        
    };
};

function startGame(){
    //$("playerCharator").html(player.image); 
    
        $("#charactors").show();
        console.log("instructions shown");
        $("#instructions").text("Select your Opponant!");
        hide(player.name);
        $("#playerCharactor").html(player.card);
        player.updateStatus();
            
     
        $("#han").off().click(function(){console.log("han clicked"); onDeck(han);});
        $("#kylo").off().click(function(){console.log("kylo clicked");onDeck(kylo);});
        $("#leia").off().click(function(){console.log("leia clicked");onDeck(leia);});
        $("#yoda").off().click(function(){console.log("yoda clicked");onDeck(yoda);});
    
    
};

    
    

function onDeck(opp){
    if(gameStatus==="not started"){return};
    if (gameStatus==="started"){
    
    $("#fightButton").off();
    $("#charactors").hide();
    console.log("All on Deck")
    opponant=opp;
    $("#EnemyCharactor").html(opponant.card);
    opponant.updateStatus();
    hide(opponant.name);
    $("#instructions").html("Fight!");
    $("#fightButton").html("<button type='button' id='fight' class='btn btn-primary'>Fight!!</button>");

    $("#fightButton").off().on("click",function(){
        console.log("fight me");
        opponant.health-=player.attackPoints;
        player.health-=opponant.counterPoints;$("#gamePlay").text("you attacked "+opponant.name+" with "+player.attackPoints+" HP and reduced his health to "+opponant.health+".  "+opponant.name+" counter attacked with "+opponant.counterPoints+"HP and reduced your health to "+player.health+"!");
        $("#hanText").html('<p class="card-text"id="hanText">Hi this is new!:</p>');
        player.updateStatus();
        opponant.updateStatus();
        player.attackpoints+=6;


        if(opponant.health<1){
            $("#EnemyCharactor").html("");
            show(opponant.name);
            $("#fightButton").html("");
            $("#gamePlay").text(opponant.name+" was Defeated!!");
            defeated++;
            $("#charactors").show();
            console.log(defeated);
            if (defeated===3){

                $("#instructions").html("You Win!!");
                setTimeout(function(){reset()},3000);
                return;
            };    
    
        };
    
        if(player.health<1){
            $("#fightButton").html("");
            $("#instructions").html("You lose!!");
            $("#EnemyCharactor").html("");
            setTimeout(function(){reset()},3000);
            return;
            
            
            
        };
      
        
    });
    
};
    
};

function reset(){
    $("#charactors").show();
    $("#fightButton").html("");
    defeated=0;
    gameStatus="not started";
    $("#playerCharactor").html("");
    $("#instructions").html("Select Your Charactor!");
    $("#gamePlay").html("");
    kylo.health=100;
    leia.health=100;
    yoda.health=100;
    han.health=1000;
    $("#yoda2").hide();
   $("#kylo2").hide();
   $("#han2").hide();
   $("#leia2").hide();
   $("#yoda").show();
   $("#kylo").show();
   $("#han").show();
   $("#leia").show();
   start();

};

$( document ).ready(function() {
    

   start();

});