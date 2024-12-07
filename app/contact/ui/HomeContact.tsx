import { Breadcrumb } from "@/components/ui/Breadcrum/Breadcrumb";
import React from "react";
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const HomeContact = () => {
  return (
    <div>
      <Breadcrumb page="Contacto" />
      <div className="container mx-auto py-12 px-6 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
            <FaMapMarkerAlt className="h-8 w-8 text-coffee mr-4" />
            <div className="text-black">
              <h3 className="text-lg font-semibold">
                <a
                  href="https://maps.app.goo.gl/PetDZ1tuyQq42h7z6"
                  target="_blank"
                >
                  New Orleans - Metairie
                </a>
              </h3>
            </div>
          </div>

          <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
            <div className="mr-4">
              <MdEmail className="h-8 w-8 text-coffee" />
            </div>
            <div className="text-black">
              <h3 className="text-lg font-semibold">+1 (504) 390-5033</h3>
              <p className="text-gray-400">nonnibakery.orders@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
            <FaRegClock className="h-8 w-8 text-coffee mr-4" />
            <div className="text-black">
              <h3 className="text-lg font-semibold">Lunes - Viernes: 9 ~ 18</h3>
              <p className="text-gray-500"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
