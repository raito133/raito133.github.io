const button = document.getElementById("buttonLightUp");
const textBoxTitle = document.getElementsByClassName("textBoxTitle");
//Wyświetlanie reklamy co 10 sekund
var smartAd = setInterval(smartAd, 10000);
// Zmiana kolorów po kliknięci
button.addEventListener('click', function(e){
    document.body.style.backgroundColor = "white";
    textBoxTitle[0].style.background = "white";
    textBoxTitle[0].style.color = "black";
});
//Komunikat reklamy
function smartAd(){
    alert("REKLAMA! Z okazji roku 2020 gra Super Mario Maker 2 jest przeceniona o 30%! Udaj się do najbliższego sklepu i sprawdź sam! REKLAMA!");
}