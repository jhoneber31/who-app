import { useState } from "react"
import { SearchIcon,ArrowDown, ArrowRigth } from "../common"
import { routesNav } from "../../utils";

type OptionsFooter = {
  menu:boolean;
  contact:boolean;
  terms:boolean;
}

export const Footer = () => {

  const [showOptions, setShowOptions] = useState<OptionsFooter>({
    menu:false,
    contact:false,
    terms:false,
  });

  const toggleMenuOption = (name: keyof OptionsFooter) => {
    setShowOptions((prevOptions)=>({
      ...prevOptions,
      [name]:!prevOptions[name],
    }))
  }

  return (
    <footer className="bg-[#393939]">
      <div className="container mx-auto px-5 pt-10">
        <div className="flex flex-col items-center xl:flex-row">
          <div className="flex flex-col xl:flex-row items-center">
            <img src="https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/logo_weldinghelmetsonline-C2VEEW2E.webp"   alt="logo-footer"className="max-w-[70%] xl:max-w-[50%]" />
            <div className="media flex gap-x-4 justify-center xl:pl-4">
              <a href="">
                <img src="/src/assets/facebook-icon.svg" alt="facebook-icon"   className="w-[24px] xl:w-[30px]" />
              </a>
              <a href="">
                <img src="/src/assets/instagram-icon.svg" alt="instagram-icon" className="w-[24px] xl:w-[30px]" />
              </a>
              <a href="">
                <img src="/src/assets/youtube-icon.svg" alt="youtube-icon"     className="w-[24px] xl:w-[30px]" />
              </a>
              <a href="">
                <img src="/src/assets/tiktok-icon.svg" alt="tiktok-icon"       className="w-[24px] xl:w-[30px]" />
              </a>
            </div>
          </div>
          <div className="mt-4 mb-5 flex flex-col xl:my-0 xl:w-[50rem]">
            <span className="text-[#FFFFFF] font-normal text-[18px] mb-3">
              Subscribe to receive promotions and offers
            </span>
            <form>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Email address" 
                  className="rounded-lg border border-[#80808040] text-[#000] w-full pl-4 py-3 text-[14px] xl:py-2 xl:text-[16px] shadow font-normal bg-[#FFFFFF]"
                />
                <button className="w-[47px] bg-[#d91023] absolute top-0 right-0 flex items-center justify-center h-full cursor-pointer rounded-tr-lg rounded-br-lg">
                  <SearchIcon/>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col xl:grid xl:grid-cols-4 xl:mt-8 xl:gap-x-20">
          <div className={`pb-2 ${!showOptions.menu ? 'border-b border-[#FFFFFF]' : ''} xl:!border-none`}>
            <div className="flex justify-between items-center text-[#FFFFFF] text-[16px] font-semibold">
              <span className="xl:text-[18px]">Menu</span>
              <div className="xl:hidden" onClick={() =>toggleMenuOption('menu')}>
                {
                  showOptions.menu ? <ArrowDown/> : <ArrowRigth/>
                }
              </div>
            </div>
            {
              showOptions.menu && (
                <ul className="bg-[#4a4a4a] space-y-4 py-4 px-4 text-white text-[14px] font-normal xl:hidden">
                  {
                    routesNav.map((route, index) => (
                      <li key={index} className="cursor-pointer">
                        {route.name}
                      </li>
                    ))
                  }
                </ul>
              )
            }
            <ul className="hidden xl:block space-y-4 py-4 text-white text-[14px] xl:text-[16px] font-normal">
              {
                routesNav.map((route, index) => (
                  <li key={index} className="cursor-pointer">
                    {route.name}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={`pb-2 pt-4 ${!showOptions.contact ? 'border-b border-[#FFFFFF]' : ''} xl:!border-none xl:pt-0`}>
            <div className="flex justify-between items-center text-[#FFFFFF] text-[16px] font-semibold">
              <span className="xl:text-[18px]">Contact</span>
              <div className="xl:hidden" onClick={() =>toggleMenuOption('contact')}>
                {
                  showOptions.contact ? <ArrowDown/> : <ArrowRigth/>
                }
              </div>
            </div>
            {
              showOptions.contact && (
                <div className="bg-[#4a4a4a] py-4 px-4 text-white text-[14px] font-normal xl:hidden">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et ad rerum expedita debitis quisquam illo delectus dolores quaerat. Doloribus sit corrupti cum a possimus deleniti. Amet pariatur in reiciendis.</p>
                </div>
              )
            }
            <div className="hidden xl:block text-white text-[16px] font-normal">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et ad rerum expedita debitis quisquam illo delectus dolores quaerat. Doloribus sit corrupti cum a possimus deleniti. Amet pariatur in reiciendis.</p>
            </div>
          </div>
          <div className={`pb-2 pt-4 ${!showOptions.terms ? 'border-b border-[#FFFFFF]' : ''} xl:!border-none xl:pt-0`}>
            <div className="flex justify-between items-center text-[#FFFFFF] text-[16px] font-semibold">
              <span className="xl:text-[18px]">Terms & conditions</span>
              <div className="xl:hidden" onClick={() =>toggleMenuOption('terms')}>
                {
                  showOptions.terms ? <ArrowDown/> : <ArrowRigth/>
                }
              </div>
            </div>
            {
              showOptions.terms && (
                <div className="bg-[#4a4a4a] py-4 px-4 text-white text-[14px] font-normal hidden">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et ad rerum expedita debitis quisquam illo delectus dolores quaerat. Doloribus sit corrupti cum a possimus deleniti. Amet pariatur in reiciendis.</p>
                </div>
              )
            }
            <div className="hidden xl:block text-white text-[16x] font-normal">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et ad rerum expedita debitis quisquam illo delectus dolores quaerat. Doloribus sit corrupti cum a possimus deleniti. Amet pariatur in reiciendis.</p>
            </div>
          </div>
          <div className="pb-2 pt-4 xl:pt-0">
            <span className="text-[#FFFFFF] text-[16px] font-semibold xl:text-[18px]">
              Payment methods
            </span>
            <div className="grid grid-cols-3 max-w-[15rem] mt-2">
              <img src='/src/assets/visa-icon.svg' alt="visa-icon"  className="col-span-1 w-[35px] lg:w-[50px] xl:w-[60px] cursor-pointer"/>
              <img src='/src/assets/visa-icon-2.svg'alt="visa-icon" className="col-span-1 w-[35px] lg:w-[50px] xl:w-[60px] cursor-pointer"/>
              <img src='/src/assets/visa-icon.svg' alt="visa-icon"  className="col-span-1 w-[35px] lg:w-[50px] xl:w-[60px] cursor-pointer"/>
              <img src='/src/assets/visa-icon.svg' alt="visa-icon"  className="col-span-1 w-[35px] lg:w-[50px] xl:w-[60px] cursor-pointer"/>
              <img src='/src/assets/visa-icon.svg' alt="visa-icon"  className="col-span-1 w-[35px] lg:w-[50px] xl:w-[60px] cursor-pointer"/>
              <img src='/src/assets/visa-icon.svg' alt="visa-icon"  className="col-span-1 w-[35px] lg:w-[50px] xl:w-[60px] cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#292929] text-center py-2.5">
        <small className="text-[14px] text-[#FFFFFF] font-normal">Cosmallyright © 2024 Welding Helmets Online.</small>
      </div>
    </footer>
  )
}
