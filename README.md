# 🚴 Bicycle Shop API  

This project is a backend API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. It provides functionality for managing bicycle data and processing orders.  

---
api : https://assignment02-two.vercel.app/

## ✨ Features  
- 🛒 **Manage Bicycle Inventory**  
- 📦 **Create and View Orders**  
- 💰 **Calculate Total Revenue**  
- 🔄 **Update and Delete Bicycle Data**  

---

## 🛠️ Technologies Used  
- ⚡ **Node.js**  
- 🌐 **Express.js**  
- 🗄️ **MongoDB & Mongoose**  
- 🧑‍💻 **TypeScript**  
- 🎨 **Prettier & ESLint** for code formatting and linting  

---

## 🚀 Installation and Setup  

### 📋 Steps to Get Started  

1. **📂 Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/bicycle-shop-api.git](https://github.com/mydul62/assignment2.git)
   cd assignment02



🔑 Set Environment Variables
Create a .env file in the project root and add the following variables:

    PORT=5000
    MONGO_URI=your-mongodb-connection-string

▶️ Run the Server

    For Development:

npm run dev

For Production:

        npm run build
        node dist/server.js

📡 API Endpoints
🚲 Products

  🔍 Get All Products

    GET /api/products

Returns all bicycle data.

🔍 Get a Single Product

    GET /api/products/:id

Returns details of a single bicycle based on its ID.

✏️ Update a Product

    PUT /api/products/:id

Updates the information of a specific bicycle.

🗑️ Delete a Product

    DELETE /api/products/:id

    Deletes a specific bicycle based on its ID.

🛍️ Orders

    🆕 Create an Order

    POST /api/orders

Creates a new order. Send the required order data in the request body.

💵 Get Revenue

    GET /api/orders/revenue

    Calculates and returns total revenue.

📜 Scripts

 🔧 Build the Project

    npm run build

Compiles the TypeScript code into JavaScript.

▶️ Run the Development Server

    npm run dev

Starts the development server with hot reload.

 Lint the Code

    npm run lint

Runs ESLint to find and fix code issues.

🔨 Auto-fix Linting Issues

    npm run lint:fix

Automatically fixes linting issues.

🎨 Format the Code

     npm run format

Formats the code using Prettier.
