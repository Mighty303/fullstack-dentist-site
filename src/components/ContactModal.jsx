import React, { useEffect } from "react";
import { useState } from "react";
import ContactFormSmall from "@/components/Contact/ContactFormSmall";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { sendGTMEvent } from "@next/third-parties/google";

export const ContactModal = ({ location }) => {
  const [newPatients, setNewPatients] = useState(false);
  const [open, setOpen] = useState(false);

  // if location is Hero, open the modal and new_appointment url param is true, open the modal
  useEffect(() => {
    if (location === "Hero" && new URLSearchParams(window.location.search).get("new_appointment") === "true") {
      setOpen(true);
      sendEvent("requestAppointment");
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const sendEvent = (action) => {
    const payload = {
      event: "buttonClicked",
      action: action,
      location,
    };

    // console.log(payload);
    sendGTMEvent(payload);
  };

  const handleNewPatients = () => {
    setNewPatients(!newPatients);

    sendEvent("newPatient");
  };

  return (
    <Dialog modal={false} open={open}>
      <DialogTrigger asChild>
        <button
          onClick={() => {
            setOpen(true);
            sendEvent("requestAppointment")
          }}
          className="bg-[#0184C9] text-white px-4 py-4 rounded-lg hover:bg-[#1B9EE3] hover:duration-500 mr-auto uppercase"
        >
          Request Appointment
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] rounded-2xl p-14" handleClose={handleClose}>
        <div className="flex flex-col items-center gap-4 z-[1000]">
          <h3 className="font-bold text-3xl text-center">
            Select an option to continue
          </h3>
          <div className="flex justify-center items-center h-[10rem]">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  onClick={handleNewPatients}
                  className="hover:opacity-80"
                >
                  <img src="/assets/images/new-p.png" alt="new patients" />
                </button>
              </DialogTrigger>
              <DialogContent
                className="p-8 flex-col justify-center items-center gap-8"
                onOpenAutoFocus={(e) => e.preventDefault()}
              >
                <h3 className="font-bold text-center text-xl">New Patients</h3>
                <a
                  href="https://drtejani.myformsathome.com/TrackerCloud/Form/NPE-Booking/?Booking=1&naD=75&naLP=3&naR=14019327&naSC=14&naRN=New%20Patient&naPN=Dr%2E%20Dhia%20Mahmud%20&naRcN=Dr%2E%20Dhia%20Mahmud"
                  className="btn bg-[#0184C9] hover:bg-[#1B9EE3] text-white"
                  rel="noreferrer noopener"
                  target="_blank"
                  onClick={() => sendEvent("newPatientDhia")}
                >
                  New Patient exam with Dr. Dhia (Mon, Tue, Wed)
                </a>
                <a
                  href="https://drtejani.myformsathome.com/TrackerCloud/Form/NPE-Booking/?Booking=1&naD=75&naLP=3&naR=14019327&naSC=1&naRN=New%20Patient&naPN=Dr%2EAsif%20Tejani&naRcN=Dr%2E%20Asif%20Tejani"
                  className="btn bg-[#0184C9] hover:bg-[#1B9EE3] text-white"
                  rel="noreferrer noopener"
                  target="_blank"
                  onClick={() => sendEvent("newPatientTejani")}
                >
                  New Patient exam with Dr. Tejani (Thu, Fri)
                </a>
              </DialogContent>
            </Dialog>
            <div className="flex flex-col items-center mx-4 gap-6">
              <span className="rotate-90 block w-8 border-t border-gray-300"></span>
              <span>OR</span>
              <span className="rotate-90 block w-8 border-t border-gray-300"></span>
            </div>
            <Dialog modal={false}>
              <DialogTrigger asChild>
                <button
                  className="hover:opacity-80"
                  onClick={() => sendEvent("existingPatient")}
                >
                  <img
                    src="/assets/images/existing-p.png"
                    alt="existing patients"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="border-4 border-[#25B4F8] rounded-lg shadow-lg">
                <ContactFormSmall location={location} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
