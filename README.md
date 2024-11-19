# Language Learning App - React Frontend

## Overview
The React frontend serves as the client for the Language Learning App. It connects directly to the Node.js server, which handles interactions with the MySQL database. This app provides a seamless user experience for exploring and learning languages through flashcards, practice exercises, and more.

For detailed information about the app's features, refer to the **DESIGN-README.md**.

This project is part of a larger system and relies on the following repositories:
- [React Frontend Repository](https://github.com/skotla1509/lingua-learn-react-app) 
- [Node.js Backend Repository](https://github.com/skotla1509/lingua-learn-node-app) 
- [MySQL Database Repository](https://github.com/skotla1509/lingua-learn-db) 

---

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Folder Structure](#folder-structure)
3. [Application Routing](#application-routing)
4. [Setting Up the Project](#setting-up-the-project)
5. [Connecting to the Node Server](#connecting-to-the-node-server)
6. [Running the App Locally](#running-the-app-locally)

---

## Technologies Used
The React frontend leverages the following technologies:
- **React**: For building the user interface.
- **Redux**: For efficient state management.
- **Bootstrap**: For responsive design and styling.
- **Axios**: For handling HTTP requests to the Node.js server.

---

## Folder Structure

The project follows a modular folder structure for clarity and maintainability.

### High-Level Folder Structure:
```
src/
├── reducers/       # Handles state updates for each feature
├── services/       # Contains API service functions for Node.js server interaction
├── thunks/         # Middleware logic for asynchronous actions
├── views/          # Contains components for each feature/screen
├── App.js          # Entry point for the React application
```

### Detailed Example: `reducers/`
The `reducers/` folder manages state updates. Here’s an example of its organization:
```
src/reducers/
├── app-reducer.js     # Handles application-level state updates
└── users-reducer.js   # Manages state related to users (e.g., login, profile)
```
> Other folders, such as `thunks/`, `services/`, and `views/`, follow a similar structure, with one file for each feature.

---

## Application Routing

The app uses React Router for navigation between different features. Here are the main routes:
```jsx
<Route index element={<Home/>} />
<Route path="/home" element={<Home/>} />
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />
<Route path="/learn/language" element={<Deck/>} />
<Route path="/learn/language/cards" element={<Flashcard/>} />
<Route path="/learn/language/practice" element={<Practice/>} />
```

---

## Setting Up the Project

### Step 1: Clone the Repository
Clone the React server repository to your local machine:

### Step 2: Install Dependencies
Install the required Node.js packages:
```bash
npm install
```

### Step 3: Environment Variables
Ensure the React app knows the Node.js server's base URL. Create a `.env` file in the project root and set the following:
```env
REACT_APP_API_BASE_URL=http://localhost:1000
```

---

## Connecting to the Node Server

### Step 1: Run the Node Server
Ensure the Node.js server is running. Refer to the **Node Server README** for setup instructions.

### Step 2: Test the Connection
The React app will make API requests to the Node.js server using the `REACT_APP_API_BASE_URL`. Confirm that the Node.js server is accessible at the specified URL.

---

## Running the App Locally

### Step 1: Start the Development Server
Start the React app in development mode:
```bash
npm start
```

### Step 2: Open the App in a Browser
Visit `http://localhost:3000` in your browser. The app should load, and you can begin exploring its features.

---
