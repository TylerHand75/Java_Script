console.log("JavaScript is working");

$(document).ready(function () {
    console.log("Jquery is ready");

    $("span.pq").each(function() {
        var quote = $(this).clone();
        quote.removeClass("pq");
        quote.addClass("pullquote");

        $(this).before(quote);
    });


});