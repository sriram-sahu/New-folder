import {Component} from "react"

import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"

import "./index.css"

class LoginForm extends Component{
    state = {
        emailInput: '',
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
        const userDetails = {emailInput: "ratnapriyachamala18@gmail.com", password: "priya@2001"}
        const {emailInput,password} = this.state 
        if (emailInput === userDetails.emailInput && password === userDetails.password){
            history.replace("/selling-product")
        }else{
            this.setState({
                isShowErrorMsg: true,
                errorMessage: "*Please enter Valid Email and Password"
            })
        }
    }

    onChangeUsername = event => {
        this.setState({
            emailInput: event.target.value 
        })
    }

    onChangePassword = event => {
        this.setState({
            password: event.target.value 
        })
    }

    onBlurHandlingUsername = () => {
        const {emailInput} = this.state 
        if (emailInput === ''){
            this.setState({
                emailInput: '',
                errorMsgUsername: "*Email Required "
            })
        }else{
            this.setState({
                emailInput: emailInput,
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
            emailInput,password,errorMsgPassword,errorMsgUsername,isShowPassword,isShowErrorMsg,errorMessage
        } = this.state
        
        return(
            <div className="login-form-main-bg-container1">
                <p className="signin-text">Signin to Become a Seller</p>
                <div className="login-form-right-container1">
                    <div>
                        <form className="login-form-container1" onSubmit={this.onSubmitForm}>
                            <div className="logo-container1">
                                <img src="https://www.seekpng.com/png/full/428-4289671_logo-e-commerce-good-e-commerce-logo.png" alt="website logo" className="logo-image-in-form1"/>
                    </div>
                        <label htmlFor="username" className="label-element1">EMAIL</label>
                        <input 
                        type="email" 
                        id="username" 
                        className="input-element12" 
                        
                        value={emailInput}
                        onChange={this.onChangeUsername}  
                        onBlur={this.onBlurHandlingUsername}/>
                        
                        <p className="error-msg">{errorMsgUsername}</p>
                        <label htmlFor="password" className="label-element1">PASSWORD</label>
                        {!isShowPassword ? (<div className="password-container1">
                        <input 
                        type="password" 
                        id="password" 
                        className="input-element12" 
                        
                        value={password}
                        onChange={this.onChangePassword}  
                        onBlur={this.onBlurHandlingPassword}/>
                        <button type="button" className="eye-icon1"onClick={this.onClickShowPasswordIcon}>
                            <AiOutlineEyeInvisible/>
                        </button>
                        </div> ):(<div className="password-container1">
                        <input 
                        type="text" 
                        id="password" 
                        className="input-element12" 
                        
                        value={password}
                        onChange={this.onChangePassword}  
                        onBlur={this.onBlurHandlingPassword}/>
                        <button type="button" className="eye-icon1"onClick={this.onClickShowPasswordIcon}>
                            <AiOutlineEye/>
                        </button>
                        </div> )}
                        
                        <p className="error-msg1">{errorMsgPassword}</p>
            <button type="submit" className="login-button1">Login</button>
            {isShowErrorMsg && <p className="error-message1">{errorMessage}</p>}
        </form>
        </div>
            </div>
        </div>
        )
    }
}

export default LoginForm