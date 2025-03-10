"use client";

import BBImageUpload from "@/components/core/BBImageUpload";
import ImagePreview from "@/components/core/BBImageUpload/ImagePreview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BBEditor from "@/form/BBEditor";
import BBForm from "@/form/BBForm";
import BBInput from "@/form/BBInput";
import BBSelect from "@/form/BBSelect";
import { updateMealInfo } from "@/services/Provider";
import { IMeal } from "@/types";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const portionSizes = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

const UpdateMealForm = ({ meal }: { meal: IMeal }) => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const [loading, isLoading] = useState(false);

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updatedFormData = {
      ...data,
      price: parseFloat(data?.price),
      averageRating: parseFloat(data?.averageRating),
      dietaryPreferences: data?.dietaryPreferences
        .split(",")
        .map((item: string) => item.trim())
        .filter((item: string) => item !== ""),
      ingredients: data?.ingredients
        .split(",")
        .map((item: string) => item.trim())
        .filter((item: string) => item !== ""),
    };

    const formdata = new FormData();
    formdata.append("data", JSON.stringify(updatedFormData));
    formdata.append("image", imageFiles[0] as File);
    try {
      isLoading(true);
      const toastId = toast.loading("updating...");
      const res = await updateMealInfo(meal._id, formdata);
      console.log(res);
      if (res?.success) {
        toast.success(res?.message, { id: toastId });
      } else {
        toast.error(res?.message, { id: toastId });
      }
      isLoading(false);
    } catch (error) {
      console.log(error);
      isLoading(false);
    }
  };

  return (
    <Card className="max-w-7xl mx-auto bg-white shadow-none rounded-xl p-4">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Update Meal Info
        </CardTitle>
      </CardHeader>
      <CardContent className="px-1">
        <div className="flex flex-col items-start gap-6">
          {/* Image Upload Section */}
          <div className="flex gap-x-4">
            <BBImageUpload
              className="flex items-start"
              setImageFiles={setImageFiles}
              setImagePreview={setImagePreview}
              label="Upload Image"
            />
            <ImagePreview
              imagePreview={imagePreview}
              setImageFiles={setImageFiles}
              setImagePreview={setImagePreview}
            />
          </div>

          {/* Form Section */}
          <div className="w-full">
            <BBForm onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <BBInput
                  name="name"
                  type="text"
                  placeholder="Meal Name"
                  label="Meal Name"
                  defaultValue={meal?.name}
                />
                <BBInput
                  name="price"
                  type="number"
                  placeholder="Price"
                  label="Price (৳)"
                  defaultValue={meal?.price as any}
                />
                <BBInput
                  name="category"
                  type="text"
                  placeholder="Category"
                  label="Category"
                  defaultValue={meal?.category}
                />
                <BBInput
                  name="cuisine"
                  type="text"
                  placeholder="Cuisine"
                  label="Cuisine Type"
                  defaultValue={meal?.cuisine}
                />
                <BBSelect
                  options={portionSizes}
                  name="portionSize"
                  placeholder="Portion Sizes"
                  label="Portion Sizes"
                  isMulti
                />
                <BBInput
                  name="dietaryPreferences"
                  type="text"
                  placeholder="Dietary Preferences"
                  label="Dietary Preferences (comma separated )"
                  defaultValue={meal?.dietaryPreferences?.join(".")}
                />
                <BBInput
                  name="ingredients"
                  type="text"
                  placeholder="Ingredients"
                  label="Ingredients (comma separated)"
                  defaultValue={meal?.ingredients?.join(".")}
                />
                <BBInput
                  name="averageRating"
                  type="number"
                  placeholder="Ratings"
                  label="Average Rating (number)"
                  defaultValue={meal?.averageRating as any}
                />
              </div>

              {/* Editor at the bottom - Full Width */}
              <div className="mt-6 w-full">
                <BBEditor name="description" defaultValue={meal?.description} />
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-end">
                <Button
                  disabled={loading}
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm "
                >
                  {loading ? "Processing" : "Update meal"}
                </Button>
              </div>
            </BBForm>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpdateMealForm;
