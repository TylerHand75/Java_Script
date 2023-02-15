$(document).ready(function () {
    $('#confirm').dialog({
        modal: true,
        autoOpen: false,
        buttons: {
            "Confirm": function () {
                $('#robot').effect('explode');
                $(this).dialog('close');
            },
            "Cancel": function () {
                $(this).dialog('close');
            }
        }
    });
    $('#robot').click(function () {
        $('#confirm').dialog('open');
    }); // end click
}); // end ready