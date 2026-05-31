import React from "react";

function SubmitButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-orange-400 to-pink-500 py-3 rounded-md font-semibold hover:opacity-90 transition"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
