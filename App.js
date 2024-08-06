import React from "react";
import ReactDOM from "react-dom/client";

//jsx
// react Element
const heading = (
    <h1 id="heading" className="vins" tabIndex="5">
        this is jsxHeading
    </h1>
);
console.log(heading); // object

// react Component
const HeadingComponet = () => {
    return <h1>functional component</h1>;
};

const Title = () => <h1 id="heading">Title Component....!</h1>;

const NormalFunctionComponent = function () {
    return <h1 id="heading">I am a normal function component</h1>;
};
const HeadingComponent2 = () => (
    <div id="container">
        <Title />
        <HeadingComponet />
        <NormalFunctionComponent />
        <h1 className="heading">functional component 2 </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
