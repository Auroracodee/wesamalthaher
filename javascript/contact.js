function handle_form_submission()
{
  alert('Form submitted successfully');
  return true;
}


function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode != 46 && charCode != 45 && charCode > 31 &&
        (charCode < 48 || charCode > 57))
        return false;
    return true;
}

 
 var today = new Date().toISOString().split('T')[0];
document.getElementsByName('setTodaysDate')[0].setAttribute('min', maxDate);
 


