var field1 = randomNumber(1,100);
var field2 = randomNumber(1,100);
var result = field1 + field2;
var resultArray = [];

var message;

function playGame(){
    
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
}

function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function checkAnswer(option){
     message = document.getElementById("message");
     option.innerText == result ? rightAnswer(option) : wrongAnswer(option);
}

function rightAnswer(option){
    message.innerHTML = "Correct";
    message.className += " correct";
    option.className += " correct";
}

function wrongAnswer(option){
    message.innerHTML = "Incorrect";
    message.className += " incorrect";
    findCorrectAnswer();
    option.className += " incorrect";
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