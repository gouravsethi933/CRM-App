//React
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
//components
import LoginPage from "./components/Auth/LoginPage";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";

// ---------------------------------------------------------------------------------
function App() {

 const isAuthenticated = localStorage.getItem('login')
  return (
    <Router>
      <Routes>
      {isAuthenticated &&
        <Route
         path="/"
           element={
         <Navigate to="/dashboard" replace />
      }
        />}
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute Component={Dashboard} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
