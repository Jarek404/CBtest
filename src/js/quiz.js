const questions = [
  {
    question: "Mama Ani ma 5 córek: Basię, Kasię, Magdę, Zosię i... Jak ma na imię piąta córka?",
    answers: [
      {text: "Basia ", correct: false},
      {text: "Ania", correct: true},
      {text: "Zosia", correct: false},
      {text: "Żadna z odpowiedzi", correct: false}
     
    ]
  },
  {
    question: "Cegła waży 1 kg i pół cegły. Ile waży cegła??",
    answers: [
      {text: "1,5kg", correct: false},
      {text: "2kg", correct: true},
      {text: "2,5kg", correct: false},
      {text: "Żadna z odpowiedzi", correct: false}
     
    ]
  },
  {
    question: "Spójrz na rysunek poniżej. Ile trójkątów widzisz ?",
    answers: [
      {text: "5", correct: false},
      {text: "4", correct: false},
      {text: "12", correct: false},
      {text: "7", correct: true}
     
    ],
    img: "../../dist/img/quiz/quiz_grafika.png"
  },
  {
    question: "Jaki jest następny wyraz tego ciągu? 28, 30, 32, 33, 34, 35, 36, 38, ?",
    answers: [
      {text: "40", correct: false},
      {text: "37", correct: false},
      {text: "39", correct: true},
      {text: "42", correct: false}
     
    ]
  },

  {
    question: "Na pastwisku pasą się krowy, owce i kaczki. Owiec jest więcej niż kaczek. Owce i kaczki mają łącznie sto głów i nóg i jest ich łącznie trzy razy więcej niż krów. Ile krów pasie się na pastwisku? ",
    answers: [
      {text: "8", correct: true},
      {text: "7", correct: false},
      {text: "10", correct: false},
      {text: "5", correct: false}
     
    ]
  },
  {
    question: "Co oznacza skrót QA w kontekście testowania oprogramowania?",
    answers: [
      {text: "Quick Analysis", correct: false},
      {text: "Quality Assurance", correct: true},
      {text: "Quantitative Assessment", correct: false},
      {text: "Qualified Audit", correct: false}
     
    ]
  },
  {
    question: "Co oznacza skrót WWW:",
    answers: [
      {text: "World Wide Web", correct: true},
      {text: "Wnet World Web", correct: false},
      {text: "Weather Wide Web", correct: false},
      {text: "Żadna z powyższych", correct: false}
     
    ]
  },
  {
    question: "JPEG to typ pliku, jakiego?",
    answers: [
      {text: "Tekstowy", correct: false},
      {text: "Audio", correct: false},
      {text: "Graficzny", correct: true},
      {text: "Video", correct: false}
     
    ]
  },
  {
    question: "Która z poniższych rzeczy potrzebna jest do poprawnego opisania błędu?",
    answers: [
      {text: "Nazwa przeglądarki na której wystąpił błąd", correct: false},
      {text: "Opis błędu", correct: false},
      {text: "Zrzut ekranu lub video błędu", correct: false},
      {text: "Wszystkie z powyższych", correct: true}
     
    ]
  },
 
  {
    question: "Które z poniższych nie jest typem testowania oprogramowania?",
    answers: [
      {text: "Testy funkcjonalne", correct: false},
      {text: "Testy jednostkowe", correct: false},
      {text: "Testy księgowości", correct: true},
      {text: "Testy bezpieczeństwa", correct: false}
     
    ]
  },
  {
    question: "Co to jest ”bug” w kontekście testowania oprogramowania?",
    answers: [
      {text: "Dokumentacja testowa", correct: false},
      {text: "Błąd w kodzie", correct: true},
      {text: "Proces wydania oprogramowania", correct: false},
      {text: "Plan testów", correct: false}
     
    ]
  },
  {
    question: "Które narzędzie jest używane do automatyzacji testów oprogramowania?",
    answers: [
      {text: "Microsoft Word", correct: false},
      {text: "Selenium", correct: true},
      {text: "Google Chrome", correct: false},
      {text: "Adobe Photoshop", correct: false}
     
    ]
  },
  {
    question: "Które z poniższych jest przykładem testu jednostkowego?",
    answers: [
      {text: "Test sprawdzający funkcjonalność całej aplikacji", correct: false},
      {text: "Test sprawdzający interakcje między różnymi modułami", correct: false},
      {text: "Test sprawdzający pojedynczą funkcję lub metodę", correct: true},
      {text: "Test sprawdzający zgodność z wymaganiami klienta", correct: false}
     
    ]
  },
   
  {
    question: "Który z poniższych aspektów testowania oprogramowania dotyczy sprawdzenia, czy aplikacja działa poprawnie w różnych językach i regionach?",
    answers: [
      {text: "Testy wydajnościowe", correct: false},
      {text: "Testy lokalizacji", correct: true},
      {text: "Testy bezpieczeństwa", correct: false},
      {text: "Testy regresji", correct: false}
     
    ]
  },
  {
    question: "Który rodzaj testów oprogramowania koncentruje się na identyfikacji problemów związanych z bezpieczeństwem, takich jak wycieki danych czy próby włamania?",
    answers: [
      {text: "Testy wydajnościowe", correct: false},
      {text: "Testy bezpieczeństwa", correct: true},
      {text: "Testy jednostkowe", correct: false},
      {text: "Testy akceptacyjne", correct: false}
     
    ]
  },
  {
    question: "Który rodzaj testów oprogramowania skupia się na sprawdzeniu, czy aplikacja działa poprawnie po wprowadzeniu zmian lub aktualizacji?",
    answers: [
      {text: "Testy jednostkowe", correct: false},
      {text: "Testy regresji", correct: true},
      {text: "Testy wydajnościowe", correct: false},
      {text: "Testy bezpieczeństwa", correct: false}
     
    ]
  },
  {
    question: "Które narzędzie jest używane do raportowania i śledzenia defektów w oprogramowaniu?",
    answers: [
      {text: "Selenium", correct: false},
      {text: "JIRA", correct: true},
      {text: "Mozilla Firefox", correct: false},
      {text: "Visual Studio", correct: false}
     
    ]
  },
  {
    question: "W trakcie testowania aplikacji znalazłeś poważny błąd, który powoduje awarię całego systemu. Jednakże, przed zgłoszeniem tego błędu, postanowiłeś przeprowadzić dodatkowe testy, aby upewnić się, że problem nie występuje tylko w jednym specyficznym scenariuszu. Czas na raportowanie defektów się kończy, a błąd nie został jeszcze zgłoszony. Co robisz?",
    answers: [
      {text: "Nie zgłaszam błędu, może to wydłużyć czas wydania aplikacji. Czekam, może nikt nie zauważy.", correct: false},
      {text: "Zgłaszam błąd i tłumaczę jego wpływ na produkt / biznes", correct: true},
      {text: "Nie zgłaszam błędu. Czekam aż produkt wyjdzie i obserwuję jaki będzie miał wpływ na produkt / biznes.", correct: false},
      {text: "Nie znam odpowiedzi.", correct: false}
     
    ]
  },
  {
    question: `Podczas testowania interfejsu użytkownika aplikacji, zauważyłeś, że przycisk "Zapisz" jest aktywny, nawet gdy obowiązkowe pola formularza nie zostały wypełnione. Przeprowadziłeś testy, aby upewnić się, że nie jest to tylko kwestia wizualna, ale błąd istnieje. Jakie kroki podjąłbyś, aby odpowiednio zgłosić ten defekt i zapewnić, że zostanie naprawiony?`,
    answers: [
      {text: "Nic nie robię. Formularz tak właśnie powinien działać.", correct: false},
      {text: "Zgłaszam błąd idąc do pokoju programistów i informując ich słownie.", correct: false},
      {text: "Zgłaszam błąd w narzędziu do zarządzania defektami lub systemie raportowania błędów z dokładnym opisem.", correct: true},
      {text: "Nie znam odpowiedzi", correct: false}
     
    ]
  },
  {
    question: "Pomiędzy Tobą, a innym pracownikiem doszło do spięcia w wyniku nieporozumienia. Jak sobie radzisz?",
    answers: [
      {text: "Unikam dalszej interakcji z tą osobą i unikam wszelkich sytuacji konfliktowych.", correct: false},
      {text: "Rozmawiam z tą osobą na spokojnie, aby zrozumieć przyczynę nieporozumienia i próbujemy znaleźć wspólne rozwiązanie.", correct: true},
      {text: "Zgłaszam ten incydent przełożonemu lub działowi HR, aby podejmowali odpowiednie działania w celu usunięcia tej osoby z firmy.", correct: false},
      {text: "Nie znam odpowiedz", correct: false}
     
    ]
  },
  {
    question: "Podczas testowania, zauważyłeś, że znalazłeś znacznie więcej defektów niż inni członkowie zespołu. Co robisz?",
    answers: [
      {text: "Ignorujesz tę sytuację, nie zgłaszasz znalezionych defektów i kontynuujesz testowanie.", correct: false},
      {text: "Analizujesz, dlaczego znalazłeś więcej defektów, porównujesz swoje testy z testami innych i wspólnie staramy się poprawić swoje podejście do testowania.", correct: true},
      {text: "Czujesz się zaniepokojony i myślisz, że inni członkowie zespołu nie pracują wystarczająco dobrze.", correct: false},
      {text: "Nie znam odpowiedzi.", correct: false}
     
    ]
  },
  
  {
    // question: "",
    // answers: [
    //   {text: "", correct: false},
    //   {text: "", correct: false},
    //   {text: "", correct: true},
    //   {text: "", correct: false}
     
    // ]
  },
  // {
  //   question: "",
  //   answers: [
  //     {text: "", correct: false},
  //     {text: "", correct: false},
  //     {text: "", correct: true},
  //     {text: "", correct: false}
     
  //   ]
  // }
 
]

