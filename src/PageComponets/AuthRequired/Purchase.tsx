import { PurchasePageComponts } from "@/componentsPage/purchase/purcahse";
import { cn } from "@/lib/utils";

const Purcharse = () => {
  return (
    <div className={cn("pb-[100px] text-white body flow")}>
      <div className="w-[1280px] mx-auto">
       <PurchasePageComponts/>
      </div>
    </div>
  );
};

export default Purcharse;
