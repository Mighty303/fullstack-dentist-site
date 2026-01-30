import React from "react";
import Hero from "../Hero";

const TeamHero = () => {
  return (
    <section className="py-14 mx-6 md:mx-28 flex flex-col items-center gap-8">
      <Hero 
        imageUrl='/assets/images/banner/banner-team3.jpg'
        title="OUR TEAM"
        page="Our Team"
      />
      <p className="md:text-xl m-auto italic max-w-7xl md:max-w-5xl flex items-center justify-center mb-10  text-center relative h-64">
          <img
            src="assets/images/teethbackground.svg"
            className="absolute inset-0 w-full h-full object-none"
            alt="Background Image"
          />
          <span className="relative z-10">
            Meet Our Incredible Team - The Heartbeat of Broadway Smiles! Every day,
          our  dedicated staff comes to work with a singular mission – to
          provide an elevated patient experience. Get to know the faces
          behind your care, and discover why Broadway Smiles is a truly
          special place for your oral well-being.
          </span>
        </p>
      <div className="hidden md:grid md:grid-cols-4 gap-6">
        <img
          className="w-[350px] h-[390px] rounded-lg object-cover"
          src={"/assets/images/staff-photos/team-photos/cropped/team-photo_1.jpg"}
          alt="team photo 1"
        />
        <img
          className="w-[350px] h-[390px] rounded-lg object-cover"
          src={"/assets/images/staff-photos/team-photos/cropped/team-photo2.jpg"}
          alt="team photo 2"
        />
        <img
          className="w-[350px] h-[390px] rounded-lg object-cover"
          src={"/assets/images/staff-photos/team-photos/cropped/team-photo3.jpg"}
          alt="team photo 3"
        />
        <img
          className="w-[350px] h-[390px] rounded-lg object-cover"
          src={"/assets/images/staff-photos/team-photos/cropped/team-photo4.jpg"}
          alt="team photo 4"
        />
      </div>
      <div className="carousel md:hidden space-x-4">
        <div className="carousel-item">
          <img
            className="w-72 h-60 rounded-lg object-cover"
            src={"/assets/images/staff-photos/team-photos/team-photo.jpg"}
            alt="team photo 1"
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-72 h-60 rounded-lg object-cover"
            src={"/assets/images/staff-photos/team-photos/team-photo2.jpg"}
            alt="team photo 2"
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-72 h-60 rounded-lg object-cover"
            src={"/assets/images/staff-photos/team-photos/team-photo3.jpg"}
            alt="team photo 3"
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-72 h-60 rounded-lg object-cover"
            src={"/assets/images/staff-photos/team-photos/team-photo4.jpg"}
            alt="team photo 4"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
