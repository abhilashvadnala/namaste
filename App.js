import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
