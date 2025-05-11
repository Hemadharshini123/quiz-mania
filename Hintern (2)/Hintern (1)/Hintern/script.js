const quizSets = {
    set1: [
        { 
            question: "What is sin90 ?", 
            answers: ["2/4", "2/2", "9/0", "4/40"], 
            correct: 1, 
            background: 'url("https://c4.wallpaperflare.com/wallpaper/330/785/205/equations-math-wallpaper-preview.jpg")'  
        },
        { 
            question: "What is the capital of France?", 
            answers: ["Paris", "London", "Berlin", "Rome"], 
            correct: 0, 
            background: 'url("https://4kwallpapers.com/images/walls/thumbs_2t/8437.jpg")' 
        },
        { 
            question: "Which planet is closest to the sun?", 
            answers: ["Venus", "Mars", "Mercury", "Earth"], 
            correct: 2, 
            background: 'url("https://img.pikbest.com/ai/illus_our/20230422/abe5e1136c62d3a26af5cca84cf4904e.jpg!w700wp")' 
        },
        { 
            question: "What is the largest mammal?", 
            answers: ["Elephant", "Blue Whale", "Giraffe", "Shark"], 
            correct: 1, 
            background: 'url("https://media.istockphoto.com/id/1263462458/photo/wild-animals-group-on-blue-sky-background.jpg?s=612x612&w=0&k=20&c=J53Jj2yc29KD8WSPO7WXtwsF4nRagV9fy9IFy6NDXIU=")' 
        },
        { 
            question: "Who was the first woman to win a Nobel Prize?", 
            answers: ["Han", "Marie Curie", "Creeper Lia", "Jennifer"], 
            correct: 1, 
            background: 'url("https://img.freepik.com/premium-photo/reflect-achievements-nobel-prize-winners-generative-ai_1198249-100698.jpg")' 
        }
    ],
    set2: [
        { 
            question: "What is the largest planet?", 
            answers: ["Earth", "Mars", "Jupiter", "Venus"], 
            correct: 2, 
            background: 'url("https://c4.wallpaperflare.com/wallpaper/144/216/930/light-planet-ring-stars-wallpaper-preview.jpg")' 
        },
        { 
            question: "What is the chemical symbol for water?", 
            answers: ["O2", "H2O", "CO2", "NaCl"], 
            correct: 1, 
            background: 'url("https://s3.envato.com/files/49639b81-e7a2-44a1-934b-414fd55a96b4/inline_image_preview.jpg")' 
        },
        { 
            question: "Which country has the largest population?", 
            answers: ["India", "USA", "China", "Russia"], 
            correct: 2, 
            background: 'url("https://c4.wallpaperflare.com/wallpaper/258/195/822/flag-flags-countries-symbol-wallpaper-preview.jpg")' 
        },
        { 
            question: "Which country is credited with inventing ice cream?", 
            answers: ["China", "Norway", "Iceland", "Denmark"], 
            correct: 0, 
            background: 'url("https://c4.wallpaperflare.com/wallpaper/946/557/290/ice-cream-food-colorful-wallpaper-preview.jpg")' 
        },
        { 
            question: "Which ocean is the largest?", 
            answers: ["Atlantic", "Indian", "Pacific", "Arctic"], 
            correct: 2, 
            background: 'url("https://wallpapershome.com/images/wallpapers/ocean-1920x1080-5k-4k-wallpaper-8k-sea-nature-underwater-water-sun-386.jpg")' 
        }
    ],
    set3: [
        { 
            question: "What year did World War II end?", 
            answers: ["1945", "1939", "1965", "1950"], 
            correct: 0, 
            background: 'url("https://wallpaperaccess.com/full/1711175.jpg")' 
        },
        { 
            question: "Who wrote 'Hamlet'?", 
            answers: ["Charles Dickens", "Leo Tolstoy", "William Shakespeare", "Mark Twain"], 
            correct: 2, 
            background: 'url("https://wallpapercave.com/wp/wp1919766.jpg")' 
        },
        { 
            question: "Which country is known as the Land of the Rising Sun?", 
            answers: ["Japan", "China", "South Korea", "India"], 
            correct: 0, 
            background: 'url("https://images.unsplash.com/photo-1545569341-9eb8b30979d9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D")' 
        },
        { 
            question: "Which element has the chemical symbol 'O'?", 
            answers: ["Oxygen", "Osmium", "Oxide", "Ozone"], 
            correct: 0, 
            background: 'url("https://static.vecteezy.com/system/resources/previews/029/269/531/non_2x/mystical-alchemical-transformation-ai-generative-photo.jpg")' 
        },
        { 
            question: "What is the primary ingredient in the Italian dessert tiramisu?", 
            answers: ["Mascarpone cheese", "Grand wormwood", "Chickpeas", "Lamb"], 
            correct: 0, 
            background: 'url("https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg")' 
        }
    ]
};

let currentSet = [];
let currentQuestionIndex = 0;
let score = 0;

function loadQuestions() {
    const selectedSet = document.getElementById('quizSet').value;
    currentSet = quizSets[selectedSet];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').innerHTML = "";
    document.getElementById('question-container').style.display = 'block';
    showQuestion();
}


function showQuestion() {
    const question = currentSet[currentQuestionIndex];
    
   
    document.getElementById('question').innerText = question.question;
    
   
    document.body.style.backgroundImage = question.background;
    
    
    const answersElement = document.getElementById('answers');
    answersElement.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="radio" name="answer" value="${index}"> ${answer}`;
        answersElement.appendChild(li);
    });
}


function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedAnswer) {
        alert('Please select an answer!');
        return;
    }
    
    const answerIndex = parseInt(selectedAnswer.value);
    if (answerIndex === currentSet[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentSet.length) {
        showQuestion();
    } else {
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('score').innerText = `Your score is: ${score}/${currentSet.length}`;
    }
}


window.onload = function() {
    loadQuestions();
};
