# Myntra Clone - E-commerce Platform

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Redux](https://img.shields.io/badge/Redux-8.1.3-purple)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

A full-stack Myntra-inspired e-commerce platform built with modern React frontend and Node.js backend.

## 🚀 Live Demo

- **Frontend**: [https://abhishek6827.github.io/Myntra](https://abhishek6827.github.io/Myntra)
- **Backend API**: [https://myntra-backend-3ahi.onrender.com](https://myntra-backend-3ahi.onrender.com)

## ✨ Features

### 🛍️ Shopping Features
- Product catalog with categories
- Shopping cart with persistent storage
- Add/remove items functionality
- Order summary with price calculation
- Responsive design for all devices

### 🛠️ Technical Features
- React 18 with modern hooks
- Redux for state management
- React Router for navigation
- PropTypes for type checking
- Bootstrap UI components
- React Icons integration

### 🔧 Backend Features
- RESTful API with Express.js
- CORS enabled for cross-origin requests
- JSON data management
- Render.com deployment

## 🏗️ Project Structure
Myntra/
├── public/
│ └── images/ # Product images
├── src/
│ ├── components/ # React components
│ │ ├── Header.jsx # Navigation header
│ │ ├── HomeItem.jsx # Product card
│ │ ├── BagItem.jsx # Cart item
│ │ ├── BagSummary.jsx # Order summary
│ │ └── FetchItems.jsx # API data fetcher
│ ├── routes/ # Page components
│ │ ├── App.jsx # Main app component
│ │ ├── Home.jsx # Home page
│ │ └── Bag.jsx # Shopping bag page
│ ├── store/ # Redux store
│ │ ├── index.js # Store configuration
│ │ ├── bagSlice.js # Cart functionality
│ │ ├── itemsSlice.js # Products management
│ │ └── fetchStatusSlice.js # Loading states
│ └── main.jsx # Application entry point
├── 2-actual-backend/ # Backend server
│ ├── app.js # Express server
│ ├── data/
│ │ └── items.json # Products data
│ └── package.json # Backend dependencies
└── package.json # Frontend dependencies

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Frontend Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/Abhishek6827/Myntra.git
cd Myntra

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

### Backend Installation
\`\`\`bash
cd 2-actual-backend

# Install backend dependencies
npm install

# Start backend server
npm start
\`\`\`

## 🎮 Usage
- Browse Products: Visit the homepage to see all available products
- Add to Cart: Click "Add to Bag" on any product
- View Cart: Click the bag icon in the header to see your items
- Manage Items: Remove items or view order summary
- Place Order: Complete your purchase

## 🔌 API Documentation

**Base URL**  
\`\`\`text
https://myntra-backend-3ahi.onrender.com
\`\`\`

**Endpoints**
| Method | Endpoint     | Description           |
|--------|-------------|-----------------------|
| GET    | /           | API status and info   |
| GET    | /items      | Get all products      |
| GET    | /items/:id  | Get single product    |
| POST   | /items      | Add new product       |

**Example Response**
\`\`\`json
{
  "items": [
    {
      "id": "001",
      "image": "images/1.jpg",
      "company": "Carlton London",
      "item_name": "Rhodium-Plated CZ Floral Studs",
      "original_price": 1045,
      "current_price": 606,
      "discount_percentage": 42,
      "return_period": 14,
      "delivery_date": "10 Oct 2025",
      "rating": {
        "stars": 4.5,
        "count": 1400
      }
    }
  ]
}
\`\`\`

## 🚀 Deployment

### Frontend (GitHub Pages)
\`\`\`bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
\`\`\`

### Backend (Render.com)
- Connect GitHub repository to Render
- Set build command: npm install
- Set start command: node app.js
- Automatic deployment from main branch

## 🤝 Contributing
Contributions are welcome! Please follow these steps:
1. Fork the project
2. Create a feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📝 License
This project is licensed under the MIT License. See the LICENSE file for details.

## 🙏 Acknowledgments
- Design inspiration from Myntra
- React and Redux teams for excellent frameworks
- Vite team for fast build tooling
- Render.com for backend hosting
- GitHub for frontend hosting

## 📞 Contact
**Abhishek**  
GitHub: [@Abhishek6827](https://github.com/Abhishek6827)  
Project Link: [https://github.com/Abhishek6827/Myntra](https://github.com/Abhishek6827/Myntra)

## 🎯 Future Enhancements
- User authentication
- Payment integration
- Product search functionality
- Wishlist feature
- Order history
- Product reviews and ratings

⭐ If you like this project, please give it a star on GitHub!
