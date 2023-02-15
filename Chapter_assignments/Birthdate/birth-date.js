$(document).ready(function() {
    $('#dob').datepicker({
        changeMonth : true,
        changeYear : true,
        yearRange : '-1120:+0',
        maxDate : 0,
        dateFormat : 'm-dd-yy'
        });
}); // end ready