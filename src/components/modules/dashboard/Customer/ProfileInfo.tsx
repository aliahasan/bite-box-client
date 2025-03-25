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
    <div className="w-full bg-white px-4 py-8">
      {/* Full-width container */}
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-8 border-b">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
            {user?.photo ? (
              <Image
                src={user.photo}
                alt={user?.name || "User"}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-600 text-4xl font-semibold">
                {user?.name?.charAt(0) || "U"}
              </div>
            )}
          </div>

          {/* User Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">
              {user?.name || "Unknown"}
            </h1>
            <p className="text-gray-600 text-lg mt-1">
              {user?.email || "No email provided"}
            </p>
            <p className="mt-2 inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              {user?.role?.toUpperCase() || "USER"}
            </p>
          </div>

          {/* Edit Button */}
          <Button
            className="md:ml-auto mt-4 md:mt-0 px-6 py-3 flex items-center gap-2 text-white rounded-lg shadow-sm"
            onClick={handleEditClick}
          >
            <Pencil className="w-5 h-5" />
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
        </div>

        {/* User Details - Full width grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}
          <div className="p-6 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-4">
              <Mail className="text-orange-500 w-6 h-6" />
              <h3 className="font-medium text-gray-500">Email</h3>
            </div>
            <p className="mt-2 text-lg font-medium text-gray-900">
              {user?.email || "Not provided"}
            </p>
          </div>

          {/* Phone */}
          <div className="p-6 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-4">
              <Phone className="text-orange-500 w-6 h-6" />
              <h3 className="font-medium text-gray-500">Phone</h3>
            </div>
            <p className="mt-2 text-lg font-medium text-gray-900">
              {user?.phone || "Not provided"}
            </p>
          </div>

          {/* Delivery Address */}
          <div className="p-6 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-4">
              <MapPin className="text-orange-500 w-6 h-6" />
              <h3 className="font-medium text-gray-500">Address</h3>
            </div>
            <p className="mt-2 text-lg font-medium text-gray-900">
              {user?.deliveryAddress || "Not provided"}
            </p>
          </div>

          {/* Preferred Cuisine */}
          <div className="p-6 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-4">
              <Utensils className="text-orange-500 w-6 h-6" />
              <h3 className="font-medium text-gray-500">Preferred Cuisine</h3>
            </div>
            <p className="mt-2 text-lg font-medium text-gray-900">
              {user?.preferredCuisine || "Not specified"}
            </p>
          </div>

          {/* Dietary Preferences */}
          <div className="p-6 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <h3 className="font-medium text-gray-500">Dietary Preferences</h3>
            {user?.dietaryPreferences?.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {user.dietaryPreferences.map((pref) => (
                  <span
                    key={pref}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {pref}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-gray-400">None</p>
            )}
          </div>

          {/* Dietary Restrictions */}
          <div className="p-6 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <h3 className="font-medium text-gray-500">Dietary Restrictions</h3>
            {user?.dietaryRestrictions?.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {user.dietaryRestrictions.map((restriction) => (
                  <span
                    key={restriction}
                    className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                  >
                    {restriction}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-gray-400">None</p>
            )}
          </div>

          {/* Created At */}
          <div className="p-6 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors col-span-full lg:col-span-1">
            <div className="flex items-center gap-4">
              <Calendar className="text-gray-500 w-6 h-6" />
              <h3 className="font-medium text-gray-500">Member Since</h3>
            </div>
            <p className="mt-2 text-lg font-medium text-gray-900">
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Unknown"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
