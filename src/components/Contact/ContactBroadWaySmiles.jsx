import React from "react";

const ContactBroadWaySmiles = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 mx-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold text-start">
        Contact <span className="text-[#0184C9]">Broadway Smiles</span>
      </h2>
      <p className="text-gray-700 mt-8 text-lg">
        Reach Out for Appointments, Inquiries, or Dental Emergencies - We're
        Here to Help!
      </p>
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full mt-8 mb-16">
        <div className="flex flex-col items-center justify-center">
          <img
            src="assets/images/icons/contactphone.svg"
            className="w-[64px] h-[64px]"
            alt="phone"
          />
          <p>PHONE</p>
          <p className="font-bold">604-736-7377</p>
        </div>
        <div className="hidden md:block border-l h-36 mx-8 border-gray-300"></div>
        <div className="visible md:hidden border-b h-2 w-full my-6 border-gray-300"></div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="assets/images/icons/contactlocation.svg"
            className="w-[64px] h-[64px]"
            alt="location"
          />
          <p>LOCATION</p>
          <p className="font-bold">2732 W Broadway, Suite 202,</p>
          <p className="font-bold">Vancouver, BC, Canada, V6k 2G4</p>
        </div>
        <div className="hidden md:block border-l h-36 mx-8 border-gray-300"></div>
        <div className="visible md:hidden border-b h-2 w-full my-6 border-gray-300"></div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="assets/images/icons/contacttime.svg"
            className="w-[64px] h-[64px]"
            alt="time"
          />
          <p>TIME</p>
          <p className="font-bold">Mon/Tue : 8:00 - 4:00</p>
          <p className="font-bold">Wed : 11:00 - 7:00</p>
          <p className="font-bold">Thu/Fri : 7:30 - 3:30</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBroadWaySmiles;
