import {Component} from "react"
import {BrowserRouter,Route,Switch,HashRouter} from 'react-router-dom'
//import {reactLocalStorage} from 'reactjs-localstorage';
//import {v4 as uuidv4} from 'uuid'
import LoginForm from "./component/LoginForm"
import Home from "./component/Home"
import ProductItemDetails from './component/ProductItemDetails'
import Cart from "./component/Cart"
import BuyNow from "./component/BuyNow"
import BuyCartItems from "./component/BuyCartItems"
import BecomeACellerLoginForm from "./component/BecomeACellerLoginForm"
import SellingProduct from "./component/SellingProduct"
import CategoriesProducts from "./component/CategoriesProducts"
import SearchProduct from "./component/SearchProduct"
import EcommerceContext from './context/EcommerceContext'
import NotFound from "./component/NotFound"
import './App.css'



class App extends Component{
    state = {
        searchInput: "",
        cartList: [],
        allProductsList: [],
        addProduct: [],
        buyNowItem: {},
        showAddingProduct: false,
        activeCategoryId: '',
        categoriesList: [],
        categoriesProducts: [],
        searchProductsList: [],
        titleInput: '',
        thumbnailInput: '',
        descriptionInput: '',
        priceInput: '',
        brandInput: '',
        stockInput: '',
        categoryInput: '',
        ratingInput: '',
        discountInput: '',
        image1Input: '',
        image2Input: '',
        image3Input: '',
        image4Input: '',
        newList: [],
        isShowAllProducts: false,
        
    }

    

    componentDidMount(){
      this.getAllProductsList()
      this.getCategoriesList()
      this.getCategoriesProducts()
      this.getSearchProductsList()
  }
  
      getAllProductsList = async () => {
        
        
      const url = (`https://dummyjson.com/products?limit=0&skip=0&select=title,price,thumbnail,id,brand,category`)
      const options = {
          method: "GET"
      }
      const response = await fetch(url, options)
      if (response.ok === true){
          const data = await response.json()
          
          const fetchedData = data.products.map(eachProduct => ({
                  brand: eachProduct.brand,
                  title: eachProduct.title,
                  price: eachProduct.price,
                  category: eachProduct.category,
                  thumbnail: eachProduct.thumbnail,
                  id: eachProduct.id
                
              }))
          
            
          
          this.setState({
            allProductsList: fetchedData
          })
          }
      }

      getCategoriesList = async () => {
        const url = "https://dummyjson.com/products/categories"
        const options = {
            method: "GET"
        }

        const response = await fetch(url, options)

        const data = await response.json()
        this.setState({
            categoriesList: data
        })
    }

    getCategoriesProducts = async () => {
      const {activeCategoryId} = this.state
      const url = `https://dummyjson.com/products/category/${activeCategoryId}`
      const options = {
          method: "GET"
      }

      const response = await fetch(url, options)
      const data = await response.json()
      const fetchedData = data.products.map(eachProduct => ({
          brand: eachProduct.brand,
          title: eachProduct.title,
          price: eachProduct.price,
          category: eachProduct.category,
          thumbnail: eachProduct.thumbnail,
          id: eachProduct.id
        
      }))
      this.setState({
          categoriesProducts: fetchedData
      })
  }

  getSearchProductsList = async () => {
        const {searchInput} = this.state 
        const url = `https://dummyjson.com/products/search?q=${searchInput}`
        const options = {
            method: "GET"
        }

        const response = await fetch(url, options)
        const data = await response.json()
        const fetchedData = data.products.map(eachProduct => ({
            brand: eachProduct.brand,
            title: eachProduct.title,
            price: eachProduct.price,
            category: eachProduct.category,
            thumbnail: eachProduct.thumbnail,
            id: eachProduct.id
          
        }))

        this.setState({
            searchProductsList: fetchedData
        })
        
    }
      

    
    addCartItem = product => {
    const {cartList} = this.state
    const productObject = cartList.find(
      eachCartItem => eachCartItem.id === product.id,
    )

    if (productObject) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + product.quantity

            return {...eachCartItem, quantity: updatedQuantity}
          }

          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...cartList, product]

      this.setState({cartList: updatedCartList})
    }
  }

  quantityIncrement = (id) => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
    
  }

  quantityDecrement = (id) => {
    const {cartList} = this.state
    const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      this.removeCartItem(id)
    }
  }

  buynowClickingBtn = id => {
    const {allProductsList} = this.state 
    const clickedId = allProductsList.filter(eachCartItem => 
      eachCartItem.id === id
      )
      
        this.setState({
          buyNowItem: clickedId,
        })
      
        
      
    
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )

    this.setState({cartList: updatedCartList})
  }

  
changingSearchInput = event => {
  this.setState({
      searchInput: event.target.value
  })
}

clickingSearchButton = () => {
  this.getSearchProductsList()
}

changingCategory = activeCategoryId => {
  this.setState({activeCategoryId}, this.getCategoriesProducts)
}


onChangeTitle = event => {
  this.setState({
      titleInput: event.target.value
  })
}

onChangeThumbnail = event => {
  this.setState({
      thumbnailInput: event.target.value
  })
}

onChangeDesacription = event => {
  this.setState({
      descriptionInput: event.target.value
  })
}

onChangePrice = event => {
  this.setState({
      priceInput: event.target.value
  })
}

