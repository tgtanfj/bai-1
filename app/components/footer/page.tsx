import Image from "next/image";
import React from "react";

const FooterPage = () => {
  return (
    <footer className="w-full h-[860px] bg-black pl-[160px] pr-[160px] text-white flex flex-col items-center justify-center">
      <div className=" w-full text-white flex items-center justify-center pb-[100px] border-b-[1.5px] border-[#545353] pt-[150px]">
        <div className="w-[40%] flex flex-col items-start">
          <div>
            <Image src="/logo2.png" alt="logo" width={54} height={48} />
          </div>
          <p className="font-[400] text-[16px] text-[#808E98] w-[65%] mt-[20px]">
            Sit amet nisl purus in mollis nunc sed id semper. In vitae turpis
            massa sed. Sed velit dignissim sodales ut e
          </p>
        </div>
        <div className="w-[60%] flex items-start justify-between">
          <div className="flex flex-col items-start justify-center mt-[120px]">
            <p className="font-[600] text-[18px] mb-[30px]">COMPANY</p>
            <ul className="font-[400] text-[16px] text-[#B3B8BC] flex flex-col gap-[30px]  ">
              <li>About Us</li>
              <li>Features</li>
              <li>Watch Out Video</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center mt-[120px]">
            <p className="font-[600] text-[18px] mb-[30px]">OUR POLICIES</p>
            <ul className="font-[400] text-[16px] text-[#B3B8BC] flex flex-col gap-[30px]  ">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Cookies Policy</li>
              <li>GDPR Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center mt-[120px]">
            <p className="font-[600] text-[18px] mb-[27px]">SOCIAL MEDIA</p>
            <ul className="font-[400] text-[16px] text-[#B3B8BC] flex flex-col gap-[25px]  ">
              <li className="flex items-center">
                <Image
                  className=" mr-[10px]"
                  src="/facebook.png"
                  alt="logo"
                  width={30}
                  height={30}
                />{" "}
                <span>Facebook</span>
              </li>
              <li className="flex items-center">
                <Image
                  className=" mr-[10px]"
                  src="/twitter.png"
                  alt="logo"
                  width={30}
                  height={30}
                />{" "}
                <span>Twitter</span>
              </li>
              <li className="flex items-center">
                <Image
                  className=" mr-[10px]"
                  src="/ins.png"
                  alt="logo"
                  width={30}
                  height={30}
                />{" "}
                <span>Instagram</span>
              </li>
              <li className="flex items-center">
                <Image
                  className=" mr-[10px]"
                  src="/tiktok.png"
                  alt="logo"
                  width={30}
                  height={30}
                />{" "}
                <span>Tiktok</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-[#94999C] text-[14px] font-[400] pt-[60px]">
        © 2022 VoiCoffee - All rights reserved.
      </p>
    </footer>
  );
};

export default FooterPage;
