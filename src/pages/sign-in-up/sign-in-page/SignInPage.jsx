import React from "react";

import { useState } from "react/cjs/react.development";
import { auth } from "../../../firebase/firebase";

import CustomButton from "../../../components/buttons/custom-button/CustomButton";
import CustomInput from "../../../components/custom-input/CustomInput";

import "./SignInPage.style.scss";

export default function SignInPage({
  handleError,
  handleSignLoading,
  signLoading,
}) {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  function handleLoginSubmit(event) {
    handleSignLoading(true);
    event.preventDefault();
    handleError("");
    auth
      .signInWithEmailAndPassword(
        loginCredentials.email,
        loginCredentials.password
      )
      .catch((error) => {
        console.log(error);
        handleError(
          "Giriş bilgilerinde bir hata var. Lütfen doğru girdiğinden emin ol. "
        );
      })
      .finally(() => {
        handleSignLoading(false);
      });
  }
  function handleChange(event) {
    const { value, name } = event.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  }

  return (
    <form className="sign-in-container" onSubmit={handleLoginSubmit}>
      <CustomInput
        inputType="email"
        inputPlaceholder="E-posta adresiniz."
        inputIcon="email"
        inputName="email"
        inputValue={loginCredentials.email}
        inputChange={handleChange}
      />
      <CustomInput
        inputType="password"
        inputPlaceholder="Şifreniz"
        inputIcon="password"
        inputName="password"
        inputValue={loginCredentials.password}
        inputChange={handleChange}
      />
      <CustomButton
        buttonText="Giriş Yap"
        buttonColor="#4F5485"
        textColor="#FBB224"
        buttonType="submit"
        buttonState={signLoading}
      />
    </form>
  );
}
