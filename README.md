# E-LEARNING-PLATFORM-UI

## 🏢 Internship Details

- **Company:** CODTECH IT Solutions  

- **Name:** K s s chandra mouli

- **Intern ID:** :CT04DY502

- **Domain:** Front-End Development  

- **Duration:** 4 Weeks

- **Mentor:** Neela Santhosh

# 📘 E‑Learning Platform

An interactive, full-stack **E‑Learning Platform** that connects **students** and **instructors** through courses, video content, quizzes, and user profiles. Built as a self-contained educational ecosystem.

---

## 🔎 Table of Contents

- [🔎 Overview](#-overview)  
- [🎯 Features](#-features)  
- [🛠️ Tech Stack](#️-tech-stack)  
- [🚀 Architecture](#-architecture)  
- [📂 Folder Structure](#-folder-structure)  
- [⚙️ Setup & Installation](#️-setup--installation)  
- [🔐 Environment Variables](#️-environment-variables)  
- [📚 Database Schema & Models](#-database-schema--models)  
- [🧩 API Endpoints](#-api-endpoints) 

---

## 🔎 Overview

This E‑Learning Platform empowers students and instructors to engage in a digital classroom environment. It supports:

- **Student**: course browsing, enrollments, video lessons, quizzes, progress tracking.  
- **Instructor**: course creation/admin, managing content, reviewing students' results.  
- **Admin**: moderates users and courses, oversees platform health.

Use-cases include introductory programming courses, test prep, skill-building modules, etc.

---

## 🎯 Features

- **User Authentication** with JWT and role-based access (student, instructor, admin).  
- **Course Management**: create/edit/delete, rich media, pricing, descriptions.  
- **Content Delivery**: video lectures, downloadable resources, Markdown support.  
- **Enrollment Flow**: view available, enroll, and track courses.  
- **Quizzes & Assessments**: instructor‑provided quizzes with auto‑placement for students.  
- **Progress Dashboard** for students and instructors.  
- **Ratings & Reviews**: students can rate/feedback courses.  
- **Search & Filtering** for discovering courses.  
- **Notifications** via email/in‑app (on enrollment, new lessons, quiz completion).  
- **Payment Integration** (Stripe/Razorpay) for paid courses.  
- **Admin Controls**: manage categories, users, courses.  
- **Responsive UI** with dynamic behavior via React (or Vue) + RESTful back-end.

---

## 🛠️ Tech Stack

**Frontend**  
- JavaScript framework/library (React, Vue, or Angular)  
- Styling: CSS3 / TailwindCSS / Bootstrap  
- UI Toolkit: Swiper.js, Formik, rich text editors  

**Backend**  
- Node.js with Express (or NestJS)  
- Database: MongoDB (via Mongoose) or PostgreSQL (via Prisma)  
- Authentication: JWT, bcrypt  
- Storage: Cloudinary/S3 for media uploads  
- Payments: Stripe / Razorpay  
- Emails: Nodemailer or SendGrid  
- Caching/Background Jobs: Redis + Bull or BullMQ  
- Testing: Jest / SuperTest  

---

## 🚀 Architecture

1. **Client (SPA)** — React/Vue consuming REST or GraphQL.  
2. **API Server** — Node/Express or NestJS with modular routes and controllers.  
3. **Database** — NoSQL/SQL storing users, courses, content, enrollments.  
4. **Media Storage** — Cloud media storage via Cloudinary/S3.  
5. **Workers & Cache** — Redis + Bull for notifications and queued jobs.

Typical flow:
```

User → Frontend → API → DB / Cloudinary / Redis
↓
JWT Auth

```

---

## 📂 Folder Structure

```

e-learning-platform/
├── backend/                # Server-side code
│   ├── controllers/
│   ├── models/             # Mongoose or Prisma Schemas
│   ├── routes/             # API endpoints
│   ├── middleware/
│   ├── services/           # Payments, emails, notifications
│   └── app.js / server.js
├── frontend/               # Client-side UI
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/ (Redux/Vuex)
│   │   └── App.js / main.js
├── scripts/                # Database seeds, deployment scripts
├── docker-compose.yml      # (Optional) full-stack local dev
├── .env.example            # Example environment vars
├── README.md
└── license.md / LICENSE

````

---

## ⚙️ Setup & Installation

### 🧾 Prerequisites

- Node.js v16+  
- npm or Yarn  
- MongoDB / PostgreSQL  
- Redis  
- Cloudinary / AWS S3 account

### 📥 Clone & Install

```bash
git clone https://github.com/SatyajeetGhosh/E-Learning-Platform.git
cd E-Learning-Platform

# server
cd backend && npm install

# client
cd ../frontend && npm install
````

### 🔧 Configure `.env`

Set up environment variables (see next section).

---

## 🔐 Environment Variables

```ini
# Server
MONGO_URI=your_mongo_connection
JWT_SECRET=super_secret_key
JWT_EXPIRES=1d
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=me@example.com
SMTP_PASS=securepassword
REDIS_URL=redis://localhost:6379

# Payments
STRIPE_KEY=pk_test_...
RAZORPAY_KEY=...

# Frontend
REACT_APP_API_URL=http://localhost:5000
```
---

## 📚 Database Schema & Models

### User

* name, email, password, role ('student', 'instructor', 'admin')
* profile photo, bio, social links

### Course

* title, description, price, image
* instructor reference
* lessons array (video URL, attachments, duration)
* categories, reviews\[], averageRating, createdAt

### Enrollment

* student, course, progress, quizAttempts

### Quiz / Question

* questionText, options, correctAnswer

Additional schemas: Payment, Notification, Category, Certificate, etc.

---

## 🧩 API Endpoints (Examples)

**Auth**

* `POST /api/auth/register` — sign up
* `POST /api/auth/login` — sign in, receive JWT
* `POST /api/auth/forgot-password` — email reset link

**User**

* `GET /api/users/profile` — current user profile
* `PATCH /api/users/profile` — update profile

**Courses**

* `GET /api/courses` — list courses
* `GET /api/courses/:id` — course details
* `POST /api/courses` — (instructor) create
* `PATCH /api/courses/:id` — update
* `DELETE /api/courses/:id` — remove

**Enrollment**

* `POST /api/enroll/:courseId` — enroll
* `GET /api/enrollments/my` — fetch own

**Lessons**

* `POST /api/courses/:id/lessons` — add lesson
* `DELETE /api/lessons/:lessonId` — remove

**Quizzes**

* `POST /api/courses/:id/quiz` — create
* `POST /api/quiz/:quizId/submit` — submit answers

**Payments**

* `POST /api/payments/create-checkout`
* `POST /api/payments/stripe-webhook`

**Notifications**

* `GET /api/notifications`
* `PATCH /api/notifications/read`

---

## Screenshots

![E learning ui](assets/el1.png)
![E learning ui](assets/el2.png)
![E learning ui](assets/el3.png)

*Thank you for exploring this E‑Learning Platform! I hope it gives you a solid foundation to learn from, build upon, or use in your own ed-tech solutions.*
