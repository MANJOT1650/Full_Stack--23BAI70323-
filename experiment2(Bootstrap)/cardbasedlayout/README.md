# cardBasedLayout

A modern React + Bootstrap card-based UI that showcases computer science course specializations such as AI/ML, Data Science, Cybersecurity, Cloud & DevOps, Software Engineering, HCI, and more.

## Features

- Responsive card grid built with React-Bootstrap `Container`, `Row`, `Col`, and `Card` components  
- Professional cards with course images, category badges, level labels, and call-to-action buttons  
- Smooth hover animation (lift + shadow) using CSS `transform` and `box-shadow`  
- Data-driven layout: all cards are configured in a single `cardData` array in `App.js`  

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
git clone https://github.com/MANJOT1650/Full_Stack--23BAI70323-/tree/main/experiment2(Bootstrap)/cardbasedlayout
cd cardBasedLayout

# Install dependencies
npm install
```

### Run in Development

```bash
npm start
```

The app will be available at http://localhost:3000 with hot reload.

### Build for Production

```bash
npm run build
```

## Output

![image_1](1.png)

An optimized production bundle will be created in the build folder.

## Project Structure

```
cardBasedLayout/
├─ src/
│  ├─ App.js        # Card-based layout + specialization data
│  ├─ App.css       # Global styling and hover animations
│  ├─ index.js      # React entry + Bootstrap CSS import
│  └─ index.css     # Basic resets and layout helpers
└─ public/
   └─ index.html
```

## Customization

**Edit cards:**  
Open `src/App.js` and update the `cardData` array to change titles, descriptions, images, and levels for each specialization.

**Update visuals:**  
Modify `.custom-card`, `.custom-card:hover`, and related styles in `src/App.css` to tweak colors, shadows, or animation speed.

**Change branding:**  
Adjust the heading and subtitle in the `App` component to use your institute or course catalog name.

## License

This project is open source. You may adapt it as a starter for your own React + Bootstrap dashboards or course catalogs.  
Add your preferred license text (for example, MIT) here.
