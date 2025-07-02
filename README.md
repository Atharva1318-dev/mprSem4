# EduWorld  
**Semester 4 Mini‑Project (Web Development)**
**Your All‑in‑One Digital Campus**

EduWorld is a MERN‑stack web application that streamlines campus life for students and teachers alike. It provides:

- **Railway Concession**: Students can apply for concession passes.  
- **Notes App**: Teachers upload PDFs; students browse and download organized by year/subject.  
- **E‑Calendar**: Class‑specific events (tests, schedule changes) managed by teachers.  
- **Code Editor**: In‑browser editor with AI‑powered code review suggestions.  
- **Canteen Ordering**: Students place orders; backend generates a random order number & total, and Twilio WhatsApp notifies when ready.  
- **Role‑Based Portals**: Single User schema with `role` field determines whether student or teacher portal is rendered.

---

## 🌐 Live Demo  
Coming soon…

---

## 📚 Description  
EduWorld unifies essential campus services into a single platform. Built on the MERN stack (MongoDB, Express.js, React, Node.js) and Tailwind CSS for styling, it features secure JWT‑based authentication, Cloudinary file storage, and integration with Twilio’s WhatsApp API for order notifications.

---

## 🛠️ Features  
- **Role‑Based Auth**: Signup/login forces `student` role; teachers seeded in DB.  
- **Notes Upload & Access**: Teachers upload PDFs via Cloudinary; students retrieve them by year/subject/branch.  
- **Calendar Management**: Teachers add class‑specific events; students view via FullCalendar.  
- **In‑Browser Code Editor**: Axios‑powered API to review code & suggest improvements.  
- **Canteen Ordering Flow**: Students place orders → backend assigns random orderNumber & total → after delay, Twilio WhatsApp notifies “order ready.”  
- **Responsive UI**: Tailwind & Material UI ensure layouts adapt across devices.

---

## 🛠️ Tech Stack

### Frontend  
- React.js with React Router  
- Tailwind CSS & Material UI  
- Axios for HTTP  
- FullCalendar, Lottie for animations  
- Lucide‑React & React Icons  

### Backend  
- Node.js & Express.js  
- MongoDB & Mongoose  
- Cloudinary for PDF storage  
- JWT & bcrypt.js for authentication  
- Twilio WhatsApp API for notifications  
- dotenv for configuration  

---

## 👥 My Contributions

| Name             | Contributions                                                                                 |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| **Your Name**    | • Student & Teacher portals (layout, routing, navbars)  
                   | • Notes section: teacher PDF upload & student retrieval  
                   | • Role‑based auth (JWT cookie middleware, route guards)  
                   | • E‑Calendar: event creation & FullCalendar integration  
                   | • Canteen flow: placeOrder frontend logic, order schema & routes, Twilio WhatsApp notifications |

---

## 🚀 Installation & Setup

1. **Clone the repo**  
   ```bash
   git clone https://github.com/<your‑username>/eduworld.git
   cd eduworld
   
## 2. Backend

```bash
cd backend
npm install

# create your .env as described above
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

3. **Frontend**

```bash
cd ../frontend
npm install
npm run dev


Then open your browser to http://localhost:5173
