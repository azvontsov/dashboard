import React from "react";
import Sidebar from "./components/Sidebar";
import AverR from "./components/AverR";
import Senti from "./components/Senti";
import Review from "./components/Review";
import Website from "./components/Website";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Sidebar />
        <AverR />
        <Senti />
        <Review />
        <Website />
      </div>
    </div>
  );
}

export default App;
