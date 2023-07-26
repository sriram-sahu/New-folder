
import {Link} from "react-router-dom"
import Header from "../Header"
import CategoriesList from "../CategoriesList"
import EcommerceContext from "../../context/EcommerceContext"
import SliderBanner from "../SliderBanner"
import "./index.css"

const SearchProduct = () => (
    <EcommerceContext.Consumer>
        {value => {
            const {searchProductsList} = value
            const lengthOfSearchList = searchProductsList.length > 1
            return(
                <div>
                    <Header/>
                        <CategoriesList/>
                        <SliderBanner/>
                        <ul className="products-list-container">
                            { lengthOfSearchList ? 
                            <>
                            {searchProductsList.map(searchSEachProduct => (
                                <li className="list-container">
                                    <Link to={`/products/${searchSEachProduct.id}`} className="nav-link">
                                        <div className="css-effect-hover">
                                            <img src={searchSEachProduct.thumbnail} alt={searchSEachProduct.title} className="product-img"/>
                                            <p className="brand-text">{searchSEachProduct.brand}</p>
                                            <p className="title-text">{searchSEachProduct.title}</p>
                                            <p className="price-text">Price: {searchSEachProduct.price * 75}</p>
                                            <p className="category-text">{searchSEachProduct.category}</p>
                                        
                                        </div>
                                    </Link>
                                </li>
                            ))}
                            </>
                             : <div className="no-products-container">
                                {/* <img className="no-search-img" src="https://static.vecteezy.com/system/resources/previews/002/076/417/non_2x/data-search-not-found-illustration-concept-vector.jpg" alt="no search products"/> */}
                                    <h1 className="no-results-found-text">Results not found</h1>
                                    <p className="no-results-found-description1">We couldn't find what you searched for.</p>
                                    <p className="no-results-found-description2">Try searching again</p>
                                </div>
                                }
                            
                        </ul>
                    </div>
            )
        }}
    </EcommerceContext.Consumer>
)

export default SearchProduct