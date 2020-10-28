import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButtom from "../custom-button/custom-button.component";
import "./sign.styles.scss";
import { signInWithGoogle, auth } from "../../Firebase/firebase.utils";
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="Email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            handleChange={this.handleChange}
            type="password"
            label="Password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButtom type="submit">SIGN IN</CustomButtom>
            <CustomButtom onClick={signInWithGoogle} isGoogleSign>
              SIGN IN WITH GOOGLE
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}
