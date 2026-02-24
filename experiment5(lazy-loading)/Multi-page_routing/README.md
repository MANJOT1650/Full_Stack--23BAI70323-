# Multi-Page Routing - Lazy Loading Experiment

This project demonstrates an advanced implementation of **Single Page Application (SPA) Routing** combined with **Dynamic Imports** in React.

## 🌟 Overview
The goal of this experiment is to implement lazy loading on every major part of the application, including individual pages and the navigation menu, to ensure the smallest possible initial bundle size.

## 🚀 Key Implementations
- **Dynamic Imports**: Used `React.lazy()` for `Home`, `About`, `Contact`, and `Navbar` components.
- **Suspense Boundaries**: Multiple `Suspense` points to handle different loading priorities.
- **Visual Feedback**: A premium loading spinner that appears during route transitions to provide immediate feedback to the user.
- **Route Tracking**: Implementation of `useLocation` to trigger loading animations on every navigation click.

## 🛠️ Tech Stack
- **React**: Functional components and Hooks (`useState`, `useEffect`).
- **React Router v6**: For declarative routing.
- **Vite**: Modern development environment.
- **CSS3 Animations**: Custom keyframe animations for a smooth "fade-in" experience.

## ⚙️ Running Locally
1. Navigate to the directory:
   ```bash
   cd Multi-page_routing
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure
- `src/App.jsx`: The "Brain" of the app where lazy loading and suspense are orchestrated.
- `src/components/`: Contains the modular UI components (`Home`, `About`, `Contact`, `Navbar`).
- `src/App.css`: Styles for the loading indicator and main layout.

## ScreenShots
**page 1**
![alt text](<Screenshot (9).png>) ![alt text](<Screenshot (10).png>)

**page 2**
![alt text](<Screenshot (11).png>) ![alt text](<Screenshot (12).png>)

**page 3**
![alt text](<Screenshot (13).png>) ![alt text](<Screenshot (14).png>)