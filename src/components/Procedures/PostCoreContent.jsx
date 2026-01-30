import React from "react";
import Faq from "@/components/Faq";
import { PostCore } from "@/data/generalDentistry";
import FaqContainerBlue from "../FaqContainerBlue";

const PostCoreContent = () => {
  return (
    <article
      className="flex flex-col items-center w-full mx-0 gap-8 animate-fade-down animate-once animate-duration-1000 animate-normal animate-fill-forwards"
      id="postCore"
    >
      <div className="w-full flex justify-center">
        <div className="max-w-screen-xl p-0 md:p-9">
          <section className="flex flex-col gap-4 px-9" id="postCore">
            <h2 className="text-2xl md:text-4xl text-black font-bold">
              Post and Core
            </h2>
            <p className="text-md md:text-xl text-gray-700 text-start font-thin text-base">
              A post and core is a restorative treatment used on a tooth to help
              get better retention of a future crown. A post and core is
              indicated when the tooth has extensive damage. A post and core
              does not strengthen the tooth, it improves the chance of a tooth
              to support a crown. A post and core is a procedure needs to
              follows a root canal therapy as it extends the post into the root
              canal space. The core is the structure attached to the post and
              build on tooth of the tooth to support the future crown.
            </p>
          </section>
        </div>
      </div>
      <FaqContainerBlue arr={PostCore} />
    </article>
  );
};
export default PostCoreContent;
