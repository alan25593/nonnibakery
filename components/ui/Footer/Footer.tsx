"use client";

import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaPhone,
  FaCcVisa,
  FaCcMastercard,
  FaRegMoneyBillAlt,
  FaRedhat,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-8 px-6 font-lato border-t border-gray-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center pb-6 space-y-4 md:space-y-0">
          <div className="flex space-x-6 items-center justify-center md:justify-start">
            <a
              href="mailto:nonnibakery.orders@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple"
            >
              <MdEmail className="h-6 w-6 text-purple" />
            </a>
            <a
              href="https://wa.me/15043905033"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple"
            >
              <FaPhone className="h-6 w-6 text-purple rotate-90" />
            </a>
            <a
              href="https://www.instagram.com/nonnibakery"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple"
            >
              <FaInstagram className="h-6 w-6 text-purple" />
            </a>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-purple">Nonni Bakery</h1>
            <p className="text-center md:text-left">
              &ldquo;Garantizamos un servicio de excelencia con productos originales&rdquo;
            </p>
          </div>

          {/* Métodos de Pago */}
          <div className="flex space-x-4 items-center justify-center md:justify-end">
            <FaCcVisa className="h-6 w-6" />
            <FaCcMastercard className="h-6 w-6" />
            <FaRegMoneyBillAlt className="h-6 w-6" />
            <Link href="/login">
              <FaRedhat className="h-6 w-6 cursor-pointer" />
            </Link>
          </div>
        </div>

        <hr className="border-gray-300 mb-6" />

        <div className="flex flex-col md:flex-row relative justify-between items-center w-full text-center md:text-left space-y-4 md:space-y-0">
          <div className="mb-4 md:mb-0">
            <h2 className="font-semibold text-lg text-purple">Ubicación</h2>
            <a
              href="https://maps.app.goo.gl/PetDZ1tuyQq42h7z6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline block"
            >
              New Orleans - Metairie
            </a>
          </div>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <img className="h-20" src="/assets/img/logos/negro.webp" />
          </div>

          <div className="mb-4 md:mb-0">
            <h2 className="font-semibold text-lg text-purple">Contacto</h2>
            <div className="flex flex-col items-center md:items-start space-y-2 mt-2">
              <div className="flex items-center space-x-2">
                <MdEmail className="h-5 w-5 text-purple" />
                <a
                  href="mailto:nonnibakery.orders@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  nonnibakery.orders@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="h-5 w-5 text-purple rotate-90" />
                <a
                  href="https://wa.me/15043905033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  15043905033
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaInstagram className="h-5 w-5 text-purple" />
                <a
                  href="https://www.instagram.com/nonnibakery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @nonnibakery
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 mt-4" />
        <div className="text-center mt-4">
          <h5>
            © All rights reserved by
            <a
              href="https://www.nehros.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hover:underline text-purple font-medium"
            >
              Nehros
            </a>
          </h5>
        </div>
      </div>
    </footer>
  );
};
