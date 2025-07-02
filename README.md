# EduWorld  
**Semester 4 Mini‑Project (Web Development)**  
**Your All‑in‑One Digital Campus**

EduWorld is a MERN‑stack web application that streamlines campus life for students and teachers alike. It provides:

- **Railway Concession**: Students can apply for concession passes.  
- **Notes App**: Teachers upload PDFs; students browse and download organized by year/subject/branch.  
- **E‑Calendar**: Class‑specific events (tests, schedule changes) managed by teachers.  
- **Code Editor**: In‑browser editor with AI‑powered code review suggestions.  
- **Canteen Ordering**: Students place orders; backend generates a random order number & total, and Twilio WhatsApp notifies when ready.  
- **Role‑Based Portals**: Single User schema with a `role` field determines student or teacher portal.

---

## 🌐 Live Demo  
Coming soon…

---

## 🎥 Demo Video

Watch a short video walkthrough of EduWorld:

[Demo Video]

---

## 📚 Description  
EduWorld unifies essential campus services into a single platform. Built on the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS & Material UI, it features secure JWT‑based authentication, Cloudinary file storage, and Twilio WhatsApp API integration for order notifications.

---

## 🛠️ Features  
- **Role‑Based Auth**: JWT‑cookie middleware, signup/login flows, route guards.  
- **Notes Upload & Access**: Cloudinary PDF uploads for teachers; filtered retrieval for students.  
- **Calendar Management**: Teacher event creation & student view via FullCalendar.  
- **In‑Browser Code Editor**: AI‑review suggestions powered by Axios calls.  
- **Canteen Ordering Flow**: Frontend placeOrder logic → backend orderNumber & total calculation → Twilio WhatsApp “ready” alert.  
- **Responsive UI**: Mobile‑first layouts with Tailwind & Material UI.

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS & Material UI
- React Router DOM
- FullCalendar (daygrid, timegrid, interaction)
- GSAP & Lottie (animations)
- Axios (HTTP requests)

### Backend
- Node.js & Express.js
- Twilio SDK (WhatsApp notifications)

### Database
- MongoDB (MongoDB Atlas)
- Mongoose

### Authentication & Security
- JWT (jsonwebtoken)
- bcrypt.js
- dotenv

### File Handling & Storage
- Multer (file upload)
- Cloudinary (PDF storage)

---


## 👥 My Contributions  
- Designed and implemented **Student & Teacher portals** (layout, nested routing, navigation)  
- Developed **Notes section**: file upload form, backend routes, student retrieval UI  
- Built **Role‑based authentication**: JWT token creation, cookie verification, route protection  
- Integrated **E‑Calendar**: date‑click form modal, backend event CRUD, FullCalendar rendering  
- Implemented **Canteen flow**: order schema & routes, random orderNumber generator, frontend placeOrder, Twilio WhatsApp API notification logic

---

## 🚀 Installation & Setup

### 1. Clone the repo  
```bash
git clone https://github.com/<your‑username>/eduworld.git
cd eduworld
```

### 2. Backend
```bash
cd backend
npm install
```

Create a .env file with:

  ATLASDB_URL=your‑mongodb‑uri
  JWT_TOKEN_KEY=your‑jwt‑secret
  CLOUD_NAME=…
  CLOUD_API_KEY=…
  CLOUD_API_SECRET=…
  TWILIO_ACCOUNT_SID=…
  TWILIO_AUTH_TOKEN=…
  TWILIO_WHATSAPP_FROM=whatsapp:+1234567890

Start the server:
```bash
node app.js
```

### 3. Frontend
```bash
cd ../frontend
npm install
npm run dev
```

Then open your browser to:
http://localhost:5173




