"use client";

import BBImageUpload from "@/components/core/BBImageUpload";
import ImagePreview from "@/components/core/BBImageUpload/ImagePreview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BBEditor from "@/form/BBEditor";
import BBForm from "@/form/BBForm";
import BBInput from "@/form/BBInput";
import BBSelect from "@/form/BBSelect";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const portionSizes = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

const AddMealForm = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Card className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-4">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Add a New Meal
        </CardTitle>
      </CardHeader>
      <CardContent>
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
                />
                <BBInput
                  name="price"
                  type="number"
                  placeholder="Price"
                  label="Price ($)"
                />
                <BBInput
                  name="category"
                  type="text"
                  placeholder="Category"
                  label="Category"
                />
                <BBInput
                  name="cuisine"
                  type="text"
                  placeholder="Cuisine"
                  label="Cuisine Type"
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
                  label="Dietary Preferences"
                />
                <BBInput
                  name="ingredients"
                  type="text"
                  placeholder="Ingredients"
                  label="Ingredients"
                />
              </div>

              {/* Editor at the bottom - Full Width */}
              <div className="mt-6 w-full">
                <BBEditor name="details" />
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-end">
                <Button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 text-sm hover:bg-primary/90 transition-all"
                >
                  Add Meal
                </Button>
              </div>
            </BBForm>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddMealForm;
