var han={name:"han",image: "assets/images/han.jpg",
attackPoints:30,
counterPoints:20,
health:100};
var kylo={name:"kylo",image: "assets/images/kylo.jpg",
attackPoints:30,
counterPoints:20,
health:100};
var leia={name:"leia", image: "assets/images/leia.jpg",
attackPoints:30,
counterPoints:20,
health:100};
var yoda={name:"yoda", image: "assets/images/yoda.jpg",
attackPoints:30,
counterPoints:20,
health:100};

function hide(char){
    switch(char){
        case "kylo":
        $("#kylo2").hide();
        console.log("hiding kylo");
        break;
        case "han":
        $("#han2").hide();
        console.log("hiding han");
        break;
        case "leia":
        $("#leia2").hide();
        console.log("hiding leia");
        break;
        case "yoda":
        $("#yoda2").hide();
        console.log("hiding yoda");
        break;
    };
};

var player;
var opponant;

function startGame(name){
    player=name;
    console.log("start Game!!")
    console.log(player.name);
    $("playerCharator").html(player.image);
    $("#selectCharactor").slideUp();
    $("#charactors").html("<img class='image' id='han2' src='assets/images/han.jpg' alt='Han Solo'><img class='image'  id='kylo2' src='assets/images/kylo.jpg' alt='Kylo Ren'><img class='image' id='leia2' src='assets/images/leia.jpg' alt='Leia'><img class='image' id='yoda2' src='assets/images/yoda.jpg' alt='Yoda'>");
    console.log("showing all charactors");
    $("#instructions").html("Select your Opponant!");
    console.log("instructions shown");
    hide(player.name);
    $("#playerImage").attr("src", player.image);
    $("#playerImage").attr("style","width:300px;height:400px;");
   

    $("#han2").click(function(){console.log("han clicked"); onDeck(han);});
    $("#kylo2").click(function(){console.log("kylo clicked");onDeck(kylo);});
    $("#leia2").click(function(){console.log("leia clicked");onDeck(leia);});
    $("#yoda2").click(function(){console.log("yoda clicked");onDeck(yoda);});

    
    
}
function onDeck(opp){
    console.log("All on Deck")
    opponant=opp;
    $("#enemyImage").attr("src", opponant.image);
    $("#enemyImage").attr("style","width:300px;height:400px;");
    $("#charactors").hide();
    $("#fightButton").html("<button type='button' id='fight' class='btn btn-primary'>Fight!!</button>");
    
    
}


function fight(){
    console.log("Fight!!");
    opponant.health-=player.attackPoints;
    player.health-=opponant.counterPoints;
    $("#gamePlay").text("you attacked "+opponant.name+" with "+player.attackPoints+" HP and reduced his health to "+opponant.health+"."+opponant.name+" counter attacked with "+opponant.counterPoints+"HP and reduced your health to"+player.health+"!")
    player.attackpoints+=6;
};

$( document ).ready(function() {
    

   
    console.log( "ready!" );
    $("#instructions").html("Select your Charactor!");
    console.log("instructions shown");
    $("#selectCharactor").html(" <img class='image' id='han1' src='assets/images/han.jpg' alt='Han Solo'><img class='image'  id='kylo1' src='assets/images/kylo.jpg' alt='Kylo Ren'><img class='image' id='leia1' src='assets/images/leia.jpg' alt='Leia'><img class='image' id='yoda1' src='assets/images/yoda.jpg' alt='Yoda'>");


      
    $("#han1").click(function(){console.log("han clicked"); startGame(han);});
    $("#kylo1").click(function(){console.log("kylo clicked");startGame(kylo);});
    $("#leia1").click(function(){console.log("leia clicked");startGame(leia);});
    $("#yoda1").click(function(){console.log("yoda clicked");startGame(yoda);});

});