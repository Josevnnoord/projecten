var randomNummer;

var userGuessLog = [];
var attempts = 0;

var document;
var window;

// Function reset het spel

document.getElementById("newgame").addEventListener("click", function () {
    window.location.reload();
});


// Function kiest random getal tussen 1 en 100

        window.addEventListener("load", function (){

    randomNummer = Math.floor(Math.random() * 100 + 1);
    //random nummer weergeven
});


    // Function vergelijkt randomnummer

document.getElementById("inputBox").addEventListener("change", function () {
    var userGuess = " " + document.getElementById('inputBox').value;



    // Var userguess word naar de user array gepushed

    userGuessLog.push(userGuess);

    document.getElementById('geraden').innerHTML = userGuessLog;


    // Er word een poging toegevoegd

    attempts++;
    document.getElementById('attempts').innerHTML = attempts;


    // If statement wanneer vertel 'Je nummer is te hoog

    if (userGuess > randomNummer) {
        document.getElementById('textOutput').innerHTML = 'Je nummer is te hoog';
        document.getElementById('inputBox').value = "";
    }

    // Else if statement vertelt 'Je nummer is te laag

    else if (userGuess < randomNummer) {
        document.getElementById('textOutput').innerHTML = 'Je nummer is te laag';
        document.getElementById('inputBox').value = "";
    }

    // Else statement laat var goed zien


    else {
        document.getElementById('textOutput').innerHTML = goed;
        document.getElementById('inputBox').value = "";
    }

});


// laat ze zien wanneer je hebt gewonnen


var win = ["You win!", "Jij hebt gewonnen!"];
var i;
for (i = 0; i < win.length; i++) {
    goed += win[i] + "<br>";
}
