import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "i am H1 tag"),
        React.createElement("h1", {}, "i am h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am child2 h1"),
        React.createElement("h2", {}, "i am child2 h2"),
    ]),
]);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(parent);
