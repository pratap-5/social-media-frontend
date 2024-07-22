import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Footer = () => {
  const { loading, logout } = useLogout();
  return (
    <footer className=" bg-[#150619] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-section">
            <h4 className="text-xl font-bold mb-4">About Us</h4>
            <p>
              We are an online store providing the best products at the best
              prices.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p>Email: pintupratap8@gmail.com</p>
            <p>Phone: 8117882513</p>
          </div>
          <div className="footer-section">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/cart" className="hover:text-gray-400">
                  cart
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/login" className="hover:text-gray-400">
                  login
                </Link>
              </li>
              <li className="mb-2">
                <span onClick={() => logout()} className="hover:text-gray-400">
                  logout
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTwitterSquare />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
