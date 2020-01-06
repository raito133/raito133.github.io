const button = document.getElementById("buttonLightUp");
const textBoxCentral = document.getElementsByClassName("textBoxCentral");
//Zmienianie koloru po kliknięciu
button.addEventListener('click', function(e){
    document.body.style.backgroundColor = "white";
    textBoxCentral[0].style.background = "white";
    textBoxCentral[0].style.color = "black";

});