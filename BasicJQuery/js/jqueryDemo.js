console.log("js works");


//One way for jquery
// function readyHandler() {
//     console.log("jQuery is ready");
// }

// $(document).ready(readyHandler);

//other way
$(document).ready(function(){           //anonymous function
    console.log("jquery ready");

    // jquery selectors 
    // what the jquery object will affect 

    // jquery object -> $
    // jquery object constructor -> $()
    // a selector is what you put into the parentheses 

    // basic selectors: tag/element, class, or id 

    $("#message").css("color", "red");//id selector

    $(".boldText").css("font-weight", "bold"); // class selector

    $("p").css("fontVariant", "small-caps");



    // advanced selectors - 
    $("#sectionA p").css("font-style", "italic");// decendent selector
    $("#sectionA > p").css("background-color", "yellow");//child selector
    $("#sectionA > > p").css("background-color","blue"); // childs decendent selector

    $("input + label").css("font-size","1em");
    $("input + label").css("color","hotpink");//adjacent siblings

    // Attribute selectors
    $("img[title]").css("border","thick double green");//attribute exists
    $("img[title='no image']").css("border","thick double orange");//attribute equals
    $("img[title^='b']").css("background-color","purple");//attribute begins with
    $("img[title$='image']").css("width","350px");// attribute ends with
    $("img[title *='image']").css("height","325px");// atribute contains
    $("img:not([title *='no image'])").css("background-color","pink");//attrubute not contains


    
    $("tr:odd").css("background-color","#afD").css("color","white");
    $("tr:even").css("background-color","#abc").css("color","white");
    //odd and even
    $("tr:first").css("background-color","#ffeedd").css("color", "black");//first element

    $("td:contains(b)").css("background-color","brown");//elements contains stuff

    $("td:has(c)").css("background-color","green");

    //:hidden
    //:visible

    $("#message").text(" Hola, cheese boi!");
    $("#message").append(" Why you a cheesy boiiiiiiiii?");
    $("#message").prepend(" In (bad) cheesian: ");
    $("#message").addClass("fancyText");
 


    $("").css("","");

});


