import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import star from "../assets/star.svg";
import yekeen from "../assets/yekeen-akinwale.jpg";

// Example testimonials data
const testimonials = [
  {
    stars: 4,
    text: `The data obtained from the Budeshi Portal was instrumental in my investigation into the primary healthcare center. It allowed me to understand the sector's budget allocation and assess the progress made. The insights from this report helped me win the 2018 Reporter of the Year Award.`,
    user: {
      name: "Yekeem Akinwale",
      role: "Data journalist",
      img: yekeen,
    },
  },
  {
    stars: 5,
    text: `Through Budeshi, I was able to investigate
            abandoned primary healthcare projects in the
            Northwest of Nigeria. The platform provided 
            most of the necessary data (Name of Contractor), 
            making the investigation straightforward. Budeshi 
            is the best`,
    user: {
      name: "Olugbenga Adanikin",
      role: "Journalist",
      img: yekeen,
    },
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[current];

  return (
    <>
      <section className="flex flex-col md:flex-row gap-3 justify-between px-9 w-full max-w-[1110px] mx-auto mt-16">
        <div className="space-y-6 md:space-y-8 pt-8 md:pt-0 md:py-16">
          <h3 className="font-bold text-[#223A90] text-2xl md:text-[40px] w-full">
            What our users say about our data portal.
          </h3>
          <div className="hidden md:flex gap-2">
            <button
              className="flex items-center bg-[#F0F5FF] rounded p-4 text-[#223A90] hover:bg-[#223A90] hover:text-white"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ArrowLeft />
            </button>
            <button
              className="flex items-center bg-[#F0F5FF] rounded p-4 text-[#223A90] hover:bg-[#223A90] hover:text-white"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="testi p-3 rounded-xl border-4 border-rose-300 max-w-[600px] w-full h-fit my-auto">
          <div className="rounded space-y-4 h-fit">
            <div className="flex gap-1">
              {[...Array(testimonial.stars)].map((_, i) => (
                <img src={star} alt="rating" key={i} />
              ))}
            </div>
          </div>
          <p>{testimonial.text}</p>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <img
                src={testimonial.user.img}
                className="rounded-full size-9"
                alt={testimonial.user.name}
              />
              <div>
                <p className="font-semibold text-sm">{testimonial.user.name}</p>
                <small className="text-[10px]">{testimonial.user.role}</small>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <div className="flex gap-1">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-3 w-3 rounded-full md:w-5 ${
                    idx === current ? "bg-[#F4291A]" : "bg-[#F4291A]/40"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-1">
          <button
            className="flex items-center bg-[#F0F5FF] rounded p-1 md:p-4 text-[#223A90] hover:bg-[#223A90] hover:text-white"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ArrowLeft />
          </button>
          <button
            className="flex items-center bg-[#F0F5FF] rounded p-1 md:p-4 text-[#223A90] hover:bg-[#223A90] hover:text-white"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ArrowRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
