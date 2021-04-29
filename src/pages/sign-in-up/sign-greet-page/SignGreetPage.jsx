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
          buttonColor="#FBB224"
          textColor="#4F5485"
          funcOnPress={signUp}
        />
        <CustomButton
          buttonText="Giriş Yapın"
          buttonColor="#4F5485"
          textColor="#FBB224"
          funcOnPress={signIn}
        />
        <p style={{ color: "#FBB224" }}>veya</p>
        <CustomButton
          className="google-hesap-secenek"
          buttonText="hesabınızla bağlanın"
          funcOnPress={signInWithGoogle}
          textColor="#4F5495"
          buttonIcon="google"
        ></CustomButton>
      </div>
    </div>
  );
};

export default SignGreetPage;