onChangeBrand = event => {
  this.setState({
      brandInput: event.target.value
  })
}

onChangeStock = event => {
  this.setState({
      stockInput: event.target.value 
  })
}

onChangeCategory = event => {
  this.setState({
      categoryInput: event.target.value 
  })
}

onChangeRating = event => {
  this.setState({
      ratingInput: event.target.value 
  })
}

onChangeDiscountPercentage = event => {
  this.setState({
      discountInput: event.target.value
  })
}

onChangeImage1 = event => {
  this.setState({
      image1Input: event.target.value
  })
}

onChangeImage2 = event => {
  this.setState({
      image2Input: event.target.value
  })
}

onChangeImage3 = event => {
  this.setState({
      image3Input: event.target.value
  })
}

onChangeImage4 = event => {
  this.setState({
      image4Input: event.target.value
  })
}

clickingPostButton = () => {
  this.setState({
    showAddingProduct: true
  })
}


submittingForm = async event => {
  const {titleInput,thumbnailInput, brandInput,descriptionInput,priceInput,stockInput,categoryInput,ratingInput,discountInput,image1Input,image2Input,image3Input,image4Input} = this.state
  event.preventDefault()
  const url = 'https://dummyjson.com/products/add'
  const options = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          title: titleInput,
          thumbnail: thumbnailInput,
          brand: brandInput,
          price: parseInt(priceInput),
          description: descriptionInput,
          stock: stockInput,
          rating: ratingInput,
          discountPercentage: discountInput,
          category: categoryInput,
          image1: image1Input,
          image2: image2Input,
          image3: image3Input,
          image4: image4Input,

          /* other product data */
        })
  }

  const response = await fetch(url, options)
  const data = await response.json()
  this.setState(prevState => ({
      allProductsList: [...prevState.allProductsList, data]
      
  }))
}

ClickHighlting = () => {
  this.setState(prevState => ({
    isShowAllProducts: !prevState.isShowAllProducts,
  }))
}


    render(){
        const {
          
          searchInput,
          cartList,
          allProductsList,
          buyNowItem,
          titleInput,
          descriptionInput,
          ratingInput,
          priceInput,
          barndInput,
          thumbnailInput,
          stockInput,
          discountInput,
          categoryInput,
          isShowAllProducts,
          image1Input,
          image2Input,
          image3Input,
          image4Input,
          categoriesList,
          activeCategoryId,
          categoriesProducts,
          searchProductsList,
          showAddingProduct,
        } = this.state 
        return(
        <EcommerceContext.Provider value={{
            activeCategoryId,
            showAddingProduct,
            categoriesList,
            isShowAllProducts,
            searchInput,
            changingCategory: this.changingCategory,
            changingSearchInput: this.changingSearchInput,
            clickingSearchButton: this.clickingSearchButton,
            cartList,
            allProductsList,
            buyNowItem,
            addCartItem: this.addCartItem,
            removeCartItem: this.removeCartItem,
            incrementCartItemQuantity: this.incrementCartItemQuantity,
            decrementCartItemQuantity: this.decrementCartItemQuantity,
            removeAllCartItems: this.removeAllCartItems,
            quantityIncrement: this.quantityIncrement,
            quantityDecrement: this.quantityDecrement,
            buynowClickingBtn: this.buynowClickingBtn,
            titleInput,
            descriptionInput,
            ratingInput,
            priceInput,
            barndInput,
            thumbnailInput,
            stockInput,
            discountInput,
            categoryInput,
            image1Input,
            image2Input,
            image3Input,
            image4Input,
            onChangeTitle: this.onChangeTitle,
            onChangeDesacription: this.onChangeDesacription,
            onChangeRating: this.onChangeRating,
            onChangePrice: this.onChangePrice,
            onChangeBrand: this.onChangeBrand,
            onChangeCategory: this.onChangeCategory,
            onChangeDiscountPercentage: this.onChangeDiscountPercentage,
            onChangeStock: this.onChangeStock,
            onChangeThumbnail: this.onChangeThumbnail,
            submittingForm: this.submittingForm,
            onChangeImage1: this.onChangeImage1,
            onChangeImage2: this.onChangeImage2,
            onChangeImage3: this.onChangeImage3,
            onChangeImage4: this.onChangeImage4,
            clickingCategory: this.clickingSearchButton,
            clickingPostButton: this.clickingPostButton,
            ClickHighlting: this.ClickHighlting,
            categoriesProducts,
            searchProductsList,


        }}>
            <HashRouter>
      
                <Switch>

                    <Route exact path="/" component={LoginForm}/>
                    <Route exact path="/products" component={Home} />
                    <Route exact path="/products/:id" component={ProductItemDetails}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/buynow" component={BuyNow}/>
                    <Route exact path="/buycartItems" component={BuyCartItems}/>
                    <Route exact path="/become-a-celler-login" component={BecomeACellerLoginForm}/>
                    <Route exact path="/selling-product" component={SellingProduct}/>
                    <Route exact path ="/category" component={CategoriesProducts}/>
                    <Route exact path="/search" component={SearchProduct}/>
                    <Route component={NotFound}/>
                    
                    
                </Switch> 
            
            </HashRouter>
        </EcommerceContext.Provider>
    
        )
    }
}
  
      
export default App;
