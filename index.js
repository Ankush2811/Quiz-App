var readlineSync = require("readline-sync");

const quizList = [
  {
    question: "Where do I live? ",
    answer: "Bhilai",
  },
  {
    question: "My favorite food? ",
    answer: "Pizza",
  },
  {
    question: "Where do I work? ",
    answer: "Pune",
  },
  {
    question: "What is my favourite cartoon character? ",
    answer: "Shinchan",
  },
  {
    question: "What is my profession? ",
    answer: "Software Developer",
  },
];

let highScores = [
  {
    name: "Ankush",
    score: 5,
  },
  {
    name: "Anuj",
    score: 4,
  },
  {
    name: "Ank",
    score: 4,
  },
];

let score = 0

var playerName = readlineSync.question("What's your name? ");
console.log("Welcome to the quiz: " + playerName );
console.log("----------------------------------------");

function play(question,answer){
  let userAns = readlineSync.question(question);
  if (userAns === answer) {
    console.log("Correct Answer! ");
    score++;
  } else {
    console.log("Wrong Answer! ");
  }
}

for(var i=0; i<quizList.length; i++){
  play(quizList[i].question, quizList[i].answer)
}

console.log("\n")
highScores.map((score) => console.log(score.name, " : ", score.score));

console.log("\n")
console.log("YAY!! You scored " + score + " points!")

