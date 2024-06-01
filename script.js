let userScore = 0;
let AIScore = 0;

const choices = document.querySelectorAll(".option");
const msg = document.querySelector("#msg");
const userScoreP = document.querySelector("#user-count");
const AIScoreP = document.querySelector("#AI-count");

const genAIOption = () => {
    const choices = ["rock", "paper", "scissors"];
    const randmIdx = Math.floor(Math.random() * 3);
    return choices[randmIdx];
};

const drwGame = () => {
    msg.innerText = "Draw!!!. Try again.."
    msg.style.backgroundColor = "antiquewhite";
};

const showWin = (userWin, userChoice, AIChoice) => {
    if(userWin) {
        userScore++;
        userScoreP.innerText = userScore;
        msg.innerText = `Congratulation!!! U Win. Your ${userChoice} beats ${AIChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        AIScore++;
        AIScoreP.innerText = AIScore;
        msg.innerText = `oh! U lost. ${userChoice} beats Your ${AIChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const AIChoice = genAIOption();

    if (userChoice === AIChoice) {
        drwGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = AIChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = AIChoice === "scissors" ? false : true;
        } else {
            userWin = AIChoice === "rock" ? false : true;
        }
        showWin(userWin, userChoice, AIChoice);
    }
};

choices.forEach((option) => {
    option.addEventListener("click", () => {
        const userChoice = option.getAttribute("id");
        playGame(userChoice);
    });
});