import { Button } from "@/components/ui/button";
import Bit from "../assets/bit.png";
import { CardProperties } from "../componentsPage/Card";
import { Footer } from "./Footer";
import { Whoweare } from "@/componentsPage/whowe-are";
import { NavBar } from "@/componentsPage/NavBar";
import Typewriter from "@/componentsPage/tyingtext";
import { Reasons } from "@/componentsPage/reasons";
export const Home = () => {
  return (
    <div className="overflowx-hidden">
      <NavBar />
      <div className="max-w-[1200px] mx-auto  mt-[100px]">
        <div className="lg:flex justify-between items-center">
          <div>
          <h1 className="lg:hidden text-[1.5rem] md:text-[2rem] tracking-[1px] font-[700] text-center px-4">
              <span className="text-[30px]">FairTrade</span> <br />
              <Typewriter
                text="is a Decentralized  secure online payment"
                delay={300}
              />{" "}
              <br /> processing escrow system built with Blockchain Technology
            </h1>
            <h1 className="hidden lg:block text-[2rem] tracking-[1px] font-[400]">
              <span className="text-4xl text-[#752938]">FairTrade</span> <br />
              <Typewriter
                text="is a Decentralized  secure online payment"
                delay={300}
              />{" "}
              <br /> processing escrow system built with Blockchain Technology
            </h1>
            <div className="pt-6">
              <p className=" tracking-[2px] text-[16px] text-xl text-center lg:text-left text-[#333]">
                We safeguard both buyer and seller, all funds transacted using
                FairTrade are kept in trust
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
          <h1 className="text-center text-4xl font-extrabold">How It Works</h1>
          <CardProperties />
        </div>
        <Whoweare />
        <div className="my-9 zg mx-4">
          
          <h4 className="text-center text-blue-300 text-2xl pb-7 pt-4">
            What Choose Us
          </h4>
          
          <Reasons/>
        </div>
        <div className="flex flex-col items-center my-[70px]">
          <p className="my-4">Ready to explore the power of FairTrade Escrow</p>
          <Button variant="secondary">Get Started With FairTrade</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
