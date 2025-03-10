"use client";

import BBImageUpload from "@/components/core/BBImageUpload";
import ImagePreview from "@/components/core/BBImageUpload/ImagePreview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BBEditor from "@/form/BBEditor";
import BBForm from "@/form/BBForm";
import BBInput from "@/form/BBInput";
import { createFoodCart } from "@/services/FoodCart";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const AddFoodCartForm = () => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updatedFormData = {
      ...data,
      cuisines: data?.cuisines
        .split(",")
        .map((item: string) => item.trim())
        .filter((item: string) => item !== ""),
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(updatedFormData));
    if (imageFiles.length > 0) {
      formData.append("image", imageFiles[0]);
    }

    setLoading(true);
    const toastId = toast.loading("Processing...");
    try {
      const res = await createFoodCart(formData);
      if (res?.success) {
        toast.success(res?.message, { id: toastId });
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.", { id: toastId });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-5xl mx-auto bg-white shadow-none rounded-xl p-4">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Add a Food Cart
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
              required
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
                  name="foodCartName"
                  type="text"
                  placeholder="Food cart name"
                  label="Food Cart Name"
                  required
                />
                <BBInput
                  name="address"
                  type="text"
                  placeholder="Address"
                  label="Address"
                  required
                />
                <BBInput
                  name="contactNumber"
                  type="text"
                  placeholder="Contact Number"
                  label="Contact Number"
                  required
                />
                <BBInput
                  name="cuisines"
                  type="text"
                  placeholder="Cuisines (comma separated)"
                  label="Cuisine Types"
                  required
                />
                <BBInput
                  name="availability.days"
                  type="text"
                  placeholder="Available days (e.g., Monday - Friday)"
                  label="Availability Days"
                  required
                />
                <BBInput
                  name="availability.hours"
                  type="text"
                  placeholder="Available hours (e.g., 10 AM - 8 PM)"
                  label="Availability Hours"
                  required
                />
              </div>

              {/* Editor at the bottom - Full Width */}
              <div className="mt-6 w-full">
                <BBEditor name="description" required />
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-end">
                <Button
                  disabled={loading}
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm"
                >
                  {loading ? "Creating..." : "Create Food Cart"}
                </Button>
              </div>
            </BBForm>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddFoodCartForm;
