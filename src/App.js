import React from "react";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";

import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default App;
