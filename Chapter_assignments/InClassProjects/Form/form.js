$(document).ready(function() {
    $(":text:first").focus();
    $("#paypal").click(function(){
        $("#creditCard input").prop("disabled",true).css("backgroundColor","#CCC");
        $("#creditCard label").css("color", "#BBB");
    });
    $("#visa, #mastercard").click(function(){
        $("#creditCard input").prop("disabled",false).css("backgroundColor","");
        $("#creditCard label").css("color", "");
    });
    $("#hideShip").click(function(){
        if ($(this).prop("checked")){
            $("#shipping").slideUp("fast");
        }else {
            $("#shipping").slideDown("fast");
        }
    });
}); // end ready