import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import { useNavigate } from "react-router-dom";

const AddExpense: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-5">
      <div className="w-full  container mx-auto bg-white p-6 rounded-2xl shadow-lg transition-all duration-300">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Add New Expense
          </h1>
          <button
            className="text-white bg-red-500 hover:text-gray-700 transition-all duration-300"
            onClick={() => navigate("/")}>
            ✖
          </button>
        </div>
        <ExpenseForm onClose={() => navigate("/")} />
      </div>
    </div>
  );
};

export default AddExpense;
