import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../../firebase/firebase";

//Components
import CustomButton from "../../../components/buttons/custom-button/CustomButton";
import CustomInput from "../../../components/custom-input/CustomInput";

//Style
import "./SignUpPage.style.scss";

export default function SignUpPage({
  handleError,
  signLoading,
  handleSignLoading,
}) {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleRegisterSubmit(event) {
    event.preventDefault();
    credentialsCheck();
    handleError("");
    handleSignLoading(true);
    auth
      .createUserWithEmailAndPassword(
        userCredentials.email,
        userCredentials.password
      )
      .then(({ user }) => {
        user
          .updateProfile({ displayName: userCredentials.displayName })
          .then(() => {
            auth.currentUser.reload();
          });
      })
      .catch((error) => {
        handleError(
          "Kayıt durumuyla ilgili bir sorun var. Bu email kullanılıyor olabilir."
        );
      })
      .finally(() => {
        handleSignLoading(false);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  }

  function credentialsCheck() {
    if (userCredentials.password !== userCredentials.confirmPassword) {
      return handleError("Şifreler Eşleşmiyor.");
    } else if (userCredentials.password.length < 6) {
      return handleError("Şifre uzunluğu 6 karakterden az olamaz");
    }
  }

  return (
    <form className="sign-up-container" onSubmit={handleRegisterSubmit}>
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
        buttonSize="login"
      />
    </form>
  );
}
