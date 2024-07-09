import { useState } from "react";
import { ProfileVerification, StarIcon } from "../../../components/common";

type TypeInformation = {
  description: boolean;
  reviews: boolean;
};

export const DetailProduct = () => {
  const [typeInformation, setTypeInformation] = useState<TypeInformation>({
    description: true,
    reviews: false,
  });

  const toggleTypeInformation = (name: keyof TypeInformation) => {
    if (name === "description") {
      setTypeInformation({
        description: true,
        reviews: false,
      });
    } else {
      setTypeInformation({
        description: false,
        reviews: true,
      });
    }
  };

  const reviews = Array(10).fill(null);
  const iconStars = Array(5).fill(null);

  return (
    <div className="mt-6">
      <div className="w-full flex gap-x-5 justify-center py-3 border-b-2">
        <span
          className={`${
            typeInformation.description ? "text-[#D91023]" : ""
          } font-medium cursor-pointer`}
          onClick={() => toggleTypeInformation("description")}
        >
          Description
        </span>
        <span
          className={`${
            typeInformation.reviews ? "text-[#D91023]" : ""
          } font-medium cursor-pointer`}
          onClick={() => toggleTypeInformation("reviews")}
        >
          Reviews (10)
        </span>
      </div>
      <div className="py-4">
      {
        typeInformation.description ? (
          <p className="text-justify font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quas neque nulla possimus aut cumque dolorum optio quibusdam impedit, esse distinctio dignissimos quisquam amet deserunt molestias? Aperiam velit molestias consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum similique quisquam est incidunt sed odio esse ut ipsa autem, voluptatibus tenetur doloremque quam. Distinctio optio cumque architecto esse quisquam recusandae. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quas neque nulla possimus aut cumque dolorum optio quibusdam impedit, esse distinctio dignissimos quisquam amet deserunt molestias? Aperiam velit molestias consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum similique quisquam est incidunt sed odio esse ut ipsa autem, voluptatibus tenetur doloremque quam. Distinctio optio cumque architecto esse quisquam recusandae. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quas neque nulla possimus aut cumque dolorum optio quibusdam impedit, esse distinctio dignissimos quisquam amet deserunt molestias? Aperiam velit molestias consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum similique quisquam est incidunt sed odio esse ut ipsa autem, voluptatibus tenetur doloremque quam. Distinctio optio cumque architecto esse quisquam recusandae.
          </p>
        ) : (
          <div className="overflow-x-scroll flex gap-x-4 lg:gap-x-12">
            {
              reviews.map((_, index) => (
                <div key={index} className="rounded-lg border-2 min-w-[65%] sm:min-w-[30%] lg:min-w-[20%] xl:min-w-[15%]">
                  <img src="https://cdn.shopify.com/s/files/1/3009/5686/files/84gpEcvQO_mid.jpg?v=1708617408" alt="user-image" />
                  <div className="p-3">
                    <div className="flex items-center">
                      <h3 className="text-[16px] mr-2">
                        Trent G.
                      </h3>
                      <ProfileVerification/>
                    </div>
                    <small className="font-normal text-[#00000066]">16/3/2023</small>
                    <div className="flex gap-x-1 mt-1">
                      {
                        iconStars.map((_, index) => (
                          <StarIcon key={index}/>
                        ))
                      }
                    </div>
                    <p className="text-[14px] text-justify mt-3 font-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae pariatur repellat possimus quos, molestias at consectetur dignissimos tempora? Consequatur ut in saepe voluptatum animi sit iste ullam minima modi?
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        )
      }
      </div>
    </div>
  );
};
