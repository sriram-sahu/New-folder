import {Link} from "react-router-dom"
import {Component} from "react"
import CartList from "../CartList"
import Header from "../Header"
import CartSummary from "../CartSummary"
import EcommerceContext from "../../context/EcommerceContext"
import "./index.css"
//import PlaceOrder from "../PlaceOrder"

class Cart extends Component{

   

    renderCartList = () => (
        <EcommerceContext.Consumer>
            {value => {
                const {cartList} = value 
                const lengthOfCartList = cartList.length > 0
                return (
                    <>
                    {lengthOfCartList ? <div>
                    <p className="my-acrt-text">My Cart</p>
                                <div className="cart-display-container">
                                <CartList/>
                                <CartSummary/>
                                
                                </div>
                            </div>
                                :<div className="empty-cart-container">
                                    <img className="empty-cart-image" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7236766-5875081.png?f=webp" alt="cart empty"/>
                                    <p className="empty-cart-text1">Oops! Your cart is empty!</p>
                                    <p className="empty-cart-text2">Looks like you haven't added </p>
                                    <p className="empty-cart-text3">anything to your cart yet</p>
                                    <Link to="/products" className="nav-link">
                                        <button className="shop-now-button">
                                            Shop Now
                                        </button>
                                    </Link>
                                    
                                </div>

            }
                        
                    </>
                )
            }}
        </EcommerceContext.Consumer>
            
            
        
        
        
    )

    render(){
        return(
            <div className="cart-main-bg-container">
                <Header/>
                {this.renderCartList()}
                
            </div>
        )
    }
}

export default Cart