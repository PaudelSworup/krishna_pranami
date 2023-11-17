import React from "react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        background: "url('https://shorturl.at/fqxJW')",
        backgroundSize: "cover",
        filter: "grayscale(100%)",
      }}
      className="flex px-10 text-white tracking-widest font-serif h-28  justify-between items-center"
    >
      <div className="flex">
        <FaCopyright className="text-2xl mt-1" />
        <h2 className="text-xl text-white">
          Shree Krishna Pranami Sampradaya.All right reserved
        </h2>
      </div>

      <h2 className="text-2xl">Designed and Developed by:Sworup kc</h2>
    </div>
  );
};

export default Footer;
