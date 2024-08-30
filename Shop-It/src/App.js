import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import Category from "./components/Category/Category"
import Categories from "./components/Home/Category copy/Categories";
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Newsletter from "./components/Footer/Newsletter/Newsletter"
import { Success } from "./Success";
import About from "./components/About/About"
import AppContext from "./utils/Context" 
function App() {
    return(
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/categories" element={<Categories />}/>
                    <Route path="/success" element={<Success />}/>
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
