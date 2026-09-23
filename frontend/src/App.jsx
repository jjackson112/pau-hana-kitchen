import './App.css';
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import OrderDetail from './components/OrderDetail';
import CartSidebar from './components/CartSidebar';
import CartSummary from './components/CartSummary';
import OrderType from './components/OrderType';
import Time from './components/Time';
import Coupon from './components/Coupon';
import LocationMap from './components/LocationMap';
import Payment from './components/Payment';

function App() {

    return (
        <>
            <Toaster position="top-right" toastOptions={{ duration: 2000 }}/>

            <Header />
            
            <Routes>
                <Route path= "/" element={< Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/orders/<int:id>" element={<OrderDetail />} />
            </Routes>

            <CartSidebar />

            <Footer />
        </>

    )
}

export default App;