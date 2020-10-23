import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth,createUserProfileDocument} from '../../Firebase/firebase.utils';
import './sign-up.styles.scss';
import { Component } from 'react';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            displayName:'',
            email:'',
            password:'',
            confrimPassword:'',
        }
    }
    handleSubmit=async event=>{
        event.preventDefault();
        if(this.state.password !== this.state.confrimPassword){
            alert("Passwords dont match");
            return;

        }
        try{
            const {user}=await auth.createUserWithEmailAndPassword(this.state.email,this.state.password);
           await  createUserProfileDocument(user,{displayName:this.state.displayName});
           this.setState({
            displayName:'',
            email:'',
            password:'',
            confrimPassword:'',
           })
        }
        catch(error){
            console.error(error);
        }
    }
    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className='sign-up'>
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type='text' required label='Display Name' name='displayName' value={this.state.displayName}/>
                    <FormInput type='email' required label='Email' name='email' value={this.state.email}/>
                    <FormInput type='password' required label='Password' name='password' value={this.state.password}/>
                    <FormInput type='password' required label='Confirm Password' name='confirmPassword' value={this.state.confrimPassword}/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;