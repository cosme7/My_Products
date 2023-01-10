import React from "react";
import {Customers, Pricing, Products, Resources} from '../Pages'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function rotas(){
    return(
        <>
        <Router>
            <ScrollToTop />  
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/resources' element={<Resources />} />
            </Routes>
        </Router> 
        </>
    );
};