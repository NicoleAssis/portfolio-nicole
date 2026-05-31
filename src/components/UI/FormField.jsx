import React from "react";
import InputField from "../UI/InputField";
import { motion } from "framer-motion";

function FormField({ label, type, placeholder, value, onChange, error }) {
  return (
    <div className="mb-4">
      <motion.div
        animate={error ? { x: [0, -8, 8, -8, 8, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        <InputField
          label={label}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={error ? "border-red-500 focus:border-red-500" : ""}
        />
      </motion.div>
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

export default FormField;
