import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { updateMealStock } from "@/services/Provider";
import { Edit } from "lucide-react";
import { toast } from "sonner";

const UpdateStock = ({ mealId }: { mealId: string }) => {
  const handleUpdate = async (mealId: string, available: boolean) => {
    const stockInfo = {
      available: available,
    };
    try {
      const toastId = toast.loading("updating stock..");
      const res = await updateMealStock(mealId, stockInfo);
      if (res?.success) {
        toast.success(res?.message, { id: toastId });
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <button>
            <Edit className="w-5 h-5 text-gray-500 " />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-32 h-24" side="top">
          <Button
            className="w-full text-red-500 font-bold text-sm"
            variant="ghost"
            onClick={() => handleUpdate(mealId, true)}
          >
            Available
          </Button>
          <Button
            className="w-full text-green-500 font-bold text-sm"
            variant="ghost"
            onClick={() => handleUpdate(mealId, false)}
          >
            Stock out
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UpdateStock;
