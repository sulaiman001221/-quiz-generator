const quizData = [
  {
    question: "What is the difference between == and === in JavaScript?",
    options: [
      "== is used for comparison without type checking, whereas === is used for comparison with type checking.",
      "== and === are the same thing.",
      "== is used for assignment, whereas === is used for comparison.",
    ],
    answer:
      "== is used for comparison without type checking, whereas === is used for comparison with type checking.",
  },
  {
    question:
      "What is the difference between declaration and assignment in JavaScript?",
    options: [
      "Declaration is when a variable is created using var, let, or const, while assignment is when a value is assigned to a variable.",
      "Declaration and assignment are the same thing.",
      "Declaration is when a function is defined, while assignment is when a function is called.",
    ],
    answer:
      "Declaration is when a variable is created using var, let, or const, while assignment is when a value is assigned to a variable.",
  },
  {
    question: "What is JavaScript hoisting?",
    options: [
      "JavaScript hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during compilation.",
      "JavaScript hoisting refers to the process of lifting heavy JavaScript files.",
      "JavaScript hoisting is a deprecated feature in modern JavaScript.",
    ],
    answer:
      "JavaScript hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during compilation.",
  },
  {
    question: 'What does the "return" statement do in a function?',
    options: [
      'The "return" statement terminates the function and optionally returns a value to the caller.',
      'The "return" statement restarts the function execution.',
      'The "return" statement prints a message to the console.',
    ],
    answer:
      'The "return" statement terminates the function and optionally returns a value to the caller.',
  },
  {
    question: 'What does the "break" statement do in a loop?',
    options: [
      'The "break" statement terminates the loop immediately and transfers control to the statement following the loop.',
      'The "break" statement skips the current iteration of the loop.',
      'The "break" statement restarts the loop.',
    ],
    answer:
      'The "break" statement terminates the loop immediately and transfers control to the statement following the loop.',
  },
  {
    question: 'What does the "continue" statement do in a loop?',
    options: [
      'The "continue" statement skips the current iteration of the loop and continues with the next iteration.',
      'The "continue" statement terminates the loop.',
      'The "continue" statement restarts the loop.',
    ],
    answer:
      'The "continue" statement skips the current iteration of the loop and continues with the next iteration.',
  },
  {
    question: 'How is the "switch" statement used in JavaScript?',
    options: [
      'The "switch" statement is used to perform different actions based on different conditions.',
      'The "switch" statement is used to declare variables.',
      'The "switch" statement is used to define functions.',
    ],
    answer:
      'The "switch" statement is used to perform different actions based on different conditions.',
  },
  {
    question:
      "What is the difference between null and undefined in JavaScript?",
    options: [
      "null represents the intentional absence of any object value, whereas undefined represents a variable that has been declared but has not yet been assigned a value.",
      "null and undefined are the same thing.",
      "null represents a variable that has been declared but has not yet been assigned a value, whereas undefined represents the intentional absence of any object value.",
    ],
    answer:
      "null represents the intentional absence of any object value, whereas undefined represents a variable that has been declared but has not yet been assigned a value.",
  },
  {
    question:
      "What is the difference between var, let, and const in JavaScript?",
    options: [
      "var is function-scoped, let and const are block-scoped. const variables cannot be reassigned after declaration, whereas var and let variables can.",
      "var, let, and const are interchangeable.",
      "var is block-scoped, let and const are function-scoped. var variables cannot be reassigned after declaration, whereas let and const variables can.",
    ],
    answer:
      "var is function-scoped, let and const are block-scoped. const variables cannot be reassigned after declaration, whereas var and let variables can.",
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A closure is a combination of a function and the lexical environment within which that function was declared, allowing the function to access variables from its outer scope even after the outer function has finished executing.",
      "A closure is a function that has no access to its lexical environment.",
      "A closure is a JavaScript keyword.",
    ],
    answer:
      "A closure is a combination of a function and the lexical environment within which that function was declared, allowing the function to access variables from its outer scope even after the outer function has finished executing.",
  },
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.getElementById("start-btn").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const currentQuizData = quizData[currentQuestion];

  questionElement.innerText = currentQuizData.question;
  optionsContainer.innerHTML = "";

  shuffle(currentQuizData.options).forEach((option, index) => {
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "options";
    radioButton.value = option;
    radioButton.id = "option" + index;

    const label = document.createElement("label");
    label.setAttribute("for", "option" + index);
    label.innerText = option;

    const br = document.createElement("br");

    optionsContainer.appendChild(radioButton);
    optionsContainer.appendChild(label);
    optionsContainer.appendChild(br);
  });
}

function checkAnswer() {
  const selectedOption = document.querySelector(
    'input[name="options"]:checked'
  ).value;
  const currentQuizData = quizData[currentQuestion];
  if (selectedOption === currentQuizData.answer) {
    score++;
  }
}

function nextQuestion() {
  checkAnswer();
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score").innerText =
    "You scored " + score + " out of " + quizData.length + ".";
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function tryAgain() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}
