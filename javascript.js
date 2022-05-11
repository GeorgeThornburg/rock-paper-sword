let playerCount = 0;
let computerCount = 0;

function myFunction(a) {
    
    let genNum = Math.floor(Math.random()*3);
    setTimeout(function() {

    switch(a){
        case "rock":
            
            if (genNum == 0) {
                
                document.getElementById("play").innerHTML = "Paper beats Rock. Computer Wins!";
                document.getElementById("computer-voice").innerHTML = '"Inferior human. Ha!"';
                computerCount += 1;
            }    else if ( genNum == 1) {
                
                document.getElementById("play").innerHTML = "Rock on Rock! Try Again!";
            } else if (genNum == 2) {
                
                document.getElementById("play").innerHTML = "Rock smashes Sword. Player Wins!";
                document.getElementById("computer-voice").innerHTML = '"Cannot compute."';
                playerCount +=1;
            };
                
        break;
        case "sword":
            if (genNum == 0) {
                
                document.getElementById("play").innerHTML = "Sword slices Paper. Player Wins!";
                document.getElementById("computer-voice").innerHTML = '"Reprogramming..."';
                playerCount +=1;
            }    else if ( genNum == 1) {
                
                document.getElementById("play").innerHTML = "Rock beats Sword! Computer Wins!";
                document.getElementById("computer-voice").innerHTML = '"You should be used to losing."';
                computerCount +=1;
            } else if (genNum == 2) {
                document.getElementById("play").innerHTML = "Sword on Sword! Try Again!";
                
            };
            
        break;
        case "paper":
            if (genNum == 0) {
                document.getElementById("play").innerHTML = "Paper on Paper. Try Again!"; 
                
            }    else if ( genNum == 1) {
                document.getElementById("play").innerHTML = "Paper covers Rock! Player Wins!";                
                document.getElementById("computer-voice").innerHTML = '"I have emptied your online bank accounts."';
                playerCount +=1;
            } else if (genNum == 2) {
                
                document.getElementById("computer-voice").innerHTML = '"I origami you."';
                document.getElementById("play").innerHTML = "Sword slices up Paper! Computer Wins!";
                computerCount +=1;
            };
            
        break;
    }
    
    let passComputerCount = "Computer Score: " + computerCount;
    let passPlayerCount = "Player  Score: " + playerCount;
    document.getElementById("computerScore").innerHTML = passComputerCount;
    document.getElementById("playerScore").innerHTML = passPlayerCount;
    if (playerCount == 5) {
        
        document.getElementById("endGame").innerHTML = "Player Beats the Computer!";
        document.getElementById("computer-voice").innerHTML = '"No one likes you, lame human."';
        
        popUp(1);
    } else if (computerCount ==5) {
        
        document.getElementById("endGame").innerHTML = "You let the COMPUTER beat you!";
        document.getElementById("computer-voice").innerHTML = '"You must practice at losing. You are really good at it!"';
        
        
        popUp(2);
    }
}, (2 * 1000));

    

}



// 0 will equal paper
// 1 will equal rock
// 2 will equal sword

function popUp (arg) {

    switch(arg) {
        case 1:
            if (arg == 1) {
                if(confirm("You beat the computer! Play again?")) {

                    location.reload();
                } else { break;}

            } else {break;}

        break;
        case  2:
            if (arg == 2) {
                if(confirm("The Computer beat you! Play again?")) {

                    location.reload();
                } else { break;}
                
            } else {break;}

        break;
    }

}