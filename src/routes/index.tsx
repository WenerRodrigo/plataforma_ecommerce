import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/header';
import { Products } from '../pages/products';
import { About } from '../pages/about';
import { Partner } from '../pages/partner';
import { CheckoutPage } from '../components/checkoutPage';

export const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Header />}/>
                    <Route path='/products' element={<Products />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/partner' element={<Partner />}/>
                    <Route path='/checkout' element={<CheckoutPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}