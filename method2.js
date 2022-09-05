let questionsList = [

    new question("Number of primitive data types in Java are?",
    ["6","7","8","9"],"8"),

    new question("What is the size of float and double in java?",
    ["32 & 64","32 & 32","64 & 64","64 & 32"],"32 & 64"),

    new question("Automatic type conversion is possible in which of the possible cases?",
    ["byte to int","int to long","long to int","short to int"],"int to long"),

    new question("When an array is passed to a method, what does the method receive?",
    ["Reference of Array","Copy of array","Length of array","First Element"],"Reference of Array"),

    new question("Arrays in java are-",
    ["Object References","Object","Primitive Datatype","None"],"Object")

];

//create constructor function for QUIZ
function Quiz(questions){
    this.questions=questions;
    this.score=0;
    this.qIndex=0;
}
let quiz = new Quiz(questionsList);

//Prototype of Quiz (check if quiz ended)
Quiz.prototype.isQuizEnded = function(){
    return this.qIndex === this.questions.length;
}

//Prototype of Quiz (get question by index)
Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.qIndex];
}

//Prototype of Quiz (validate answer)
Quiz.prototype.checkOptionWithAnswer = function(option){
    if(this.getQuestionByIndex().ans === option){
        this.score++;
        console.log(this);
    }
    this.qIndex++;
}

//create constructor function for QUESTION
function question(qText,options,ans){
    this.qText=qText;
    this.options =options;
    this.ans=ans;    
}

//bind event to button, check answer & load next Q
function handleChoiceButton(btnId,option){
    let btn = document.getElementById(btnId);
    btn.onclick = function(){
        //check answer & load next Q
        quiz.checkOptionWithAnswer(option);
        loadQuestion();
    }
    
}

function loadQuestion(){
  //If quiz ended ShowScores else show Next Question
    if(quiz.isQuizEnded()){
        showScores();
    }else{
        let question = document.getElementById("question");
        question.innerHTML = quiz.getQuestionByIndex().qText;

        let options = quiz.getQuestionByIndex().options;
        for(let i=0;i<options.length;i++){
            let eachOption = document.getElementById("choice"+i);
            eachOption.innerHTML = options[i];
            handleChoiceButton("btn"+i,options[i]);
        }
        showProgress();
    }       
}

loadQuestion();

function showScores(){
    let result = "<h1>Result</h1>";
    result += "<h2 id='score'> Your Score is " +quiz.score+" & Percentage is "+(quiz.score/quiz.questions.length*100)+"%</h2>";
    let quizEle = document.getElementById("quiz");
    console.log(result);
    quizEle.innerHTML = result;
}

function showProgress(){
    let progEle = document.getElementById("progress");
    progEle.innerHTML = "Question "+(quiz.qIndex+1) + " of "+quiz.questions.length;
}