import * as Yup from "yup";

// Allowed categories (Modify as needed)
const allowedCategories = ["Food", "Transport", "Shopping", "Other"];

export const expenseValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Expense name must be at least 2 characters long")
    .max(50, "Expense name cannot exceed 50 characters")
    .matches(/^[A-Za-z\s]+$/, "Expense name must contain only letters")
    .required("Expense name is required"),

  amount: Yup.number()
    .typeError("Amount must be a valid number")
    .required("Amount is required")
    .positive("Amount must be greater than zero")
    .max(100000, "Amount cannot exceed $100,000") // Avoid extreme values
    .test(
      "is-decimal",
      "Amount can have up to 2 decimal places only",
      (value) => (value ? /^\d+(\.\d{1,2})?$/.test(value.toString()) : true)
    ),

  category: Yup.string()
    .required("Category is required")
    .oneOf(allowedCategories, "Invalid category selected"),
});
