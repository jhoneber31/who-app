import { Link, useNavigate } from "react-router-dom";
import { routesNav } from "../../utils";
import {
  ArrowDown,
  CallIcon,
  CartIcon,
  CloseIcon,
  HamburgerIcon,
  SearchIcon,
} from "../common";
import { useState } from "react";
import { useAppSelector } from "../../store/hooks";

export const Navbar = () => {
  const [showNavMobile, setShowNavMobile] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const navigate = useNavigate();

  const quantity = useAppSelector(state => state.cart.quantity);

  const goToHome = () => {
    navigate("/");
  }

  const toggleNavMobile = () => {
    if(showNavMobile) {
      setIsClosing(true);
      setTimeout(() => {
        setShowNavMobile(false);
        setIsClosing(false);
      }, 1000);
    } else {
      setShowNavMobile(true);
    }
  };

  return (
    <>
      {
        showNavMobile && (
          <>
            <div className="fixed top-0 left-0 h-full w-full bg-black z-[80] bg-opacity-75" onClick={toggleNavMobile}></div>
            <div className={`fixed top-0 left-0 bg-[#FFFFFF] h-full w-64 z-[90] animate__animated ${isClosing ? 'animate__slideOutLeft': 'animate__slideInLeft'}`}>
              <div className="px-6 pt-8 pb-4 flex justify-between items-center border-b-2 border-[#e0e0e0]">
                <span className="text-[#3F3F40] text-[20px] font-medium">Hello!</span>
                <div
                  onClick={toggleNavMobile}
                >
                  <CloseIcon/>
                </div>
              </div>
              <ul>
                {
                  routesNav.map((route, index) => (
                    <li className="px-6 py-4 font-medium" key={index}>
                      <Link to={route.path} onClick={toggleNavMobile}>
                        {route.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </>
        )
      }
      <header className="bg-[#FFFFFF] sticky top-0 left-0 lg:static z-50">
        <nav className="pt-2 mb-2 flex justify-center lg:pt-4 lg:mb-0">
          <div className="container mx-auto flex items-center justify-between gap-x-2 px-2 md:px-4 md:gap-x-4 xl:gap-x-6 lg:px-0 xl:justify-between max-w-[90vw] md:max-w-[95vw] xl:max-w-[90vw]">
            <button className="lg:hidden" onClick={toggleNavMobile}>
              <HamburgerIcon />
            </button>
            <div
              onClick={goToHome}
            >
              <img
                src="https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/logo_weldinghelmetsonline-C2VEEW2E.webp"
                alt="logo-img"
                className="max-w-full h-auto w-96 lg:w-80 2xl:w-96 cursor-pointer"
              />
            </div>
            <div className="hidden md:block">
              <form>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by Part Number or Product Name"
                    className="rounded-lg border border-[#80808040] text-[#000] w-[40vw] pl-4 py-3 text-[14px] 2xl:w-[50vw] xl:py-4 xl:text-[16px] shadow font-normal bg-[#FFFFFF]"
                  />
                  <button className="w-[47px] bg-[#d91023] absolute top-0 right-0 flex items-center justify-center h-full cursor-pointer rounded-tr-lg rounded-br-lg">
                    <SearchIcon />
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:block">
              <a href="/" className="flex items-center justify-center gap-x-2">
                <CallIcon />
                <div className="flex flex-col">
                  <p className="text-gray-700 font-bold text-[15px]">
                    Speak to an Expert
                  </p>
                  <p className="text-gray-700 font-normal text-[14px]">
                    1800 HELMET (1800 435 638)
                  </p>
                </div>
              </a>
            </div>
            <span className="relative cursor-pointer">
              <CartIcon />
              <div className="rounded-full w-[20px] h-[20px] text-[14px] absolute top-[-6px] right-[-0.4rem] text-white bg-[#d91023] flex items-center justify-center">
                <span>{quantity}</span>
              </div>
            </span>
          </div>
        </nav>
        <div className="hidden lg:flex lg:justify-center h-14">
          <ul className="flex items-center container mx-auto lg:max-w-[95vw] xl:max-w-[90vw] gap-x-4 xl:gap-x-6 font-bold text-[#374151]">
            {routesNav.map((route, index) => (
              <li key={index} className="lg:text-[14px] xl:text-[16px]">
                {index <= 1 ? (
                  <div className="flex">
                    <button>{route.name}</button>
                    <ArrowDown />
                  </div>
                ) : (
                  <Link to={route.path}>{route.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center md:hidden px-2">
          <div className="container mx-auto max-w-[90vw]">
            <form className="">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by Part Number or Product Name"
                  className="rounded-lg border border-[#80808040] text-[#000] max-w-full w-full pl-4 py-3 text-[14px] rounded-tr-lg rounded-br-lg shadow font-medium bg-[#FFFFFF]"
                />
                <button className="w-[47px] bg-[#d91023] absolute top-0 right-0 flex items-center justify-center h-full cursor-pointer rounded-tr-lg rounded-br-lg">
                  <SearchIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center lg:hidden">
          <div className="mx-auto container">
            <a href="/" className="flex items-center justify-center gap-x-2">
              <CallIcon />
              <div className="flex gap-x-1 text-[12px] md:text-[14px]">
                <p className="text-gray-700 font-bold">Speak to an Expert</p>
                <p className="text-gray-700 font-normal">
                  1800 HELMET (1800 435 638)
                </p>
              </div>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
