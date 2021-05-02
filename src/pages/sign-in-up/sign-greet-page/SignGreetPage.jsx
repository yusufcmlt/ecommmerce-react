import React from "react";
import { signInWithGoogle } from "../../../firebase/firebase";

import CustomButton from "../../../components/buttons/custom-button/CustomButton";

import "./SignGreetPage.style.scss";

const SignGreetPage = ({ signIn, signUp }) => {
  return (
    <div className="greet-container">
      <div className="sign-page-buttons-container">
        <CustomButton
          buttonText="Bir Hesap Oluşturun"
          funcOnPress={signUp}
          buttonSize="signup"
        />
        <CustomButton
          buttonText="Giriş Yapın"
          funcOnPress={signIn}
          buttonSize="signin"
        />
        <p style={{ color: "#FBB224", fontWeight: "500" }}>veya</p>
        <CustomButton
          className="google-hesap-secenek"
          buttonText="hesabınızla bağlanın"
          funcOnPress={signInWithGoogle}
          buttonIcon="google"
          buttonSize="google"
        ></CustomButton>
      </div>
    </div>
  );
};

export default SignGreetPage;
