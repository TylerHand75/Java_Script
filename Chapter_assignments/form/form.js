$(document).ready(function () {
    $("#departure").datepicker({

        mindate: 0,
        maxdate: "+1y"
    });
    $('#airport').autocomplete({ source : airports});
    $('#meal').selectmenu({
        width: 200
    });
    $('#rating').buttonset();
    $('#seatTypes').buttonset();
    $('#next').button({
        icon:{
            secondary : 'ui-icon-circle-arrow-e'
        }
    });
}); // end ready