// ostatni działający kod 



const questionElement = document.getElementById("question");
const qImg = document.querySelector(".img-q");
const answerElement = document.getElementById("answer");
const nextBtn = document.querySelector(".next-btn");
const rezultBtn = document.querySelector(".rezult-btn");
const error = document.querySelector(".error")
const scoreElement = document.getElementById("score");
const yourEndScore = document.querySelector(".your-end-score")
const quizBox = document.querySelector(".quiz-box")
const quizHeader = document.querySelector(".quiz-header")
const startBtn = document.querySelector(".start-quiz-btn")
const point7 = document.querySelector(".point7")
const point15 = document.querySelector(".point15")
const point21 = document.querySelector(".point21")

let currentQuestionIndex = 0;
let score = 0;
let quizFinished = false;
let selectedAnswerIsCorrect = false; // Variable to store the correctness of the selected answer

console.log(questions.length)

function displayQuestion() {
  if (currentQuestionIndex >= questions.length - 1) {
    // Ostatnie pytanie to przycisk "Sprawdź wynik"
    displayScoreButton();
    return;
  }

  selectedAnswerIsCorrect = false; // Reset for the next question
  error.classList.add("d-none"); // Hide error message

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  if (currentQuestion.img) {
    const imageElement = document.getElementById("question-image");
    imageElement.src = currentQuestion.img;
    imageElement.style.display = "block";
  } else {
    document.getElementById("question-image").style.display = "none";
  }

  answerElement.innerHTML = "";

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    button.setAttribute("data-correct", answer.correct);
    button.addEventListener("click", () => selectAnswerButton(button));
    answerElement.appendChild(button);
  });

  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.classList.add("d-none");
    rezultBtn.classList.remove("d-none");
  } else {
    nextBtn.textContent = "Następne";
  }
}

