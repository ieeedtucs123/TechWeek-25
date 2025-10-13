import React from "react";
//import "./Footer.css";
import fb from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/instagram.svg";

export default function Footer() {
  return (
    <footer className="w-full font-grotesk">
      <div className="bg-[#111216] p-8 md:p-12 text-gray-200 shadow-lg w-full">
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Techweek logo" className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center"  />
            <span className="ml-1 text-xl font-semibold">TechWeek IEEE DTU</span>
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-8 text-sm text-gray-300">
              <li><a className="hover:underline" href="https://www.ieeedtu.in/IEEEDTU/about">About us</a></li>
              <li><a className="hover:underline" href="https://www.ieeedtu.in/IEEEDTU/events">Our events</a></li>
              <li><a className="hover:underline" href="https://www.ieeedtu.in/IEEEDTU/council">Council Members</a></li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
             <a href="https://www.instagram.com/ieee.dtu/" className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center transform transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C7FF4C] ">
              <img src={insta} alt="instagram" className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/ieeedtu" className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center transform transition-transform hover:scale-110  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C7FF4C]">
              <img src={fb} alt="facebook" className="w-4 h-4" />
            </a>
            <a href="https://x.com/IeeeDtu" className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center transform transition-transform hover:scale-110  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C7FF4C]">
              <img src={twitter} alt="twitter" className="w-4 h-4" />
            </a>
           
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-20">
         
          <div className="md:col-span-1">
            <span className="inline-block bg-[#C7FF4C] text-[#08110a] px-3 py-1 rounded-md font-semibold mb-4">
              Contact us:
            </span>

            <div className="mt-6 space-y-4 text-gray-300 text-sm">
              <div>
                <div className="text-sm">Email: <a href="mailto:contact@ieeedtu.in" className="text-gray-100">contact@ieeedtu.in</a></div>
              </div>

              <div>Phone: <span className="text-gray-100">099585 40744</span></div>
              <div className="text-sm">IEEE DTU Website: <a href="https://www.ieeedtu.in/" className="underline hover:text-white text-gray-300"> ieeedtu.in</a></div>

              <div>
                Address:
                <div className="text-gray-300">
                  Delhi Technological University, 
                  <br />
                  Shahbad Daulatpur Village, Rohini, Delhi, 110042
                </div>
              </div>
            </div>
          </div>

          
          <div className="md:col-span-2 flex justify-center md:justify-end mt-12 ">
            <div className="w-full md:w-3/4 lg:w-2/3 bg-[#1b1b1f] rounded-xl p-6 md:p-8 shadow-inner">
              <form className="flex flex-col md:flex-row gap-4 items-center">
                <label htmlFor="footer-email" className="sr-only">Enter your Email</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent border border-gray-600 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5e8f3a] transition"
                  aria-label="Email for newsletter subscription"
                />
                <button
                  type="submit"
                  className="bg-[#C7FF4C] text-[#08110a] rounded-lg px-6 py-3 font-semibold shadow-md hover:brightness-95 transition"
                >
                  Subscribe to us
                </button>
              </form>
            </div>
          </div>
        </div>

  <div className="border-t border-gray-400 mt-12" />
      
        <div className="mt-9 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <div>@{new Date().getFullYear()} IEEE DTU. All Rights Reserved.</div>
          <div> Made by IEEE DTU WebDev Team</div>
          <div>
            <a href="https://privacy.ieee.org/policies" className="underline hover:text-gray-200">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}