import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/Pages/WelcomePage"
import NotFound from "./components/Pages/NotFound"
import HomePage from "./components/Pages/HomePage";
import MyNavBar from "./components/MyNavBar";
import CartPage from "./components/Pages/CartPage";
import CheckoutPage from "./components/Pages/CheckoutPage";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<WelcomePage/>}/>
                    <Route element={<MyNavBar/>}>
                        <Route index path="/home" element={<HomePage/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="/checkout" element={<CheckoutPage/>}/>
                    </Route>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
