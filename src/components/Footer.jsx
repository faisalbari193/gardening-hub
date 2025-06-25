import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-white py-10 px-6 rounded">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h2 className="text-xl  font-bold mb-3">Contact</h2>
          <p>Email: support@grdncomp.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 ACME Street, Dhaka</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">Company</h2>
          <nav className="flex flex-col gap-2">
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Jobs</a>
          </nav>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-4">
            <FaFacebook        size={24}/>
            <FaSquareXTwitter  size={24}/>
            <FaInstagram       size={24}/>
            <IoLogoYoutube     size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
