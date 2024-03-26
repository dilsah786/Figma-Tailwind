import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-around ">
      <div className=" flex mt-10">
        <img
          className=" w-[1.57rem] h-[1.57rem]"
          src="../../public/Frame1798.svg"
          alt="Humberger"
        />
        <img
          className="ml-4 w-[3.8rem] h-[4.2rem] -m-[0.6rem]"
          src="../../public/LogoSaviorredcopy1.png"
        />
        <h2 className=" ml-3 font-medium text-[1.14rem] left-[7.2rem]  h-3 text-white text-center font-zlogo ">Saviour</h2>
      </div>
      <div className="flex ">
        <button className="  font-semibold w-[6.3rem] h-[1.9rem] py-1 px-1 rounded-xl leading-3 p-2 shadow mt-10  bg-gradient-to-r from-[#ED0137] to-[#F05733]  font-poppins  text-xs lg:text-base leading-18 text-white">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Navbar;
