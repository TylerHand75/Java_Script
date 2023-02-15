$(document).ready(function() {
 
$("#open"),click(function(evt){
    evt.preventDefault();
    if  ($("#login form").is("hidden")){
        $("#login form").fadeIn(300);
        $(this).addClass("close");

    }else{
        $("#login form").fadeOut(300);
        $(this).addClass("close");
    }
});


}); // end ready