import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
import AppStore from "../../assets/App_store.png";
import GooglePlay from "../../assets/google-play.svg";

const Footer = () => {
  return (
    <>
      <div>
        <div className="bg-gray-100 h-44 flex-row justify-center">
          <div className="grid grid-cols-5 px-16 py-4">
            <div className="">
              <h1 className="text-cyan-950 font-bold uppercase">
                Popular Locations
              </h1>
              <div className="text-sm text-gray-500">
                <p className="cursor-pointer hover:text-gray-900">Kolkata</p>
                <p className="cursor-pointer hover:text-gray-900">Mumbai</p>
                <p className="cursor-pointer hover:text-gray-900">Chennai</p>
                <p className="cursor-pointer hover:text-gray-900">Pune</p>
              </div>
            </div>
            <div className="">
              <h1 className="text-cyan-950 font-bold uppercase">
                Trending Locations
              </h1>
              <div className="text-sm text-gray-500">
                <p className="cursor-pointer hover:text-gray-900">Kolkata</p>
                <p className="cursor-pointer hover:text-gray-900">Mumbai</p>
                <p className="cursor-pointer hover:text-gray-900">Chennai</p>
                <p className="cursor-pointer hover:text-gray-900">Pune</p>
              </div>
            </div>
            <div className="">
              <h1 className="text-cyan-950 font-bold uppercase">About Us</h1>
              <div className="text-sm text-gray-500">
                <p className="cursor-pointer hover:text-gray-900">Contact Us</p>
                <p className="cursor-pointer hover:text-gray-900">Tech@OLX</p>
              </div>
            </div>
            <div className="">
              <h1 className="text-cyan-950 font-bold uppercase">OLX</h1>
              <div className="text-sm text-gray-500">
                <p className="cursor-pointer hover:text-gray-900">Blog</p>
                <p className="cursor-pointer hover:text-gray-900">Mumbai</p>
                <p className="cursor-pointer hover:text-gray-900">Chennai</p>
                <p className="cursor-pointer hover:text-gray-900">Pune</p>
              </div>
            </div>
            <div className="">
              <h1 className="text-cyan-950 font-bold uppercase">Follow Us</h1>
              <div className="flex gap-3 py-2">
                <TiSocialFacebook />
                <SlSocialInstagram />
                <TiSocialTwitter />
                <SlSocialYoutube />
              </div>
              <div>
                <div className="flex w-20 h-14 gap-2 items-center py-16">
                  <img className="h-16" src={GooglePlay} alt="" />
                  <img className="h-11" src={AppStore} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cyan-950 h-14">
          <div className="flex justify-between text-sm px-6 pt-4">
            <p className="text-white">Help-Sitemap</p>
            <p className="text-white">
              All rights reserved &copy; {new Date().getFullYear()} OLX
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
