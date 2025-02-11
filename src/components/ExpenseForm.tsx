import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addExpense } from "../store/slices/expenseSlice";
import { addExpenseDB } from "../db/indexDB";
import { v4 as uuidv4 } from "uuid";

const validationSchema = Yup.object({
  name: Yup.string().required("Expense name is required"),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be positive")
    .integer("Amount must be a whole number"),
  category: Yup.string().required("Please select a category"),
});

interface ExpenseFormProps {
  onClose: () => void | Promise<void>;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: "", amount: "", category: "" },
    validationSchema,
    onSubmit: async (values) => {
      const expense = {
        id: uuidv4(),
        name: values.name,
        amount: Number(values.amount),
        category: values.category,
      };

      dispatch(addExpense(expense));
      await addExpenseDB(expense);
      formik.resetForm();
      onClose();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-6 bg-white p-6 rounded-xl shadow-lg transition-all duration-300">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Expense Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter expense name"
          className={`w-full p-3 border color-black ${
            formik.errors.name ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:ring-2 focus:ring-blue-500 transition-all`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Amount ($)
        </label>
        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          className={`w-full p-3 border ${
            formik.errors.amount ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:ring-2 focus:ring-blue-500 transition-all`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.amount}
        />
        {formik.errors.amount && formik.touched.amount && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.amount}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          name="category"
          className={`w-full p-3 border ${
            formik.errors.category ? "border-red-500" : "border-gray-300"
          } rounded-lg bg-white focus:ring-2 focus:ring-blue-500 transition-all`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}>
          <option value="" label="Select a category" />
          <option value="Food" label="🍕 Food" />
          <option value="Transport" label="🚗 Transport" />
          <option value="Shopping" label="🛍️ Shopping" />
          <option value="Other" label="📌 Other" />
        </select>
        {formik.errors.category && formik.touched.category && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.category}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
