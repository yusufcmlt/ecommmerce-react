import React, { Component } from "react";
import CustomButton from "../../../components/custom-button/CustomButton";
import { CustomInput } from "../../../components/custom-input/CustomInput";

import "./SignInPage.style.scss";

export default class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <form className="sign-in-container">
        <CustomInput
          inputType="email"
          inputPlaceholder="E-posta adresiniz."
          inputIcon="email"
        />
        <CustomInput
          inputType="password"
          inputPlaceholder="Şifreniz"
          inputIcon="password"
        />
        <CustomButton
          buttonText="Giriş Yap"
          buttonColor="#4F5485"
          textColor="#FBB224"
        />
      </form>
    );
  }
}
