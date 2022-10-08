function goodbye(e) {
    if (!e) e = window.event;
    //e.cancelBubble is supported by IE - this will kill the bubbling process.
    e.cancelBubble = true;
    e.returnValue = 'You sure you want to leave?'; //This is displayed on the dialog

    //e.stopPropagation works in Firefox.
    if (e.stopPropagation) {
        e.stopPropagation();
        e.preventDefault();
    }
}
window.onbeforeunload = goodbye;

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode != 46 && charCode != 45 && charCode > 31 &&
        (charCode < 48 || charCode > 57))
        return false;
    return true;
}

var today = new Date().toISOString().split('T')[0];
document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);



form.addEventListener('submit', (e) => {
    let myForm = document.getElementById("#myform");
let submitButton = document.getElementById("#submit");

if (myForm.requestSubmit) {
    if (submitButton) {
        myForm.requestSubmit(submitButton);
    } else {
        myForm.requestSubmit();
    }
} else {
    myForm.submit(alert("Form Successfully Completed"));
    return true;
    }
    e.preventDefault();
})
