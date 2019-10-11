var field1;
var field2;
var result;
var resultArray;
var score = 0;
var total = 0;

function playGame(){
    field1 = randomNumber(1,100);
    field2 = randomNumber(1,100);
    result = field1 + field2;
    resultArray = [];

    for(var i = 0; i < 3 ; i++){
        resultArray.push(randomNumber(2,200))
    }
    resultArray.push(result);
    resultArray.sort((a,b)=> 0.5 - Math.random())
    
    document.getElementById("field1").innerHTML = field1;
    document.getElementById("field2").innerHTML = field2;
    
    for(var i = 1 ; i <= 4 ; i++) {
        document.getElementById("option"+i).innerHTML = resultArray[i-1];
    }
    document.getElementById("score").innerHTML = `${score} / ${total}` ;
}

function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function checkAnswer(option){
    total++;
     option.innerText == result ? rightAnswer(option) : wrongAnswer(option);
}

function rightAnswer(option){
   score++;
   option.className += " correct";
   document.getElementById("score").innerHTML = `${score} / ${total}` ;
}

function wrongAnswer(option){
    document.getElementById("score").innerHTML = `${score} / ${total}` ;
    option.className += " incorrect";
    findCorrectAnswer();
   }

function findCorrectAnswer(){
    var options = document.getElementsByClassName("option");
    var answer;
    for(var i = 0 ; i < options.length ; i++ ){
        if(options[i].innerHTML == result)
        {
        answer = options[i];
        break;
        }
    }
    answer.className += " answer";
}

function playAgain(){
    playGame();
    for(var i = 1 ; i <= 4 ; i++) {
        document.getElementById("option"+i).className = "option";
    }
}