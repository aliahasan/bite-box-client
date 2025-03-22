import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import MDEditor from "@uiw/react-md-editor";
import { Controller, useFormContext } from "react-hook-form";

type TEditorProps = {
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
};

const BBEditor = ({ name, label, placeholder, defaultValue }: TEditorProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field, fieldState }) => (
          <FormItem>
            {label && (
              <Label
                htmlFor={name}
                className="text-sm font-semibold text-my-light dark:text-my-dark"
              >
                {label}
              </Label>
            )}
            <FormControl>
              <MDEditor
                value={field.value}
                onChange={(value) => field.onChange(value)}
                id={name}
                preview="edit"
                height={350}
                style={{ borderRadius: 20, overflow: "hidden" }}
                textareaProps={{
                  placeholder: placeholder || "Briefly describe",
                }}
                previewOptions={{
                  disallowedElements: ["style"],
                }}
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
    </div>
  );
};

export default BBEditor;
