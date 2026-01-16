import React from 'react';
import image from '../assets/gallery/micro.jpg';
import Button from '../components/button/buttonMain';

export const Overview = ({ contactmodal, setContactModal }) => {
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-between gap-[20 px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-6 md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <div className="max-w-2xl md:text-base text-sm text-black font-body font-light">
            <p className="font-bold text-lg md:text-xl">
            Nikoo Homes Garden Estate - Luxury Apartments in Sadahalli

            </p>
            <p className="mt-2">
            Located on Thanisandra Main Road, North Bengaluru
            </p>

            <ul className="mt-4 text-left list-disc list-inside space-y-1">
              <li> Premium residential development by Bhartiya City Developers </li>
              <li> Spread across 12 acres with 75% open & landscaped spaces(480 - 2,600 sq. ft.)</li>
              <li>Integrated community with apartments and row houses</li>
              <li>Phase 01 with 3 high-rise towers and modern planning</li>
              <li>Grand ~40,000 sq.ft clubhouse with lifestyle amenities</li>
              <li>Prime location on Thanisandra Main Road, near Bellahalli Cross</li>
              <li> Possession from <strong>2030 </strong> </li>
            </ul>
          </div>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
            text="Enquire Now!"
            className="mt-4"
            onClick={() => setContactModal(!contactmodal)}
          />
        </div>

        {/* Image Section */}
        <div className="hidden md:flex flex-col items-center">
          <img
            src={image}
            alt="Nikoo Homes"
            className="w-[420px] h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>
    </div>
  );
};
