// 1. js파일에서 접근해야하는 html dom 요소 선언
const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

const resultText = document.getElementById("display-result");

const myScoreText = document.querySelector('.my-score');
const computerScoreText = document.querySelector('.computer-score');

const resetBtn = document.getElementById("reset-button");

const modeBtn = document.getElementById("mode-button");
const bodyMode = document.querySelector('body');

// 2. 이벤트 설정
rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);

resetBtn.addEventListener("click", resetGame);

modeBtn.addEventListener("click", changeMode);

// 3. displayMyChoice 함수 설정
function displayMyChoice(e) {
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target.className;

    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon;

    start(clickedBtn);
}

// 4. 랜덤으로 뱉는 컴퓨터
function getComChoice() {
    const randomValue = {
        0 : ["rock", "fa-regular fa-hand-back-fist"],
        1 : ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2 : ["paper", "fa-regular fa-hand"],
    };

    const randomIndex = Math.floor(Math.random() * 3);

    return randomValue[randomIndex];
}

// 5. 컴퓨터의 선택이 화면에 보이도록 하는 함수
function displayComChoice(result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

// 6. start 함수
function start(myChoice) {
    let resultArray = getComChoice();
    displayComChoice(resultArray);

    let result = getResult(myChoice, resultArray[0]);

    updateScore(result);
}

// 7. 승부결과 함수
function getResult(myChoice, comChoice) {
    let result = "lose";

    if(myChoice == comChoice) {
        result = "draw";
    }
    else if(myChoice == "rock" && comChoice == "scissors" ||
            myChoice == "scissors" && comChoice == "paper" ||
            myChoice == "paper" && comChoice == "rock") {
        result = "win";
    }

    resultText.innerText = result;
    return result;
}

// 8. 점수판 구현
let myScore = 0;
let computerScore = 0;

myScoreText.innerText = myScore;
computerScoreText.innerText = computerScore;

function updateScore(result) {
    if(result == "win") {
        myScore++;
    }
    else if(result == "lose") {
        computerScore++;
    }

    myScoreText.innerText = myScore;
    computerScoreText.innerText = computerScore;
}

// 9. 게임 초기화 함수
function resetGame() {
    myHandText.innerText = null;
    myHandIcon.className = null;

    computerText.innerText = null;
    computerIcon.className = null;

    resultText.innerText = null;

    myScore = 0;
    computerScore = 0;

    myScoreText.innerText = myScore;
    computerScoreText.innerText = computerScore;
}

// 10. 다크모드 구현
let darkMode = 0;
modeBtn.innerText = "🌙 Dark Mode"

function changeMode() {
    if(darkMode == 0) {
        darkMode = 1;
        modeBtn.innerText = "☀️ Light Mode";
    }
    else {
        darkMode = 0;
        modeBtn.innerText = "🌙 Dark Mode";
    }

    bodyMode.classList.toggle("dark-mode");
}