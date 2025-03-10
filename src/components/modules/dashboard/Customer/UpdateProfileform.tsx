"use client";

import BBImageUpload from "@/components/core/BBImageUpload";
import ImagePreview from "@/components/core/BBImageUpload/ImagePreview";
import { Button } from "@/components/ui/button";
import { cities } from "@/constant/cities";
import BBForm from "@/form/BBForm";
import BBInput from "@/form/BBInput";
import BBSelect from "@/form/BBSelect";
import { updateProfile } from "@/services/User";
import { Save, X } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface UpdateProfileFormProps {
  setIsEditing: (isEditing: boolean) => void;
  isEditing: boolean;
  user: any;
}

const UpdateProfileForm = ({
  setIsEditing,
  isEditing,
  user,
}: UpdateProfileFormProps) => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const dietaryPreferences = data?.dietaryPreferences
      ? data.dietaryPreferences
          .split(",")
          .map((item: string) => item.trim())
          .filter((item: string) => item !== "")
      : [];
    const dietaryRestrictions = data?.dietaryRestrictions
      ? data.dietaryRestrictions
          .split(",")
          .map((item: string) => item.trim())
          .filter((item: string) => item !== "")
      : [];
    const updatedFormData = {
      ...data,
      dietaryPreferences,
      dietaryRestrictions,
    };
    const formdata = new FormData();
    formdata.append("data", JSON.stringify(updatedFormData));
    formdata.append("image", imageFiles[0] as File);
    try {
      const loading = toast.loading("Updating...");
      setIsLoading(true);
      const res = await updateProfile(formdata);
      console.log(res);
      if (res?.success) {
        toast.success(res.message, { id: loading });
        setIsLoading(false);
        setIsEditing(false);
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border">
      {/* Profile Image Upload */}
      <div className="flex flex-col items-center space-y-4 mb-10">
        <div className="flex gap-4 ">
          <BBImageUpload
            setImageFiles={setImageFiles}
            setImagePreview={setImagePreview}
            label="Upload Profile Image"
            className="w-fit mt-0"
          />
          <ImagePreview
            className="flex flex-wrap gap-4"
            setImageFiles={setImageFiles}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
          />
        </div>
      </div>

      {/* Update Form */}
      <BBForm onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="space-y-2">
          <BBInput
            type="text"
            label="Name"
            name="name"
            defaultValue={user?.name}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
          />
        </div>
        {/* Phone Field */}
        <div className="space-y-2">
          <BBInput
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            defaultValue={user?.phone}
            label="Phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
          />
        </div>

        {/* Address Field */}
        <div className=" space-y-2">
          <BBSelect
            name="deliveryAddress"
            label="Delivery Address"
            placeholder="Delivery Address"
            options={cities.map((city) => ({
              label: city,
              value: city,
            }))}
          />
        </div>
        <div className=" space-y-2">
          <BBInput
            type="text"
            name="dietaryPreferences"
            defaultValue={user?.dietaryPreferences?.join(".")}
            placeholder="Dietary Preferences "
            label="Dietary Preferences (comma separated)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
          />
        </div>
        <div className=" space-y-2">
          <BBInput
            type="text"
            name="dietaryRestrictions"
            defaultValue={user?.dietaryRestrictions?.join(".")}
            placeholder="Dietary Restrictions "
            label="Dietary Restrictions (comma separated)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
          />
        </div>
        <div className=" space-y-2">
          <BBInput
            type="text"
            name="preferredCuisine"
            placeholder="PreferredCuisine"
            label="PreferredCuisine"
            defaultValue={user?.preferredCuisine}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-10">
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <X className="w-5 h-5" />
            <span>Cancel</span>
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            <Save className="w-5 h-5" />
            <span>{isLoading ? "Processing" : "Save Changes"}</span>
          </Button>
        </div>
      </BBForm>
    </div>
  );
};

export default UpdateProfileForm;
