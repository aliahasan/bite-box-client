import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";

type Option = {
  value: string;
  label: string;
};

type TInputProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  options: Option[];
};

const BBShadCnSelect = ({
  name,
  label,
  disabled,
  placeholder,
  required,
  options,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field, fieldState }) => (
        <FormItem>
          {label && (
            <FormLabel>
              {label}
              {required && "*"}
            </FormLabel>
          )}
          <Select
            onValueChange={field.onChange}
            value={field.value}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder || "Select an option"} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
};

export default BBShadCnSelect;
