import React from "react";
import Header from '../Components/Header';
import {Customers, Pricing, Products, Resources} from '../Pages';
import Footer from '../Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function rotas(){
    return(
        <>
        <Router>
            <ScrollToTop /> 
            <Header />
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/resources' element={<Resources />} />
            </Routes>
            <Footer />
        </Router> 
        </>
    );
};