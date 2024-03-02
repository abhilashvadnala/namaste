import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return (
        <div id="app"><h2>Namaste React with Functional component</h2>
        <p>a javascript function which returns JSX is called functional component</p></div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
