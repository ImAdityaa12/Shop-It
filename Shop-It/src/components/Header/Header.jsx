import "./Header.scss";

import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"
import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import { Context } from "../../utils/Context"
const Header = () => {
    const { cartCounts } = useContext(Context)
    const navigate = useNavigate()
    const [scroll, setScroll] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const handleScroll = () =>{
        const offset = window.scrollY;
        if (offset>200) {
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    },[])
    return <>
        <header className={`main-header ${scroll ? "sticky-header" : ""}`}>
            <div className="header-content">
                <ul className="left">
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("/about")}>About</li>
                    <li onClick={() => navigate("/categories")}>Categories</li>
                </ul>
                <div className="center" onClick={() => navigate("/")}>Shop It.</div>
                <div className="right"> 
                    <TbSearch onClick={()=> setShowSearch(true)}/>
                    <AiOutlineHeart />
                    <span className="cart-icon" onClick={()=> setShowCart(true)}>
                        <CgShoppingCart />
                        {!!cartCounts && <span>{cartCounts}</span>}
                    </span>
                </div>
            </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart} />}
        {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
};

export default Header;
