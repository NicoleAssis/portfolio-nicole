import React from "react";

function CopyField({ label, value }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    alert(`${label} copiado: ${value}`);
  };

  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="text-gray-300">{label}: {value}</span>
      <button
        onClick={handleCopy}
        className="px-3 py-1 text-sm rounded-md bg-pink-500 text-white hover:bg-pink-600 transition"
      >
        Copiar
      </button>
    </div>
  );
}

export default CopyField;
