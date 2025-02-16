import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetail from "./pages/RecipeDetail";
import RecipeSearch from "./pages/RecipeSearch";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6" style={{ marginBottom: "88px",minHeight: "420px" }}>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />  
                <Route path="/about" element={<About />} />
                <Route path="/search" element={<RecipeSearch />} />
            </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
