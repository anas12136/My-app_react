// 1) Import React and React Dom library
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

//2) get a reference to the div with id root
const el = document.getElementById('root');

//3) tell react to take controll of the element
const root = ReactDOM.createRoot(el);


//4) show the component on the screen
root.render(<App/>);