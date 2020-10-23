import React from 'react';
import './signin.component.scss';
import SignIn from '../../components/signin/signin';
import SignUp from '../../components/signup/signup.component';
const Signin=()=>(
    <div className="sign-in-and-sign-up">
        
        <SignIn/>
    <SignUp/>
    </div>
)
export default Signin;