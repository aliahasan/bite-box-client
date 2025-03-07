"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BBCalender from "@/form/BBCalender";
import BBForm from "@/form/BBForm";
import BBInput from "@/form/BBInput";
import BBSelect from "@/form/BBSelect";
import {
  setDietaryPreferences,
  setDietaryRestrictions,
  setPortionSize,
  setSchedule,
} from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { formatISO } from "date-fns";
import { Edit } from "lucide-react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const portionOptions = [
  { label: "Small", value: "small" },
  { label: "Medium + 20 ৳", value: "medium" },
  { label: "Large + 40 ৳", value: "large" },
];

const CustomizeDialog = () => {
  const dispatch = useAppDispatch();
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    const dietaryPreferences = data?.dietaryPreferences
      ? data.dietaryPreferences
          .split(",")
          .map((item: string) => item.trim())
          .filter((item: string) => item !== "")
      : [];
    const dietaryRestrictions = data?.dietaryRestrictions
      ? data.dietaryRestrictions
          .split(",")
          .map((restriction: string) => restriction.trim())
          .filter((restriction: string) => restriction !== "")
      : [];
    const portionSize = data?.portionSize || "small";

    const schedule = data?.schedule ? formatISO(data.schedule) : null;
    // Dispatch only if values are present
    if (dietaryPreferences.length > 0) {
      dispatch(setDietaryPreferences(dietaryPreferences));
    }
    if (dietaryRestrictions.length > 0) {
      dispatch(setDietaryRestrictions(dietaryRestrictions));
    }
    if (portionSize) {
      dispatch(setPortionSize(portionSize));
    }
    if (schedule) {
      dispatch(setSchedule(schedule));
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <span>
            <Edit />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Customize Your order</DialogTitle>
          <DialogDescription>
            Customize your order and according to your preferences 😀
          </DialogDescription>
        </DialogHeader>
        <div>
          <BBForm onSubmit={handleSubmit}>
            <BBInput
              name="dietaryPreferences"
              type="text"
              label="Dietary Preferences comma (separated)"
            />
            <BBInput
              name="dietaryRestrictions"
              type="text"
              label="Dietary Restrictions comma (separated)"
            />
            <BBSelect
              name="portionSize"
              options={portionOptions}
              label="Choose Portion"
            />
            <BBCalender name="schedule" label="Choose your Date " />
            <div className="mt-5">
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </div>
          </BBForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomizeDialog;
