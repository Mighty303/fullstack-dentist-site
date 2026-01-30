'use client';
import React, { useEffect } from "react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { sendGTMEvent } from "@next/third-parties/google";
import Script from "next/script";

export const WhiteningCTA = ({ location }) => {
  const [open, setOpen] = useState(false);

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

  return (
    <Dialog modal={false} open={open}>
      <DialogTrigger asChild>
        <button
          onClick={() => {
            sendEvent("requestWhiteningAppointment")
            setOpen(true);
          }}
          className="bg-[#0184C9] text-white px-4 py-4 rounded-lg hover:bg-[#1B9EE3] hover:duration-500 mr-auto uppercase"
        >
          Get Teeth Whitening Now!
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] rounded-2xl p-14" handleClose={handleClose}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/hyz5tU4eGfaBE00Eou4e"
            style={{width:"100%",height:"100%",border:"none",borderRadius:"15px"}}
            id="inline-hyz5tU4eGfaBE00Eou4e" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="BWS Zoom Whitening Form"
            data-height="438"
            data-layout-iframe-id="inline-hyz5tU4eGfaBE00Eou4e"
            data-form-id="hyz5tU4eGfaBE00Eou4e"
            title="BWS Zoom Whitening Form"
                >
          </iframe>
        <Script src="https://link.msgsndr.com/js/form_embed.js"></Script>
        </DialogContent>
    </Dialog>
  );
};

export default WhiteningCTA;
