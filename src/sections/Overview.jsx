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
            Nikoo Homes V Phase II - Luxury Apartments in Thanisandra

            </p>
            <p className="mt-2">
            Located within the expansive Bhartiya City township, Thanisandra, Bangalore.
            </p>

            <ul className="mt-4 text-left list-disc list-inside space-y-1">
              <li><strong>  Spacious 2, 2.5, 3, 3.5 & 4 BHK Apartments </strong> (742 - 2,188 sq. ft.)</li>
              <li><strong>55,000 sq. ft.</strong> clubhouse with premium amenities</li>
              <li><strong> 38-story towers with panoramic views</strong></li>
              <li><strong>Garden living concept with lush green spaces</strong></li>
              <li><strong>Prime Connectivity:</strong> Near Outer Ring Road, Manyata Tech Park & Kempegowda Airport</li>
              <li> Possession from June 2028 onwards  </li>
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
