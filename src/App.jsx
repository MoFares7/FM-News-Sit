import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./components/Body/HomePage/HomePage";
import Header from "./components/Header/Header";
import MainRoutes from "./Routes/Routs";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
