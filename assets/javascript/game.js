//////////////////////////////    declare variables /////////////////////////////////////////////////
//generate new crystal numbers
var crystal1Number = Math.floor(Math.random() * 12 + 1);
var crystal2Number = Math.floor(Math.random() * 12 + 1);
var crystal3Number = Math.floor(Math.random() * 12 + 1);
var crystal4Number = Math.floor(Math.random() * 12 + 1);

///////////////////////////  Put the images and attributes of the crystals on the page /////////////////
var crystals = $("#crystals");

//number array for value of image
var numberOptions = [crystal1Number, crystal2Number, crystal3Number, crystal4Number];
//image location array
var myCrystalImages = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"]


//sum of clicked variables
var userWins = 0;
var userLosses = 0;
var total = 0;

/////////////////////////////////////////////////////////////////////     restart game function ////////////////////////////////////////////////////////////////////////
function restartGame() {
    if (confirm("Would you like to play again?")) {
        //yes
        //generate new crystal numbers
        crystal1Number = Math.floor(Math.random() * 12 + 1);
        crystal2Number = Math.floor(Math.random() * 12 + 1);
        crystal3Number = Math.floor(Math.random() * 12 + 1);
        crystal4Number = Math.floor(Math.random() * 12 + 1);
        numberOptions = [crystal1Number, crystal2Number, crystal3Number, crystal4Number];
        $("#crystals").empty();
        $("#user-score").empty();
        $(".crystal-image").empty();
        for (var i = 0; i < numberOptions.length && myCrystalImages.length; i++) {
            // each iteration creates a new div
            var imageCrystal = $("<img>");

            //each crystal gets a class
            imageCrystal.addClass("crystal-image");

            //each crystal is given an image
            imageCrystal.attr("src", myCrystalImages[i]);

            //each crystal is assigned an attribute number from array
            imageCrystal.removeAttr("data-crystalvalue", numberOptions[i]);

            //add each image to the page
            crystals.append(imageCrystal);
        }
        startgame();
    }
    else {
        //no
        alert("Thanks for playing ! :)")
    }
};

////////////////////////////////////// start game /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function startgame() {
    crystal1Number = Math.floor(Math.random() * 12 + 1);
    crystal2Number = Math.floor(Math.random() * 12 + 1);
    crystal3Number = Math.floor(Math.random() * 12 + 1);
    crystal4Number = Math.floor(Math.random() * 12 + 1);
    numberOptions = [crystal1Number, crystal2Number, crystal3Number, crystal4Number];
    $("#crystals").empty();
    $("#user-score").empty();
    $(".crystal-image").empty();
    //loop to go through the crystal options
    for (var i = 0; i < numberOptions.length && myCrystalImages.length; i++) {

        // each iteration creates a new div
        var imageCrystal = $("<img>");

        //each crystal gets a class
        imageCrystal.addClass("crystal-image");

        //each crystal is given an image
        imageCrystal.attr("src", myCrystalImages[i]);

        //each crystal is assigned an attribute number from array
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        //add each image to the page
        crystals.append(imageCrystal);
    };
    total = 0;
    //random number selected
    randNumber = Math.floor(Math.random() * 120 + 19);
    //display random number
    $("#random-number").html(randNumber);
};

///////////////////////////////////           on click function          //////////////////////////////////////////////

crystals.on("click", ".crystal-image", function () {
    //set the crystalValue attribute to the selected crystal value
    var crystalValue = ($(this).attr("data-crystalvalue"));
    console.log(crystalValue);
    //format crystalValue into an integer
    crystalValue = parseInt(crystalValue);
    //add the clicked values to total variable
    total += crystalValue;
    //show total on the page
    $("#user-score").html(total);

    //alert for won
    if (total === randNumber) {
        alert("You Won!");
        userWins++;
        var html1 = "<p>Wins:"+userWins+ "</p>";
        $("#wins").html(html1);
        restartGame();
    }

    //alert for lost //add loss to userLosses // display the losses // ask to restart game
    if (total > randNumber) {
        alert("You Lost!");
        userLosses++;
        var html2 = "<p>Losses: "+userLosses+ "</p>";
        $("#losses").html(html2);
        restartGame();
    };

});


startgame();












