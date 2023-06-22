function runQuiz(){
    var container = document.getElementById("quizContainer");
    if(container.style.visibility === "hidden"){
        container.style.visibility = "visible";
    }
    else if(container.style.visibility === "visible"){
        container.style.visibility = "hidden";
    }
}

function checkAnswer(){

}