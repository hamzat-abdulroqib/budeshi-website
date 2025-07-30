import React from "react";
import { Hero } from "../Component/Hero";
import Milestone from "../Component/Milestone";
import HowTooperate from "../Component/HowTooperate";
import Datahilight from "../Component/Datahilight";
import Testimonials from "../Component/Testimonials";
import Newsleter from "../Component/Newsleter";
import dashboard from "../assets/dashboard.png";

export const Home = () => {
  return (
    <>
      <main className="max-w-[1440px] mx-auto mt-10 md:mt-30">
        <Hero
          button1="Budeshi Data Portal "
          heading=" Transforming Public Service Delivery Through Data Transparency"
          text=" Empowering citizens and organizations with open contracting data and
            community-driven project monitoring"
          button2="Explore Projects"
          dashboard={dashboard}
        />
        <Milestone />
        <HowTooperate />
        <Datahilight />
        <Testimonials />
        <Newsleter />
      </main>
    </>
  );
};
