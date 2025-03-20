# Node.js + Express + PostgreSQL + Prisma + Docker

This project is a simple REST API built with **Node.js**, **Express**, **PostgreSQL**, and **Prisma ORM**. It supports running PostgreSQL in a **Docker container** and applies Prisma **migrations** automatically in production.

---

## 🚀 Features
- REST API with Express
- PostgreSQL database
- Prisma ORM for database management
- Docker support
- Automated database migrations

---

## 📦 Setup

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/john-apisit/nodets-prisma.git
cd nodets-prisma
```

### 2️⃣ **Install Dependencies**
```sh
yarn install
```

### 3️⃣ **Configure Environment Variables**
Rename `.env.example` to `.env` and update database credentials:
```
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
```

---

## 🐳 Running with Docker

### **Start PostgreSQL (Docker Compose)**
```sh
docker-compose up -d
yarn dev
```

---

## 🛠 Prisma Migrations

### **Generate a New Migration** (Without Applying It)
```sh
npx prisma migrate dev --create-only --name init
```

### **Apply Migrations**
```sh
npx prisma migrate deploy
```

### **Reset Database & Apply Migrations (Development Only)**
```sh
npx prisma migrate reset
```

---

## 📡 API Endpoints

### **Create a Product**
```sh
curl -X POST http://localhost:3000/v1/products -H "Content-Type: application/json" -d '{"name": "Product A", "price": 100}'
```

### **Get All Products**
```sh
curl http://localhost:3000/v1/products
```

---

## 🔥 Running the App Locally

### **1. Start PostgreSQL**
If you are not using Docker, ensure PostgreSQL is running locally and update your `.env` file accordingly.

### **2. Apply Migrations & Start Server**
```sh
npx prisma migrate dev
npm run dev
```

---

## 🏗 Deployment

### **Build & Run in Production Mode**
```sh
npm run build
npm start
```

Or use Docker:
```sh
docker build -t my-app .
docker run -p 3000:3000 --env DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase" my-app
```

---

## 👤 Author
- **Apisit Sianglert** - [GitHub](https://github.com/john-apisit)

---

## 📜 License
This project is licensed under the MIT License.

