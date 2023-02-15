$(document).ready(function() {
 $("#dashboard").hover(
    function(){
        $(this).stop().animate(
            {
                left: "0",
                backgroundColor: "rgb(27,45,94)"
            },
            500,
            "easeInSine"
        );
    },
function(){
    $(this).stop().animate(
        {
            left: "-92px",
            backgroundColor: "rgb(255,211,224)"
        },1500,
        "easeOutBounce"
    );


 }
 );
}); // end ready