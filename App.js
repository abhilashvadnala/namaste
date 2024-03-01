import React from "react";
import ReactDOM from "react-dom/client";

const App = React.createElement("div", {
    id: "root"
}, <h1>Namaste React</h1>);

ReactDOM.createRoot(document.getElementById("root")).render(App);
