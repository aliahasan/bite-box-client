"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cities } from "@/constant/cities";
import { updateShippingAddress } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

const Address = () => {
  const dispatch = useAppDispatch();
  const handleCitySelect = (city: string) => {
    dispatch(updateShippingAddress(city));
  };

  return (
    <div className="">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold">Address</h1>
        <p className="text-gray-500">Select your address.</p>
        <div className="mt-5">
          <Select onValueChange={(city) => handleCitySelect(city)}>
            <SelectTrigger className="mb-5">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Address;
