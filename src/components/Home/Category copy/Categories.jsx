import "./Categories.scss";
import { useNavigate } from "react-router-dom"
import {Context} from "../../../utils/Context"
import { useContext, useEffect } from "react";
import { fetchDataFromApi } from "../../../utils/Api";
const Categories = () => {
    const { categories, setCategories} = useContext(Context)
    const navigate = useNavigate()
    useEffect(() => {
        getCategories();
        console.log(categories)
    }, []);
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res)
            setCategories(res);
        });
    };
    return <>
    <div className="shop-by-categories">
        <div className="categories">
            {categories?.data?.map((item)=>(
                <div key={item?.id} className="category">
                    <img src={process.env.REACT_APP_DEV_URL + item?.attributes?.img?.data[0]?.attributes?.url} alt="image2" onClick={()=> navigate(`/category/${item.id}`)}/>
                </div>
            ))}
        </div>
    </div>
    </>
};

export default Categories;
