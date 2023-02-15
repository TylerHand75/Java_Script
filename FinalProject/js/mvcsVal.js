$(document).ready(function(){

    $(".selected").click(function(){
        $(this).removeClass("selected");
    });

    $(".unselected").click(function(){
        $(this).addClass("selected");
        $(this).removeClass("unselected");
    });



    $('.rating').buttonset();

    $(".valorantmath").click(function(){
        var gunCost = document.getElementById("validateGunCost").value;
        var shieldCost = document.getElementById("validateShieldCost").value;

        var gunCost = parseInt(gunCost);
        var shieldCost = parseInt(shieldCost);

        var totalCost = gunCost + shieldCost;
        alert("Your total cost is " + totalCost);

    });
    $(".valorantmath2").click(function(){
        var gunCost2 = document.getElementById("validateGun2Cost").value;
        var shieldCost2 = document.getElementById("validateShield2Cost").value;

        var gunCost = parseInt(gunCost2);
        var shieldCost = parseInt(shieldCost2);

        var totalCost = gunCost + shieldCost;
        alert("Your total cost is " + totalCost);

    });
    $(".valorantmath3").click(function(){
        var gunCost3 = document.getElementById("validateGun3Cost").value;
        var shieldCost3 = document.getElementById("validateShield3Cost").value;

        var gunCost = parseInt(gunCost3);
        var shieldCost = parseInt(shieldCost3);

        var totalCost = gunCost + shieldCost;
        alert("Your total cost is " + totalCost);

    });

});