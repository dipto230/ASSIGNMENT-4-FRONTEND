# MediStore Frontend 💻

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

**"Your Trusted Online Medicine Shop – Frontend"**

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Pages & Components](#pages--components)
- [API Integration](#api-integration)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

MediStore Frontend is a **Next.js** application that connects seamlessly with the **MediStore Backend**. It provides a responsive and interactive interface for customers, sellers, and admins to manage medicines, orders, and reviews.

---

## Tech Stack

| Technology     | Purpose                           |
|----------------|----------------------------------|
| Next.js        | App Router, SSR/SSG              |
| TypeScript     | Type safety & better dev experience |
| Tailwind CSS   | Styling & responsive UI          |
| Axios / Fetch  | API requests                     |
| React Query    | Data fetching & caching (optional) |
| React Hook Form| Form handling & validation       |

---

## Features

- Responsive UI with Tailwind CSS
- Authentication & role-based routing (Customer, Seller, Admin)
- Medicine listing, search, and filtering
- Add / update / delete medicines (Seller/Admin)
- Place and track orders (Customer)
- Admin dashboard for users, orders, and categories
- Customer reviews & ratings
- Image upload for medicines via Imagebb API
- SSR/SSG for optimized performance
- Mobile-friendly and SEO optimized

---

## Pages & Components

### Main Pages

- **Home** – Medicine listing & featured categories
- **Medicine Details** – Product info, reviews, and add to cart
- **Cart / Checkout** – Manage orders before placing
- **User Dashboard** – Orders, profile, and reviews
- **Seller Dashboard** – Manage medicines & orders
- **Admin Dashboard** – Users, orders, and categories management
- **Login / Register** – Authentication pages

### Components

- Navbar & Sidebar
- MedicineCard & CategoryCard
- Rating & Review components
- OrderHistory & OrderCard
- Forms (LoginForm, RegisterForm, MedicineForm)

---

## API Integration

Frontend interacts with **MediStore Backend APIs**:

- **Authentication:** `/api/auth/*`
- **Medicines & Categories:** `/api/medicines`, `/api/categories`
- **Orders:** `/api/orders`
- **Seller Management:** `/api/seller/*`
- **Admin Management:** `/api/admin/*`

Axios (or Fetch) is used to make HTTP requests with JWT token for role-based access control.

---

## Installation & Setup

```bash
# Clone the repo
git clone <frontend-repo-url>
cd frontend

# Install dependencies
npm install

# Set environment variables
cp .env.example .env
Environment Variables

Example .env file:
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_IMAGEBB_API_KEY=your_imagebb_api_key
Usage

Access the frontend via browser at http://localhost:3000

Make API calls to the backend

Authentication and role-based routes ensure proper access

Admins, Sellers, and Customers see role-specific dashboards

Contributing

Fork the repository

Create a branch feature/your-feature

Commit changes git commit -m "Add feature"

Push git push origin feature/your-feature

Create a Pull Request

License

MIT License © 2026


---

If you want, I can **combine the backend and frontend READMEs into a single unified repository README**, so it looks professional for a full-stack project on GitHub. This will include **badges, setup instructions, and clear frontend-backend links**.  

Do you want me to do that?
# Start development server
npm run dev
