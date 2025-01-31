import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Contact from './components/Contact';
import AnnouncementBar from './components/AnnouncementBar';
import LoginSignup from './components/LoginSignup';
import Dashboard from './pages/Dashboard';
import EWasteSubmission from './pages/EWasteSubmission';
import OldComputersPage from './pages/OldComputersPage';
import MobilePhonesPage from './pages/MobilePhonesPage'; // Import new components
import TelevisionsPage from './pages/TelevisionsPage'; 
import BatteriesPage from './pages/BatteriesPage'; 
import Recycle_dashboard from './components/Recycle_dashboard'; // Import Recycle_dashboard
import './App.css';
import History from './pages/History';
import Products from './components/Products'; // Import the new component
import AcceptPage from './components/AcceptPage';
import Review from './components/Review';

function App() {
  return (
    <Router>
      <div className="App">
        <AnnouncementBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginSignup />} /> {/* New login route */}
          <Route path="/dashboard/:userId" element={<Dashboard />} />
          <Route path="/ewaste/submission/:userId" element={<EWasteSubmission />} />
          <Route path="/old-computers" element={<OldComputersPage />} />
          <Route path="/mobile-phones" element={<MobilePhonesPage />} /> {/* Add new route */}
          <Route path="/televisions" element={<TelevisionsPage />} /> {/* Add new route */}
          <Route path="/batteries" element={<BatteriesPage />} /> {/* Add new route */}
          <Route path="/history/:userId" element={<History />} /> {/* History component route */}
          <Route path="/recycle-dashboard" element={<Recycle_dashboard />} /> {/* Add route for Recycle_dashboard */}
          <Route path="/products" element={<Products />} />
          <Route path="/accept/:id" element={<AcceptPage />} />
          <Route path="/review/:userId" element={<Review />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
