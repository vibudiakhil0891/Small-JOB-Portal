import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SavedJobs from "./pages/SavedJobs";
import Login from "./auth/Login";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Smart Job Portal</h2>
        <div>
          <Link className="mr-4 hover:underline" to="/">Home</Link>
          <Link className="mr-4 hover:underline" to="/saved">Saved Jobs</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }/>
        <Route path="/saved" element={
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
