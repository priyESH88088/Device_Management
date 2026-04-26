📱 Smart Device Management Backend

A RESTful backend system for managing devices, built using Node.js, Express, and MongoDB. It allows users to register, manage, and track devices efficiently.

🚀 Features
User Authentication (JWT-based)
Add / Update / Delete Devices
Device tracking system
Secure API with middleware protection
MongoDB database integration
RESTful architecture

⚙️ Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
bcryptjs
Middleware (Auth protection)

📦 Installation
1. Clone Repository
git clone https://github.com/priyESH88088/Device_Management.git
2. Install Dependencies
npm install
3. Setup Environment Variables

Create a .env file:

MONGO_URL=mongodb://127.0.0.1:27017/DeviceManagement
JWT_SECRET=your_secret_key
PORT=5000
4. Run Project
npm start

📁 Project Structure
controllers/
models/
routes/
middleware/
config/
index.js

🔗 API Endpoints
Auth Routes
POST /api/v1/auth/register
POST /api/v1/auth/login
Device Routes
POST /api/v1/device
GET /api/v1/device
PATCH /api/v1/device/:id
DELETE /api/v1/device/:id

🔒 Authentication

Protected routes require token:

Authorization: Bearer <token>

👨‍💻 Author

Priyesh Dwivedi
GitHub: https://github.com/priyESH88088

⭐ Future Improvements
Device analytics dashboard
Role-based access (Admin/User)
Frontend UI (React)
Real-time device monitoring

