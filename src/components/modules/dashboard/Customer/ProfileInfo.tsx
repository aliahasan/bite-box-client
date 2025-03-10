"use client";
import { Button } from "@/components/ui/button";
import { IUserProfile } from "@/types";
import { Calendar, Mail, MapPin, Pencil, Phone, Utensils } from "lucide-react";
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
    />
  ) : (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-none border rounded-xl p-6 space-y-6">
      {/* Profile Header */}
      <div className="relative flex items-center gap-6 border-b pb-6">
        {/* Profile Image */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300">
          {user?.photo ? (
            <Image
              src={user.photo}
              alt={user?.name || "User"}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-600 text-xl font-semibold">
              {user?.name?.charAt(0) || "U"}
            </div>
          )}
        </div>

        {/* User Info */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            {user?.name || "Unknown"}
          </h1>
          <p className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full inline-block">
            {user?.role?.toUpperCase() || "USER"}
          </p>
        </div>

        {/* Edit Button */}
        <Button
          className="ml-auto px-4 py-2 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          onClick={handleEditClick}
        >
          <Pencil className="w-4 h-4" />
          {isEditing ? "Cancel" : "Edit Profile"}
        </Button>
      </div>

      {/* User Details */}
      <div className="grid md:grid-cols-2 gap-6 text-gray-700">
        {/* Email */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md">
          <Mail className="text-gray-500" />
          <p>{user?.email || "Not provided"}</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md">
          <Phone className="text-gray-500" />
          <p>{user?.phone || "Not provided"}</p>
        </div>

        {/* Delivery Address */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md">
          <MapPin className="text-gray-500" />
          <p>{user?.deliveryAddress || "Not provided"}</p>
        </div>

        {/* Preferred Cuisine */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md">
          <Utensils className="text-gray-500" />
          <p>{user?.preferredCuisine || "Not specified"}</p>
        </div>

        {/* Dietary Preferences */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md">
          <p className="font-medium">Dietary Preferences:</p>
          {user?.dietaryPreferences?.length > 0 ? (
            <p className="text-gray-600">
              {user.dietaryPreferences.join(", ")}
            </p>
          ) : (
            <p className="text-gray-400">None</p>
          )}
        </div>

        {/* Dietary Restrictions */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md">
          <p className="font-medium">Dietary Restrictions:</p>
          {user?.dietaryRestrictions?.length > 0 ? (
            <p className="text-gray-600">
              {user.dietaryRestrictions.join(", ")}
            </p>
          ) : (
            <p className="text-gray-400">None</p>
          )}
        </div>

        {/* Created At */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md col-span-full">
          <Calendar className="text-gray-500" />
          <p>
            Joined:{" "}
            {user?.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
