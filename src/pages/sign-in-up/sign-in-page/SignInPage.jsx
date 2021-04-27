import React from "react";
import { Redirect } from "react-router";
import { useState } from "react/cjs/react.development";
import CustomButton from "../../../components/custom-button/CustomButton";
import { CustomInput } from "../../../components/custom-input/CustomInput";
import { useAuth } from "../../../contexts/auth-context/AuthContext";
import { auth } from "../../../firebase/firebase";

import "./SignInPage.style.scss";

export default function SignInPage({ redirectFunc }) {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const [signError, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(
        loginCredentials.email,
        loginCredentials.password
      );
    } catch (error) {
      console.log(error);
    }
  }
  function handleChange(event) {
    const { value, name } = event.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  }

  return (
    <form className="sign-in-container" onSubmit={handleSubmit}>
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
      />
    </form>
  );
}
