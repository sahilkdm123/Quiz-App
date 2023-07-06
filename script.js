let questions = [
  {
    id: 1,
    question: "In software engineering, what does KDD stands for?",
    answer: "Knowledge discovery in databases",
    option: [
      "Knowledge distortion of design",
      "Knowledge discovery in databases",
      "Knowledge development in the design",
      "Knowledge detection of databases",
    ],
  },
  {
    id: 2,
    question:
      "What is the individual called who uses the product after it has been fully developed and marketed?",
    answer: "End-user",
    option: ["First-user", "Tester", "Designer", "End-user"],
  },
  {
    id: 3,
    question:
      "To check the complexity of architecture, what could a programmer use?",
    answer: "Dependencies",
    option: [
      "Coupling",
      "Beta testing",
      "Architecture testing",
      "Dependencies",
    ],
  },
  {
    id: 4,
    question: "The duties of a programmer does not include",
    answer: "Defining methods of data collection",
    option: [
      "Program maintenance",
      "Program detailed flowcharts",
      "Defining methods of data collection",
      "Testing and debugging",
    ],
  },
  {
    id: 5,
    question:
      "The person who prepares data by operating a key station is considered as",
    answer: "Keyboard operator",
    option: [
      "Keyboard operator",
      "Mouse operator",
      "Peripheral operator",
      "None of these",
    ],
  },
  {
    id: 6,
    question: "System software programmers usually work in",
    answer: "Low-level language",
    option: [
      "High-level language",
      "Self-managed language",
      "Low-level language",
      "Modified language",
    ],
  },
  {
    id: 7,
    question: "What is the use of an Architectural Description Language (ADL)?",
    answer: "Provides a syntax for describing a software architecture",
    option: [
      "Codes the architecture into a desired programming language",
      "Provides a syntax for describing a software architecture",
      "Helps design the language in which the software should be built",
      "Describes how to design the software in a specified language",
    ],
  },
  {
    id: 8,
    question: "Examples of traditional process models are",
    answer: "All of these",
    option: ["Waterfall", "Incremental", "Spiral", "All of these"],
  },
  {
    id: 9,
    question: " In software engineering, what does ATAM stands for?",
    answer: "Architecture trade-off analysis method",
    option: [
      "Architecture type analysis management",
      "Architecture type analysis method",
      "Architecture trade-off analysis method",
      "Application texture architectural method",
    ],
  },
  {
    id: 10,
    question: "The two levels of design for software architecture are:",
    answer: "Data design and architectural design",
    option: [
      "Data design and architectural design",
      "Pattern design and data design",
      "Coding design and architectural design",
      "Architectural design and XP design",
    ],
  },
];

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);
};

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].option;

  question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
  <ul class="option_group">
  <li class = "option">${first}</li>
  <li class = "option">${second}</li>
  <li class = "option">${third}</li>
  <li class = "option">${fourth}</li>
  </ul>`;

  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

function next() {
  if (question_count == questions.length - 1) {
    location.href = "results.html";
  }
  // console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;

  if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}
