"use client";
import BBImageUpload from "@/components/core/BBImageUpload";
import ImagePreview from "@/components/core/BBImageUpload/ImagePreview";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import BBForm from "@/form/BBForm";
import BBInput from "@/form/BBInput";
import { createCategory } from "@/services/category";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateCategoryModal = () => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formdata = new FormData();
    formdata.append("data", JSON.stringify(data));
    formdata.append("image", imageFiles[0] as File);
    try {
      const toastId = toast.loading("creating.....");
      const res = await createCategory(formdata);
      if (res?.success) {
        toast.success(res?.message, { id: toastId });
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-orange-500">Create Category</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="py-5">Create Meal Category</DialogTitle>
            <small>* Please create unique category by giving unique name</small>
            <Separator />
          </DialogHeader>
          <div>
            <div className="flex gap-x-4">
              <BBImageUpload
                className="flex items-start w-full"
                setImageFiles={setImageFiles}
                setImagePreview={setImagePreview}
                label="Upload Single Image"
                required
              />
              <ImagePreview
                imagePreview={imagePreview}
                setImageFiles={setImageFiles}
                setImagePreview={setImagePreview}
              />
            </div>
            <BBForm onSubmit={handleSubmit}>
              <div className="space-y-4">
                <BBInput
                  name="name"
                  type="text"
                  placeholder="Category Name"
                  label="Name"
                />
                <BBInput
                  name="description"
                  type="text"
                  placeholder="Description"
                  label="Description"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 py-2 text-sm font-medium rounded-md  mt-4 cursor-pointer"
              >
                Create
              </Button>
            </BBForm>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateCategoryModal;
