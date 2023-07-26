import {Component} from "react"
import {Link} from "react-router-dom"
import Header from "../Header"
import EcommerceContext from "../../context/EcommerceContext"
import "./index.css"

class SellingProduct extends Component{


    render(){
       return <EcommerceContext.Consumer>
            {value => {
                const {titleInput,descriptionInput,priceInput,stockInput,brandInput,categoryInput,ratingInput,discountInput,thumbnailInput,
                onChangeBrand, onChangeDesacription, onChangeCategory,onChangeDiscountPercentage,
            onChangePrice,onChangeRating, onChangeStock,submittingForm,onChangeThumbnail, onChangeTitle,showAddingProduct,clickingPostButton} = value 
            
                return(
                    <div>
                        <Header/>
                        <div className="become-a-seleer-main-bg-container">
                        <p className="all-products-text">Sell Your Product Here</p>
                        <form onSubmit={submittingForm} className="become-a-seller-from-container">
                            <div className="inputs-container-become-a-seller">
                                <div>
                                    <p className="input-text">Title of the product</p>
                                    <input type="text" onChange={onChangeTitle} value={titleInput} className="become-a-seller-input"/>
                               
                                </div>
                                <div>
                                <p className="input-text">Description</p>
                                <input type="text" onChange={onChangeDesacription} value={descriptionInput}  className="become-a-seller-input"/>
                            
                               </div>
                                </div>
                            <div  className="inputs-container-become-a-seller">
                                <div>
                                    <p className="input-text">Price of the product</p>
                                    <input type="number" onChange={onChangePrice} value={priceInput} className="become-a-seller-input"/>
                                
                                </div>
                                <div>
                                    <p className="input-text">Stock</p>
                                    <input type="number" onChange={onChangeStock} value={stockInput} className="become-a-seller-input"/>
                            
                                </div>
                                </div>
                            <div className="inputs-container-become-a-seller">
                                <div>
                                    <p className="input-text">Brand of the Product</p>
                                    <input type="text" onChange={onChangeBrand} value={brandInput} className="become-a-seller-input"/>
                                
                                </div>
                                <div>
                                    <p className="input-text">Category</p>
                                    <input type="text" onChange={onChangeCategory} value={categoryInput} className="become-a-seller-input"/> 
                            
                                </div>
                                </div>
                            <div className="inputs-container-become-a-seller">
                                <div>
                                    <p className="input-text">Rating</p>
                                    <input type="text" onChange={onChangeRating} value={ratingInput} className="become-a-seller-input"/>
                                
                                </div>
                                <div>
                                    <p className="input-text">DiscountPercentage</p>
                                    <input type="number"  onChange={onChangeDiscountPercentage} value={discountInput} className="become-a-seller-input"/>
                            
                                </div>
                               </div>
                                <div  className="inputs-container-become-a-seller">
                                    <div>
                                        <p className="input-text">Product image</p>
                                        <input type="url" onChange={onChangeThumbnail} value={thumbnailInput} className="become-a-seller-input"/>
                                
                                    </div>
                                    
                                </div>
                                
                             <div className="beacome-a-seller-btn-container">
                                <button type="submit" className="become-a-seller-post-button" onClick={clickingPostButton} value={showAddingProduct}>Post</button>
                                <Link to="/products">
                                
                                    {showAddingProduct && <button   className="go-to-produtcs-button">View products</button>}
                            
                                </Link>
                                
                            </div>
                            
                            {showAddingProduct && <p className="successfull-msg-text">Successfully added your product</p>}
                            
                        </form>
                    </div>

                    </div>
                    
                )
            }}
        </EcommerceContext.Consumer>
        
    }
}

export default SellingProduct