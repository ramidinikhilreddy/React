import React from "react";
import ReactDOM from "react-dom/client";

const FirstFunction = () =>(
     <h1 id="head"> I am first function </h1>
);

const SecondFunction = () => (
    <div id="container">
    <FirstFunction/>
    <h1>I am after first element</h1>
    </div>
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SecondFunction/>);