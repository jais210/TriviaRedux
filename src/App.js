import React, { Component } from 'react';
import {getImage,
getQuestion,
getOptions,
setAnswerAt} from './actions';
import {connect} from 'redux-zero/react';
import './App.css';

const Option = ({quiz,option, index}) => {
  const onOptionSelect = (e) => {
    console.log('value: ', option);
    quiz.setAnswerAt(option,index);
  }
  return (
     <div>
        <div>
           <span> {String.formCharCode(65+index)} - </span>
           <button onClick = {onOptionSelect}> {option} </button>
        </div>
     </div>);
};

const App = ({quiz,answers, percentage}) => {
  

    
  return ( 
        
    <div className="container text-center">
    <div className="row justify-content-xl-center ">
        <div>
          <img/> imagen
        </div>
    </div>
    <div className="">
    <div className="progress">
        <div className="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Barra de progreso</div>
    </div>
    <div className="row justify-content-xl-center ">
        <div className="col-xl-12 col-sm-12">
            <h2>Estoy funcionando-pregunta</h2>
        </div>
    </div>
    <div className="row justify-content-xs-center ">
        <div className="col-xl-5 col-sm-5">Opción</div>
        <div className="col-xl-5 col-sm-5">Opción</div>
        <div className="col-xl-5 col-sm-5">Opción</div>
        <div className="col-xl-5 col-sm-5">Opción</div>
    </div>
   
    </div>
</div>
);
 
}

export default App;
