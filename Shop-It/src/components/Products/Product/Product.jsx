import "./Product.scss";
import {useNavigate} from "react-router-dom"
const Product = ({id, data1}) => {
    const navigate = useNavigate()
    return (<div className="card" onClick={() => navigate("/product/"+id)}>
            <div className="picture">
                <img src={process.env.REACT_APP_DEV_URL + data1?.img?.data[0]?.attributes?.url} alt="prod" />
            </div>
            <div className="details">
                <span className="name">{data1?.title}</span>
                <span className="price">&#8377;{data1?.price}</span>
            </div>
    </div>
    );
};

export default Product;
