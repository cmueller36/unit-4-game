//////////////////////////////    declare variables /////////////////////////////////////////////////

//random number selected
var randNumber = Math.floor(Math.random() * 120 + 19);
//display random number
$("#random-number").html(randNumber);

//sum of clicked variables
var total = 0;



///////////////////////////  Put the images and attributes of the crystals on the page /////////////////
var crystals = $("#crystals");

//number array for value of image
var numberOptions = [10, 5, 3, 7];
//image location array
var myCrystalImages = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"]


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
}

////////////////////////////////////// UX for the images and put the value against the images ///////////////////
crystals.on("click", ".crystal-image", function () {
    //set the crystalValue attribute to the selected crystal value
    var crystalValue = ($(this).attr("data-crystalvalue"));
    //format crystalValue into an integer
    crystalValue = parseInt(crystalValue);
    //add the clicked values to total variable
    total += crystalValue;
    //show total on the page
    $("#user-score").html(total);

    //alert for won
    if (total === randNumber) {
        alert("You Won!");
    }

    //alert for lost
    if (total > randNumber) {
        alert("You Lost!");
    }
});





