import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "url('https://shorturl.at/fqxJW')",
        backgroundSize: "cover",
        filter: "grayscale(100%)",
      }}
      className="bg-white rounded-lg shadow h-36 mt-6 dark:bg-gray-800"
    >
      <div className="w-full mx-auto  p-4 md:flex md:items-center md:justify-between">
        <span className="text-lg text-white sm:text-center dark:text-gray-400">
          © 2023
          <Link href="/" className="hover:underline"></Link>.Shree Krishna
          Pranami Sampradaya.All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-lg font-medium text-white sm:mt-0">
          <li>
            <Link href="/" className="hover:underline me-4 md:me-6">
              Home
            </Link>
          </li>
          <li>
            <Link href="/articles" className="hover:underline me-4 md:me-6">
              Articles
            </Link>
          </li>
          <li>
            <Link href="/videos" className="hover:underline me-4 md:me-6">
              Video
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
