import React, { useState } from "react";
import ExpenseCard from "./ExpenseCard";

interface Expense {
  id: string;
  name: string;
  amount: number;
  category: string;
}

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDelete }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Food", "Transport", "Shopping", "Other"];

  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  return (
    <div className="mt-5">
      <div className="mb-4">
        <p className="text-lg font-semibold">Category</p>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-md border-gray-300 focus:ring-2  focus:ring-blue-500">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {filteredExpenses.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-500 py-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076532.png"
            alt="No expenses"
            className="w-36 h-36 mb-4 opacity-70"
          />
          <p className="text-lg font-semibold">No expenses to display.</p>
          <p className="text-sm text-gray-400">
            Start by adding a new expense!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExpenses.map((expense) => (
            <ExpenseCard
              key={expense.id}
              expense={expense}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
