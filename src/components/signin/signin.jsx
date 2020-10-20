import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/custom-button.component';
import './sign.styles.scss';
export default class SignIn extends Component{
constructor(props){
    super(props);
    this.state={
        email:"",
        password:""
    }
}
handleChange=(e)=>{
    const {value,name}=e.target;
    this.setState({[name]:value})
}
handleSubmit=(event)=>{
    event.preventDefault();
    this.setState({email:"",password:""})
}
render(){
    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" label="Email" type="email" handleChange={this.handleChange} value={this.state.email} required/>
               
                <FormInput name="password" 
                handleChange={this.handleChange}
                type="password" label="Password" value={this.state.password} required/>
                <CustomButtom type='submit' value='Submit Form'>
                    SIGN IN
                </CustomButtom>
            </form>
        </div>
    );
}
}