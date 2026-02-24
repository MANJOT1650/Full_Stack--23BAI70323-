# Dashboard - Lazy Loading Experiment

A modern React Dashboard application demonstrating **Code Splitting** and **Lazy Loading** techniques to optimize performance and initial load times.

## 🎓 Student Details
- **Name:** Manjot Singh
- **UID:** 23BAI70323
- **Section:** 23ANL-3(B)

## 🚀 Features
- **Route-based Lazy Loading**: Components like `Home`, `Profile`, and `Settings` are loaded only when navigated to.
- **Component-based Lazy Loading**: The `Navbar` itself is lazy-loaded to show potential for complex UI shells.
- **Improved UX**: Integrated `React.Suspense` with a custom animated loading spinner and placeholders to prevent layout shifts.
- **Simulated Navigation States**: Includes a built-in delay for demonstration purposes to show the loading states even on local environments.

## 🛠️ Tech Stack
- **React 18**: Core library for UI.
- **React Router DOM**: For handling SPA routing.
- **Vite**: Ultra-fast build tool and dev server.
- **Vanilla CSS**: Premium custom styling and animations.

## ⚙️ Running Locally
1. Navigate to the directory:
   ```bash
   cd Dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📄 Key Files
- `App.jsx`: Main routing logic using `React.lazy` and `Suspense`.
- `components/Navbar.jsx`: Separated navigation component for chunking.
- `App.css`: Custom animations for loading spinners and slide-up transitions.

## ScreenShots
**page 1**
![alt text](<Screenshot (3).png>) ![alt text](<Screenshot (4).png>)

**page 2**
![alt text](<Screenshot (6).png>) ![alt text](<Screenshot (5).png>)

**page 3**
![alt text](<Screenshot (7).png>) ![alt text](<Screenshot (8).png>)