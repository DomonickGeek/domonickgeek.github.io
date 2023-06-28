//JavaScript File used for handling the quiz feature on the home page (index.html)

//enables toggling between quiz being shown and hidden. Resets the resultsDisplay elements text and color.
//Is called by the face image
function runQuiz(){
    var resultText = document.getElementById("resultsDisplay");
    resultText.textContent = "";
    resultText.style="color:black";
    var container = document.getElementById("quizContainer");
    if(container.hidden === true){
        container.hidden = false;
    }
    else if(container.hidden === false){
        container.hidden = true;
    }
}

//Displays a correct or incorrect prompt based off what button element the user has selected when the submit button is pressed
//Is called by the submit button
function checkAnswer(){
    var resultText = document.getElementById("resultsDisplay");
    if(document.getElementById("careerChoice2").checked){
        resultText.textContent = "Correct";
        resultText.style="color:green";
    }else{
        resultText.textContent = "Incorrect";
        resultText.style="color:red";
    }
}