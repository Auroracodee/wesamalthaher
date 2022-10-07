window.onbeforeunload = function() {
    return 'Are you sure that you want to leave this page?';
};

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}