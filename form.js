function formValidation(){
    var fname = document.forms["contact-form"]["fname"].value;
    var lname = document.forms["contact-form"]["lname"].value;
    var text = document.forms["contact-form"]["comments"].value;
    if (fname = ""){
        alert("First Name Missing");
        return false;
    } else if (lname = ""){
        alert("Last Name Missing");
        return false;
    } else if (text = ""){
        alert("No Message Written")
        return false;
    }
}