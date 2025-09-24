# 🏢 Tanisha Company Management

A modern, full-stack web application designed to efficiently manage company data. Built with cutting-edge technologies to ensure a seamless user experience and robust backend functionality.

---

## 🌟 Features

- **📝 Manage Companies**  
  Add, edit, and delete company records effortlessly with an intuitive interface.

- **🔍 Real-Time Search & Filters**  
  Quickly find companies by name, industry, or location with case-insensitive search and dynamic filters.

- **📱 Responsive Design**  
  Optimized for all devices with a clean and modern card layout.

- **🎨 Modern UI/UX**  
  Styled with Tailwind CSS for a professional look and enhanced with Toastify notifications for instant feedback.

- **⚠️ Confirmation Dialogs**  
  Secure delete actions with custom confirmation modals.

- **✨ Smooth Animations**  
  Enjoy polished transitions and loading indicators for a premium experience.

---

## 🛠️ Tech Stack

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

### Frontend:
- **React.js**
- **Tailwind CSS**
- **Toastify**

### API:
- RESTful endpoints for CRUD operations and search functionality.

---

## 📦 Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/tanisha-sahu/Company_API_Development.git
cd Company_API_Development
```

### 2️⃣ Backend Setup
- Navigate to the `Backend` folder:
  ```bash
  cd Backend
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Create a `.env` file and configure your MongoDB URI:
  ```env
  MONGO_URI=your_mongodb_connection_string
  ```
- Start the backend server:
  ```bash
  node server.js
  ```

### 3️⃣ Frontend Setup
- Navigate to the `Frontend` folder:
  ```bash
  cd Frontend
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the development server:
  ```bash
  npm run dev
  ```

### 4️⃣ Access the Application
- Open your browser and visit:
  ```
  http://localhost:5173
  ```

---

## 📋 API Endpoints

| Method | Endpoint               | Description            |
|--------|------------------------|------------------------|
| GET    | `/api/companies`       | List & filter companies|
| POST   | `/api/companies`       | Add a new company      |
| PUT    | `/api/companies/:id`   | Update a company       |
| DELETE | `/api/companies/:id`   | Delete a company       |

---

## 💡 Customization

- Extend company fields in the backend model as needed.
- Modify Tailwind CSS classes to match your branding.
- Add authentication or advanced features to enhance functionality.

---

## 📝 License

This project is licensed under the **MIT License**. Feel free to use and modify it as per your requirements.

---

🚀 **Happy Coding!**
