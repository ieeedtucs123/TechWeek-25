import { useState } from "react";
import { Menu, X } from "lucide-react";
import SubscribeButton from "../utils/subscribe";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About us", path: "#About" },
    { name: "About Events", path: "#SIGs" },
    { name: "Timeline", path: "#Schedule" },
    { name: "FAQS", path: "#FAQs" },
    { name: "Contact Us", path: "#Contact" },
  ];

  return (
    <nav className="w-full font-grotesk border-b border-gray-200 bg-white/95 backdrop-blur-sm fixed top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-12 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img
            src="/logo.svg"
            alt="TechWeek Logo"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            TechWeek
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-700 hover:text-gray-900 transition-colors text-lg md:text-xl font-medium relative group"
            >
              {link.name}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <SubscribeButton styleprop="px-8 py-3 font-grotesk border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 font-semibold text-base md:text-lg" content="Get Notified" />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-900 hover:bg-gray-100 p-2.5 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col px-6 py-6 space-y-2 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-lg font-medium px-5 py-3 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-5">
              <SubscribeButton styleprop="w-full px-8 py-3 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 font-semibold text-base" content="Get Notified" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
