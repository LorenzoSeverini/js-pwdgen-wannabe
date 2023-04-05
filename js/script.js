// Js intro first excercie

function generatePassword() {
    
    var name = prompt("What's your name?");
    var surname = prompt("what's your surname?");
    var color = prompt("what's your favorite color:");
    var passwordText = "name" + surname + color + "2023";
    document.getElementById("password").value = passwordText ;
}