import React, { Component } from "react";

import CustomButton from "../../../components/custom-button/CustomButton";
import { CustomInput } from "../../../components/custom-input/CustomInput";

import "./SignUpPage.style.scss";

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <form className="sign-up-container">
        <CustomInput
          inputType="text"
          inputPlaceholder="Adınız"
          inputIcon="account"
        />
        <CustomInput
          inputType="email"
          inputPlaceholder="E-posta adresiniz."
          inputIcon="account"
        />
        <CustomInput
          inputType="password"
          inputPlaceholder="Şifreniz"
          inputIcon="password"
        />
        <CustomInput
          inputType="password"
          inputPlaceholder="Şifrenizi onaylayın"
          inputIcon="password"
        />
        <CustomButton
          buttonText="Kayıt Ol"
          buttonColor="#FBB224"
          textColor="#4F5485"
        />
      </form>
    );
  }
}
