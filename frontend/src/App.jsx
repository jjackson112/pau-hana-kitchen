import './App.css';
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import CartSidebar from './components/CartSidebar';
import CartSummary from './components/CartSummary';

function App() {

    return (
        <>
            <Header />

            <Toaster position="top-right" toastOptions={{ duration: 2000 }}/>

            <Routes>
                <Route path= "/" element={< Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>

            <CartSidebar />
            <CartSummary />
            <Footer />
        </>

    )
}

export default App;