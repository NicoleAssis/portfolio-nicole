import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex justify-center gap-8 mt-6 text-white text-xl">
      <FaFacebookF className="cursor-pointer hover:text-blue-400 transition" />
      <FaInstagram className="cursor-pointer hover:text-pink-400 transition" />
      <FaPinterestP className="cursor-pointer hover:text-red-400 transition" />
    </div>
  );
}

export default SocialLinks;