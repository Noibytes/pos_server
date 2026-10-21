# POS JSON Server

A mock REST API backend for Point of Sale (POS) frontend applications built using `json-server`.

## Available Endpoints

- `GET /products` - List all products
- `POST /products` - Create a product
- `GET /products/:id` - Get product by ID
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product
- `GET /categories` - List all categories
- `GET /customers` - List all customers
- `GET /orders` - List all orders
- `POST /orders` - Create a new order / sale

## How to Run

1. Open a terminal in this folder:
   ```bash
   cd "c:\Users\hp\OneDrive\Desktop\mern(a)\Pos_server"
   ```

2. Install dependencies (first time only):
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   Or using json-server CLI:
   ```bash
   npm run server
   ```

The server will run on `http://localhost:5000` by default.
