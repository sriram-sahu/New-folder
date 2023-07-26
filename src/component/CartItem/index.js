import {Component} from "react"
import {BiRupee} from "react-icons/bi"
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import EcommerceContext from "../../context/EcommerceContext"
import "./index.css"

class CartItem extends Component{
    
    render(){
        return(
            <EcommerceContext.Consumer>
            {value => {
                const {removeCartItem,quantityDecrement,quantityIncrement} = value
                const {cartItemDetails} = this.props
                
                const {title,images1,description,id,price,discountPercentage,quantity} = cartItemDetails
                const priceInRupees = price * 75 
                const totalPrice = priceInRupees * quantity
                const onClickToRemoveCartItem = () => {
                    removeCartItem(id)
                }

                const onDecrementQuantity = () => {
                        quantityDecrement(id)
                }

                const onIncrementQuantity = () => {
                    quantityIncrement(id)
                }
                
                return(
                    <div>
                    <li className="list-cart-item-container">
                        <div className="cart-image-container">
                            <img src={images1} alt="" className="cart-image"/>
                            <div className="quantity-container">
                                    <button
                                        type="button"
                                        className="quantity-controller-button"
                                        onClick={onDecrementQuantity}
                                    >
                                        <BsDashSquare className="quantity-controller-icon" />
                                    </button>
                                    <p className="quantity">{quantity}</p>
                                    <button
                                        type="button"
                                        className="quantity-controller-button"
                                        onClick={onIncrementQuantity}
                                    >
                                        <BsPlusSquare className="quantity-controller-icon" />
                                    </button>
                                    </div>
                        </div>
                        <div className="cart-text-container">
                            <p className="cart-title-text">{title}</p>
                            <p className="cart-description-text">{description}</p>
                            <p className="cart-seller-text">Seller: Mauval India</p>
                            <div className="price-and-discount-container">
                                <div className="price-container">
                                    <BiRupee className="price-icon"/>
                                    <p className="cart-price-text">{totalPrice}</p>
                                </div>
                                <div className="discount-container">
                                    <p className="cart-discount-text">{discountPercentage}% off</p>
                                </div>
                                
                            </div>
                            <button
                                    className="remove-button"
                                    type="button"
                                    onClick={onClickToRemoveCartItem}
                                >
                                    Remove
                                </button>
                        </div>
                        
                    </li>
                    <hr className="cart-summary-hr-line2"/>
                    </div>
                )
            }}
        </EcommerceContext.Consumer>
        )
    }
}



export default CartItem