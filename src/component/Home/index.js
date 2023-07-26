import { Component } from "react";
//import {reactLocalStorage} from 'reactjs-localstorage';
import Header from "../Header"
import ProductItem from "../ProductItem"
import SliderBanner from "../SliderBanner"
import EcommerceContext from "../../context/EcommerceContext";
import CategoriesList from "../CategoriesList";
import "./index.css"


  

class Home extends Component{
 
  
    
    renderAllProductsList = () => (
        <EcommerceContext.Consumer>
               {value => {
                const {allProductsList} = value
                
                 return(
            
                    <div className="home-container">
                        <CategoriesList/>
                        <div className="slider-home-container">
                            <SliderBanner/>
                        </div>
                        
                        <ul className="products-list-container">
                            {allProductsList.map(eachItem => (
                                <ProductItem itemDetails= {eachItem} key={eachItem.id}/>
                                // { eachItem.id >= 2 ? <ProductItem itemDetails= {eachItem} key={eachItem.id}/>:null}

                            ))}
                        </ul>
                    </div>
                )
               }} 
            </EcommerceContext.Consumer>
    )

    


    render(){
        return(
            <div>
                <Header/>
                {this.renderAllProductsList()}
            </div>
        )
    }
}

export default Home