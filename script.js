// Quiz questions data - All Psychology Questions
const quizQuestions = [
    // SECTION 1: True/False Questions (Questions 1-50)
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
        explanation: "✗ Positive psychology began in 1998."
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
    },
    // SECTION 2: More True/False Questions (Questions 51-100)
    {
        id: 51,
        question: "Psychology is defined as the scientific study of behavior and mental processes.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ This is the correct definition of psychology."
    },
    {
        id: 52,
        question: "Psychology is defined as the scientific study of behavior only.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychology includes both behavior AND mental processes."
    },
    {
        id: 53,
        question: "Psychology is defined as the scientific study of mental processes only.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychology includes both behavior AND mental processes."
    },
    {
        id: 54,
        question: "Psychology is interested in studying how behavior and mental processes are affected by an organism's physical, mental state and environment.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ All three factors influence psychology."
    },
    {
        id: 55,
        question: "The goal of studying psychology is to describe how people and other species behave.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Description is one of the major goals of psychology."
    },
    {
        id: 56,
        question: "Psychology is not interested in the causes of behaviors.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Understanding causes IS a major goal of psychology."
    },
    {
        id: 57,
        question: "Psychology doesn't try to predict how people and animals would behave under certain conditions.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Prediction IS one of the major goals of psychology."
    },
    {
        id: 58,
        question: "In psychology we try to control behaviors and its causes.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Control is one of the goals of psychology."
    },
    {
        id: 59,
        question: "Applying psychological knowledge helps in enhancing human welfare.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Application of psychology improves human welfare."
    },
    {
        id: 60,
        question: "Psychology is used sometimes to manipulate others.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychology can unfortunately be misused for manipulation."
    },
    {
        id: 61,
        question: "Using psychology will not achieve any political gains.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychology CAN be used for political purposes."
    },
    {
        id: 62,
        question: "The main subject of psychology is General Psychology.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ General Psychology is the foundation of psychology."
    },
    {
        id: 63,
        question: "General psychology is the foundation of studying the science of psychology.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ General Psychology provides the foundational concepts."
    },
    {
        id: 64,
        question: "General psychology deals with principles, problems and methods.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ General Psychology covers all these areas."
    },
    {
        id: 65,
        question: "Psychology is just the study of behaviors.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychology includes both behavior AND mental processes."
    },
    {
        id: 66,
        question: "Psychology emerged from biology only.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychology emerged from BOTH biology AND philosophy."
    },
    {
        id: 67,
        question: "Psychology emerged from biology and philosophy.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychology has roots in both sciences."
    },
    {
        id: 68,
        question: "Psychology is linked with medicine and linguistics.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychology connects with many disciplines."
    },
    {
        id: 69,
        question: "Psychology plays a tremendous role in the world today.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychology is very important in modern society."
    },
    {
        id: 70,
        question: "Psychology has no role in the world today.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychology plays a huge role in modern society."
    },
    {
        id: 71,
        question: "Psychologists are employed in hospitals only.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychologists work in many different settings."
    },
    {
        id: 72,
        question: "Psychologists are employed in hospitals, mental health clinics and universities.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ These are all common workplaces for psychologists."
    },
    {
        id: 73,
        question: "Psychologists perform a wide variety of tasks and roles.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychologists have diverse roles."
    },
    {
        id: 74,
        question: "Psychologists performance is limited to treating mental illness.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychologists do much more than treat mental illness."
    },
    {
        id: 75,
        question: "Psychologists tasks and roles range from treating mental illness to influencing public health policy.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychologists have a wide range of roles."
    },
    {
        id: 76,
        question: "One of the role psychologists do is influencing public health policy.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychologists do influence public health policy."
    },
    {
        id: 77,
        question: "Psychology is in fact just a common sense.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychology is based on scientific methods, not common sense."
    },
    {
        id: 78,
        question: "Psychology relies on the scientific methods.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychology is a scientific discipline."
    },
    {
        id: 79,
        question: "Scientific methods in psychology investigate questions and arrive to conclusions.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Scientific methods are essential to psychology."
    },
    {
        id: 80,
        question: "Through using empirical methods in psychology, researchers are able to discover relationships between different variables.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Empirical methods reveal variable relationships."
    },
    {
        id: 81,
        question: "Psychologists use specific techniques to study the human mind and behaviors.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychologists use various techniques."
    },
    {
        id: 82,
        question: "Psychologists use a range of techniques to study the human mind and behaviors.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Multiple techniques are used in psychology."
    },
    {
        id: 83,
        question: "Psychologists use naturalistic observations, experiments and case studies to study human mind and behaviors.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ These are all valid research methods."
    },
    {
        id: 84,
        question: "Psychologists tackle problems from multiple perspectives.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Multiple perspectives enhance understanding."
    },
    {
        id: 85,
        question: "Psychologists tackle problems from a specific perspective only.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychologists use multiple perspectives."
    },
    {
        id: 86,
        question: "Topics and questions in psychology can be looked at in a number of different ways.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychology allows for multiple viewpoints."
    },
    {
        id: 87,
        question: "Some major perspectives in psychology include biological and evolutionary perspectives.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ These are important perspectives in psychology."
    },
    {
        id: 88,
        question: "Psychology is all about therapy.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychology includes therapy but is much broader."
    },
    {
        id: 89,
        question: "Psychology encompasses areas such as teaching and research.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychology includes education and research."
    },
    {
        id: 90,
        question: "Psychology practices are specific to settings just like hospitals.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychology is practiced in many diverse settings."
    },
    {
        id: 91,
        question: "Psychologists work in a wide variety of settings such as Governmental Offices and Private Corporations.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychologists work in diverse settings."
    },
    {
        id: 92,
        question: "Psychology has no role in the field of sport.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Sports psychology is a major field."
    },
    {
        id: 93,
        question: "Psychologists help athletes to focus their attention.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Sports psychologists help with focus and performance."
    },
    {
        id: 94,
        question: "Psychology is all around us.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychology is present in everyday life."
    },
    {
        id: 95,
        question: "Psychology is just an academic subject that exists only in classrooms, research labs and mental health offices.",
        type: "true/false",
        correctAnswer: false,
        explanation: "✗ Psychology is applied in many real-world settings."
    },
    {
        id: 96,
        question: "Television commercial and print ads rely heavily on psychology.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Advertising uses psychological principles extensively."
    },
    {
        id: 97,
        question: "The websites we all visit utilize psychology to understand how people read, use and interpret online information.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Web design relies on psychology."
    },
    {
        id: 98,
        question: "Psychology used in TV commercials and printed ads help in developing marketing messages that persuade people.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Psychology is key to marketing persuasion."
    },
    {
        id: 99,
        question: "The basic premise of positive psychology is that human beings are often drawn by the future more than they are driven by the past.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ This is a core premise of positive psychology."
    },
    {
        id: 100,
        question: "Helping others behaviour in children is innate, not learned behaviour.",
        type: "true/false",
        correctAnswer: true,
        explanation: "✓ Children have natural inclinations to help others."
    }
];

