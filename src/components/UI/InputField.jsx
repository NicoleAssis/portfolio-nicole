import React from "react";

function InputField({ label, type, placeholder, value, onChange }) {
  return (
    <div className="mb-6 w-full">
      <label className="block mb-2 text-lg text-white">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded bg-white/80 text-black focus:outline-none"
      />
    </div>
  );
}


export default InputField;
