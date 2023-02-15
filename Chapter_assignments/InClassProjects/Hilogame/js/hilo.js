console.log("javascript is working...")

class Game{
    /*
        Secret number - number the player is guessing
        numebrofguesses - number ove atempts
        guessArray - values the user guessed so far
        gamerunning - tells if the games is running or not
    */ 
        constructor() {
            this.secretNumber = 0;
            console.log(this.secretNumber);
            this.numberOfGuesses = 0;
            this.guessArr = [];
            this.gameRunning = false;
            this.won = false;
        }
    
        newGame() {
            this.secretNumber = Math.floor(Math.random() * 100 + 1);
            console.log(this.secretNumber);
            this.numberOfGuesses = 0;
            this.guessArr = [];
            this.gameRunning = true;
            this.won = false;
        }     
    }
    
    function main() {
        game = new Game();          // game is a global variable; no help for it
    }
    
    function startGame(won) {
        if(game.gameRunning) {
            if(!game.won) {
                if(confirm("Do you really want to quit?") == false) {
                    return;     // not quitting, so do nothing
                } else {
                    // quitting
                    var start = document.getElementById("start");
                    start.innerHTML = "start game";
                    game.gameRunning = false;       // let the game know it's over
    
                    var prompt = document.getElementById("prompt");
                    prompt.innerHTML = "press start game to begin...";
                    prompt.style.backgroundColor = "";
    
                    var playerInput = document.getElementsByClassName("playerInput");
                    for(i = 0; i < playerInput.length; i++) {
                    playerInput[i].style.visibility = "hidden";
    
                    (document.getElementById("winmessage")).style.display = "none";
                    }
                }
            }
        } else {  // game is not running
            game.newGame();
            var start = document.getElementById("start");
            start.innerHTML = "Quit Game";
            var prompt = document.getElementById("prompt");
            prompt.innerHTML = "enter your first guess below";
    
            var playerInput = document.getElementsByClassName("playerInput");
            for(i = 0; i < playerInput.length; i++) {
                playerInput[i].style.visibility = "visible";
            }
            updateScore();
        }
    }
    
    function updateScore() {
        var results = document.getElementById("results");
        results.innerHTML = "number of guesses: " + game.numberOfGuesses;
    
        var playerInput = document.getElementById("playerInput");
        playerInput.value = "";
        playerInput.focus();
    }
    
    function checkGuess() {
        console.log("checking guess..");
        
        // code for checking guess:
            // must check for all possible input errors-
            // missing input, wrong data type, input out of range
            // non-integer numbers, and numbers previously guessed
        
        // get the input
        var playerInput = document.getElementById("playerInput").value;
        console.log("player input: " + playerInput);
    
            // missing input
        if(playerInput == "") {
            alert("you didn't enter a guess...");
            return;
        }
        
            // wrong data type
        if(isNaN(playerInput)) {
            alert("that's not a number...");
            return;
        }
    
            // out of range
        if(playerInput > 100 || playerInput < 1) {
            alert("guess between 1 and 100...");
            return;
        }
    
            // not an integer
        if(playerInput %1 != 0) {
            alert("whole numbers only...")
            return;
        }
    
            // numbers previously guessed
        for(i = 0; i < game.guessArr.length; i++){
            if(playerInput == game.guessArr[i]) {
                alert("you already tried that...")
                return;
            }
        }
    
    // since we are passed all the error traps, we can record the guess
    game.guessArr.push(playerInput);
    game.numOfGuesses++;
    updateScore();
    

    if(playerInput > game.secretNumber){
        var prompt = document.getElementById("prompt");
        prompt.innerHTML ="Too High";
        prompt.style.fontWeight = "bold";
        prompt.style.backgroundColor = "Yellow";
       return;
    }
    if(playerInput < game.secretNumber){
        var prompt = document.getElementById("prompt");
        prompt.innerHTML ="Too Low";
        prompt.style.fontWeight = "bold";
        prompt.style.backgroundColor = "Red";
        return;
    }
   
    var prompt = document.getElementById("prompt");
    prompt.innerHTML ="Correct";
    prompt.style.fontWeight = "bold";
    prompt.style.backgroundColor = "Green";


    results = document.getElementById("results")
    results.innerHTML += "<br />Your Guesses:" + game.guessArr;

    var rating = "Your rating: "
    switch (game.numOfGuesses){
        case 1: 
            rating += "Cheater";
            break;
        case 2:
        case 3:
            rating += "Lucky";
            break;
        case 4:
        case 5:
            rating += "Above Average";
            break;
        case 6:
        case 7:
        case 8:
            rating += "Average";
            break;
        case 9:
        case 10:
            rating += "Below Average";
            break;
        case 11:
        case 12:
            rating += "Toddler";
            break;
        default:
            rating += "Lemar johnson smert boy";
            break;
    }


    (document.getElementById("rating")).innerHTML = rating;
    (document.getElementById("winmessage")).style.display = "block";

    game.won = true;
    game.gameRunning =false;
    

}