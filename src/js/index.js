//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "./../styles/Contador.css"

//import your own components
import Home from "./component/home.jsx";
import { Simplecounter } from "./component/Contador.jsx";

//render your react application
let counter = 0

setInterval( () => {
    const uno = Math.floor(counter/1) % 10
    const dos = Math.floor(counter/10) % 10
    const tres = Math.floor(counter/100) % 10
    const cuatro = Math.floor(counter/1000) % 10
    const cinco = Math.floor(counter/10000) % 10
    const seis = Math.floor(counter/100000) % 10
    
    ReactDOM.render(<Simplecounter number1={uno} 
        number2={dos} 
        number3={tres} 
        number4={cuatro} 
        number5={cinco} 
        number6={seis}/>, 
    document.querySelector("#app"))
    counter ++
},1000)