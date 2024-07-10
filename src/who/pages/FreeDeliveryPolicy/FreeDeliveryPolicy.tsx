import { Link } from "react-router-dom";
import lorryIcon from "../../../assets/lorry-icon.svg";
import dealIcon from "../../../assets/deal-icon.svg";
import supportIcon from "../../../assets/support-icon.svg";

export const FreeDeliveryPolicy = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/3009/5686/files/Free_Delivery_Support_2048x2048.jpg?v=1526118558"
          alt="banner-delivery"
          className="object-fill object-center w-full"
        />
      </div>
      <div className="container mx-auto px-5 py-10">
        <h3 className="text-center text-[20px] font-extrabold mb-8 lg:text-[25px] xl:text-[35px] xl:mb-12">
          Free Delivery (Orders Over $200)
        </h3>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-6">
          <div className="col-span-1 mx-auto">
            <div className="rounded-2xl border-2 shadow-sm max-w-96">
              <div className="relative h-[10rem] bg-[#D91023] rounded-t-2xl">
                <img
                  src={lorryIcon}
                  alt="lorry-icon"
                  className="w-[120px] absolute left-[50%] translate-x-[-50%] bottom-[-2rem] z-10"
                />
              </div>
              <div className="pb-4 px-5 pt-8 relative z-20">
                <span className="text-center block text-[18px] mb-2">
                  Free Delivery*
                </span>
                <p className="text-justify text-[14px] font-normal mb-4">
                  When you purchase over $200 you pay nothing to have your
                  welding helmet, PAPR or spare parts delivered directly to your
                  door anywhere in Australia saving you time, hassle, petrol and
                  expense. *If you only need a few bits and pieces under $200,
                  don’t stress, a small fee of $20 will still see the products
                  turn up at your door anywhere in Australia in a few days.
                </p>
                <Link
                  to="/"
                  className="text-[13px] block text-center text-[#D91023] font-normal decoration-1 underline"
                >
                  View our Welding Helmets Welding PAPRs
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 mx-auto">
            <div className="col-span-1 rounded-2xl border-2 shadow-sm max-w-96">
              <div className="relative h-[10rem] bg-[#D91023] rounded-t-2xl">
                <img
                  src={dealIcon}
                  alt="deal-icon"
                  className="w-[120px] absolute left-[50%] translate-x-[-50%] bottom-[-2rem] z-10"
                />
              </div>
              <div className="pb-4 px-5 pt-8 relative z-20">
                <span className="text-center block text-[18px] mb-2">
                  Our Delivery Promise{" "}
                </span>
                <div className="text-justify text-[14px] font-normal mb-4">
                  <p>
                    Welding Helmets Online attempt to carry all core and fast
                    moving products in stock. We are generally able to dispatch
                    the same day you order (if you order before midday Monday -
                    Friday). With some less common parts, or if we have just
                    fulfilled large orders, we sometimes need to order stock in
                    which generally only takes 24 hours. In this case we move
                    quickly to ensure you don’t wait longer than you need to and
                    keep you up-to-date throughout the entire process. With
                    items that are stocked, our delivery times (via Australia
                    Post) are estimated as follows:
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2 mb-4">
                    <li>
                      <strong>NSW:</strong> 1- 2 days
                    </li>
                    <li>
                      <strong>Victoria:</strong> 1- 2 days
                    </li>
                    <li>
                      <strong>Tasmania:</strong> 2- 3 days
                    </li>
                    <li>
                      <strong>Queensland :</strong> 1- 3 days
                    </li>
                    <li>
                      <strong>South Australia:</strong> 4- 6 days
                    </li>
                    <li>
                      <strong>Northern Territory:</strong> 4- 6 days
                    </li>
                    <li>
                      <strong>Western Australia:</strong> 5 - 6 days
                    </li>
                  </ul>
                  <p>
                    Our standard freight goes via Australia Post (via their
                    commercial hub).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 mx-auto">
            <div className="col-span-1 rounded-2xl border-2 shadow-sm max-w-96">
              <div className="relative h-[10rem] bg-[#D91023] rounded-t-2xl">
                <img
                  src={supportIcon}
                  alt="support-icon"
                  className="w-[120px] absolute left-[50%] translate-x-[-50%] bottom-[-2rem] z-10"
                />
              </div>
              <div className="pb-4 px-5 pt-8 relative z-20">
                <span className="text-center block text-[18px] mb-2">
                  Our Legendary Support
                </span>
                <p className="text-justify text-[14px] font-normal mb-4">
                  Maybe you’re reading this because you’ve already heard about
                  our legendary service or maybe you’ve already experienced it
                  first-hand. If you’re “none of the above” then why not put us
                  to the test! Every team member is a welding helmet expert and
                  whether you are “just looking”, ready to make a decision or an
                  existing customer we are always here to help you make the
                  right decision and get the best price every time. <br />
                </p>
                <span className="font-medium block text-center text-[14px]">
                  Give us a call today on 1800 HELMET.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
