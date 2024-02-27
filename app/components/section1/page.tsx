import Image from "next/image";

const Section1Page = () => {
  return (
    <div className="w-full h-[900px]">
      <div className="flex items-center justify-between absolute mt-6 w-[100%] border-b-2 pb-5 pl-[60px] pr-[60px] ">
        <div className="">
          <Image width={66} height={56} src="/logo.png" alt="logo" />
        </div>
        <div className="">
          <ul className="flex justify-between gap-20 text-[#071731]">
            <li className="border-b-2 border-black h-[20px]">Home</li>
            <li>Service</li>
            <li>Our menu</li>
            <li>About us</li>
            <li>Contact</li>
            <li className="flex items-center justify-center gap-[50px] ">
              <div className="flex items-start relative">
                <Image
                  className="absolute top-[-2px] right-[80px]"
                  height={21}
                  width={21}
                  src="/user.png"
                  alt="logo"
                />{" "}
                <p>Account</p>
              </div>
              <div className="flex items-center relative">
                <Image
                  className="absolute top-[-2px] right-[45px]"
                  height={21}
                  width={21}
                  src="/cart.png"
                  alt="logo"
                />
                <p>Cart</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center h-[900px] ">
        <div className="bg-white h-full w-[45%] flex-col flex items-start justify-center pt-[100px] pl-[60px] pr-[60px] gap-5">
          <h1 className="font-[600] text-[80px] uppercase leading-none">
            enjoy life sip by sip
          </h1>
          <p className="text-[18px] font-normal text-[#5F6575]">
            Voi Coffee is aimed at everyone, especially young, active, busy
            people. The brand is committed to providing customers with great
            coffee experiences, even when they are in a hurry.
          </p>
          <div className="flex items-center justify-center ">
            <div className="pr-5">
              <Image src="/section1.png" width={27} height={44} alt="image" />
            </div>
            <div className="flex flex-col items-start justify-center border-l pl-5 gap-1">
              <div>
                <p className="text-[18px] font-medium text-[#181B1D] relative">
                  Trusted Users
                  <span className="absolute border-b-4 w-[65px] border-[#aa9585] top-3 left-[140px]" />
                </p>
              </div>
              <div>
                <Image src="/rating.png" width={140} height={24} alt="rating" />
              </div>
              <div>
                <p className="text-[18px] text-[#5F6575] relative">
                  Over <span className="text-[#aa9585] ">13.5K</span> happy
                  users all over the world 🥰{" "}
                  <span className="absolute border-b-2 w-[40px] border-[#aa9585] top-5 left-12" />
                </p>
              </div>
            </div>
          </div>
          <button className="w-[180px] h-[64px] bg-[#aa9585] rounded-es-2xl rounded-se-2xl text-white">
            Order now
          </button>
        </div>
        <div className="bg-[#aa9585] w-[55%] h-full flex flex-col items-center justify-center">
          <div className="flex items-center justify-center h-[75%]">
            <div className="mr-[30px]">
              <Image src="/arrowleft.png" width={80} height={80} alt="arrow" />
            </div>
            <div>
              <Image
                src="/section1coffe.png"
                width={408}
                height={540}
                alt="coffe"
              />
            </div>
            <div className="ml-[30px]">
              <Image src="/arrowright.png" width={80} height={80} alt="arrow" />
            </div>
          </div>
          <div >
            <Image
              src="/slider.png"
              width={110}
              height={20}
              alt="coffe"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1Page;
