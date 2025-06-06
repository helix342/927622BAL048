import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StocksPage from "./StocksPage";
import './App.css'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StocksPage/>} />
        <Route path="/heatmap" element={<heatmapPage />} />
      </Routes>
    </Router>
  );
};

export default App
