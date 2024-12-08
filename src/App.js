import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Blog from './pages/Blog';
import Contact from './pages/Contact';
// import Help from './pages/Help';
import './styles/global.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/help" element={<Help />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
