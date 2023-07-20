import React from "react"
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt , FaEnvelope } from "react-icons/fa"
import Payment from "../../assets/payments.png"
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Our website offers a wide range of high-quality headphones for every budget, featuring the latest technology and stylish designs. Explore our collection for the ultimate audio experience.</div>
            </div>
            <div className="col">
                <div className="title">
                    Contact
                </div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text"> Stanza Living, Knowledge Park 3, Greater Noida, Uttar Pradesh, 201310</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">9517111597</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">adityagupta1291@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">Headphone</div>
                <div className="text">Bluetooth Speaker</div>
                <div className="text">Smart Watches</div>
                <div className="text">Home Theatre</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Powerbanks</div>
            </div>
            <div className="col">
                <div className="title">
                    Pages
                </div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact US</span>    
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text"> SHOP IT CREATED BY ADITYA PREMIUM E-COMMERCE SOLTUIONS.</div>
                <img src={Payment} alt="payments pictures" />
            </div>
        </div>
    </footer>;
};

export default Footer;
