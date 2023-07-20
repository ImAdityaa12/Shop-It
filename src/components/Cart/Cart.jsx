import "./Cart.scss";
import { MdClose } from "react-icons/md"
import { BsCartX } from "react-icons/bs"
import CardItem from "./CartItem/CartItem"
import { Context } from "../../utils/Context";
import { useContext, useState } from "react";
// import CartItem from "./CartItem/CartItem";
import { loadStripe } from "@stripe/stripe-js"
import { makePaymentRequest } from "../../utils/Api";
const Cart = ({setShowCart}) => {
    const {cartItems, cartSubTotal } = useContext(Context)
    const stripePromise = loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    )
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise
            const res = await makePaymentRequest.post("/api/orders",{
                products: cartItems,
            })
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
        } catch (error) {
            console.log(error)
        }

    }
    return <div className="cart-panel">
        <div className="opacity-layer"></div>
        <div className="cart-content">
            <div className="card-header">
            <span className="header">Shopping Cart</span>  
            <span className="close-btn" onClick={() => {setShowCart(false) }}>
                < MdClose />
                <span className="close">close</span>
            </span>
            </div>
            { !cartItems.length && <div className="empty-cart">
                <BsCartX />
                <span>No Products in the cart.</span>
                <button className="return-cta" >RETURN TO SHOP</button>
            </div>}
            {!!cartItems.length && <>
                <CardItem />
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal:</span>
                        <span className="text total">&#8377;{cartSubTotal}</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta" onClick={handlePayment}>Checkout</button>
                    </div>
                </div>
            </>}
        </div>
    </div>
    
};

export default Cart;
