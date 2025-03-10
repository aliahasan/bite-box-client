import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

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
  isMulti?: boolean;
  defaultValue?: string | string[];
};

const BBSelect = ({
  name,
  label,
  disabled,
  placeholder,
  required,
  options,
  isMulti,
  defaultValue,
}: TInputProps) => {
  const { control } = useFormContext();

  const processedDefaultValue = isMulti
    ? options.filter((opt) => (defaultValue as string[])?.includes(opt.value))
    : options.find((opt) => opt.value === defaultValue);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormItem className="space-y-2">
          {label && (
            <Label
              htmlFor={name}
              className="text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              {label}
            </Label>
          )}
          <FormControl>
            <Select
              {...field}
              id={name}
              options={options}
              name={name}
              instanceId={name}
              isMulti={isMulti}
              defaultValue={processedDefaultValue}
              required={required}
              isDisabled={disabled}
              placeholder={placeholder || "Select an option"}
              className="w-full"
              value={
                isMulti
                  ? options.filter((opt) => field.value?.includes(opt.value))
                  : options.find((opt) => opt.value === field.value)
              }
              onChange={(selected) =>
                field.onChange(
                  isMulti
                    ? (selected as Option[])?.map((opt) => opt.value)
                    : (selected as Option)?.value
                )
              }
            />
          </FormControl>
          {fieldState?.error?.message && (
            <FormMessage className="text-sm text-red-500">
              {fieldState.error.message}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

export default BBSelect;
