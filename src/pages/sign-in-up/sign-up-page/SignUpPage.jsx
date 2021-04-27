import React, { useState } from "react";
//import { useAuth } from "../../../contexts/auth-context/AuthContext";
import CustomButton from "../../../components/custom-button/CustomButton";
import { CustomInput } from "../../../components/custom-input/CustomInput";

import "./SignUpPage.style.scss";
import { auth, createUserProfileDocument } from "../../../firebase/firebase";
import { Redirect } from "react-router";
import { useAuth } from "../../../contexts/auth-context/AuthContext";
//import { createUserProfileDocument } from "../../../firebase/firebase";

export default function SignUpPage({ redirectFunc }) {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signError, setError] = useState("");
  const [signLoading, setSignLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (userCredentials.password !== userCredentials.confirmPassword) {
      return setError("Şifreler Eşleşmiyor.");
    }
    if (userCredentials.password.length < 6) {
      return setError("Şifre uzunluğu 6 karakterden az olamaz");
    }
    try {
      setError("");
      setSignLoading(true);
      const { user } = await auth.createUserWithEmailAndPassword(
        userCredentials.email,
        userCredentials.password
      );
      await createUserProfileDocument(
        userCredentials.displayName,
        userCredentials.email,
        user.uid
      );
    } catch (error) {
      console.log(error);
      setError("Kayıt durumuyla ilgili bir sorun var.");
    }
    setSignLoading(false);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  }

  return (
    <form className="sign-up-container" onSubmit={handleSubmit}>
      {signError}
      <CustomInput
        inputType="text"
        inputPlaceholder="Adınız"
        inputIcon="account"
        inputName="displayName"
        inputValue={userCredentials.displayName}
        inputChange={handleChange}
      />
      <CustomInput
        inputType="email"
        inputPlaceholder="E-posta adresiniz."
        inputIcon="email"
        inputName="email"
        inputValue={userCredentials.email}
        inputChange={handleChange}
      />
      <CustomInput
        inputType="password"
        inputPlaceholder="Şifreniz"
        inputIcon="password"
        inputName="password"
        inputValue={userCredentials.password}
        inputChange={handleChange}
      />
      <CustomInput
        inputType="password"
        inputPlaceholder="Şifrenizi onaylayın"
        inputIcon="password"
        inputName="confirmPassword"
        inputValue={userCredentials.confirmPassword}
        inputChange={handleChange}
      />
      <CustomButton
        buttonText="Kayıt Ol"
        buttonColor="#FBB224"
        buttonType="submit"
        textColor="#4F5485"
        buttonState={signLoading}
      />
    </form>
  );
}
