import {Link} from 'react-router-dom'
import "./index.css"

const ProductItem = props => {
    const {itemDetails} = props 
    const {brand,title,price,category,thumbnail,id} = itemDetails
    

    return(
        <>
        {(itemDetails.id > 1 && itemDetails.id !== 22) &&
        <li className="list-container">
            <Link to={`/products/${id}`} className="nav-link">
            <div className="css-effect-hover">
                <img src={thumbnail} alt={title} className="product-img"/>
                <p className="brand-text">{brand}</p>
                <p className="title-text">{title}</p>
                <p className="price-text">Price: {price* 75}</p>
                <p className="category-text">{category}</p>
            
            </div>
            </Link>
        </li>}
        
        </>
        
    )
}

export default ProductItem