# bootstrap-navbar

A responsive React + Bootstrap food menu UI featuring a hamburger navigation bar and a grid of equal-height food cards.

## Features

- Responsive **hamburger navbar** (when in mobile or smaller windows) built with React-Bootstrap `Navbar`, `Nav`, and `Navbar.Toggle` / `Navbar.Collapse`
- 4-item food menu with professional cards, pricing, tags, and call-to-action buttons
- Uniform card images using fixed height + `object-fit: cover` for clean alignment
- Mobile-first layout: 1 column on phones, 2 on tablets, 4 on desktop using Bootstrap grid

## Tech Stack

- React (Create React App)
- Bootstrap 5
- React-Bootstrap

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
# Clone the repository
git clone https://github.com/MANJOT1650/Full_Stack--23BAI70323-/tree/main/experiment2(Bootstrap)/bootstrap-navbar
cd bootstrap-navbar

# Install dependencies
npm install
```

### Run in Development

```bash
npm start
```

## Output

![image_1](1.png)

The app will be available at http://localhost:3000 with hot reload.

### Build for Production

```bash
npm run build
```

This creates an optimized build in the build folder.

## Project Structure

```
bootstrap-navbar/
├─ src/
│  ├─ App.js        # Main food menu UI + navbar
│  ├─ App.css       # Layout, background, card styling, hover effects
│  ├─ index.js      # React entry point + Bootstrap import
│  └─ index.css     # Basic CSS reset
└─ public/
   └─ index.html
```

## Customization

**Menu items:**  
Edit the `menuItems` array in `src/App.js` to change titles, prices, categories, and images.

**Navbar links:**  
Update the `<Nav.Link>` items inside the `Navbar.Collapse` section to match your pages or sections.

**Styling:**  
Tweak colors, gradients, and card hover effects in `src/App.css` to match your brand.

## License

This project is open source. You may adapt it for your own React + Bootstrap projects.
Add your preferred license text (for example, MIT) here.
