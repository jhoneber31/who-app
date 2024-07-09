import { useRef } from "react";

import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

import { mockPartners } from "../../../utils";

export const OurPartners = () => {
  const flickingRef = useRef<Flicking>(null);

  const autoplay = new AutoPlay({
    duration: 1000,
    direction: "NEXT",
    stopOnHover: false,
  });

  return (
    <section className="bg-[#FFFFFF]">
      <div className="container mx-auto px-5 py-10">
        <h3 className="text-[#484848] text-[20px] lg:text-[30px] font-bold mb-8 xl:mb-10 text-center">
          OUR PARTNERS
        </h3>
        <div className="overflow-hidden">
          <Flicking
            ref={flickingRef}
            circular={true}
            plugins={[autoplay]}
            moveType={"snap"}
            align="center"
          >
            {mockPartners.concat(mockPartners).map((partner, index) => (
              <div
                className="flex items-center justify-center w-[200px] h-[100px]"
                key={index}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </Flicking>
        </div>
      </div>
    </section>
  );
};
