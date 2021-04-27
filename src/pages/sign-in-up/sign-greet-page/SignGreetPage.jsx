import React from "react";

import CustomButton from "../../../components/custom-button/CustomButton";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/google.svg";
import "./SignGreetPage.style.scss";

import { signInWithGoogle } from "../../../firebase/firebase";

export const SignGreetPage = ({ signIn, signUp }) => {
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
        <button className="google-hesap-secenek">
          <GoogleIcon
            className="google-hesap-icon"
            onClick={signInWithGoogle}
          />
          <p style={{ color: "#FBB224" }}>hesabızla giriş yapın</p>
        </button>
      </div>
    </div>
  );
};
