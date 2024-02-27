import Image from "next/image";
import React from "react";

const Section4Page = () => {
  return (
    <div className="w-full h-[850px] bg-white pl-[80px] pr-[80px] relative">
      <div className="flex flex-col items-center justify-center">
        <p className="font-[600] text-[56px]">Happy Customer</p>
        <p className="font-[400] text-[18px] text-[#5F6575] w-[654px] text-center text-a mt-[10px]">
          So perhaps peopel who are genetically geared to reach to that extra
          cup of coffee could be boosting their health, as well as their
          productivity.
        </p>
      </div>
      <div className="flex items-center justify-center mt-[80px]">
        <div className="flex flex-col justify-center items-center w-[30%]">
          <div className="relative">
            <Image
              src="/icon.png"
              width={55}
              height={48}
              alt="icon"
              className="absolute right-[-10px]"
            />
            <div className="w-[278px] h-[280px] rounded-full bg-[#FFF7E9] overflow-hidden relative">
              <Image
                src="/profile.png"
                width={250}
                height={313}
                alt="profile"
                className="absolute right-[15px]"
              />
            </div>
          </div>
          <div>
            <Image
              src="/slider2.png"
              width={100}
              height={20}
              alt="icon"
              className="mt-[50px]"
            />
          </div>
        </div>

        <div className="w-[70%] flex flex-col items-center justify-center relative">
          <p className="font-[500] text-[30px] italic mt-[-90px]">
            “Voi Coffee The App clearly displays content as well as easy
            operations to help users have a good experience.”
          </p>
          <div className="flex items-center justify-start w-[100%] mt-[80px]">
            <div className="flex flex-col items-start justify-start ">
              <p className="font-[600] text-[18px]">JOHN DOE</p>
              <p className="font-[400] text-[14px] text-[#5F6575]">
                Sunior Designer of Lomosity
              </p>
            </div>
            <Image
              src="/rating2.png"
              height={20}
              width={128}
              alt="rating"
              className="ml-[80px]"
            />
          </div>
          <div className="flex items-center justify-end gap-[30px] absolute top-[140px] right-[0px]">
            <Image src="/arrowleft.png" width={70} height={70} alt="arrow" />
            <Image src="/arrowright.png" width={70} height={70} alt="arrow" />
          </div>
        </div>
      </div>

      <div className="shadow-2xl w-[1380px] h-[442px] bg-[#F8FAFC] mx-auto rounded-es-[60px] rounded-se-[60px] mt-[70px] flex flex-col items-center justify-center">
        <p className="font-[600] text-[48px] w-[814px] text-[#071731] text-center">Deliciousness to your inbox</p>
        <p className="mt-[10px] font-[400] text-[18px] text-[#5F6575] w-[620px] text-center">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        <div className="w-[480px] h-[80px] bg-white rounded-es-[24px] rounded-se-[24px] flex items-center justify-between mt-[50px]">
          <p className="text-[#5F6575] font-[500] text-[14px] ml-[20px]">Your email address...</p>
          <button className="bg-black w-[160px] h-[60px] rounded-es-[16px] rounded-se-[16px] text-white mr-[20px]">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Section4Page;
