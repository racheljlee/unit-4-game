$(document).ready(function () {
    // elements access
    var crystalScore = $("#crystal-score");
    var winSpan = $("#wins");
    var lossesSpan = $("#losses");

    var winMessage = $("#win-lose-message");
    var loseMessage = $("#win-lose-message");    

    // var blueCrystal = $("#crystal1");
    // var purpleCrystal = $("#crystal2");
    // var pinkCrystal = $("#crystal3");
    // var greenCrystal = $("#crystal4");

    var totalScoreSpan = $("total-score");

    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    // random crystal score between 19 and 120
    var randomCrystalScore = Math.floor(Math.random()*101) +19;
    // display random crystal score
    crystalScore.text(randomCrystalScore);

   // when winning and adding win tally
    function win() {
        winMessage.text("YOU WIN!");
        wins++;
        winSpan.text(wins);
        startGame()
    }
    function lose() {
        loseMessage.text("YOU LOSE! :(");
        losses++;
        lossesSpan.text(losses);
        startGame()
    }

    function startGame() {
        
    }

    // display initial wins and losses
    winSpan.text(wins);
    lossesSpan.text(losses);
    totalScoreSpan.text(totalScore);

    // random numbers for each crystal between 1 and 12
    var randomCrystal1 = Math.floor(Math.random() * 11) + 1;
    var randomCrystal2 = Math.floor(Math.random() * 11) + 1;
    var randomCrystal3 = Math.floor(Math.random() * 11) + 1;
    var randomCrystal4 = Math.floor(Math.random() * 11) + 1;

    console.log(randomCrystal1);
    console.log(randomCrystal2);
    console.log(randomCrystal3);
    console.log(randomCrystal4);

    // making crystals clickable and adding scores to user total;
    $("#crystal1").on("click", function () {
        totalScore += randomCrystal1;
        console.log(totalScore);
        if (totalScore === randomCrystalScore) {
            win();
        } else if (totalScore > randomCrystalScore) {
            lose();
        }

    })
    $("#crystal2").on("click", function () {
        totalScore += randomCrystal2;
        console.log(totalScore);
        if (totalScore === randomCrystalScore) {
            win();
        } else if (totalScore > randomCrystalScore) {
            lose();
        }

    })
    $("#crystal3").on("click", function () {
        totalScore += randomCrystal3;
        console.log(totalScore);
        if (totalScore === randomCrystalScore) {
            win();
        } else if (totalScore > randomCrystalScore) {
            lose();
        }

    })
    $("#crystal4").on("click", function () {
        totalScore += randomCrystal4;
        console.log(totalScore);
        if (totalScore === randomCrystalScore) {
            win();
        } else if (totalScore > randomCrystalScore) {
            lose();
        }

    })


})