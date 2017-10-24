import createStore from 'redux-zero';
const QUIZ = [
    { img:"uno",
    question:"Which is the oldest airline in the world?",
    correctAnswer:"KLM",
    options: ["Avianca","KLM","Qantas"],
    
    },
    { img:"dos",
    question:"Which is the largest port in the world?",
    correctAnswer:"Port of Shanghai",
    options: ["Port of Shanghai","Port of Singapore","Port of Rotterdam"]

    },
    { img:"tres",
    question:"What is the longest distance cycling backwards?",
    correctAnswer:"337.60 km",
    options: ["89.30 km","675.10 km","337.60 km"],

    },
    { img:"cuatro",
    question:"What is the highest speed ever reached by a school bus?",
    correctAnswer:"590 km/h",
    options:  ["590 km/h","320 km/h","245 km/h"],

    },
    { img:"cinco",
    question:"What is the longest car trip on one tank of gas?",
    correctAnswer:"2617 km",
    options: ["2617 km","3568 km","1732 km"],

    },
   
]
 
 const initialState = {
    quiz: QUIZ,
    percentage: ['0%'],
    answers: [],
    count: 0,
    check: false
    
 };
 
 const store = createStore(initialState);
 export default store;