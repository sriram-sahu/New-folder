import {Link} from "react-router-dom"

import Header from "../Header"
import CategoriesList from "../CategoriesList"
import EcommerceContext from "../../context/EcommerceContext"
import SliderBanner from "../SliderBanner"
import "./index.css"

const CategoriesProducts = () => {
    return(
        <EcommerceContext.Consumer>
            {value => {
                const {categoriesProducts} = value
                return (
                    <div>
                        <Header/>
                        <CategoriesList/>
                        <SliderBanner/>
                        <ul  className="products-list-container">
                            {categoriesProducts.map(eachItem => (
                                <li className="list-container">
                                <Link to={`/products/${eachItem.id}`} className="nav-link">
                                <div className="css-effect-hover">
                                    <img src={eachItem.thumbnail} alt={eachItem.title} className="product-img"/>
                                    <p className="brand-text">{eachItem.brand}</p>
                                    <p className="title-text">{eachItem.title}</p>
                                    <p className="price-text">Price: {eachItem.price* 75}</p>
                                    <p className="category-text">{eachItem.category}</p>
                                
                                </div>
                                </Link>
                            </li>
                            ))}
                        </ul>
                        
                    </div>
                )
            }}
        </EcommerceContext.Consumer>
    )
}
       
     
export default CategoriesProducts