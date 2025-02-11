# Simple Expense Tracker App

## Project Overview

This is a simple expense tracker application built with React.js that allows users to manage their expenses effectively. Users can add expenses with a name, amount, and category, view a list of expenses with the total amount displayed, and delete individual expenses from the list. The application is designed to be mobile-friendly and provides basic form validation.

## Tech Stack

- **Frontend:** React.js (Functional Components + Hooks)
- **CSS Framework:** Tailwind CSS
- **State Management:** Local state (with optional localStorage for persistence)
- **Form Validation:** Yup
- **Routing:** React Router (for page navigation)

## Installation Instructions

To clone and run the project locally, follow these instructions:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   ```
1. **Navigate to the project folder:**
   ```bash
   cd expense-tracker
   ```
1. **Install dependencies:**
   ```bash
   npm install
   ```
1. **Run the app:**
   ```bash
   npm run dev
   ```
   The app will be running on http://localhost:5173/

## Usage Guide

**Adding an Expense:**

Fill in the form with the expense name, amount, and category.
Click on the "Add Expense" button to save the expense.

**Viewing Expenses:**

The list of expenses will be displayed along with the total amount at the top.

**Deleting an Expense:**

Click the delete button next to an expense to remove it from the list.

**Category Filtering:**
Use the dropdown to filter expenses by category.
