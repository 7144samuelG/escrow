import { Button } from "@/components/ui/button";
import Bit from "../assets/bit.png";
import { CardProperties } from "../componentsPage/Card";
import { Footer } from "./Footer";
import { Whoweare } from "@/componentsPage/whowe-are";
import { NavBar } from "@/componentsPage/NavBar";
import { Reasons } from "@/componentsPage/reasons";
export const Home = () => {
  return (
    <div className="overflowx-hidden bg-slate-white">
      <NavBar />
      <div className="max-w-[1200px] mx-auto  mt-[10px]">
        <div className="lg:flex justify-between items-cente lg:mx-10">
          <div className="max-w-screen-md mt-10">
            <h1 className=" text-[1.5rem]  tracking-[1px] font-[500] text-center lg:leading-[54px] lg:text-left px-4 lg:px-0 text-[#1C1F30]">
              FairTrade is a Decentralized payment dapp
              <br />
              escrow system built with Blockchain Technology
            </h1>

            <div className="pt-6">
              <p className=" tracking-[2px] text-[16px] text-xl text-center lg:text-left text-[#333]">
                We safeguard both buyer and seller,from fraud by ensuring all
                funds transacted using FairTrade are kept in an escrow build using the
                latest blockchain technology
              </p>
            </div>

            <div className="mt-[40px] flex justify-center lg:block">
              <Button variant="outline" className="px-[30px] text-xl ">
                Get started
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src={Bit}
              width={200}
              height={200}
              alt=""
              className="lg:w-full h-full"
            />
          </div>
        </div>
        <div className="mt-9">
          <h1 className="text-center text-3xl text-[#1891CA]">
            How FairTrade Works
          </h1>
          <CardProperties />
        </div>
        <Whoweare />
        <div className="my-9 zg mx-4">
          <h4 className="text-center text-blue-300 text-2xl pb-7 pt-4">
            Whay Choose Us
          </h4>

          <Reasons />
        </div>
        <div className="flex flex-col items-center my-[70px]">
          <p className="my-4">Ready to explore the  FairTrade Escrow System</p>
          <Button variant="secondary">Get Started With FairTrade</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
