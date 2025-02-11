import { openDB } from "idb";

const DB_NAME = "ExpenseTracker";
const STORE_NAME = "expenses";
interface Expense {
  id: string;
  name: string;
  amount: number;
  category: string;
}
export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    },
  });
};

export const getAllExpenses = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

export const addExpenseDB = async (expense: Expense) => {
  const db = await initDB();
  return db.put(STORE_NAME, expense);
};

export const deleteExpenseDB = async (id: string) => {
  const db = await initDB();
  return db.delete(STORE_NAME, id);
};
