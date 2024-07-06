import { CallIcon, CartIcon, HamburgerIcon, SearchIcon } from "../common";

export const Navbar = () => {
  return (
    <header>
      <nav className="pt-2 mb-2 flex justify-center">
        <div className="container flex items-center gap-x-2 max-w-[90vw] md:max-w-[95vw] md:px-4 md:gap-x-4">
          <button>
            <HamburgerIcon/>
          </button>
          <div>
            <img
              src="https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/logo_weldinghelmetsonline-C2VEEW2E.webp"
              alt="logo-img"
              className="max-w-full h-auto w-96"
            />
          </div>
          <div className="hidden md:block">
            <form>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search by Part Number or Product Name" 
                  className="rounded-sm border border-[#80808040] text-[#000] w-[40vw] pl-4 py-3 text-[14px]"
                />
                <button className="w-[47px] bg-[#d91023] absolute top-0 right-0 flex items-center justify-center h-full cursor-pointer">
                  <SearchIcon/>
                </button>
              </div>
            </form>
          </div>
          <span className="relative">
            <CartIcon/>
            <div className="rounded-full w-[20px] h-[20px] text-[14px] absolute top-[-6px] right-[-0.4rem] text-white bg-[#d91023] flex items-center justify-center">
              <span>1</span>
            </div>
          </span>
        </div>
      </nav>
      <div className="flex justify-center items-center md:hidden">
        <form>
          <div className="relative">
            <input 
              type="text"
              placeholder="Search by Part Number or Product Name" 
              className="rounded-sm border border-[#80808040] text-[#000] w-[90vw] pl-4 py-3 text-[14px]"
            />
            <button className="w-[47px] bg-[#d91023] absolute top-0 right-0 flex items-center justify-center h-full cursor-pointer">
              <SearchIcon/>
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <div className="mx-auto container">
          <a href="/" className="flex items-center justify-center gap-x-2">
            <CallIcon/>
            <div className="flex gap-x-1 text-[12px] md:text-[18px]">
              <p className="text-gray-700 font-bold">Speak to an Expert</p>
              <p className="text-gray-700 font-normal">1800 HELMET (1800 435 638)</p>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};
