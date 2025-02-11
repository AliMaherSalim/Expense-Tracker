import React from "react";
import { MdDelete } from "react-icons/md";
interface ExpenseCardProps {
  expense: { id: string; name: string; amount: number; category: string };
  onDelete: (id: string) => void;
}

const categoryColors: Record<string, string> = {
  Food: "bg-green-100 text-green-700",
  Transport: "bg-blue-100 text-blue-700",
  Shopping: "bg-purple-100 text-purple-700",
  Other: "bg-gray-100 text-gray-700",
};

const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense, onDelete }) => {
  return (
    <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 backdrop-blur-md">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{expense.name}</h3>
        <p
          className={`px-3 py-1 text-sm font-medium rounded-full mr-10 ${
            categoryColors[expense.category] || "bg-gray-100 text-gray-700"
          }`}>
          {expense.category}
        </p>
      </div>
      <p className="text-xl font-bold text-gray-700 mt-3">${expense.amount}</p>
      <button
        className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition-all duration-300 hover:scale-110"
        onClick={() => onDelete(expense.id)}>
        <MdDelete className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ExpenseCard;
