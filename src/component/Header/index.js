import {Link} from "react-router-dom"
import {Component} from "react"
import {FaSearch,FaShoppingCart} from "react-icons/fa"
import Popup from 'reactjs-popup'

import {IoMdLogOut} from "react-icons/io"
import EcommerceContext from "../../context/EcommerceContext"
import "./index.css"

class Header extends Component{

    

    renderCartListLength = () => (
        <EcommerceContext.Consumer>
            {value => {
                const {cartList} = value 
                const lengthOfCartList = cartList.length
                return(
                    <>
                        {lengthOfCartList > 0 ? (<span className="span-text-length">{lengthOfCartList}</span>): null}
                    </>
                )
                    
                    
                    
                
            }}
        </EcommerceContext.Consumer>
    )

    render(){
        
       return( <EcommerceContext.Consumer>
            {value => {
                const {searchInput,clickingSearchButton,changingSearchInput} = value 
                return(
                    <div>
                        <nav className="nav-container">
                            <Link to="/products" className="nav-link">
                                <div>
                                    <img className="webite-nav-logo" src="https://www.seekpng.com/png/full/428-4289671_logo-e-commerce-good-e-commerce-logo.png" alt="wesite logo"/>
                                </div>
                            </Link>
                            
                            <div className="search-container">
                                <input type="search" onChange={changingSearchInput} value={searchInput} placeholder="Search for products,brands and more" className="search-input"/>
                                <Link to="/search" className="nav-link">
                                    <button className="search-icon-button" onClick={clickingSearchButton}>
                                        <FaSearch className="search-icon"/>
                                    </button>
                                </Link>
                            </div>
                            <div className="buttons-container">
                                <Link to="/become-a-celler-login" className="nav-link">
                                    <button className="become-a-seller-button">Become a seller</button>
                                </Link>
                                
                                <div className="cart-contiainer">
                                <Link to = "/cart" className="nav-link">
                                <button className="cart-button">
                                    <FaShoppingCart className="shopping-sart-icon"/>
                                    <p className="cart-text">Cart
                                    <span>{this.renderCartListLength()}</span></p>
                                </button>
                                </Link>
                                
                                </div>
                                
                                <div className="logout-container">
                                     
                                    
                                    <div className="popup-container">
                                        <Popup
                                            modal
                                            trigger={
                                                <div>
                                                    <button type="button" className="cart-button">
                                                        <IoMdLogOut className="shopping-sart-icon"/>
                                                        <p className="cart-text">Logout</p>
                                                    </button>
                                                </div>
                                            
                                            }
                                        >
                                            {close => (
                                            <>  
                                            <div className="pop-up-bg-container">
                                                <div>
                                                    <p className="pop-up-text">Are you sure! You want to Logout?</p>
                                                    </div>
                                                    <div>
                                                        <button
                                                        type="button"
                                                        className="popop-up-button"
                                                        onClick={() => close()}
                                                        >
                                                        Close
                                                        </button>
                                                        <Link to="/" className="nav-link">
                                                            <button type="button" className="popop-up-button" onClick={this.onClickLogoutButton}>
                                                                Confirm
                                                            </button>
                                                        </Link>
                                                        
                                                    </div>
                                            </div>
                                                
                                                
                                            </>
                                            )}
                                        </Popup>
                                        </div>
                                    
                                </div>
                                
                            </div>
                        </nav>
                    </div>
                )
            }}
        </EcommerceContext.Consumer>
       )
    }
}

export default Header