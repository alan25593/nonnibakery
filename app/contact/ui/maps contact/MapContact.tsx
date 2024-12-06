"use client";

import React from "react";

export const MapEmbed = () => {
  return (
    <div className="w-full pt-3 pb-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d110549.60523287991!2d-90.1852602!3d30.0174824!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620b042adb34dc7%3A0xc2d71e7374f33ad1!2sMetairie%2C%20Luisiana%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1733490483394!5m2!1ses!2sar"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
