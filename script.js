
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let currentQuestionIndex = 0;
let userAnswers = [];
let lockedAnswers = [];


function startExam() {
  shuffleArray(questions);
  questions.forEach(q => {
    const correctText = q.options[q.correct];
    shuffleArray(q.options);
    q.correct = q.options.indexOf(correctText);
  });

  userAnswers = Array(questions.length).fill(undefined);
  lockedAnswers = Array(questions.length).fill(false);
  currentQuestionIndex = 0;
  document.getElementById("main-menu").style.display = "none";
  document.querySelector(".container").style.display = "flex";
  renderNav();
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQuestionIndex];
  const container = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");

  container.innerHTML = `<strong>Q${currentQuestionIndex + 1}:</strong> ${q.question}`;
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = `${String.fromCharCode(65 + i)}. ${opt}`;
    if (!lockedAnswers[currentQuestionIndex]) {
      div.onclick = () => selectOption(i);
    }
    if (userAnswers[currentQuestionIndex] !== undefined) {
      if (i === q.correct) div.classList.add("correct");
      else if (i === userAnswers[currentQuestionIndex]) div.classList.add("incorrect");
    }
    optionsContainer.appendChild(div);
  });

  highlightNav();
}

function selectOption(index) {
  if (lockedAnswers[currentQuestionIndex]) return;

  userAnswers[currentQuestionIndex] = index;
  lockedAnswers[currentQuestionIndex] = true;
  renderQuestion();

  const allAnswered = userAnswers.every(ans => ans !== undefined);

  if (allAnswered) {
    showFinalPopup();
  } else if (index === questions[currentQuestionIndex].correct) {
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
      }
    }, 500);
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
}

function finishTest() {
  const summary = document.getElementById("summary-container");
  summary.innerHTML = "";
  let correctCount = 0;
  const layout = `
    <table border="1" cellpadding="10" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr style="background: #f0f0f0;">
        <th>#</th>
        <th>Question</th>
        <th>Your Answer</th>
        <th>Correct Answer</th>
        <th>Result</th>
      </tr>
      ${questions.map((q, i) => {
        const userAnswer = userAnswers[i];
        const correct = userAnswer === q.correct;
        const resultText = correct ? "✅ Correct" : "❌ Incorrect";
        const answerText = q.options[userAnswer] || "No Answer";
        return `
          <tr>
            <td>${i + 1}</td>
            <td>${q.question}</td>
            <td>${answerText}</td>
            <td>${q.options[q.correct]}</td>
            <td>${resultText}</td>
          </tr>
        `;
      }).join("")}
    </table>
  `;

  summary.innerHTML = `
    <h2>Test Summary</h2>
    <p>You got ${questions.filter((q, i) => userAnswers[i] === q.correct).length} out of ${questions.length} correct.</p>
    ${layout}
    <div class="controls" style="justify-content: center;">
      <button onclick="retryAll()">Retry All</button>
      <button onclick="retryIncorrect()">Retry Incorrect</button>
      <button onclick="returnToMenu()">Menu</button>
    </div>
  `;

  document.querySelector(".container").style.display = "none";
  summary.style.display = "block";
}

function retryAll() {
  userAnswers = Array(questions.length).fill(undefined);
  lockedAnswers = Array(questions.length).fill(false);
  currentQuestionIndex = 0;
  document.querySelector(".container").style.display = "flex";
  document.getElementById("summary-container").style.display = "none";
  renderNav();
  renderQuestion();
}

function retryIncorrect() {
  const newQuestions = [];
  questions.forEach((q, i) => {
    if (userAnswers[i] !== q.correct) newQuestions.push(q);
  });
  questions.splice(0, questions.length, ...newQuestions);
  retryAll();
}

function returnToMenu() {
  document.getElementById("summary-container").style.display = "none";
  document.getElementById("main-menu").style.display = "block";
}

function showFinalPopup() {
  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "9999";

  const popup = document.createElement("div");
  popup.style.background = "#fff";
  popup.style.padding = "30px";
  popup.style.borderRadius = "8px";
  popup.style.textAlign = "center";
  popup.innerHTML = `
    <h2>All Questions Answered</h2>
    <p>Would you like to review your answers or submit the exam?</p>
    <button onclick="submitAndClose()">Submit</button>
    <button onclick="reviewAndClose()">Review</button>
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);
}

function submitAndClose() {
  document.body.removeChild(document.getElementById("overlay"));
  finishTest();
}

function reviewAndClose() {
  document.body.removeChild(document.getElementById("overlay"));
}

function renderNav() {
  const nav = document.getElementById("question-nav");
  nav.innerHTML = "";
  for (let i = 0; i < questions.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = i + 1;
    btn.onclick = () => {
      currentQuestionIndex = i;
      renderQuestion();
    };
    nav.appendChild(btn);
  }
}

function highlightNav() {
  const buttons = document.querySelectorAll("#question-nav button");
  buttons.forEach((btn, i) => {
    const userAnswer = userAnswers[i];
    const isCorrect = userAnswer !== undefined && userAnswer === questions[i].correct;
    const isIncorrect = userAnswer !== undefined && userAnswer !== questions[i].correct;

    btn.style.background = i === currentQuestionIndex ? "#007bff" : "#fff";
    btn.style.color = i === currentQuestionIndex ? "#fff" : "#000";

    if (isCorrect) {
      btn.style.background = "#28a745";
      btn.style.color = "#fff";
    } else if (isIncorrect) {
      btn.style.background = "#dc3545";
      btn.style.color = "#fff";
    }
  });
}

window.onload = () => {
  renderNav();
};
