import { Button } from "@/components/ui/button";
import { CardProperties } from "@/componentsPage/Card";
import { NavBar } from "@/componentsPage/NavBar";
import { Reasons } from "@/componentsPage/reasons";
import { Whoweare } from "@/componentsPage/whowe-are";
import { Footer } from "./Footer";
import image2 from "../assets/bit2.svg";
import image3 from "../assets/bit1.svg";
// import { AuthClient } from "@dfinity/auth-client";
//import { useNavigate } from "react-router";
export const Home = () => {
  //const navigation = useNavigate();
  // const autheticate = async () => {
  //   const authClient = await AuthClient.create();
  //   authClient.login({
  //     // 7 days in nanoseconds
  //     maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
  //     onSuccess: async () => {
  //       navigation("/dashboard");
  //     },
  //   });
  // };
  return (
    <div className="overflow-x-hidden bg-[#f3f4f5]">
      <NavBar />
      <div className="max-w-[1200px] mx-auto  flex relative z-1 ">
        <div className="w-full lg:w-3/4 mt-6 px-3 lg:px-0">
          <h1 className=" hidden lg:block lg:text-[54px] font-[600] mt-7">
            <span className="text-blue-300">Secure </span> Your Transactions
            <br />
            On FairTrade{" "}
            <span className="text-blue-300">Decentralized Dapp </span>
          </h1>
          <h1 className="lg:hidden text-center text-2xl pb-2 font-[600]">
            <span className="text-blue-300">Secure </span> Your Transactions
            <br />
            On FairTrade{" "}
            <span className="text-blue-300">Decentralized Dapp </span>
          </h1>
          <p className=" tracking-[2px] text-[16px] text-xl text-center lg:text-left text-[#333] w-full lg:w-1/2 mb-10">
            We safeguard both buyer and seller,from fraud by ensuring all funds
            transacted using FairTrade are kept in an escrow build using the
            latest blockchain technology
          </p>

          <Button variant="primary" className="hidden lg:block">
            Get started <span>-</span>
          </Button>
        </div>
        <div className="hidden lg:block">
          <img src={image2} alt="" width={300} height={300} />
          <img
            src={image3}
            alt=""
            width={300}
            height={300}
            className="absolute top-10 right-[81px]"
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
          Why Choose Us
        </h4>

        <Reasons />
      </div>
      <div className="flex flex-col items-center my-[70px]">
        <p className="my-4">Ready to explore the FairTrade Escrow System</p>
        <Button variant="outline" >
          Get Started With FairTrade
        </Button>
      </div>
      <Footer />
    </div>
  );
};
