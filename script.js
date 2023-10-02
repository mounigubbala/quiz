let time=10;
const questions=[
    {
        question: "What does HTML stand for? ",
        answers: [
            {text:"Home tool markup language",correct:false},
            {text:"Hypertext markup language",correct:true},
            {text:"Home and tool message language",correct:false},
            {text:"Hypertext make language",correct:false},]
    
           
    },
    {
        question: "What does CSS stand for?",
        answers:[
            {text:"Cascading Style Sheets",correct:true},
            {text:"Creative style sheets",correct:false},
            {text:"Commanding style sheets",correct:false},
            {text:"Copy sheet style",correct:false},]
        
        
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        answers:[
            {text:"heading",correct:false},
            {text:"h1",correct:true},
            {text:"h6",correct:false},
            {text:"head",correct:false},

        ]
       
    },
    {
        question: "Which HTML tag is used to define an internal style sheet? ",
        answers:[
            {text:"script",correct:false},
            {text:"br",correct:false},
            {text:"style",correct:true},
            {text:"css",correct:false},

        ]
    },
    {
        question: "How do you write \"Hello World\" in an alert box? ",
        answers:[
            {text:"alert('Hello World');",correct:true},
            {text:"alertmsg('Hello World');",correct:false},
            {text:"msg('Hello World');",correct:false},
            {text:"al('Hello World');",correct:false},

        ]

    }
];


const questionElement=document.getElementById("question");
const Answer=document.getElementById("answer");
const nextBUTTON =document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;




function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBUTTON.innerHTML="NEXT";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        Answer.appendChild(button);
        
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);;
    });
}

function resetState(){

    nextBUTTON.style.display="none";
    while(Answer.firstChild){
        Answer.removeChild(Answer.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(Answer.children).forEach(button =>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBUTTON.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML='you scored '+score+' out of '+ questions.length+'!';
    nextBUTTON.innerHTML="play Again";
    nextBUTTON.style.display="block";
}

function handleNextButton(){
    
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
       
    }
    else{
        showScore();
    }
}
nextBUTTON.addEventListener("click",()=>{
    if(currentQuestionIndex <questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();