function displayScoreButton() {
  questionElement.textContent = "To już koniec, sprawdźmy jak Ci poszło 🙂"; // Wyczyść treść pytania
  answerElement.innerHTML = ""; // Wyczyść odpowiedzi

  // Dodaj przycisk "Sprawdź wynik"
  const checkResultButton = document.createElement("button");
  checkResultButton.textContent = "Sprawdź wynik";
  checkResultButton.classList.add("start-quiz-btn");
  checkResultButton.addEventListener("click", showScore);
  answerElement.appendChild(checkResultButton);

  nextBtn.classList.add("d-none");
}

function selectAnswerButton(button) {
  const selectedButtons = document.querySelectorAll(".btn.selected");
  selectedButtons.forEach(selectedButton => selectedButton.classList.remove("selected"));

  button.classList.add("selected");
  selectedAnswerIsCorrect = button.getAttribute("data-correct") === "true";
}



function nextQuestion() {
  if (!quizFinished) {
    if (currentQuestionIndex === questions.length - 1) {
      // Jeśli to jest ostatnie pytanie, zmień przycisk "Następne" na "Sprawdź wynik"
      nextBtn.textContent = "Sprawdź wynik";
    }

    const selectedAnswerButton = document.querySelector(".btn.selected");

    if (selectedAnswerButton) {
      selectedAnswerIsCorrect = selectedAnswerButton.getAttribute("data-correct") === "true"; // Check the selected answer's correctness

      if (selectedAnswerIsCorrect) {
        score++; // Update the score only if the selected answer was correct
      }

      currentQuestionIndex++;
      selectedAnswerIsCorrect = false; // Reset for the next question

      if (currentQuestionIndex === questions.length) {
        // All questions answered, show final result
        showScore();
      } else {
        // Display the next question
        displayQuestion();
      }
      
      error.classList.add("d-none"); // Hide the error message
    } else {
      error.classList.remove("d-none"); // Show the error message if no answer is selected
    }
  }
}


function showScore() {
  
  yourEndScore.textContent = `${score}`;
  rezultBtn.classList.add("d-none");
  scoreElement.classList.remove("d-none");
  answerElement.classList.add("d-none");
  questionElement.classList.add("d-none");

  if (score >= 0 && score <= 7 ) {
    point7.classList.remove("d-none");
    point15.classList.add("d-none");
    point21.classList.add("d-none");


  } else if (score >= 8 && score <= 14) {
    point15.classList.remove("d-none");
    point7.classList.add("d-none");
    point21.classList.add("d-none");


  } else if (score >=15 && score <=21) {
    point21.classList.remove("d-none");
    point7.classList.add("d-none");
    point15.classList.add("d-none");

  }
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.textContent = "Następne";
  displayQuestion();
}

function openQuiz() {
  quizBox.classList.remove("d-none")
  quizHeader.classList.add("d-none")
}

nextBtn.addEventListener("click", nextQuestion);
rezultBtn.addEventListener("click", showScore);
startBtn.addEventListener("click", openQuiz);

startQuiz();





