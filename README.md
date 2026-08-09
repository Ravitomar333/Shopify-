# 🛍️ Shopify – Full Stack E-Commerce Application

Shopify is a full-stack e-commerce web application designed to provide a complete online shopping experience. Users can browse products, create accounts, add products to their cart, place orders, and make payments through an integrated payment gateway.

The project follows a separate frontend and backend architecture and uses RESTful APIs for communication between the client and server.

---

## 🚀 Live Demo

- **Frontend:** https://shopify-nine-rosy.vercel.app
- **Backend:** https://shopify-5ysd.onrender.com

> Note: The backend is deployed on Render and the frontend is deployed on Vercel.

---

## ✨ Features

### 👤 User Authentication
- User registration
- User login/logout
- JWT-based authentication
- Protected routes
- User profile management

### 🛒 Shopping Features
- Browse products
- View product details
- Add products to cart
- Update product quantity
- Remove products from cart
- View cart total

### 📦 Order Management
- Create orders
- Store shipping address
- View order details
- Track order status
- Order history

### 💳 Payment Integration
- Razorpay payment integration
- Test-mode payment support
- Payment verification
- Secure order processing

### 👨‍💼 Admin Features
- Admin authentication
- Add products
- Update products
- Delete products
- Manage users
- Manage orders
- Update order status

### 📱 Responsive Design
- Mobile-friendly interface
- Tablet support
- Desktop responsive layout
- Clean and modern UI

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Axios
- React Router

### Backend

- Node.js
- Express.js
- RESTful APIs
- JWT Authentication
- bcrypt.js

### Database

- MongoDB
- MongoDB Atlas
- Mongoose

### Payment

- Razorpay

### Deployment

- Vercel – Frontend
- Render – Backend
- MongoDB Atlas – Database

### Development Tools

- VS Code
- Git
- GitHub
- Postman
- npm

---

## 📁 Project Structure

```text
Shopify/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── context/
│       ├── App.jsx
│       └── main.jsx
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
