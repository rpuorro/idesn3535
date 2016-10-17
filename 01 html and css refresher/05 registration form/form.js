/**
 * Created by rickypuorro on 10/14/16.
 */






// function checkForm(form) {
//     if (form.name.value == "") {
//         alert("error!");
//         form.inputfield.focus();
//         return false;
//     }
//     var re = /^ [ \w ] + $/;
//
//     if (!re.test(form.inputfield.value))
//         alert("error!");
//     form.inputfield.focus();
//     return false;
// }
//
function testResults (form) {
    var TestVar = form.fullname.value;
    alert ("You typed: " + TestVar);

    }
function Submit() {
    var fullname = document.form.Name.value.length,
        email = document.form.Email.value.length,
        password = document.form.Password.value.length;

    if (fullname <2) {
        document.form.Name.focus();
        document.getElementById("errorBox").innerHTML = "name must be longer than 2 characters";
        return false;
        var TestVar = form.fullname.value;
        alert ("You typed: " + TestVar);
    }

    if (email <5) {
        document.form.Email.focus();
        document.getElementById("errorBox").innerHTML = "email must be longer than 5 characters";
        return false;
    }

    if (password <10) {
        document.form.Password.focus();
        document.getElementById("errorBox").innerHTML = "password must be longer than 10 characters";
        return false;
    }
    if(document.form.radiobutton[0].checked == false && document.form.radiobutton[1].checked == false && document.form.radiobutton[2].checked == false && document.form.radiobutton[3].checked == false){
        document.getElementById("errorBox").innerHTML = "pick a color";
        return false;
    }
    if (fullname !='' && email !='' && password !='') {
        document.getElementById("formcontent").innerHTML = "form submitted successfully";

    }
}


