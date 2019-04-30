src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var playerChoices = ["r", "p", "s"];



// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var p1wins = 0;
var p1losses = 0;
var p2wins = 0;
var p2losses = 0;
var ties = 0;

var player1Choose = "";
var player2Choose = "";
var turn = 1;

// Create variables that hold references to the places in the HTML where we want to display things.
// var nameText = document.getElementById("name-text");
// var userGuess = document.getElementById("userGuess");
// var player1Text = document.getElementById("player1");
// var player2Text = document.getElementById("player2");
// var p1winsText = document.getElementById("p1wins-text");
// var p1lossesText = document.getElementById("p1losses-text");
// var tiesText = document.getElementById("ties-text");
// var p2winsText = document.getElementById("p2wins-text");
// var p2lossesText = document.getElementById("p2losses-text");
// var player1Choose = document.getElementById("player1Choose");
// var player2Choose = document.getElementById("player2Choose");
// var errorText = document.getElementById("error");
// var turnText = turn;

var nameText;
var userGuess;
var player1 = $("#player1").val();
var player2 = $("#player2").val();
var error;


// player1Text = "";
// player2text = "";
// player1 = "";
// player2 = "";

// button event to add a user

$("#add-name1").on("click", function (event) {
    event.preventDefault();
    player1 = $("#player1").val();
    console.log(player1);
});

$("#add-name2").on("click", function (event) {
    event.preventDefault();
    player2 = $("#player2").val();
    console.log(player2);

});

if (player1 === "" || player1 === "") {

    error = "There are already 2 players in this game.  Please reset the game to start over";
}

// Capture User Inputs and store them into variables

// $("#player1").text(player1);
// $("#player2").text(player2);

// checking to make sure everything is working

console.log(player1);
console.log(player2);
console.log(p1wins);
console.log(p1losses);
console.log(p2wins);
console.log(p2losses);
console.log(ties);



$("#reset").on("click", function (event) {
    event.preventDefault();



});



// This function is run whenever the user presses a button.
$("#rock").on("click", function (event) {

    if (player2 === "") {

        errorText.textContent = "you need 2 players to play the game";
    } else {


        userGuess = "rock";
        player1Choose = "rock";
        player2Choose = "rock";
        console.log(player1Choose);

        if (turn === 1) {


            turn = 2;
            player1Choose;
            console.log(turn);
            console.log(player1Choose);
            console.log("It is " + player2 + "'s turn");

        } else {
            // turnText.textContent = "It is " + player2 + "'s turn";
            turn = 1;
            player2Choose;
            console.log(turn);
            console.log(player2Choose);
            console.log("It is " + player1 + "'s turn");
        }

    };
    if (player2 === "") {

        error.textContent = "you need 2 players to play the game";
    } else {
        $("#paper").on("click", function (event) {

            userGuess = "paper";
            player1Choose = "paper";
            player2Choose = "paper";
            console.log(player1Choose);
            if (turn === 1) {


                turn = 2;
                player1Choose;
                console.log(turn);
                console.log(player1Choose);
                console.log("It is " + player2 + "'s turn");

            } else {
                // turnText.textContent = "It is " + player2 + "'s turn";
                turn = 1;
                player2Choose;
                console.log(turn);
                console.log(player2Choose);
                console.log("It is " + player1 + "'s turn");
            }
        });

    };

    if (player2Text === "") {

        errorText.textContent = "you need 2 players to play the game";
    } else {
        $("#scissors").on("click", function (event) {

            userGuess = "scissors";
            player1Choose = "scissors";
            player2Choose = "scissors";
            console.log(player1Choose);
            if (turn === 1) {


                turn = 2;
                player1Choose;
                console.log(turn);
                console.log(player1Choose);
                console.log("It is " + player2 + "'s turn");

            } else {
                // turnText.textContent = "It is " + player2 + "'s turn";
                turn = 1;
                player2Choose;
                console.log(turn);
                console.log(player2Choose);
                console.log("It is " + player1 + "'s turn");
            }
        });
    };

});


// if (turn === "1") {


//     turn = "2";
//     player1Choose;
//     console.log(turn);
//     console.log(player1Choose);
//     console.log("It is " + player2 + "'s turn");

// } else {
//     // turnText.textContent = "It is " + player2 + "'s turn";
//     turn = "1";
//     player2Choose;
//     console.log(turn);
//     console.log(player2Choose);
//     console.log("It is " + player1 + "'s turn");
// }

// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
if ((userGuess === "rock") || (userGuess === "paper") || (userGuess === "scissors")) {

    if ((player1 === "rock" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "paper") ||
        (player1 === "paper" && player2 === "rock")) {
        p1wins++;
        p2losses++;
    } else if (player1 === player2) {
        ties++;
    } else {
        p1losses++;
        p2wins++;
    }

    // Hide the directions
    error.textContent = "";
}





    // Display player 1 and plaer 2 guesses, and wins/losses/ties.
    // player1Text.textContent = "Player 1 choses: " + player1Text;
    // player2Text.textContent = "Player 2 choses: " + player2Text;

    // p1winsText.textContent = "Player 1 wins: " + p1wins;
    //     p1lossesText.textContent = "Player 1 losses: " + p1losses;
    //     tiesText.textContent = "Ties: " + ties;
    //     p2winsText.textContent = "Player 2 wins: " + p2wins;
    //     p2lossesText.textContent = "Player 2 losses: " + p2losses;



