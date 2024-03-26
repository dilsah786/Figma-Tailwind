import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-[url('../../public/Rectangle18.png')]">
     <Navbar/>
     <div className=" border-2 border-blue-400 w-[21.4rem] h-[19rem] m-auto mt-[10rem] rounded-[1.3rem] bg-[#24232366]">
       <div className=" border-2 flex border-green-600 w-[20.25rem] h-[16.63rem] mt-5 ml-1">
        <p className="text-center font-medium text-white text-3xl" >Where <br/> Blockchain <br/> Heroes Thrive: <br/> Rescuing <br/> Dreams, <br/> Elevating <br/>Fortunes.</p>
       </div>
     </div>
    </div>
  );
};

export default Home;
