import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer, MobileCart } from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Product from './pages/Product';
import { Login, Signup, OTP } from './pages/Auth';
import Contact from './pages/Contact';

// Scroll to top helper
const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/otp" element={<OTP />} />
                </Routes>
                <Footer />
                <MobileCart />
            </div>
        </Router>
    );
};

export default App;