import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import AddExpense from "./screens/AddExpense";
import Navbar from "./components/Navbar";
import NotFound from "./screens/NotFound"; 

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
    </Router>
  );
};

export default App;