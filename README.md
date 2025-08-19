
# 📈 FirstEarner

**FirstEarner** is a full-stack stock trading simulation platform.
It allows users to practice stock trading in a safe environment, track their portfolio, and gain insights through an admin dashboard.

🔗 **Live Demo:** [firstearner-frontend.onrender.com](https://firstearner-frontend.onrender.com)

---

## 🚀 Features

* **User Authentication** – Secure signup/login system
* **Virtual Trading** – Buy/sell stocks with simulated balance
* **Portfolio Management** – Track holdings and performance
* **Trading History** – View past transactions
* **Admin Dashboard** – Analytics and user insights
* **Responsive UI** – Works across devices

---

## 🗂️ Project Structure

```
FirstEarner/
│
├── Backend/     # Node.js + Express API (Auth, Trading, Portfolio, etc.)
├── frontend/    # User-facing React app
├── dashboard/   #User portfolio after login
└── README.md
```

---

## 🛠️ Tech Stack

* **Frontend (User App):** React, CSS
* **Dashboard (Admin):** React
* **Backend:** Node.js, Express
* **Database:** (MongoDB)
* **Deployment:** Render

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/Pratham4403/FirstEarner.git
cd FirstEarner
```

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_database_url
JWT_SECRET=your_secret
```

Run server:

```bash
npm run dev
```

### 3️⃣ Frontend (User App)

```bash
cd ../frontend
npm install
npm start   # or npm run dev (if using Vite)
```

Add `.env`:

```env
REACT_APP_API_URL=http://localhost:5000
```

### 4️⃣ Dashboard (Admin App)

```bash
cd ../dashboard
npm install
npm start   # or npm run dev
```

Add `.env`:

```env
REACT_APP_API_URL=http://localhost:5000
```

---

## 📊 Deployment

* **Frontend:** Deployed on Render → [Live Link](https://firstearner-frontend.onrender.com)
* **Backend & Dashboard:** Can also be deployed on Render/other services.
* Make sure API base URLs are updated in `.env` files before deployment.

---

## 🛣️ Roadmap

* [ ] Live market data integration (e.g., Alpha Vantage / IEX Cloud)
* [ ] Leaderboard & gamification features
* [ ] Advanced analytics with charts
* [ ] Unit & integration testing
* [ ] CI/CD automation

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create your branch: `git checkout -b feature/my-feature`
3. Commit: `git commit -m "Added new feature"`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.

---

