import Image from "next/image";
import React from "react";

const Section2Page = () => {
  return (
    <div className="w-full h-[750px] bg-[#f8fafc]">
      <div className="px-[60px] pt-[100px] w-full pb-[60px]">
        <div className="flex w-full justify-between">
          <div className="flex flex-col w-[60%]">
            <h1 className="font-[700] text-[56px]">Specical menu for you</h1>
            <h2 className="font-[400] text-[18px] text-[#5F6575] mt-[10px]">
              Drinking Cofffe Can Do Much More Than Provide An Energy Boost. It
              May Also Reduce The Risk Of Several Health Issues.
            </h2>
          </div>
          <div className="w-[40%] flex items-center justify-end gap-[30px]">
            <Image src="/arrowleft.png" width={70} height={70} alt="arrow" />
            <Image src="/arrowright.png" width={70} height={70} alt="arrow" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-[90px]">
          <div className="relative w-[325px] h-[309px] bg-[#d9d9d9] rounded-es-[50px] rounded-se-[50px] flex flex-col items-center">
            <Image
              className="absolute top-[-80px] right-[30px]"
              src="/coffecup1.png"
              alt="coffe cup"
              width={242}
              height={177}
            />
            <div className="mt-[120px] flex flex-col items-start ml-[20px] mr-[20px]">
              <p className="font-[700] text-[24px]">Latte</p>
              <p className="font-[400] text-[15px]">
                100% Natural Arbika or Robusta, 30ml Cup
              </p>
            </div>
            <div className="flex items-center justify-around w-[40%] mt-[20px]">
              <div className="w-[38px] h-[38px] bg-[#291e24] rounded-[10px] flex items-center justify-center">
                <Image src="/whitecart.png" alt="cart" height={20} width={20} />
              </div>
              <div className="w-[38px] h-[38px] bg-[#291e24] rounded-[10px] flex items-center justify-center">
                <Image
                  src="/whiteheart.png"
                  alt="cart"
                  height={20}
                  width={20}
                />
              </div>
            </div>
            <button className="text-[18px] font-[700] text-white absolute rounded-[10px] bg-[#291E24] w-[152px] h-[42px] top-[285px]">
              50.000 VND
            </button>
          </div>
          <div className="relative w-[325px] h-[309px] bg-[#d9d9d9] rounded-es-[50px] rounded-se-[50px] flex flex-col items-center">
            <Image
              className="absolute top-[-80px] right-[30px]"
              src="/coffecup2.png"
              alt="coffe cup"
              width={242}
              height={177}
            />
            <div className="mt-[120px] flex flex-col items-start ml-[20px] mr-[20px]">
              <p className="font-[700] text-[24px]">Capuccino</p>
              <p className="font-[400] text-[15px]">
                Coffee 50%, Milk 50%, 280ml
              </p>
            </div>
            <div className="flex items-center justify-around w-[40%] mt-[40px]">
              <div className="w-[38px] h-[38px] bg-[#291e24] rounded-[10px] flex items-center justify-center">
                <Image src="/whitecart.png" alt="cart" height={20} width={20} />
              </div>
              <div className="w-[38px] h-[38px] bg-[#291e24] rounded-[10px] flex items-center justify-center">
                <Image
                  src="/whiteheart.png"
                  alt="cart"
                  height={20}
                  width={20}
                />
              </div>
            </div>
            <button className="text-[18px] font-[700] text-white absolute rounded-[10px] bg-[#291E24] w-[152px] h-[42px] top-[285px]">
              50.000 VND
            </button>
          </div>
          <div className="relative w-[325px] h-[309px] bg-[#d9d9d9] rounded-es-[50px] rounded-se-[50px] flex flex-col items-center">
            <Image
              className="absolute top-[-80px] right-[30px]"
              src="/coffecup3.png"
              alt="coffe cup"
              width={242}
              height={177}
            />
            <div className="mt-[120px] flex flex-col items-start ml-[20px] mr-[20px]">
              <p className="font-[700] text-[24px]">Americano</p>
              <p className="font-[400] text-[15px]">
                100% Natural Arbika or Robusta, 30ml Cup
              </p>
            </div>
            <div className="flex items-center justify-around w-[40%] mt-[20px]">
              <div className="w-[38px] h-[38px] bg-[#291e24] rounded-[10px] flex items-center justify-center">
                <Image src="/whitecart.png" alt="cart" height={20} width={20} />
              </div>
              <div className="w-[38px] h-[38px] bg-[#291e24] rounded-[10px] flex items-center justify-center">
                <Image
                  src="/whiteheart.png"
                  alt="cart"
                  height={20}
                  width={20}
                />
              </div>
            </div>
            <button className="text-[18px] font-[700] text-white absolute rounded-[10px] bg-[#291E24] w-[152px] h-[42px] top-[285px]">
              50.000 VND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2Page;
