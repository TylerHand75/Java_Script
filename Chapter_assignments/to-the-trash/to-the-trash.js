$(document).ready(function () {
    ('#photos img').draggable({
        revert: "invalid",
        start: function (event, ui) {
            ui.helper.css('transform', 'rotate(5deg) scale(1.5)');
        },
        stop: function (event, ui) {
            ui.helper.css('transform', 'rotate(0deg) scale(1)');
        },
        zIndex: 100
    });
    $('#trashcan').droppable({
        activeClass: 'highlight',
        drop: function (event, ui) {
            ui.helper.hide('explode');
            $(this).attr('src', './_images/trashcan-full-icon.png');
        }
    });
}); // end ready