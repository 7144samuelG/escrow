import { cn } from "@/lib/utils";
import fair from "../assets/fair.png";
export const Whoweare = () => {
  return (
    <div className="who  max-w-[1200px] mx-auto z-1">
      <div className="flex flex-col lg:flex-row h-[560px] md:h-[500px] lg:h-[600px] px-2 lg:px-0 lg:justify-between   ">
        <img
          src={fair}
          width={300}
          height={100}
          className="pt-[100px] hidden lg:block"
        />
        <div className={cn("text-white pt-[100px] w-full lg:w-1/2")}>
          <h1 className=" text-3xl py-4">Who we are?</h1>
          <p className="mt-4 tracking-[2px] text-left leading-[1.7rem] text-[1.12rem] ">
            FairTrade is an online secure financial arrangement where a third party holds
            and regulates payment of funds between two parties involved in a
            transaction. It ensures that both parties meet their obligations
            before the funds are released.
          </p>
          <p className="mt-4 tracking-[2px] text-left leading-[1.7rem] text-[1.12rem]">
            Our purpose is to provide a secure and neutral
            intermediary, ensuring that both the buyer and the seller fulfill
            their respective obligations before the final transfer of coins or
            assets takes place.
          </p>
        </div>
      </div>
    </div>
  );
};
