import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { deleteExpense } from "../store/slices/expenseSlice";
import { getAllExpenses, deleteExpenseDB } from "../db/indexDB";
import ExpenseList from "../components/ExpenseList";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadedExpenses, setLoadedExpenses] = useState(expenses);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const allExpenses = await getAllExpenses();
    setLoadedExpenses(allExpenses);
  };

  const handleDelete = async (id: string) => {
    await deleteExpenseDB(id);
    dispatch(deleteExpense(id));
    setLoadedExpenses((prev) => prev.filter((expense) => expense.id !== id)); // Update state instantly
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full p-5 container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
            Expense Tracker
          </h1>
          <button
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
            onClick={() => navigate("/add-expense")}>
            + Add Expense
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {loadedExpenses.length > 0 ? (
            <ExpenseList expenses={loadedExpenses} onDelete={handleDelete} />
          ) : (
            <p className="text-gray-500 text-center py-6">
              No expenses added yet, Click Add Expense to start.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
