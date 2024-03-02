import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?w=1480&t=st=1709355214~exp=1709355814~hmac=71abcc2016621728c7a9ef0834cbfbfa4b369e632653bb102e1b79d5c5518a0e" />
            </div>
            <div className="navigation-list">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const App = () => {
  return (
    <div id="app">
      <Header />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
