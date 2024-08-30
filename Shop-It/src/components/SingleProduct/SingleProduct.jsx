import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import useFetch from "../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../utils/Context"
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus
} from "react-icons/fa"
const SingleProduct = () => {
    const { handleAddToCart } = useContext(Context)
    const {id} = useParams()
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
    const [quantity, setQuantity] = useState(1)
    if (!data) return
    const productData = data.data[0].attributes
    const decrement = () => {
        setQuantity((prevState) => {if (prevState ===1) {
            return 1
        }else{
           return prevState - 1
        }})
    }
    const increment = () => {
        setQuantity(prevState => prevState + 1)
    }
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={process.env.REACT_APP_DEV_URL + productData.img.data[0].attributes.url} alt="product" />
                </div>
                <div className="right">
                    <span className="name">{productData.title}</span>
                    <span className="price">&#8377;{productData.price}</span>
                    <span className="desc">{productData.desc}</span>
                    <div className="cart-buttons">
                        <div className="counter-buttons">
                            <span onClick={decrement}>-</span>
                            <span>{quantity}</span>
                            <span onClick={increment}>+</span>
                        </div>
                        <button className="add-to-cart" onClick={()=>{
                            handleAddToCart(data.data[0], quantity)
                            setQuantity(1)
                        }} >
                            <FaCartPlus size={20} />
                            ADD TO CART
                        </button>
                    </div>
                    <span className="divider" />

                    <div className="info-items">
                        <span className="text-bold">
                            Category: 
                        <span> {productData.categories.data[0].attributes.title}</span>
                        </span>
                        <span className="text-bold">
                            Share:
                            <span className="social-ions">
                                <FaFacebookF size={16} />
                                <FaTwitter size={16} />
                                <FaInstagram size={16} />
                                <FaLinkedinIn size={16} />
                                <FaPinterest size={16} />
                        </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts productId = {id} categoryId = {productData.categories.data[0].id} />
        </div>
    </div>;
};

export default SingleProduct;
