# Expense Tracker  

## 📌 Project Overview  
Expense Tracker is a web application designed to help users manage their daily expenses effectively. The app allows users to add expenses with details such as name, amount, and category. It also provides an overview of total expenses and allows users to filter expenses by category or delete entries when necessary. The application is mobile-friendly and built with modern web technologies.  

Unlike traditional implementations that use **LocalStorage**, this app leverages **IndexedDB (IDB)** for persistent data storage, ensuring better performance and scalability.  

---

## 🛠 Tech Stack  
The project is built using the following technologies:  

- **React** - A JavaScript library for building user interfaces.  
- **TypeScript** - A typed superset of JavaScript for better code maintainability.  
- **Vite** - A fast and optimized build tool for modern web projects.  
- **Tailwind CSS** - A utility-first CSS framework for styling.  
- **ESLint** - A tool for maintaining code quality and consistency.  
- **React Hooks** - Used for managing state and side effects.  
- **IndexedDB (IDB)** - A low-level NoSQL database used for client-side storage.  

---

## 🚀 Installation Instructions  
Follow these steps to set up and run the project on your local machine:  

### 1️⃣ Clone the Repository  
```sh  
git clone https://github.com/AliMaherSalim/Expense-Tracker.git  
```
### 2️⃣ Navigate to the Project Director  
```sh  
cd Expense-Tracker    
```
### 3️⃣ Install Dependencies
```sh  
npm install      
```
### 4️⃣ Start the Development Server
```sh  
npm run dev     
```

The app will be accessible at http://localhost:5173 (or the port specified in Vite).

## 📖 Usage Guide
### ➤ Add an Expense

Click the "Add Expense" button.
Enter the expense name, amount, and category.
Click "Save" to store the expense.

### ➤ View Expenses
A list of recorded expenses is displayed with the total amount at the top.

### ➤ Filter by Category

Use the category filter dropdown to display only expenses belonging to a specific category.
This helps in better tracking and analyzing spending habits.

### ➤ Delete an Expense

Click the "Delete" button next to an expense to remove it.

### ➤ Data Storage with IndexedDB
Instead of using LocalStorage, this app uses IndexedDB (IDB) for better performance and scalability.

### Why IDB?
Handles larger data efficiently.
Allows structured storage with indexes.
Non-blocking (does not slow down the UI like LocalStorage).
The expenses are saved in IndexedDB, ensuring that data persists even after page reloads.

### ➤ Mobile-Friendly Design
The app is fully responsive and can be accessed on mobile devices.

### 📄 Documentation

The project is structured in a modular way, ensuring easy scalability.
ESLint is set up for code quality checks.
The app follows best practices in React development.
