import React from "react";
import Header from "../components/UI/Header";
import LoginForm from "../components/Form/LoginForm";
import SocialLinks from "../components/UI/SocialLinks";
import background from "../assets/background.jpg";

function LoginPage() {
  return (
    <div
      className="min-h-[100vh] flex flex-col md:flex-row justify-center items-center bg-cover bg-center relative px-[6rem] py-[4rem]"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* camada escura */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* conteúdo */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-[5rem] w-full max-w-[1200px] bg-black/70 rounded-2xl p-12 shadow-2xl">
        <Header />
        <div className="flex flex-col items-center">
          <LoginForm />
          <SocialLinks />
        </div>
      </div>

    </div>
  );
}

export default LoginPage;
