"use client";
import React from "react";
const GoogleMaps = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.665370957613!2d-123.16968922351215!3d49.263788171389926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d66c9e6cd3%3A0xb50d91ec8b615dbc!2sBroadway%20Smiles!5e0!3m2!1sen!2sca!4v1702326721912!5m2!1sen!2sca"
      width="600"
      height="450"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full rounded-2xl"
    ></iframe>
  );
};

export default GoogleMaps;
