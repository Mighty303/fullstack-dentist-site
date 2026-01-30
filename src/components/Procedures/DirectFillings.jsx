import React from "react";
import { dentalProcedures } from "@/data/generalDentistry";
import Faq from "@/components/Faq";
import FaqContainerBlue from "../FaqContainerBlue";

const DirectFillings = () => {
  return (
    <article
      className="flex flex-col items-center w-full animate-fade-down animate-once animate-duration-1000 animate-normal animate-fill-forwards p-0"
      id="directFillings"
    >
      <div className="w-full flex justify-center ">
        <div className="max-w-screen-xl p-0 md:p-9">
          <section className="flex flex-col gap-2 mx-8">
            <h2 className="text-2xl md:text-4xl text-black font-bold">
              What to Expect from a Direct Filling Procedure
            </h2>
            <p className="text-md md:text-xl text-gray-700 text-start font-thin">
              We understand that dental procedures can be unfamiliar territory,
              and we want you to feel at ease every step of the way. Here&#39;s
              what you can expect during and after your filling appointment:
            </p>
            <h3 className="text-md md:text-xl font-bold">
              During the Procedure:
            </h3>
            <ul className="text-md md:text-xl text-black text-start list-disc list-outside pl-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="text-[#0184C9] mx-4">
                <b>Time Commitment:</b>
                <p className="text-gray-700 font-thin text-base">
                  Be prepared for the length of your appointment, be prepared
                  that some procedures may take longer so try to not plan
                  another commitment straight after the appointment.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Numbing:</b>
                <p className="text-gray-700 font-thin text-base">
                  To ensure a painless experience, numbing the tooth is common.
                  Our skilled staff will make every effort to keep you
                  comfortable throughout the freezing part of the procedure.
                </p>
              </li>
            </ul>

            <h3 className="text-md md:text-xl font-bold">
              After the Appointment:
            </h3>
            <ul className="text-md md:text-xl text-black max-w-6xl text-start list-disc list-outside pl-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="text-[#0184C9] mx-4">
                <b>Sensitivity:</b>
                <p className="text-gray-700 font-thin text-base">
                  {" "}
                  It's normal to experience sensitivity that may start after the
                  procedure. This sensitivity typically goes away after 4 weeks.
                  The sensitivity may last up to 90 days. This may result from
                  drilling, the materials used, heat from the light, or
                  interactions with gum and other tissues. Rest assured, our
                  team at Broadway Smiles is dedicated to making your experience
                  as comfortable as possible. Feel free to discuss any concerns
                  with us, and ask us for things that may make you feel more
                  comfortable, like a blanket, hair tie, ear plugs or
                  headphones.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Potential for Filling Adjustment:</b>
                <p className="text-gray-700 font-thin text-base">
                  There is a chance the filling may feel high initially. If so,
                  we will coordinate an adjustment appointment to ensure a
                  perfect fit and your comfort.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Duration of Freezing:</b>
                <p className="text-gray-700 font-thin text-base">
                  The numbing effect may last up to two hours, varying from
                  person to person.
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <FaqContainerBlue
        arr={dentalProcedures}
        location={"Direct Fillings FAQ"}
      />
    </article>
  );
};

export default DirectFillings;
