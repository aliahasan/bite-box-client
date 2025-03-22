import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import BBForm from "@/form/BBForm";
import BBInput from "@/form/BBInput";
import { addFlashSale } from "@/services/FlashSale";
import { Dispatch, SetStateAction } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface IModalProps {
  selectedIds: string[];
  setSelectedIds: Dispatch<SetStateAction<[] | string[]>>;
}

const DiscountModal = ({ selectedIds, setSelectedIds }: IModalProps) => {
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const modifiedData = {
      meals: [...selectedIds],
      discountPercentage: parseFloat(data?.discountPercentage),
    };
    try {
      const toastId = toast.loading("processing...");
      const res = await addFlashSale(modifiedData);
      if (res?.success) {
        toast.success(res?.message, { id: toastId });
        setSelectedIds([]);
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button disabled={!selectedIds?.length} className="bg-orange-500">
            Add Flash Sale +
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="py-5">Create Meal Discount</DialogTitle>
            <Separator />
          </DialogHeader>
          <div>
            <BBForm onSubmit={handleSubmit}>
              <div className="space-y-4">
                <BBInput
                  name="discountPercentage"
                  type="number"
                  placeholder="Discount"
                  label="Discount Percentage"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-500 py-2 text-sm font-medium rounded-md  mt-4 cursor-pointer"
              >
                create discount
              </Button>
            </BBForm>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DiscountModal;
