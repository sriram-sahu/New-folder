
import EcommerceContext from "../../context/EcommerceContext"
import {BiRupee} from "react-icons/bi"
import "./index.css"

const CartSummary = (props) => (
    
    <EcommerceContext.Consumer>
        {value => {
            const {cartList} = value

           let total = 0
            cartList.forEach(eachCartItem => {
                const inRupees = (eachCartItem.price * 75) * eachCartItem.quantity 
                total += inRupees
                
            })
    
            
            return(
                <div className="cart-summary-container">
                    <p className="cart-summary-price-details-text">PRICE DETAILS</p>
                    <hr className="cart-summary-hr-line1"/>
                    <div className="cart-summary-text-container">
                    <div className="cart-summary-price-details-container">
                        {cartList.length === 1 ? <p className="cart-summary-price-text">Price ({cartList.length} item) </p> : <p className="cart-summary-price-text">Price ({cartList.length} items)</p>}
                        
                        <div className="cart-summary-rupee-icon-cotainer">
                        <BiRupee className="cart-summary-icon1"/>
                        <p className="cart-summary-price">{total}</p>
                        </div>
                        
                    </div>
                    <div className="cart-summary-delivery-charges">
                    <p className="delivery-charges-text">Delivery Charges</p>
                    <p className="free-text">Free</p>
                    </div>
                    <hr className="cart-summary-hr-line2"/>
                    <div className="cart-summary-total-price-container">
                        <p className="cart-summary-totsl-price-text">Total Amount</p>
                        <div className="cart-summary-rupee-icon-cotainer">
                        <BiRupee className="cart-summary-icon2"/>
                        <p className="cart-summary-total-price">{total}</p>  
                        </div>
                    </div>
                    <hr className="cart-summary-hr-line2"/>
                    
                    
                    </div>
                    
                </div>
            )
        }}
    </EcommerceContext.Consumer>
)

export default CartSummary