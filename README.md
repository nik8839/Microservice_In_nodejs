# 🚀 Microservices Application with Docker 🐳

This project consists of multiple microservices (`user-service`, `product-service`, `order-service`, and `communicator`), all containerized using **Docker** and orchestrated with **Docker Compose**.

## 📁 Project Structure

```
Microservice_Node/
│── user-service/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│── product-service/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│── order-service/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│── communicator/
│   ├── index.js
│   ├── package.json
│── docker-compose.yml
│── README.md
```

---

## 🏰 Setup and Installation

### 1️⃣ Install Docker and Docker Compose

Ensure you have **Docker** and **Docker Compose** installed.

- **Install Docker**: [Download Docker](https://www.docker.com/get-started)
- **Verify installation**:
  ```sh
  docker -v
  docker-compose -v
  ```

---

### 2️⃣ Clone the Repository

```sh
git clone https://github.com/yourusername/microservices-docker.git
cd microservices-docker
```

---

### 3️⃣ Build and Start Services

Run the following command to **build and start** all services:

```sh
docker-compose up --build
```

To run the services in **detached mode** (in the background):

```sh
docker-compose up -d --build
```

---

### 4️⃣ Check Running Containers

To verify that all services are running:

```sh
docker ps
```

You should see the following containers:

```
CONTAINER ID   IMAGE               STATUS        PORTS
xxxxxxxxxxxx   user-service        Up           3001/tcp
xxxxxxxxxxxx   product-service     Up           3002/tcp
xxxxxxxxxxxx   order-service       Up           3003/tcp
```

---

## 🚀 API Endpoints

Use **Postman** or **cURL** to test the APIs.

### 📌 User Service

- **Endpoint:** `GET /api/users`
- **URL:** `http://localhost:3001/api/users`
- **Test with cURL:**
  ```sh
  curl http://localhost:3001/api/users
  ```
- **Expected Response:**
  ```json
  [
    { "id": 1, "name": "John Doe" },
    { "id": 2, "name": "Jane Doe" }
  ]
  ```

---

### 📌 Product Service

- **Endpoint:** `GET /api/products`
- **URL:** `http://localhost:3002/api/products`
- **Test with cURL:**
  ```sh
  curl http://localhost:3002/api/products
  ```
- **Expected Response:**
  ```json
  [
    { "id": 1, "name": "Laptop" },
    { "id": 2, "name": "Phone" }
  ]
  ```

---

### 📌 Order Service

- **Endpoint:** `GET /api/orders`
- **URL:** `http://localhost:3003/api/orders`
- **Test with cURL:**
  ```sh
  curl http://localhost:3003/api/orders
  ```
- **Expected Response:**
  ```json
  {
    "orders": [
      {
        "id": 1,
        "user": { "id": 1, "name": "John Doe" },
        "product": { "id": 1, "name": "Laptop" }
      }
    ]
  }
  ```

---

## 🛠️ Stopping Containers

To **stop all running services**:

```sh
docker-compose down
```

To **stop a specific service** (e.g., `order-service`):

```sh
docker stop order-service
```

---

## 🐛 Debugging

### 1️⃣ View Logs of a Service

To check logs for a specific service, e.g., `order-service`:

```sh
docker-compose logs -f order-service
```

### 2️⃣ Restart a Service

If a service crashes or needs to be restarted:

```sh
docker-compose restart order-service
```

---

## 📌 Common Issues

### ❌ Error: "Cannot find module '../communicator/index'"

- Ensure that the **path to the `communicator` module is correct**.
- Use **relative paths** when importing in `index.js`:
  ```js
  const communicator = require('../communicator/index');
  ```

### ❌ Error: "No such container: order-service-1"

- Run `docker ps -a` to check if the container exists.
- If not, start the containers using:
  ```sh
  docker-compose up --build
  ```

---

## 📌 Pushing to GitHub

### 1️⃣ Initialize Git (if not already done)

```sh
git init
```

### 2️⃣ Add Remote Repository

```sh
git remote add origin https://github.com/yourusername/microservices-docker.git
```

### 3️⃣ Add, Commit, and Push

```sh
git add .
git commit -m "Initial commit with Docker setup"
git push origin main
```

---

## 🎯 Conclusion

This project demonstrates a **Dockerized microservices architecture**, making it easy to **deploy, scale, and test** services independently.
