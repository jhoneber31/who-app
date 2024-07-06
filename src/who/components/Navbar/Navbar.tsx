import { CartIcon, HamburgerIcon } from "../common";

export const Navbar = () => {
  return (
    <header>
      <nav className="pt-2">
        <div className="container px-4 flex items-center gap-x-2">
          <button>
            <HamburgerIcon/>
          </button>
          <div>
            <img
              src="https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/logo_weldinghelmetsonline-C2VEEW2E.webp"
              alt="logo-img"
              className="max-w-full h-auto"
            />
          </div>
          <span className="relative">
            <CartIcon/>
            <div className="rounded-full w-[20px] h-[20px] text-[14px] absolute top-[-6px] right-[-0.4rem] text-white bg-[#d91023] flex items-center justify-center">
              <span>1</span>
            </div>
          </span>
        </div>
      </nav>
    </header>
  );
};
