# Collector's Hub

A responsive web application built with React and TypeScript for collectors to discover collectibles, interact with the community, and manage their personal collections.

---
# ScreenShot

<img width="959" height="478" alt="Screenshot 2026-07-17 012432" src="https://github.com/user-attachments/assets/10909853-6d63-4ceb-a0a2-7ee866c7e35f" />
<img width="959" height="474" alt="Screenshot 2026-07-17 012443" src="https://github.com/user-attachments/assets/b06560da-cd8d-41a6-9756-7513f9f74f7f" />
<img width="959" height="482" alt="Screenshot 2026-07-17 012501" src="https://github.com/user-attachments/assets/1e5b3b18-1e42-4d60-8951-8924fcb00fb3" />

---

## 🚀 Features

### Marketplace

- Browse collectible items
- Search products by title
- Filter by category
- Filter by condition
- Sort products by price
- View product details
- Add items to Owned Collection
- Add items to Wishlist
- Prevent duplicate items in collections
- Empty state handling
- Loading state handling
- Error state handling


### Community Feed

- Browse community posts
- Search posts
- Filter posts by category
- Like posts
- Save posts
- View post details


### My Collection

Three default collections:

- Owned
- Wishlist
- Selling

Features:

- View saved items
- Search collection items
- Sort items
- Remove items
- Move items between collections
- Display date added
- Display estimated value
- Empty state handling


## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- Lucide React

---


## 📂 Project Structure

```
src/
│
├── components/
│   ├── Navbar
│   ├── Layout
│   ├── ProductCard
│   └── PostCard
│
├── pages/
│   ├── Marketplace
│   ├── ProductDetails
│   ├── Community
│   ├── PostDetails
│   └── Collection
│
├── data/
│   ├── products.ts
│   └── post.ts
│
├── context/
│   └── CollectionContext.tsx
│
├── App.tsx
└── main.tsx
```
---

## 🚀 Live Demo

[Click here to visit project](https://collection-assignment.vercel.app)
---

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/Sarvesh7617/Collection-assignment.git
```

2. Go to project directory:

```bash
cd collection-hub
```


3. Install dependencies:

```bash
npm install
```


4. Run development server:

```bash
npm run dev
```

---

# 📌 Assumptions Made

- Backend API is not implemented, so mock data is used.
- Authentication is not required as mentioned in the assignment.
- Product prices and estimated values are mock values.
- Collection data is managed on the client side using React Context.
- User actions are stored only during the current session.

---

# ✨ Additional Features Implemented

- Responsive design for mobile, tablet, and desktop
- Reusable React components
- Client-side filtering and sorting
- Duplicate item prevention
- Loading indicators
- Error states
- Empty states
- Clean component-based architecture

---

# Future Improvements
- Connect with real backend API
- Add authentication
- Add persistent storage using Local Storage
- Add dark mode
- Add pagination/infinite scrolling
- Add user profiles
