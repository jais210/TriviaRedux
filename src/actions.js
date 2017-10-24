import store from './store';

export const saveAnswer = (value) =>{
    let answer = store.getState().answers;
    let i = store.getState().count;
    let check = store.getState().check;
    if (check){
        answer[i]=value;
        store.setState(
            {
                check:true,
                answers:answer
            }
        )
    }
    
}

export const getImage = img=> {
    let oldImg = store.getState().quiz.img;
    const newImg = oldImg.concat({
        img: img,
        id: oldImg.length
    });
    store.setState({
        quiz: newImg
    });
    
 };

export const getQuestion = question =>{
    let oldQuestion = store.getState().quiz.question;
    const newQuestion = oldQuestion.concat({
        question: question,
        id: oldQuestion.length
    });
    store.setState({
        quiz: newQuestion
    });
 }

 export const getOptions = options => {
    let oldOptions = store.getState().quiz.options;
    const newOptions = oldOptions.concat({
        options: options,
        id: oldOptions.length
    });
    store.setState({
        quiz: newOptions
    });
 }

 
 export const setAnswerAt = (option, index) => {
  let oldSetAnswerAt=  store.getState().quiz.answer.push (option);
  const newOldSetAnswerAt = store.getState().quiz.index++;
  store.getState({
      quiz: newOldSetAnswerAt
  });
  
 }

 // todo lo que modifica al App va aquí