import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../Button";

type PropertyData = {
  id: number;
  price: number;
  location: string;
  beds: number;
  baths: number;
  size: number;
  image: string;
  date?: Date | undefined;
};

interface PropertyCardProps {
  data: PropertyData;
  actionLabel?: string;
  onAction?: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  data,
  onAction,
  actionLabel,
}) => {
  const router = useRouter();

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Stop the click event from propagating to the parent div
    if (onAction) {
      onAction();
    }
  };
  return (
    <div
      onClick={() => router.push(`/properties/${data.id}`)}
      className="flex flex-col gap-4 justify-between "
    >
      <div className="w-full relative h-[275px] cursor-pointer overflow-hidden  ">
        <Image
          src={data.image}
          className="object-cover w-full h-full"
          fill
          alt="property"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden  bg-fixed   ">
          <div className="hover:bg-black opacity-70 group transition duration-300 ease-in-out h-full p-4 flex justify-center items-center my-auto border border-white">
            <p className="text-white border-[1px] border-white px-[30px] py-[15px] hidden group-hover:block">
              VIEW DETAILS
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="">${data.price}</div>
        <div className="">{data.location}</div>
        <div className="text-gray-400 uppercase">
          {data.beds} BEDS | {data.baths} BATHS | {data.size} SQ.FT.
        </div>
        <div className="font-medium mb-2">
          {data?.date?.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
        {actionLabel && (
          <Button title={actionLabel} onClick={handleButtonClick} />
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
