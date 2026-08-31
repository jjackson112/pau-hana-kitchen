import './App.css';
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';

function App() {

    return (
        <>
            <Toaster position="top-right"/>

            <Routes>
                <Route path= "/" element={< Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>

    )
}

export default App;