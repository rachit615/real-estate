"use client";
import React, { useEffect, useMemo, useState } from "react";
import Container from "../Container";
import PropertyCard from "./PropertyCard";
import { useSelector } from "react-redux";
import Button from "../Button";
import CategoryTabs from "../CategoryTabs/CategoryTabs";
import EmptyItems from "../EmptyItems/EmptyItems";
import axios from "axios";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

interface PropertiesProps {
  currentUser?: any;
}

const Properties: React.FC<PropertiesProps> = ({ currentUser }) => {
  const dispatch: Dispatch<any> = useDispatch();

  dispatch({ type: "SET_USER_ID", id: currentUser?.id });

  const properties = useSelector(
    (state: RootState) => state.booking.properties
  );

  const [category, setCategory] = useState("Living House");
  const [visibleProperties, setVisibleProperties] = useState<IProperty[]>([]);

  const [loadedCount, setLoadedCount] = useState(8);

  const filterProperties = useMemo(() => {
    return properties.filter((property) => property.category === category);
  }, [category, properties]);

  const handleTabSelect = (category: string) => {
    setCategory(category);
  };

  useEffect(() => {
    setLoadedCount(8);
    setVisibleProperties(filterProperties.slice(0, 8));
  }, [filterProperties, category]);

  const loadMore = () => {
    const nextVisibleProperties = filterProperties.slice(
      loadedCount,
      loadedCount + 8
    );
    setVisibleProperties([...visibleProperties, ...nextVisibleProperties]);
    setLoadedCount(loadedCount + 8);
  };

  return (
    <div className="mt-[100px]">
      <Container>
        <div className="flex flex-col items-center">
          <span className="md:pb-4 pb-1 md:text-3xl text-base tracking-wider">
            LIST OF PROPERTIES
          </span>
          <span className="md:pb-[72px] pb-8 text-xs md:text-base mx:auto ">
            Discover an exquisite collection of prime properties featuring
            luxurious Laoreet-style living spaces, designed to evoke a sense of
            magnificence.
          </span>

          <CategoryTabs
            categories={[
              "Living House",
              "House Villa",
              "House Apartments",
              "Office Floors",
            ]}
            activeCategory={category}
            onSelect={handleTabSelect}
          />
        </div>
      </Container>

      <div className="">
        <Container>
          {visibleProperties.length > 0 ? (
            <div
              className="pt-16 pb-5 md:pb-20 grid md:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 
        gap-x-6 gap-y-12
        "
            >
              {visibleProperties?.map((property) => (
                <PropertyCard key={property.id} data={property} />
              ))}
            </div>
          ) : (
            <div className="mt-10 md:mt-14">
              <EmptyItems
                title="No exact matches found."
                showReset
                setReset={() => setCategory("Living House")}
              />
            </div>
          )}
        </Container>
      </div>
      <Container>
        <div className="flex items-center justify-center mb-14">
          {visibleProperties.length < filterProperties.length && (
            <Button title="load more properties" toUpper onClick={loadMore} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default Properties;
