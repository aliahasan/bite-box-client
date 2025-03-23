"use client";

import BBImageUpload from "@/components/core/BBImageUpload";
import ImagePreview from "@/components/core/BBImageUpload/ImagePreview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BBEditor from "@/form/BBEditor";
import BBForm from "@/form/BBForm";
import BBInput from "@/form/BBInput";
import BBSelect from "@/form/BBSelect";
import BBShadCnSelect from "@/form/BBShadcnSelect";
import { getAllMealCategories } from "@/services/category";
import { createMeal } from "@/services/Meal";
import { ICategory } from "@/types";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const portionSizes = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

const AddMealForm = () => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const [categoriesData] = await Promise.all([getAllMealCategories()]);
        setCategories(categoriesData?.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategory();
  }, []);

  //   for  submit handler
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

    const formData = new FormData();
    formData.append("data", JSON.stringify(updatedFormData));
    formData.append("image", imageFiles[0] as File);

    try {
      setLoading(true);
      const toastId = toast.loading("Processing.....");
      const res = await createMeal(formData);
      if (res?.success) {
        toast.success(res?.message, { id: toastId });
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-5xl mx-auto bg-white shadow-sm rounded-xl pt-6">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Add a New Meal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <BBForm onSubmit={handleSubmit}>
          {/* Image Upload Section */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <BBImageUpload
              className="flex items-start"
              setImageFiles={setImageFiles}
              setImagePreview={setImagePreview}
              label="Upload single Image"
            />
            <ImagePreview
              imagePreview={imagePreview}
              setImageFiles={setImageFiles}
              setImagePreview={setImagePreview}
            />
          </div>

          {/* Form Fields Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <BBInput
              name="name"
              type="text"
              placeholder="Meal Name"
              label="Meal Name"
              required
            />

            <BBShadCnSelect
              name="category"
              placeholder="Select Category"
              label="Category"
              options={categories?.map((category) => ({
                value: category._id,
                label: category.name,
              }))}
            />

            <BBInput
              name="price"
              type="number"
              placeholder="Price"
              label="Price (৳)"
              required
            />

            <BBInput
              name="cuisine"
              type="text"
              placeholder="Cuisine"
              label="Cuisine Type"
              required
            />

            <BBSelect
              options={portionSizes}
              name="portionSize"
              placeholder="Portion Sizes"
              label="Portion Sizes"
              isMulti
              required
            />

            <BBInput
              name="dietaryPreferences"
              type="text"
              placeholder="Dietary Preferences"
              label="Dietary Preferences (comma separated)"
              required
            />

            <BBInput
              name="ingredients"
              type="text"
              placeholder="Ingredients"
              label="Ingredients (comma separated)"
              required
            />

            <BBInput
              name="averageRating"
              type="number"
              placeholder="Ratings"
              label="Average Rating (number)"
              required
            />
          </div>

          {/* Editor - Full Width */}
          <div className="mt-6">
            <BBEditor name="description" required />
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <Button
              disabled={loading}
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm"
            >
              {loading ? "Processing..." : "Add Meal"}
            </Button>
          </div>
        </BBForm>
      </CardContent>
    </Card>
  );
};

export default AddMealForm;
