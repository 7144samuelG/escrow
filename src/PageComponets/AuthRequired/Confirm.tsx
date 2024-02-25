import { Button } from "@/components/ui/button";
import { NavBarPurchase } from "@/componentsPage/purchase/navbar-purcahse";
import { cn } from "@/lib/utils";
import { DollarSign } from "lucide-react";

const ConfirmTransaction = () => {
  return (
    <div className={cn("pb-[100px] h-[100vh] text-white body flow")}>
      <NavBarPurchase />
      <div className="border-b my-4 " />
      <div className="px-4 flex flex-col items-center">
        <h1 className="text- text-3xl font-semibold">
          Transctions Details
        </h1>
        <div className="">
          <div className="my-4 flex space-x-3">
            <Button>
              <DollarSign />
            </Button>
            <div>
              <h1>Amount</h1> 
              <p className="opacity-40">0.15 ETH</p>
            </div>
          </div>
          <div className="my-4 flex space-x-3">
            <Button>
              <DollarSign />
            </Button>
            <div>
              <h1>Buyer&#39;s adderss</h1>{" "}
              <p className="opacity-40">uewyudsgvhd3783ude73yqu92</p>
            </div>
          </div>
          <div className="my-4 flex space-x-3">
            <Button>
              <DollarSign />
            </Button>
            <div>
              <h1>Seller&#39;s adderss</h1>{" "}
              <p className="opacity-40">yteywud76382yh32t78e3pe8y3</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Button variant="ghost">Cancel</Button>
        <Button >Confirm</Button>
      </div>
    </div>
  );
};

export default ConfirmTransaction;
