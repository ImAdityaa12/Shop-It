import "./Category.scss";
import { useNavigate } from "react-router-dom"

const Category = ({categories}) => {
    const navigate = useNavigate()
    return <div className="shop-by-categories">
    <div className="categories">
            {categories?.data?.map((item)=>(
                <div key={item?.id} className="category">
                    <img src={process.env.REACT_APP_DEV_URL + item?.attributes?.img?.data[0]?.attributes?.url} alt="image2" onClick={()=> navigate(`/category/${item.id}`)}/>
                </div>
            ))}






            
            {/* <div className="category">
                <img src={cat2} alt="image2"/>
            </div>
            <div className="category">
                <img src={cat3} alt="image3"/>
            </div>
            <div className="category">
                <img src={cat4} alt="image4"/>
            </div> */}
        </div>
    </div>
};

export default Category;
