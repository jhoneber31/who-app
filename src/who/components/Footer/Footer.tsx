import { useState } from "react"
import { SearchIcon,ArrowDown, ArrowRigth } from "../common"
import { routesNav } from "../../utils";

import facebookIcon from '../../../assets/facebook-icon.svg';
import instagramIcon from '../../../assets/instagram-icon.svg';
import youtubeIcon from '../../../assets/youtube-icon.svg';
import tiktokIcon from '../../../assets/tiktok-icon.svg';
import visaIcon from '../../../assets/visa-icon.svg';
import mastercardIcon from '../../../assets/mastercard-icon.svg';
import americanIcon from '../../../assets/american-express-icon.svg';
import { Link } from "react-router-dom";


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
              <a href="https://es-la.facebook.com/" target="_blank">
                <img src={facebookIcon} alt="facebook-icon"   className="w-[24px] xl:w-[30px]" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={instagramIcon} alt="instagram-icon" className="w-[24px] xl:w-[30px]" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <img src={youtubeIcon} alt="youtube-icon"     className="w-[24px] xl:w-[30px]" />
              </a>
              <a href="https://ads.tiktok.com/i18n/login?redirect=https%3A%2F%2Fads.tiktok.com%2Fi18n%2Fhome%3Flang%3Den%26attr_source%3Dbing%26attr_medium%3Dsearch-br-ad%26attr_adgroup_id%3D1333709979901523%26attr_term%3Dbusiness%2520account%2520tiktok%26msclkid%3D0bd7fdaea5611c4fb9949b201ef470ec" target="_blank">
                <img src={tiktokIcon} alt="tiktok-icon"       className="w-[24px] xl:w-[30px]" />
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
                        <Link to={route.path}>
                          {route.name}
                        </Link>
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
                    <Link to={route.path}>
                      {route.name}
                    </Link>
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
            <div className="hidden xl:block text-white text-[16px] font-normal pt-4">
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
                <div className="bg-[#4a4a4a] py-4 px-4 text-white text-[14px] font-normal xl:hidden">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et ad rerum expedita debitis quisquam illo delectus dolores quaerat. Doloribus sit corrupti cum a possimus deleniti. Amet pariatur in reiciendis.</p>
                </div>
              )
            }
            <div className="hidden xl:block text-white text-[16x] font-normal pt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et ad rerum expedita debitis quisquam illo delectus dolores quaerat. Doloribus sit corrupti cum a possimus deleniti. Amet pariatur in reiciendis.</p>
            </div>
          </div>
          <div className="pb-2 pt-4 xl:pt-0">
            <span className="text-[#FFFFFF] text-[16px] font-semibold xl:text-[18px]">
              Payment methods
            </span>
            <div className="grid grid-cols-3 max-w-[15rem] mt-2">
              <div className="flex items-center justify-center">
                <img src={visaIcon} alt="visa-icon"  className="col-span-1 w-[100px]"/>
              </div>
              <div>
                <img src={mastercardIcon} alt="visa-icon" className="col-span-1 w-[60px]"/>
              </div>
              <div>
                <img src={americanIcon} alt="visa-icon"  className="col-span-1 w-[60px]"/>
              </div>
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
