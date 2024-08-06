// const heading = React.createElement("h1",{id:"heading"},"its vins.......")

// console.log(heading); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root); //object

// root.render(heading)

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

// console.log(parent);

const parent2 = React.createElement("h1", {}, "parent2");

const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(parent2);
root.render(parent);
