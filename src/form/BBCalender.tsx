/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  type?: string;
  name: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
};

const BBCalender = ({
  name,
  type,
  label,
  disabled,
  placeholder,
  defaultValue,
  required,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {label && <FormLabel>{label}</FormLabel>}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-10 pl-3 text-left font-normal rounded-md",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 " align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date.getTime() < new Date().setHours(0, 0, 0, 0)
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
};

export default BBCalender;
