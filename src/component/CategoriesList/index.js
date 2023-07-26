import {withRouter,Link} from "react-router-dom"

import {VscChevronRight} from "react-icons/vsc"
import EcommerceContext from "../../context/EcommerceContext"
import "./index.css"


  const CategoriesList = () => {
    return(
        <EcommerceContext.Consumer>
            {value => {
                const {categoriesList,changingCategory,activeCategoryId} = value
                return(
                    <div>
                <ul className="categories-ul-list-container">
                    <Link to="/products" className="nav-link">
                    <div className="categories-list-container">
                        <p className="and-up">All</p>
                        <VscChevronRight  className="nav-icon"/>
                    </div>
                    </Link>
                    
                    
                    {categoriesList.map(eachCategory => {
                        const clickingCategory = () => {
                                changingCategory(eachCategory)
                        }
                        //const textClassName = activeCategoryId === eachCategory ? `and-up active-rating` : `and-up`

                       return <Link to="/category" className="nav-link" onClick={clickingCategory}> 
                            <li className="categories-list-container"  value={eachCategory}>
                                <p className="and-up">{eachCategory}</p>
                                <VscChevronRight  className="nav-icon"/>
                            </li>
                        </Link>
                        
                    })}
                </ul>
            </div>
                )
            }}
        </EcommerceContext.Consumer>
    )
  } 
        
            
        

export default withRouter(CategoriesList)