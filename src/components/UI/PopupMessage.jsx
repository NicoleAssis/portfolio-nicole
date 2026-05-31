import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function PopupMessage({ message, type }) {
  const bgColor =
    type === "error" ? "bg-red-500/90" : "bg-green-500/90";

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: type === "error" ? 10 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: type === "error" ? 10 : -10 }}
          className={`${bgColor} text-white text-sm font-medium px-4 py-2 rounded-md shadow-md text-center mt-4`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PopupMessage;
