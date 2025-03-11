# BITEBOX - 🍱 (Personalized Meal Planning & Delivery)

## Overview

BITEBOX is a **Meal Planning & Delivery Web Application** where customers can personalize their meal plans, set dietary preferences, and schedule deliveries, while meal providers can manage menus and respond to orders.

This project is built using **Next.js 15** with **Redux for state management**, **Shadcn UI**, and **Tailwind CSS**. It supports **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)** for optimized performance. The platform also includes a **cart system for meal ordering** and integrates the **SSLCommerz payment gateway** for secure transactions.

## Features

### 🔐 User Authentication

- Custom login system for **customers** and **meal providers** using **email/phone number & password**.
- Secure authentication with **JWT (JSON Web Tokens)**.
- Password hashing with **bcrypt** for enhanced security.

### 🏠 Home Page (`/`)

- Overview of the platform and its benefits for both customers and meal providers.

### 🛒 Meal Selection & Ordering

- Customers can **browse available meals**, customize them based on **dietary preferences** (vegan, keto, gluten-free, etc.), and **add meals to cart**.
- Integrated **SSLCommerz payment gateway** for a **secure checkout process**.
- Customers can **track their orders** in real-time.

### 📊 Order Statistics & History

- Customers and meal providers can view **order statistics** and **order history**.
- Order tracking system to keep users informed about delivery status.

### 🎛️ Customer Dashboard (`/dashboard/customer`)

- **Select Meals**: Browse available meal options and customize orders.
- **Track Orders**: View past and ongoing meal deliveries.
- **Manage Preferences**: Set dietary restrictions, preferred cuisines, and portion sizes.

### 👤 Customer Profile (`/profile/customer`)

- Customers can edit personal details such as **name, email, phone number, and delivery address**.

### 🔍 Find Meals (`/find-meals`)

- Customers can search for meals based on:
  - **Cuisine type**
  - **Dietary preferences**
  - **Ratings & availability**

### 📦 Order Meal (`/order-meal`)

- Customers can place meal orders, **schedule deliveries**, and customize their meals.

---

## 🍽️ Meal Provider Features

### 🎛️ Meal Provider Dashboard (`/dashboard/provider`)

- **Manage Menus**: Create and update meal options.
- **View Orders**: List of customer orders and their preferences.
- **Respond to Orders**: Accept, modify, or decline meal requests.

### 👨‍🍳 Meal Provider Profile (`/profile/provider`)

- Edit meal provider profile, including **cuisine specialties, pricing, and availability**.

### 📋 Post Meal Menu (`/post-meal-menu`)

- Meal providers can **post detailed meal menus** for customers to browse.

### 📩 Order Responses (`/responses`)

- Meal providers can **confirm or decline customer orders**.

---

## 🛠️ Tech Stack

### **Frontend:**

- **Next.js 15** (Server-Side Rendering & Static Site Generation)
- **Redux** (State Management)
- **Shadcn UI** (For UI Components)
- **Tailwind CSS** (Styling & Responsiveness)

### **Payment Integration:**

- **SSLCommerz Payment Gateway** for secure meal ordering transactions.

---

## 🚀 UI/UX Design

- **Fully responsive** for mobile and desktop.
- **Modern & user-friendly UI** with clear navigation.
- **Easy-to-use forms** for placing orders and managing preferences.
- **Search & filter** functionality for quick meal discovery.

---

## 📌 Conclusion

BITEBOX is a complete **meal planning and delivery solution** with a seamless **customer and provider experience**. The platform ensures **secure transactions**, **real-time order tracking**, and **customized meal selection**, making it an ideal choice for users looking for a **personalized food delivery service**.

---
