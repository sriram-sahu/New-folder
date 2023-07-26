import {Component} from "react"

import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"

import "./index.css"

class LoginForm extends Component{
    state = {
        userName: '',
        password: '',
        isShowErrorMsg: false,
        isShowPassword: false,
        errorMessage: '',
        errorMsgUsername: '',
        errorMsgPassword: '',
        isActive: false, 
        
        
    }

    onSubmitForm = event => {

        event.preventDefault()
        const {history} = this.props
        const userDetails = {userName: "priya", password: "priya@2001"}
        const {userName,password} = this.state 
        if (userName === userDetails.userName && password === userDetails.password){
            history.replace("/products")
        }else{
            this.setState({
                isShowErrorMsg: true,
                errorMessage: "*Please enter Valid Username and Password"
            })
        }
    }

    onChangeUsername = event => {
        this.setState({
            userName: event.target.value 
        })
    }

    onChangePassword = event => {
        this.setState({
            password: event.target.value 
        })
    }

    onBlurHandlingUsername = () => {
        const {userName} = this.state 
        if (userName === ''){
            this.setState({
                userName: '',
                errorMsgUsername: "*Username Required "
            })
        }else{
            this.setState({
                userName: userName,
                errorMsgUsername: ''
            })
        }
    }

    onBlurHandlingPassword = () => {
        const {password} = this.state 
        if (password === ''){
            this.setState({
                password: '',
                errorMsgPassword: "*Password Required "
            })
        }else{
            this.setState({
                password: password,
                errorMsgPassword: ''
            })
        }
    }

    onClickShowPasswordIcon = () => {
        this.setState(prevState => ({
            isShowPassword: !prevState.isShowPassword
        }))
    }

    
    render(){
        const {
            userName,password,errorMsgPassword,errorMsgUsername,isShowPassword,isShowErrorMsg,errorMessage
        } = this.state
        
        return(
            <div className="login-form-main-bg-container">
                <div className="login-form-left-container">
                    <div className="left-logo-container">
                        <img src="https://www.seekpng.com/png/full/428-4289671_logo-e-commerce-good-e-commerce-logo.png" alt="website logo" className="logo-image"/>
                    
                    </div>
                    <div className="login-img-container">
                        <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg?w=2000" alt="login" className="login-vector-image"/> 
                    </div>
                </div>
    
                <div className="login-form-right-container">
                    <div className="form-div-container">
                        <form className="login-form-container" onSubmit={this.onSubmitForm}>
                            <div className="logo-container">
                                <img src="https://www.seekpng.com/png/full/428-4289671_logo-e-commerce-good-e-commerce-logo.png" alt="website logo" className="logo-image-in-form"/>
                    </div>
                        <label htmlFor="username" className="label-element">USERNAME</label>
                        <input 
                        type="text" 
                        id="username" 
                        className="input-element" 
                        
                        value={userName}
                        onChange={this.onChangeUsername}  
                        onBlur={this.onBlurHandlingUsername}/>
                        
                        <p className="error-msg">{errorMsgUsername}</p>
                        <label htmlFor="password" className="label-element">PASSWORD</label>
                        {!isShowPassword ? (<div className="password-container">
                        <input 
                        type="password" 
                        id="password" 
                        className="input-element" 
                        
                        value={password}
                        onChange={this.onChangePassword}  
                        onBlur={this.onBlurHandlingPassword}/>
                        <button type="button" className="eye-icon"onClick={this.onClickShowPasswordIcon}>
                            <AiOutlineEyeInvisible/>
                        </button>
                        </div> ):(<div className="password-container">
                        <input 
                        type="text" 
                        id="password" 
                        className="input-element" 
                        
                        value={password}
                        onChange={this.onChangePassword}  
                        onBlur={this.onBlurHandlingPassword}/>
                        <button type="button" className="eye-icon"onClick={this.onClickShowPasswordIcon}>
                            <AiOutlineEye/>
                        </button>
                        </div> )}
                        
                        <p className="error-msg">{errorMsgPassword}</p>
            <button type="submit" className="login-button">Login</button>
            {isShowErrorMsg && <p className="error-message">{errorMessage}</p>}
        </form>
        </div>
            </div>
        </div>
        )
    }
}

export default LoginForm