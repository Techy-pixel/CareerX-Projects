const questions = [
    {
      question: "What is the capital of France?",
      answers: ["London", "Berlin", "Paris", "Madrid"],
      correct: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: "Mars"
    },
    {
      question: "Who wrote 'Hamlet'?",
      answers: ["Tolstoy", "Shakespeare", "Hemingway", "Dickens"],
      correct: "Shakespeare"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let selectedAnswer = null;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");
  const scoreContainer = document.getElementById("score-container");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    clearAnswers();
    const current = questions[currentQuestionIndex];
    questionEl.textContent = current.question;
    current.answers.forEach(answer => {
      const li = document.createElement("li");
      li.textContent = answer;
      li.addEventListener("click", () => {
        selectAnswer(li, answer);
      });
      answersEl.appendChild(li);
    });
  }
  
  function selectAnswer(li, answer) {
    selectedAnswer = answer;
    document.querySelectorAll("li").forEach(el => el.classList.remove("selected"));
    li.classList.add("selected");
  }
  
  function clearAnswers() {
    selectedAnswer = null;
    answersEl.innerHTML = "";
  }
  
  nextBtn.addEventListener("click", () => {
    if (!selectedAnswer) return alert("Please select an answer!");
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
      score++;
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    questionEl.classList.add("hide");
    answersEl.classList.add("hide");
    nextBtn.classList.add("hide");
    scoreContainer.classList.remove("hide");
    scoreEl.textContent = `${score} / ${questions.length}`;
  }
  
  // Initialize
  loadQuestion();
  