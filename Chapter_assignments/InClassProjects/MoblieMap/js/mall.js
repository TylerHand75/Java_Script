
descriptions = {
    "st01": "Description of store 01. It can be the long.",
    "st02": "Description of store 02. It can be the long.",
    "st03": "Description of store 03. It can be the long.",
    "st04": "Description of store 04. It can be the long.",
    "st05": "Description of store 05. It can be the long.",
    "st06": "Description of store 06. It can be the long.",
    "st07": "Description of store 07. It can be the long.",
    "st08": "Description of store 08. It can be the long.",
    "st09": "Description of store 09. It can be the long.",
    "st10": "Description of store 10. It can be the long.",
    "st11": "Description of store 11. It can be the long.",
    "st12": "Description of store 12. It can be the long.",
    "st13": "Description of store 13. It can be the long.",
    "st14": "Description of store 14. It can be the long.",
    "st15": "Description of store 15. It can be the long.",
    "st16": "Description of store 16. It can be the long.",
    "st17": "Description of store 17. It can be the long.",
    "st18": "Description of store 18. It can be the long.",
    "st19": "Description of store 19. It can be the long.",
    "st20": "Description of store 20. It can be the long.",
    "st21": "Description of store 21. It can be the long.",
    "st22": "Description of store 22. It can be the long.",
    "st23": "Description of store 23. It can be the long.",
    "st24": "Description of store 24. It can be the long.",
    "st25": "Description of store 25. It can be the long.",
    "st26": "Description of store 26. It can be the long.",
    "st27": "Description of store 27. It can be the long.",
    "st28": "Description of store 28. It can be the long.",
    "st29": "Description of store 29. It can be the long.",
    "st30": "Description of store 30. It can be the long.",
    "st31": "Description of store 31. It can be the long.",
    "st32": "Description of store 32. It can be the long.",
    "st33": "Description of store 33. It can be the long.",
    "st34": "Description of store 34. It can be the long.",
    "st35": "Description of store 35. It can be the long.",
    "st36": "Description of store 36. It can be the long.",
    "sa": "Description of the mall goes here......... It can be the long.",
    "ds": "Description of Department stores ......... It can be the long.",
    "fc": "Description of the Food court ............ It can be the long.",
    "ww": "Description of the Women's wear .......... It can be the long.",
    "mw": "Description of Mens Wear ................. It can be the long.",
    "tg": "Description of the Toys and gifts stores.. It can be the long.",
    "ss": "Description of Shoe Stores ............... It can be the long."
}
titles = {
    "st01": "I am of store 01.",
    "st02": "I am of store 02.",
    "st03": "I am of store 03.",
    "st04": "I am of store 04.",
    "st05": "I am of store 05.",
    "st06": "I am of store 06.",
    "st07": "I am of store 07.",
    "st08": "I am of store 08.",
    "st09": "I am of store 09.",
    "st10": "I am of store 10.",
    "st11": "I am of store 11.",
    "st12": "I am of store 12.",
    "st13": "I am of store 13.",
    "st14": "I am of store 14.",
    "st15": "I am of store 15.",
    "st16": "I am of store 16.",
    "st17": "I am of store 17.",
    "st18": "I am of store 18.",
    "st19": "I am of store 19.",
    "st20": "I am of store 20.",
    "st21": "I am of store 21.",
    "st22": "I am of store 22.",
    "st23": "I am of store 23.",
    "st24": "I am of store 24.",
    "st25": "I am of store 25.",
    "st26": "I am of store 26.",
    "st27": "I am of store 27.",
    "st28": "I am of store 28.",
    "st29": "I am of store 29.",
    "st30": "I am of store 30.",
    "st31": "I am of store 31.",
    "st32": "I am of store 32.",
    "st33": "I am of store 33.",
    "st34": "I am of store 34.",
    "st35": "I am of store 35.",
    "st36": "I am of store 36.",
    "sa": "Welcome to the jungle",
    "ds": "Department Stores",
    "fc": "Resturaunts",
    "ww": "Women's fashions",
    "mw": "Men's cloth",
    "tg": "Toys and gifts",
    "ss": "Feet jackets"
}



console.log("js is here... watching... waiting...");

$(document).ready(function () {
    console.log("jq is not far behind...")

    // <a class="dot" style="left: 135px; top: 160px;"></a>

    /*
    $("#map").click(function(e){
        var pos = '<a class="dot" style="left:' + (e.offsetX - 12)
         + 'px; top:' 
         + (e.offsetY - 12)
         +'px; "></a>';
        console.log(pos);
    });
    */
    $("#storecategories").change(function(){

        var selectedCat = $("#storecategories option:selected").val();
        console.log(selectedCat);

        // deselecet any seleced block 
        $("#map a.dot").removeClass("selected");
        // should we show all dots
        if(selectedCat == "sa"){
            $("#map a.dot").fadeIn();
        }else {
            $("#map a.dot[cat !='" + selectedCat + "']").fadeOut();
            $("#map a.dot[cat ='" + selectedCat + "']").fadeIn();
        }
        showDescription(selectedCat);

    });
    
    $("#map a.dot").click(function () {
        $("#map a.dot").removeClass("selected");
        $(this).addClass("selected");

        // which dot was clicked?
        var store = $(this).attr("store");
        //console.log("store: " + store);

        showDescription(store);

    });

    function showDescription(descriptionToShow) {
        $("#descriptionBox p").text(descriptions[descriptionToShow]);
        $("#descriptionBox h4").text(titles[descriptionToShow]);
        $("#descriptionBox img").attr("src", "images/" + descriptionToShow + ".jpg");
    }
});
