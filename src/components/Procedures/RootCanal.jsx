import React from "react";
import Faq from "@/components/Faq";
import { RCT } from "@/data/generalDentistry";
import FaqContainerBlue from "../FaqContainerBlue";

const RootCanal = () => {
  return (
    <article className="flex flex-col items-center animate-fade-down animate-once animate-duration-1000 animate-normal animate-fill-forwards">
      <div className="w-full flex justify-center">
        <div className="max-w-screen-xl p-0 md:p-9">
          <section className="flex flex-col gap-4 px-12" id="rootCanal">
            <h2 className="text-2xl md:text-4xl text-black font-bold">
              What to Expect from a Root Canal Procedure
            </h2>
            <p className="text-md md:text-xl text-gray-700 text-start font-thin text-base">
              Sometimes cavities are very deep that enter the nerve tissue of
              the tooth. A nerve may get infected or irritated from repeated
              trauma or offences to the tooth. In order to preserve the tooth
              and remove the nerve issue, a root canal therapy is necessary
              where all the nerve contents of the tooth are removed and the
              tooth is disinfected and filled. A permanent long term restoration
              will be necessary in order to restore the integrity and structural
              strength of the tooth. This procedure may take one or two
              sessions. The tooth needs to be isolated well, then the canals
              needs to be found and disinfected, then the canals needs to be
              filled and sealed by a specific material. Expect your mouth to be
              open and your teeth isolated with a rubber dam on for the entire
              period of the appointment, appointments may run longer, and a
              flare up after the appointment is common. The dentist will provide
              a prescription if necessary. Wear comfortable clothes and ask our
              team how we can make this procedure more pleasant for you.
            </p>
          </section>
        </div>
      </div>
      <FaqContainerBlue arr={RCT} location={"Root Canal FAQ"} />
    </article>
  );
};

export default RootCanal;
