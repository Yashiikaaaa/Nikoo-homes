import React, { useState, useEffect } from "react";
import Button from "../components/button/buttonMain";
import homeLocation from "../assets/home/location.svg";

// Array of banner images
import banner1 from "../assets/home/nikooo.jpg";
import banner2 from "../assets/home/image.png";
import banner4 from "../assets/home/homebannertwo.png";
import banner5 from "../assets/home/image6.jpeg";
import banner3 from "../assets/gallery/1.webp";

const banners = [banner1, banner2, banner4, banner5];

export const Home = ({ contactmodal, setContactModal }) => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000); // 4 seconds interval

    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    backgroundImage: `url(${banners[currentBanner]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 1s ease-in-out",
  };

  const opacBackground = {
    backgroundImage: `url(${homeLocation})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // Overlay style to darken the background for better readability
  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  };

  return (
    <>
      {/* 🔶 Highlight Strip for New Launch */}

      <div
        id="Home"
        className="w-full h-[30rem] min-h-[98vh] sm:min-h-[85vh] mt-14 md:mt-[4.5rem]"
        style={containerStyle}
      >
        <div className="relative flex flex-col justify-center h-full w-full items-center gap-8 bg-black bg-opacity-40 p-5 md:px-10 lg:px-[7.5rem]">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6 text-white">
            <h1 className="font-subheading text-3xl md:text-6xl font-semibold uppercase">
              Nikoo Homes Garden Estate
            </h1>
            <p className="font-body text-sm md:text-2xl font-normal">
              Premium Township near Bengaluru Airport.
            </p>

            <button
              className={`flex items-center px-10 py-4 w-fit bg-white text-black cursor-pointer 
                  font-semibold text-xs md:text-sm uppercase whitespace-nowrap gap-10
                  transition-all duration-300 ease-in-out 
                  hover:bg-black hover:text-white font-body`}
              onClick={() => setContactModal(!contactmodal)}
            >
              Enquire Now!
            </button>
          </div>

          {/* <div className="absolute bottom-4 right-4 flex gap-2 items-center bg-white px-3 py-2 rounded">
            
            <p className="font-body text-xs md:text-base font-medium">
              Sadahalli
            </p>
          </div> */}

          {/* Floating Location Section */}
          <div
            className="hidden absolute sm:block top-[67%] right-0 md:mt-0 z-10"
            style={opacBackground}
          >
            <div
              className="flex gap-2 md:gap-3 bg-totalgrey rounded-none md:rounded-none items-center text-center md:px-10 md:py-6 px-4 py-4"
            
            >
              <img src={homeLocation} alt="Location" className="h-4 md:h-6" />
              <p className="max-w-96 font-body text-left text-black md:text-2xl text-xs font-medium leading-[130%]">
                Sadahalli
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
