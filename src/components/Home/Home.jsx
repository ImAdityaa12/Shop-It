import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/Api";
import { Context } from "../../utils/Context";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { products, setProducts, categories, setCategories } = useContext(Context);
    useEffect(() => {
        getProducts();
        console.log(products)
        getCategories();
        console.log(categories)
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.log(res)
            setProducts(res);
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res)
            setCategories(res);
        });
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products
                        headingText="Popular Products"
                        products = {products}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;