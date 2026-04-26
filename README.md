# 📱 Smart Device Management Backend

A secure backend system for managing and tracking devices. Built using Node.js, Express, and MongoDB with JWT authentication.

---

## 🚀 Features

- User Authentication (JWT Login/Register)
- Add, Update, Delete Devices
- Device Tracking System
- Secure API with Middleware Protection
- MongoDB Integration
- RESTful Architecture

---

## ⚙️ Tech Stack

- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT Authentication  
- bcryptjs  

---

## 📦 Installation

### 1. Clone Repository
```bash
git clone https://github.com/priyESH88088/Device_Management.git

2. Install Dependencies
npm install
3. Setup Environment Variables

Create .env file:

MONGO_URL=mongodb://127.0.0.1:27017/DeviceManagement
JWT_SECRET=your_secret_key
PORT=5000
4. Run Project
npm start
📡 API Routes
Auth
POST /api/v1/auth/register
POST /api/v1/auth/login
Devices
POST /api/v1/device
GET /api/v1/device
PATCH /api/v1/device/:id
DELETE /api/v1/device/:id
🔒 Authentication

For protected routes:

Authorization: Bearer <token>
📁 Project Structure
controllers/
models/
routes/
middleware/
config/
index.js
👨‍💻 Author

Priyesh Dwivedi
GitHub: https://github.com/priyESH88088

⭐ Future Improvements
Role-based access (Admin/User)
Device analytics dashboard
Frontend UI (React)
Real-time device tracking

