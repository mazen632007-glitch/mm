// Quiz questions data
const quizQuestions = [
    // True/False questions
    {
        id: 1,
        question: "The discipline of positive psychology focuses on the individual and social well-being.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Positive psychology focuses on both individual and social well-being."
    },
    {
        id: 2,
        question: "Positive psychology began as an old domain of psychology.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Positive psychology began as a NEW domain of psychology in 1998-1999."
    },
    {
        id: 3,
        question: "Positive psychology isn't concerned with eudemonia.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Positive psychology IS concerned with eudemonia (human flourishing and well-being)."
    },
    {
        id: 4,
        question: "Happiness may rise with increasing financial income.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Financial stability can contribute to happiness up to a certain point."
    },
    {
        id: 5,
        question: "According to Peterson, positive psychology is concerned with four topics.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Peterson identified four main topics in positive psychology."
    },
    {
        id: 6,
        question: "Positive psychology has a reaction against behaviorism and psychoanalysis.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Positive psychology emerged as a reaction against the negative focus of behaviorism and psychoanalysis."
    },
    {
        id: 7,
        question: "Positive psychology is against negative thinking.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Positive psychology emphasizes positive thinking and well-being."
    },
    {
        id: 8,
        question: "According to Seligman and Peterson, positive psychology is concerned with 5 issues.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ According to Seligman and Peterson, positive psychology is concerned with THREE issues: positive emotions, positive individual traits, and positive institutions."
    },
    {
        id: 9,
        question: "The main subject of psychology is mental psychology.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Mental processes and behavior are the main subjects of psychology."
    },
    {
        id: 10,
        question: "The positive aspects of the human experience make life worth living.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Positive psychology is the study of what makes life worth living."
    },
    {
        id: 11,
        question: "Positive psychologists are concerned with positive relationships only.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Positive psychologists are concerned with positive relationships and many other aspects of well-being."
    },
    {
        id: 12,
        question: "The scientific study of positive human functioning includes global dimensions of life.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Positive psychology includes biological, personal, relational, and global dimensions."
    },
    {
        id: 13,
        question: "Positive psychology is concerned with the good life.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Positive psychology is the scientific study of the good life."
    },
    {
        id: 14,
        question: "Positive emotions are concerned with being content with one's past, being happy in the present.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Positive emotions include contentment with the past, happiness in the present, and hope for the future."
    },
    {
        id: 15,
        question: "Social organizations are one of the reasons for happiness.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Social connections and relationships contribute significantly to happiness."
    },
    {
        id: 16,
        question: "Psychology is affected by physical state, mental state and external environment.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Behavior and mental processes are influenced by all three factors."
    },
    {
        id: 17,
        question: "Description of cause is not a psychological aim.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Understanding the causes of behavior IS a major psychological aim."
    },
    {
        id: 18,
        question: "Describing how people and species behave is a psychological goal.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Description is one of the major goals of psychology."
    },
    {
        id: 19,
        question: "Psychology aims to enhance human welfare.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ One of the main goals of psychology is to apply knowledge to improve human welfare."
    },
    {
        id: 20,
        question: "All people study psychology for the same reason.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ People study psychology for different reasons - personal, academic, professional."
    },
    {
        id: 21,
        question: "Psychologist work in a lot of different places and areas.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychologists work in hospitals, schools, corporations, government, and private practice."
    },
    {
        id: 22,
        question: "Psychology is not the same as common sense.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychology relies on scientific methods, not common sense."
    },
    {
        id: 23,
        question: "Therapy is considered a big part of psychology.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Therapy and counseling are important applications of psychology."
    },
    {
        id: 24,
        question: "Most psychologists don't work in the field of psychology.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Most psychologists DO work in their field."
    },
    {
        id: 25,
        question: "Psychologists play a huge role in athletes' lives.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Sports psychology helps athletes with performance, focus, and mental health."
    },
    {
        id: 26,
        question: "Psychologists aren't needed in business industry.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychologists ARE needed in business for organizational behavior and HR."
    },
    {
        id: 27,
        question: "Psychology isn't relied on in TV commercials and print ads.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychology IS heavily used in advertising and marketing."
    },
    {
        id: 28,
        question: "The websites you visit utilize psychology to understand how people read, use, and interpret online information.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Web design and UX heavily rely on psychological principles."
    },
    {
        id: 29,
        question: "Psychology may help you to break a bad habit.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Behavioral psychology provides techniques to change habits."
    },
    {
        id: 30,
        question: "Psychology might help you stick to weight loss plan.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Behavioral and cognitive psychology help with motivation and behavior change."
    },
    {
        id: 31,
        question: "Psychology won't make your communication skills better.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychology CAN help improve communication skills."
    },
    {
        id: 32,
        question: "There is only one type of psychologists.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ There are many types: clinical, developmental, educational, sports, organizational, etc."
    },
    {
        id: 33,
        question: "Working as a psychotherapist needs training and licensing requirements.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychotherapists must be trained and licensed."
    },
    {
        id: 34,
        question: "Psychologists work in applied settings to solve real-world problems that have an impact on everyday life.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Applied psychology solves real-world problems."
    },
    {
        id: 35,
        question: "Psychologist have the right to perform private practice.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Licensed psychologists can have private practices."
    },
    {
        id: 36,
        question: "Even though there are different specialties in psychology they share the same goal of helping people live better.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ All psychology specialties aim to improve human welfare."
    },
    {
        id: 37,
        question: "Psychology is a unique scientific study from social sciences as anthropology and economics and also from biology and neuroscience.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychology bridges both social sciences and natural sciences."
    },
    {
        id: 38,
        question: "The major concern of psychological research is on animals.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ While animal research is used, the major focus is on human behavior and mental processes."
    },
    {
        id: 39,
        question: "Positive psychology started as a new domain of psychology.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Positive psychology emerged in the late 1990s as a new domain."
    },
    {
        id: 40,
        question: "Positive psychology focuses on the individual only.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Positive psychology focuses on both individual and social well-being."
    },
    {
        id: 41,
        question: "Positive psychology is the scientific study of the human experience that make life worth living.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ This is the essence of positive psychology."
    },
    {
        id: 42,
        question: "Positive psychology has a reaction against psychoanalysis and behaviorism.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Positive psychology emerged as a reaction against the pathology-focused approaches."
    },
    {
        id: 43,
        question: "Positive psychology placed more emphasis fostering positive self-esteem and self-image.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Positive psychology emphasizes strength-building and positive self-image."
    },
    {
        id: 44,
        question: "Psychological interventions aim to minimize pathological thoughts.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychological interventions reduce negative and pathological thinking."
    },
    {
        id: 45,
        question: "Positive psychology is concerned with relational and global dimensions of life only.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Positive psychology includes biological, personal, relational, AND global dimensions."
    },
    {
        id: 46,
        question: "Positive psychology began as a new domain of psychology in 1999.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Positive psychology began in 1998 (some sources say 1999), so this is approximately correct but the exact year is 1998."
    },
    {
        id: 47,
        question: "Contact between individuals decreases stress and anxiety and increases psychological resilience.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Social connections reduce stress and build resilience."
    },
    {
        id: 48,
        question: "Forgiveness reduces negative thinking.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Forgiveness has positive psychological effects."
    },
    {
        id: 49,
        question: "Tolerance increases positive feelings.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Tolerance and acceptance promote well-being."
    },
    {
        id: 50,
        question: "Happiness consists of high positive emotions, low negative feelings and seeing life as satisfying and fulfilling.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ These are the three components of happiness."
    }
];

