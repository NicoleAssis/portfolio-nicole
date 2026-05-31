import React from "react";
import { useNavigate } from "react-router-dom";


function DarkButton({ text, onClick, redirectTo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick(); // executa logout ou outra ação
    if (redirectTo) navigate(redirectTo); // redireciona para rota desejada
  };

  return (
    <button
      onClick={handleClick}
      className="bg-black/40 px-6 py-3 rounded-md hover:bg-black/60 transition"
    >
      {text}
    </button>
  );
}

export default DarkButton;
