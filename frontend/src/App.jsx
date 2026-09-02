import './App.css';
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import CartSidebar from './components/CartSidebar';

function App() {

    return (
        <>
            <Toaster position="top-right" toastOptions={{ duration: 2000 }}/>

            <Routes>
                <Route path= "/" element={< Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<CartSidebar />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </>

    )
}

export default App;