// Current quiz state
let currentQuestion = 0;
let score = 0;
let answers = [];
let quizStarted = false;

// Initialize quiz
function initQuiz() {
    // Shuffle questions for variety
    quizQuestions.sort(() => Math.random() - 0.5);
    displayQuestion();
}

// Start quiz
function startQuiz() {
    quizStarted = true;
    document.getElementById('startScreen').classList.remove('active');
    document.getElementById('quizScreen').classList.add('active');
    initQuiz();
}

// Display current question
function displayQuestion() {
    const question = quizQuestions[currentQuestion];
    
    // Update progress
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = `السؤال ${currentQuestion + 1} من ${quizQuestions.length}`;
    document.getElementById('scoreDisplay').textContent = `النقاط: ${score}`;
    
    // Display question
    document.getElementById('questionText').textContent = question.question;
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    const options = ['صحيح (True)', 'خطأ (False)'];
    options.forEach((option, index) => {
        const isCorrect = index === (question.correctAnswer ? 0 : 1);
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input type="radio" id="option${index}" name="answer" value="${isCorrect}" 
                ${answers[currentQuestion] === index ? 'checked' : ''}>
            <label for="option${index}">${option}</label>
        `;
        
        optionDiv.addEventListener('click', () => {
            document.querySelectorAll('.option').forEach(el => el.classList.remove('selected'));
            optionDiv.classList.add('selected');
            answers[currentQuestion] = index;
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').disabled = answers[currentQuestion] === undefined;
}

// Next question
function nextQuestion() {
    if (answers[currentQuestion] !== undefined) {
        if (currentQuestion < quizQuestions.length - 1) {
            currentQuestion++;
            displayQuestion();
        } else {
            calculateResults();
        }
    }
}

// Previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

// Calculate results
function calculateResults() {
    score = 0;
    
    quizQuestions.forEach((question, index) => {
        const userAnswerIndex = answers[index];
        const isCorrect = userAnswerIndex === (question.correctAnswer ? 0 : 1);
        
        if (isCorrect) {
            score++;
        }
    });
    
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    // Display results
    document.getElementById('quizScreen').classList.remove('active');
    document.getElementById('resultsScreen').classList.add('active');
    
    document.getElementById('finalScore').textContent = percentage;
    
    // Result message
    let message = '';
    if (percentage >= 90) {
        message = '🌟 ممتاز جداً! أنت خبير في علم النفس!';
    } else if (percentage >= 80) {
        message = '⭐ ممتاز! معلوماتك قوية جداً!';
    } else if (percentage >= 70) {
        message = '👍 جيد جداً! لديك معلومات جيدة!';
    } else if (percentage >= 60) {
        message = '📚 جيد! تحتاج لمراجعة إضافية!';
    } else if (percentage >= 50) {
        message = '💪 متوسط! حاول المزيد من الدراسة!';
    } else {
        message = '📖 تحتاج إلى دراسة أكثر!';
    }
    
    document.getElementById('resultMessage').textContent = message;
    
    // Detailed results
    const detailedResults = document.getElementById('detailedResults');
    detailedResults.innerHTML = `
        <h3>ملخص النتائج</h3>
        <div class="result-item">
            <strong>الأسئلة الصحيحة:</strong>
            <span>${score} من ${quizQuestions.length}</span>
        </div>
        <div class="result-item">
            <strong>النسبة المئوية:</strong>
            <span>${percentage}%</span>
        </div>
        <div class="result-item">
            <strong>الأسئلة الخاطئة:</strong>
            <span>${quizQuestions.length - score}</span>
        </div>
    `;
}

// Restart quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = [];
    quizStarted = false;
    
    document.getElementById('resultsScreen').classList.remove('active');
    document.getElementById('startScreen').classList.add('active');
}

// Update next button state when answer is selected
document.addEventListener('change', () => {
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.disabled = answers[currentQuestion] === undefined;
});
