import createStore from 'redux-zero';
const QUIZ = [
    { img:"uno",
    index:1,
    question:"Which is the oldest airline in the world?",
    correctAnswer:"KLM",
    answer: [],
    options: ["Avianca","KLM","Qantas"],
    
    },
    { img:"dos",
    index:2,
    question:"Which is the largest port in the world?",
    correctAnswer:"Port of Shanghai",
    answer: [],
    options: ["Port of Shanghai","Port of Singapore","Port of Rotterdam"]

    },
    { img:"tres",
    index:3,
    question:"What is the longest distance cycling backwards?",
    correctAnswer:"337.60 km",
    answer: [],
    options: ["89.30 km","675.10 km","337.60 km"],

    },
    { img:"cuatro",
    index:4,
    question:"What is the highest speed ever reached by a school bus?",
    correctAnswer:"590 km/h",
    answer: [],
    options:  ["590 km/h","320 km/h","245 km/h"],

    },
    { img:"cinco",
    index:5,
    question:"What is the longest car trip on one tank of gas?",
    correctAnswer:"2617 km",
    answer: [],
    options: ["2617 km","3568 km","1732 km"],

    },
   
]
 
 const initialState = {
    quiz:QUIZ,
    
 };
 
 const store = createStore(initialState);
 export default store;