import React from "react";
import PropertyCard from "../../components/Properties/PropertyCard";

interface SimilarPropertiesProps {
  similarProperties?: IProperty[];
}

const SimilarProperties: React.FC<SimilarPropertiesProps> = ({
  similarProperties,
}) => {
  return (
    <div className="grid md:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 gap-6 mb-14">
      {similarProperties?.slice(0, 4).map((property) => (
        <PropertyCard key={property.id} data={property} />
      ))}
    </div>
  );
};

export default SimilarProperties;
