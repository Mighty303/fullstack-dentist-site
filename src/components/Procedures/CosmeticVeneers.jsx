import React from "react";
import Faq from "@/components/Faq";
import { Veneers } from "@/data/generalDentistry";
import FaqContainerBlue from "../FaqContainerBlue";

const CosmeticVeneers = () => {
  return (
    <article className="flex flex-col items-center w-full gap-8 animate-fade-down animate-once animate-duration-1000 animate-normal animate-fill-forwards">
      <div className="w-full flex justify-center">
        <div className="max-w-screen-xl p-0 md:p-9 space-y-8">
          <section className="flex flex-col gap-4 px-9" id="veneerCrownBridge">
            <h2 className="text-2xl md:text-4xl text-black font-bold">
              Cosmetic Veneers
            </h2>
            <p className="text-md md:text-xl text-gray-700 text-start font-thin">
              A cosmetic veneer is a minimal invasive way to restore a tooth to
              improve aesthetics and correct various imperfections from colour,
              size, shape and alignment. Veneers are a thin shell that is fixed
              on the front surface of the tooth. This cosmetic restoration is
              created from porcelain by the laboratory to replicate a natural
              tooth shape and structure to produce a more attractive smile.
            </p>
          </section>
          <section className="flex flex-col gap-4 px-9">
            <h2 className="text-2xl md:text-4xl text-black font-bold">
              What to Expect from a Veneer Procedure
            </h2>
            <p className="text-md md:text-xl text-gray-700 text-start font-thin">
              The procedure consists of two visits:
            </p>
            <h3 className="text-md md:text-xl font-bold">
              First Visit (Preparation):
            </h3>
            <ul className="text-md md:text-xl text-black text-start list-disc list-outside pl-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="text-[#0184C9] mx-4">
                <b>Time Commitment:</b>
                <p className="text-gray-700 font-thin text-base">
                  Expect a significant amount of time for the first visit, where
                  we prepare the tooth for a veneer. Feel free to inquire with
                  our receptionist ahead of time about the approximate duration
                  of your appointment.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Numbing:</b>
                <p className="text-gray-700 font-thin text-base">
                  Numbing the tooth is likely during both visits, ensuring a
                  painless experience. Rest assured, our dedicated staff will
                  prioritize your comfort throughout the procedure.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Attire:</b>
                <p className="text-gray-700 font-thin text-base">
                  Come in comfortable clothes to make your experience as
                  relaxing as possible.
                </p>
              </li>
            </ul>
            <h3 className="text-md md:text-xl font-bold">
              In Between Appointments:
            </h3>
            <ul className="text-md md:text-xl text-black text-start list-disc list-outside pl-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="text-[#0184C9] mx-4">
                <b>Temporary Veneer:</b>
                <p className="text-gray-700 font-thin text-base">
                  A chairside temporary veneer will be placed between the two
                  appointments, maintaining functionality and aesthetics.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Temporary Cement:</b>
                <p className="text-gray-700 font-thin text-base">
                  Veneeers are glued on with a weak glue, so avoiding crunchy or
                  sticky foods is ideal. In case of the veneer comes off or
                  breaks, please call our office, if you can not reach our
                  office, you can use Poligrip denture glue if you can not come
                  in to the clinic,
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Sensitivity:</b>
                <p className="text-gray-700 font-thin text-base">
                  After the first visit, you may experience sensitivity for up
                  to 2 or 4 weeks, stemming from drilling, materials used, or
                  interactions with gum and other tissues.
                </p>
              </li>
            </ul>
            <h3 className="text-md md:text-xl font-bold">
              Second Visit (Delivery):
            </h3>
            <ul className="text-md md:text-xl text-black text-start list-disc list-outside pl-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="text-[#0184C9] mx-4">
                <b>Duration of Freezing:</b>
                <p className="text-gray-700 font-thin text-base">
                  The numbing effect may last up to two hours after the second
                  visit.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Potential for Crown Adjustment:</b>
                <p className="text-gray-700 font-thin text-base">
                  There is a chance the Veneer may feel high or may be returned
                  to the lab if the goal was not achieved. If so, we will
                  coordinate an adjustment appointment to ensure a perfect fit
                  and your comfort.
                </p>
              </li>
            </ul>
            <p className="text-md md:text-xl text-gray-700 text-start font-thin text-base">
              Rest assured, our team at Broadway Smiles is dedicated to making
              your experience as comfortable as possible. Feel free to discuss
              any concerns with us, and ask us for things that may make you feel
              more comfortable, like a blanket, hair tie, ear plugs or
              headphones.
            </p>
          </section>
        </div>
      </div>
      <FaqContainerBlue arr={Veneers} location={"Veneers FAQ"} />
    </article>
  );
};

export default CosmeticVeneers;
