import React from "react";
import "./App.css";
import "antd/dist/reset.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export const ProtectedRoute = (props) => {
  if (localStorage.getItem("moneytrack-user_info")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default App;
