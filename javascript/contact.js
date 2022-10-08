function form_success() {
  document.getElementById("myform").submit();
  document.getElementById("submit").innerHTML = "Sent!";
} else{
  function goodbye(e) {
    if (!e) e = window.event;
    e.cancelBubble = true;
    e.returnValue = 'Are you sure you want to leave?'; 
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
