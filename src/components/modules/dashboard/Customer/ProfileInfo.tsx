"use client";
import { Button } from "@/components/ui/button";
import { IUserProfile } from "@/types";
import { Calendar, Mail, Pencil, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import UpdateProfileForm from "./UpdateProfileform";

interface UserProps {
  user: IUserProfile;
}

const ProfileInfo = ({ user }: UserProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return isEditing ? (
    <UpdateProfileForm
      user={user}
      setIsEditing={setIsEditing}
      isEditing={isEditing}
    ></UpdateProfileForm>
  ) : (
    <div className="max-w-4xl mx-auto mt-10 space-y-6">
      {/* Profile Header */}
      <div className="relative flex items-center gap-6 border-b pb-6">
        {/* Profile Image */}
        <div className="w-24 h-24  rounded-full overflow-hidden border-4 border-primary shadow-lg">
          {user.photo ? (
            <Image
              src={user?.photo}
              alt={user?.name}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-600 text-xl">
              {user.name.charAt(0)}
            </div>
          )}
        </div>

        {/* User Info */}
        <div>
          <h1 className="text-2xl font-semibold">{user?.name}</h1>
          <p className="text-gray-500">{user?.role.toUpperCase()}</p>
        </div>

        {/* Edit Button */}
        <Button
          className="ml-auto px-4 py-2 flex items-center gap-2"
          onClick={handleEditClick}
        >
          <Pencil className="w-4 h-4" />
          {isEditing ? "Cancel" : "Edit Profile"}
        </Button>
      </div>

      {/* User Details */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="flex items-center gap-4">
          <Mail className="text-gray-500" />

          <p className="text-gray-700">{user?.email}</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <Phone className="text-gray-500" />

          <p className="text-gray-700">{user?.phone || "Not provided"}</p>
        </div>

        {/* Delivery Address */}
        <div className="flex items-center gap-4">
          <p className="text-gray-700">
            {user?.deliveryAddress || "Not provided"}
          </p>
        </div>

        {/* Created At */}
        <div className="flex items-center gap-4">
          <Calendar className="text-gray-500" />
          <p className="text-gray-700">
            Joined: {new Date(user?.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
