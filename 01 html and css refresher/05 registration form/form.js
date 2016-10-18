/**
 * Created by rickypuorro on 10/14/16.
 */




function radiocolor(color) {
        if (color == "blue") {
            document.body.style.backgroundColor = "#005695";
            return false;

        } else if (color == "teal") {
            document.body.style.backgroundColor = "#1dbcbd";
            return false;
        } else if (color == "slate") {
            document.body.style.backgroundColor = "#485b6e";
            return false;

        } else if (color == "cadmium") document.body.style.backgroundcolor = "yellow";
    }

function Submit() {
        var fullname = document.form.Name.value.length,
            email = document.form.Email.value.length,
            password = document.form.Password.value.length;


        if (fullname < 2) {
            document.form.Name.focus();
            document.getElementById("errorBox").innerHTML = "name must be longer than 2 characters";
            return;
        }

        if (email < 5) {
            document.form.Email.focus();
            document.getElementById("errorBox").innerHTML = "email must be longer than 5 characters";
            return;
        }

        if (password < 10) {
            document.form.Password.focus();
            document.getElementById("errorBox").innerHTML = "password must be longer than 10 characters";
            return;
        }
        if (document.form.radiobutton[0].checked == false && document.form.radiobutton[1].checked == false && document.form.radiobutton[2].checked ==
            false && document.form.radiobutton[3].checked == false) {
            document.getElementById("errorBox").innerHTML = "pick a color";
            return;
        }
        if (fullname != '' && email != '' && password != '') {
            document.getElementById("message").innerHTML = "form submitted successfully";
        }}

function showMessage(){
    var message = document.getElementById("fullname").value;
    document.getElementById('write_message').innerHTML= message;
    visible();
    return false;
}