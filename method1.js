let questionTag = document.querySelector("#question");

let button0 = document.getElementById("btn0");
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");

let choice0 = document.getElementById("choice0");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");

let progress= document.getElementById("progress");
let finalScore= document.getElementById("score");

let currQuestion = 0;
let score = 0;
let pointsPerQ = 1;
let correctAnswer = 0;

let quizList = [
    {
        question : "Which is the national bird of India ?",
        option0 : "Parakeet",
        option1 : "Hawk",
        option2 : "Vulture",
        option3 : "Peacock",
        answer : "3"
    },
    {
        question : "Which is the national Emblem of India ?",
        option0 : "Swasthik",
        option1 : "Lion Capital of Ashoka",
        option2 : "Ashoka Chakra",
        option3 : "Om",
        answer : "1"
    },
    {
        question : "Which is the national fish of India ?",
        option0 : "Cat Fish",
        option1 : "Piranha",
        option2 : "River Dolphine",
        option3 : "Guppy",
        answer : "2"
    },
    {
        question : "Which is the national Animal of India ?",
        option0 : "Lion",
        option1 : "Tiger",
        option2 : "Leopard",
        option3 : "Elephant",
        answer : "1"
    }
];

function loadQuestion(){

    const quiz=quizList[currQuestion];

    //load Question & options
    questionTag.innerText= quiz.question;
    choice0.innerText = quiz.option0;
    choice1.innerText = quiz.option1;
    choice2.innerText = quiz.option2;
    choice3.innerText = quiz.option3;

    //reset value attr of all buttons to 0
    for(var i=0;i<quizList.length;i++){
        document.getElementById("btn"+i).value = 0; 
    }
    //set value of answer button to 1
    document.getElementById("btn"+quiz.answer).value = 1;

    //update quiz progress
    progress.innerHTML = "Question "+(currQuestion+1)+" of "+quizList.length;
}

//add event listeners to buttons
button0.addEventListener('click',updateScore);
button1.addEventListener('click',updateScore);
button2.addEventListener('click',updateScore);
button3.addEventListener('click',updateScore);

function updateScore(e){
    var eTarget = e.target.value;
    var eTargetParent = e.target.parentElement.value;
    
    if(eTarget == 1 || eTargetParent == 1){
        score += pointsPerQ;
        correctAnswer++;
        console.log("Correct Answers ="+ correctAnswer+" & Score ="+ score);
    }
    
    currQuestion++;
    if(currQuestion < quizList.length){

        loadQuestion();
    }
    else{
        finalScore.innerText = "Your score is "+score+" ("+Math.floor((correctAnswer/(quizList.length))*100)+"% )";

    }    
}

loadQuestion();