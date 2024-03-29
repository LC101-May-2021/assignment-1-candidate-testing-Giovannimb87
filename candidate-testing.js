const input = require('readline-sync');
let theLine = "------------------------------------------------";
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "Holder Name";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "Sally Ride";
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? ",];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please, tell me your name. ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(`${i + 1}) ${questions[i]}`);
    console.log(theLine);
    console.log(`>>> Your answer: ${candidateAnswers[i]}`);
    console.log(`>>> Correct answer: ${correctAnswers[i]}`);
    console.log(theLine);
    console.log("");
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;

  for (let i = 0; i < 5; i++) {
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
      grade++;
    } else {
      continue;
    }
  }
  grade *= 20;
  if (grade > 79) {
    console.clear();
    console.log(`
                   
───────────────────████
───────────────────█████
───────────────────██████
───────────────────███████
──────────────────████████
──────────────────████████
─────────────────█████████
────────────────█████████
───────────────█████████
──────────────█████████
──────────────██████████████████
────────────█████████████████████
───────────███████████████████████
████████─██████████████████████████
████████─███████████████████████████
████████─████████████████████████████
████████─████████████████████████████
████████─████████████████████████████
████████─████████████████████████████
████████─███████████████████████████
████████─██████████████████████████
████████─█████████████████████████
████████─████████████████████████
████████─███████████████████████ 
`)
    console.log(theLine);
    console.log(
      `Congratulations, code-cadet! You passed with a score of ${grade}!`
    );
    console.log(theLine);
  } else {
    console.log(theLine);
    console.log(
      `With a score of ${grade}, You didn't make the cut! Better luck next time.`
    );
    console.log(theLine);
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.clear();
  console.log(
    `Welcome, ${candidateName}.\n \n>> Thank you for participating in the launch_code astronaut application process. <<`
  );

  console.log("\n \n");
  console.log(theLine);
  console.log("Applicant Name: " + candidateName);
  console.log(theLine);
  console.log("\n \n");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};