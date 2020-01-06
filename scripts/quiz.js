const button = document.getElementById("buttonLightUp");
const textBoxCentral = document.getElementsByClassName("textBoxCentral");
// przycisk obliczający ile dobrych odpowiedzi zaznaczono
const submitButton = document.getElementById("submit");
// wybranie wszystkich dobrych odpowiedzi
const correctAnswer = document.getElementsByClassName("answer");

//Alert informujący o czasie
alert("Uwaga, na rozwiązanie Quizu masz tylko 30 sekund!");
//Po 10 sekundach uruchamiana jest funkcja timeUp()
setTimeout(timeUp, 30000)

//Po wciśnięci przycisku rozjaśnienia zmieniane są kolory
button.addEventListener('click', function(e){
    document.body.style.backgroundColor = "white";
    textBoxCentral[0].style.background = "white";
    textBoxCentral[0].style.color = "black";

});
//Obliczenie wyniku
submitButton.addEventListener('click', function(e){
    var sum = 0;
    for(let i = 0; i<4; i++){
        if(correctAnswer[i].checked)
            sum++;
    }
    var result = sum/4*100;
    alert(`Twój wynik to ${result}%!`);
});
//Przekierowanie na stronę główną po zadanym czasie
function timeUp(){
    alert("Czas się skończył! Przekierowywanie na stronę główną...");
    window.location.href="../index.html";

}
