import {Link} from "react-router-dom"
import EcommerceContext from "../../context/EcommerceContext";
import CartItem from "../CartItem"

import "./index.css"

const CartList = () => (
    <EcommerceContext.Consumer>
        {value => {
      const {cartList} = value
      
      return (
        <>
        <div>
        <ul className="cart-list">
            {cartList.map(eachCartItem => (
              
                <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
                
              
            ))}
          </ul>
          <Link to="/buycartItems" className="nav-link">
                        <div className="place-order-button-container">
                            <button className="place-order-button">
                                PLACE ORDER
                            </button>
                        </div>
                    </Link>
              
        </div>

        
          
        </>
        
      )
    }}
       
    </EcommerceContext.Consumer>
)

export default CartList