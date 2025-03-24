# 🚀 MEAN Stack CRUD Application with MySQL Database

This project is a **CRUD (Create, Read, Update, Delete)** application using the **MEAN (MongoDB, Express, Angular, Node.js)** stack with **MySQL** as the database. The application manages an **Employee-Department** relationship with operations such as:

✅ Add Department  
✅ List Departments  
✅ Add Employee  
✅ List Employees  
✅ Update Employee/Department  
✅ Delete Employee/Department  

The application uses **Bootstrap** for interactive and responsive UI.

---

## 📚 Table of Contents
- [📝 Project Overview](#-project-overview)
- [🎯 Features](#-features)
- [⚙️ Technologies Used](#️-technologies-used)
- [📂 Folder Structure](#-folder-structure)
- [🚀 Getting Started](#-getting-started)
- [⚡ API Endpoints](#-api-endpoints)
- [🐛 Troubleshooting](#-troubleshooting)
- [📜 License](#-license)
- [🤝 Contributing](#-contributing)
- [📧 Contact](#-contact)

---

## 📝 Project Overview
The CRUD application demonstrates managing relationships between **employees** and **departments**. Users can perform the following operations:

- Add, edit, and delete departments.
- Add, edit, and delete employees.
- List all departments and employees.
- Associate employees with departments.

---

## 🎯 Features
- **Department Management**
    - Add, List, Edit, and Delete Departments.
- **Employee Management**
    - Add, List, Edit, and Delete Employees.
    - Associate employees with departments.
- **Bootstrap Integration** for Responsive UI.
- **Error Handling** and Form Validation.
- **RESTful API** for Backend Communication.

---

## ⚙️ Technologies Used
### Backend
- Node.js
- Express.js
- MySQL (Database)
- Sequelize ORM

### Frontend
- Angular
- TypeScript
- Bootstrap (for UI styling)

---

## 🚀 Getting Started
### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/mean-crud-app.git
cd mean-crud-app
```
### 2. Backend Setup
a) Navigate to Backend Directory
```bash
cd backend
```
b) Install Dependencies
```bash
npm install
```
c) Configure Database
Edit backend/config/db.config.js to add your MySQL credentials:
```bash
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "yourpassword",
  DB: "mean_crud",
  dialect: "mysql",
};
```
d) Run Backend Server
```bash
npm start
```
By default, the backend will run on http://localhost:3000/.
### 3. Frontend Setup
a) Navigate to Frontend Directory
```bash
cd ../frontend
```
b) Install Dependencies
```bash
npm install
```
c) Run Angular Application
```bash
ng serve --open
```
By default, the Angular app will run on http://localhost:4200/
## 📜 License
This project is licensed under the MIT License.

## 🤝 Contributing
Contributions are welcome!
If you encounter bugs, feel free to raise an issue.

## 📧 Contact
For any inquiries, contact:<br>
Email: chinmay24csk@gmail.com<br>
GitHub: https://github.com/chinmay2402