// Current quiz state
let currentQuestion = 0;
let score = 0;
let answers = [];
let quizStarted = false;
let quizQuestions_copy = []; // To store shuffled questions with original indices

// Initialize quiz
function initQuiz() {
    // Create a copy with original indices to track wrong answers
    quizQuestions_copy = quizQuestions.map((q, index) => ({...q, originalIndex: index}));
    // Shuffle questions for variety
    quizQuestions_copy.sort(() => Math.random() - 0.5);
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
    const question = quizQuestions_copy[currentQuestion];
    
    // Update progress
    const progress = ((currentQuestion + 1) / quizQuestions_copy.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = `السؤال ${currentQuestion + 1} من ${quizQuestions_copy.length}`;
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
            document.getElementById('nextBtn').disabled = false;
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
        if (currentQuestion < quizQuestions_copy.length - 1) {
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
    
    quizQuestions_copy.forEach((question, index) => {
        const userAnswerIndex = answers[index];
        const isCorrect = userAnswerIndex === (question.correctAnswer ? 0 : 1);
        
        if (isCorrect) {
            score++;
        }
    });
    
    const percentage = Math.round((score / quizQuestions_copy.length) * 100);
    
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
    const wrongCount = quizQuestions_copy.length - score;
    detailedResults.innerHTML = `
        <h3>ملخص النتائج</h3>
        <div class="result-item">
            <strong>الأسئلة الصحيحة:</strong>
            <span>${score} من ${quizQuestions_copy.length}</span>
        </div>
        <div class="result-item">
            <strong>النسبة المئوية:</strong>
            <span>${percentage}%</span>
        </div>
        <div class="result-item">
            <strong>الأسئلة الخاطئة:</strong>
            <span>${wrongCount}</span>
        </div>
    `;
    
    // Show/hide wrong answers button
    const wrongAnswersBtn = document.getElementById('wrongAnswersBtn');
    if (wrongCount === 0) {
        wrongAnswersBtn.style.display = 'none';
    } else {
        wrongAnswersBtn.style.display = 'block';
    }
}

// Show wrong answers with explanations
function showWrongAnswers() {
    document.getElementById('resultsScreen').classList.remove('active');
    document.getElementById('wrongAnswersScreen').classList.add('active');
    
    const wrongAnswersContent = document.getElementById('wrongAnswersContent');
    let wrongAnswersHTML = '';
    let wrongCount = 0;
    
    quizQuestions_copy.forEach((question, index) => {
        const userAnswerIndex = answers[index];
        const isCorrect = userAnswerIndex === (question.correctAnswer ? 0 : 1);
        
        if (!isCorrect) {
            wrongCount++;
            const userAnswer = userAnswerIndex === 0 ? 'صحيح (True)' : 'خطأ (False)';
            const correctAnswer = question.correctAnswer ? 'صحيح (True)' : 'خطأ (False)';
            
            wrongAnswersHTML += `
                <div class="wrong-answer-item">
                    <h3>❌ السؤال ${wrongCount}</h3>
                    <div class="question-text">${question.question}</div>
                    <div class="answer-info">
                        <p><span class="your-answer">إجابتك: ${userAnswer}</span></p>
                        <p><span class="correct-answer">الإجابة الصحيحة: ${correctAnswer}</span></p>
                    </div>
                    <div class="explanation-box">
                        <strong>💡 الشرح:</strong>
                        <p>${question.explanation}</p>
                    </div>
                </div>
            `;
        }
    });
    
    wrongAnswersHTML = `
        <div class="wrong-answer-counter">
            عدد الأسئلة الخاطئة: ${wrongCount}
        </div>
    ` + wrongAnswersHTML;
    
    wrongAnswersContent.innerHTML = wrongAnswersHTML;
}

// Back to results
function backToResults() {
    document.getElementById('wrongAnswersScreen').classList.remove('active');
    document.getElementById('resultsScreen').classList.add('active');
}

// Restart quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = [];
    quizStarted = false;
    quizQuestions_copy = [];
    
    document.getElementById('resultsScreen').classList.remove('active');
    document.getElementById('wrongAnswersScreen').classList.remove('active');
    document.getElementById('startScreen').classList.add('active');
}

// Update next button state when answer is selected
document.addEventListener('change', () => {
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.disabled = answers[currentQuestion] === undefined;
});
