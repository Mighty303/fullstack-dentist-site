import React from "react";
import Faq from "@/components/Faq";
import { wisdomTeeth } from "@/data/generalDentistry";
import FaqContainerBlue from "../FaqContainerBlue";

export const Extraction = () => {
  return (
    <article className="flex flex-col items-center w-full mx-8 animate-fade-down animate-once animate-duration-1000 animate-normal animate-fill-forwards">
      <div className="w-full flex justify-center">
        <div className="max-w-screen-xl p-0 md:p-9">
          <section className="flex flex-col gap-2" id="extraction">
            <h2 className="text-2xl md:text-4xl text-black font-bold">
              What to Expect from an Extraction Procedure
            </h2>
            <p className="text-md md:text-xl text-gray-700 text-start font-thin">
              We understand that dental extractions can bring a mix of emotions,
              and we want to ensure your experience is as comfortable and
              stress-free as possible. Here's what you can expect and how to
              prepare:
            </p>
            <h3 className="text-md md:text-xl font-bold">
              Before the Procedure:
            </h3>

            <ul className="text-md md:text-xl text-black text-start list-disc list-outside pl-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="text-[#0184C9] mx-4">
                <b>Sedation:</b>
                <p className="text-gray-700 font-thin text-base">
                  Expect a significant amount of time for the first visit, where
                  we prepare the tooth for the crown or bridge. Feel free to
                  inquire with our receptionist ahead of time about the
                  approximate duration of your appointment.
                </p>
              </li>
            </ul>

            <h3 className="text-md md:text-xl font-bold">
              During the Procedure:
            </h3>
            <ul className="text-md md:text-xl text-black text-start list-disc list-outside pl-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="text-[#0184C9] mx-4">
                <b>Numbing:</b>
                <p className="text-gray-700 font-thin text-base">
                  We will thoroughly numb the area to ensure a smooth and
                  painless extraction procedure.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Drilling:</b>
                <p className="text-gray-700 font-thin text-base">
                  During a surgical extraction, it is common to drill bone in
                  order to facilitate the removal of the tooth. Drilling will
                  always be done under local anesthesia but expect noise and
                  vibration from the drill.
                </p>
              </li>
            </ul>

            <h3 className="text-md md:text-xl font-bold">
              After the Procedure:
            </h3>
            <ul className="text-md md:text-xl text-black text-start list-disc list-outside pl-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="text-[#0184C9] mx-4">
                <b>Healing Period:</b>
                <p className="text-gray-700 font-thin text-base">
                  The healing process begins immediately after the extraction.
                  It's crucial to prepare for a restful recovery period.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>For the first 24 hours:</b>
                <p className="text-gray-700 font-thin text-base">
                  please do not rinse your mouth, do not spit, do not drink
                  using a straw, avoid smoking cigarettes or cannabis and avoid
                  consuming alcohol
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Arranging Transportation:</b>
                <p className="text-gray-700 font-thin text-base">
                  We recommend arranging for a ride home after the procedure.
                  Having someone to assist you with picking up any prescribed
                  medications from the pharmacy is also a thoughtful
                  preparation.
                </p>
              </li>
            </ul>
            <h3 className="text-md md:text-xl font-bold">Home Care:</h3>
            <ul className="text-md md:text-xl text-black text-start list-disc list-outside pl-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="text-[#0184C9] mx-4">
                <b>Soft Meal:</b>
                <p className="text-gray-700 font-thin text-base">
                  Prepare a soft and nutritious meal ahead of time. It's a
                  comforting and easy option for your post-extraction diet.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Hydration:</b>
                <p className="text-gray-700 font-thin text-base">
                  Drinking water and consuming a nutritious meal after the
                  extraction can aid in the healing process.
                </p>
              </li>
            </ul>
            <p className="text-md md:text-xl text-gray-700 text-start font-thin text-base">
              If you have any questions or concerns about your extraction, our
              team is here to provide guidance and support.
            </p>
          </section>
        </div>
      </div>
      <FaqContainerBlue arr={wisdomTeeth} location={"Extractions FAQ"} />
    </article>
  );
};

export default Extraction;
