# PULSE - LOGIX App

## 🚀 Overview
AI-Powered Logistics Platform for African Merchants
Seamlessly create delivery orders, assign riders, and track shipments in real-time — no hassle
---

## 🎯 Problem Statement
Merchants struggle with unreliable dispatch systems, while dispatch riders miss job opportunities due to lack of real-time tools. This app bridges that gap with an AI-enhanced platform that:

Create and manage delivery orders
Assign riders in real-time
Track order status: Pending, In Transit, Delivered
Responsive UI with clean, user-friendly dashboard
Smooth navigation between Home, Merchant, Rider, and Orders views
---

## 👥 User Roles

### Merchant
- Register & log in
- Create jobs with pickup/drop-off info
- Track job progress
- Receive job notifications & receipts

### Dispatch Rider
- Register & log in
- Toggle online/offline availability
- Accept/reject jobs
- Update job status
- View earnings

---

## 📲 Core Features

- **Smart job assignment** — Riders only notified when online
- **Real-time updates** — Track jobs from creation to delivery
- **Status-based flow** — Each job moves through defined states: `created → assigned → in progress → completed`
- **Secure auth** — JWT or session-based login
- **Payment support** — Integration with local NGN payment gateways

---

## 🔧 Tech Stack Suggestions

| Layer            | Stack                          |
|------------------|---------------------------------|
| Frontend (Web)   | React.js                        |
| Mobile App       | React Native                    |
| Backend API      | Node.js (Express) or FastAPI    |
| Database         | PostgreSQL / MongoDB            |
| Notifications    | Firebase Cloud Messaging / Push |
| Hosting          | AWS / DigitalOcean / Render     |

---

## 🔄 Job Flow Diagram

```
[Merchant Creates Job] 
        ↓
[Backend Validates + Queues Job] 
        ↓
[Online Riders Get Notification] 
        ↓
[Rider Accepts → Job Assigned] 
        ↓
[Rider Updates Progress (En Route → Delivered)] 
        ↓
[Merchant Confirms Completion] 
        ↓
[Payment Released / Transaction Recorded]
```

---

## 🛠 API Architecture (Planned)

- `POST /auth/signup` – Register new user
- `POST /auth/login` – Authenticate user
- `POST /jobs` – Create job (merchant)
- `GET /jobs/available` – Fetch available jobs (rider)
- `POST /jobs/:id/accept` – Rider accepts job
- `PUT /jobs/:id/status` – Update job status
- `GET /users/:id/history` – Get job history

---

## 📈 Roadmap

Backend integration with database and API
Authentication & user management
Real-time rider availability & order tracking via WebSocket
Mobile app companion
Enhanced analytics dashboard

---

## 🌍 Future Scope

- AI job dispatch optimization
- Earnings analytics for riders
- In-app wallet or stablecoin rewards
- Offline-first support for underserved regions

---

## 💡 Why This Project Matters
This app was inspired by a real negotiation to build a logistics coordination tool from scratch — designed to prove that **Nigerian developers can build world-class tools that solve real African problems**.

Use MY repo to showcase your thinking, design ability, and tech execution.

---

## 🧠 Built With Vision By
**[SAM IVERE / https://www.linkedin.com/in/hsprafrique/]** – Full-stack & Web3 Engineer | Solana • Node.js • React

---

## 🔗 License
MIT License – TECH-AFRIQUE

