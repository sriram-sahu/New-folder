import {Link} from "react-router-dom"
import {Component} from "react"
import {FaShoppingCart} from "react-icons/fa"
import {BiRupee} from "react-icons/bi"
import {AiFillStar} from "react-icons/ai"

import {VscChevronLeft} from "react-icons/vsc"
import Header from "../Header"
import CategoriesList from "../CategoriesList"
import EcommerceContext from "../../context/EcommerceContext"
import "./index.css"

class ProductItemDetails extends Component{
    state = {
        productItemDetailsData: {},
        quantity: 1,
        setImage: '',
        activeImageId: false,

    }

    componentDidMount(){
        this.getProductItemDetails()
    }

    getProductItemDetails = async () => {
        const {match} = this.props 
        const {params} = match
        const {id} = params
        const url = `https://dummyjson.com/products/${id}`
        const options = {
            method: "GET"
        }
        const response = await fetch (url, options)
        if (response.ok === true){
            const data = await response.json()
            const fetchedData = {
                brand: data.brand,
                title: data.title,
                price: data.price,
                category: data.category,
                images1: data.images[0],
                images2: data.images[1],
                images3: data.images[2],
                images4: data.images[3],
                images5: data.images[4],
                id: data.id,
                description: data.description,
                discountPercentage: data.discountPercentage,
                rating: data.rating,
                stock: data.stock,
                thumbnail: data.thumbnail,

            }
            this.setState({
                productItemDetailsData: fetchedData
            })
        }
    }

    onClickImage1 = () => {
        const {productItemDetailsData} = this.state
        const {images1} = productItemDetailsData 
        this.setState({
            setImage: images1,
            activeImageId: true
        })
    }
    onClickImage2 = () => {
        const {productItemDetailsData} = this.state
        const {images2} = productItemDetailsData 
        this.setState({
            setImage: images2,
            activeImageId: true
        })
    }
    onClickImage3 = () => {
        const {productItemDetailsData} = this.state
        const {images3} = productItemDetailsData 
        this.setState({
            setImage: images3,
            activeImageId: true
        })
    }
    onClickImage4= () => {
        const {productItemDetailsData} = this.state
        const {images4} = productItemDetailsData 
        this.setState({
            setImage: images4,
            activeImageId: true
        })
    }

    

    renderProductsDetailsData = () => (
        
            <EcommerceContext.Consumer>
                {value => {
                    const {productItemDetailsData,quantity,setImage,activeImageId} = this.state 
                    const activeImage = activeImageId ? "button-image" : "button-image"
                    
                    const {images1,
                        images2,
                        images3,
                        images4,
                        brand,
                        title,
                        description,
                        category,
                        stock,
                        rating,
                        discountPercentage,
                        id,
                        thumbnail,
                        price} = productItemDetailsData
                        const {addCartItem,buynowClickingBtn} = value 

                        const onClickAddCartItem = () => {
                            addCartItem({...productItemDetailsData,quantity})
                        }

                        const onClickBuyNowButton = () => {
                            buynowClickingBtn(id)
                        }

                    return(
                        <>

                            <div className="product-item-main-container">
                                <div className="product-images-container">
                                    
                                    <div>
                                        <button className="main-product-image-button">
                                            {activeImageId ? <img src={setImage}alt={brand} className="main-product-image"/>:
                                            <img src={thumbnail}alt={brand} className="main-product-image"/>
                                            }
                                            
                                        </button>
                
                                        <div className="add-to-cart-and-buy-now-buttons">
                                            <button className="add-to-cart-button" onClick={onClickAddCartItem}>
                                                <FaShoppingCart className="shopping-art-icon"/>
                                                <p className="add-to-cat-text">ADD TO CART</p>
                                            </button>
                                            <Link to="/buynow" className="nav-link">
                                                <button className="buy-now-button" onClick={onClickBuyNowButton}>
                                                    <BiRupee className="buy-now-icon"/>
                                                    <p className="buy-now-text">BUY NOW</p>
                                                </button>
                                            </Link>
                                            
                                        </div>
                                        
                                    </div>
                                    <div>
                                    <Link to="/products" className="nav-link">
                                        <div className="nav-home-container">
                                            <VscChevronLeft className="nav-home-icon"/>
                                            <p className="home-text">All products</p>
                                        </div>
                                    </Link>
                                    <div className="text-container-main">
                                    <p className="title-text-products">{title}<span className="span-text"> ({category})</span></p>
                                        <p className="description-text">{description}</p>
                                        <div className="ratings-main-container">
                                            <div className="rating-container">
                                                
                                                <p className="rating-text">{rating}</p>
                                                <AiFillStar className="star-icon"/>
                                            </div>
                                            <p className="ratings-text">ratings</p>
                                        </div>
                                        
                                        
                                        <p className="brand-text">Brand of the Product is <span className="span-brand-teaxt">{brand}</span></p>
                                        <p className="discount-percentage-text">Discount percentage is <span className="span-brand-teaxt">{discountPercentage}</span>% off</p>
                                        <p className="category-text-products">Category of the Product: <span className="span-brand-teaxt">{category}</span> </p>
                                        <p className="stock-text">Available Stock: <span className="span-brand-teaxt">{stock}</span> </p>
                                        <div className="price-container">
                                            <p className="price-text-products">Price:</p>
                                            <BiRupee className="bi-ripee-icon"/>
                                            <p className="span-brand-teaxt">{price*75}</p>
                                        </div>
                                        <div className="images-list">
                                        <button className={activeImage} onClick={this.onClickImage1} value={activeImageId}>
                                            <img src={images1} alt="" className="images-product"/>
                                        </button>
                                        <button className={activeImage} onClick={this.onClickImage2} value={activeImageId}>
                                            <img src={images2} alt="" className="images-product"/>
                                        </button>
                                        <button  className={activeImage} onClick={this.onClickImage3} value={activeImageId}>
                                            <img src={images3} alt="" className="images-product"/>
                                        </button>
                                        <button  className={activeImage}  onClick={this.onClickImage4}  value={activeImageId}>
                                            <img src={images4} alt="" className="images-product"/>
                                        </button>
                                        </div>
                                    
                                    </div>
                                        
                                            
                                        
                                    
                                    </div>
                                    
                                </div>
                                
                                
                                
                            </div>
                        </>
                        
                    )
                }}
            </EcommerceContext.Consumer>
        
    )

    render(){
        return(
            <div>
                <Header/>
                <CategoriesList/>
                {this.renderProductsDetailsData()}
            </div>
        )
    }
}

export default ProductItemDetails