var field1,
    field2,
    operator,
    operatorSign,
    result,
    resultArray;
var score = 0;
var total = 0;

function playGame(){
    field1 = randomNumber(20,50);
    field2 = randomNumber(20,50);
    operator = randomNumber(1,2);

    switch(operator){
        case 1: result = field1 + field2;
                operatorSign = "+";
                break;
        case 2: result = field1 - field2;
                operatorSign = "-";
                break;
    }

    resultArray = [];

    for(var i = 0; i < 3 ; i++){
        resultArray.push(randomNumber(-30,100))
    }
    resultArray.push(result);
    resultArray.sort((a,b)=> 0.5 - Math.random())
    
    document.getElementById("field1").innerHTML = field1;
    document.getElementById("operator").innerHTML = operatorSign;
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