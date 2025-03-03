"use client";

import BBImageUpload from "@/components/core/BBImageUpload";
import ImagePreview from "@/components/core/BBImageUpload/ImagePreview";
import { useState } from "react";

const AddFoodCartForm = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const formData = new FormData();
  for (const file of imageFiles) {
    formData.append("images", file);
  }
  return (
    <div>
      <div className="flex gap-4 ">
        <BBImageUpload
          setImageFiles={setImageFiles}
          setImagePreview={setImagePreview}
          label="Upload Image"
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
  );
};

export default AddFoodCartForm;
