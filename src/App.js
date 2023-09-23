import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing components
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
