import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.2 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <footer ref={footerRef} className="relative mt-20">
      {/* FAKE BACKGROUND (IMPORTANT FOR GLASS) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(246,174,34,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_40%)]"></div>

      {/* GLASS CONTAINER */}
      <div className="relative bg-[#272425] backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.4)] text-[#EEEEEE] pt-16 pb-6 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* LEFT */}
          <div
            className={`${show ? "animate-fadeUp [animation-delay:0.2s]" : "opacity-0"}`}
          >
            <div>
              <h2 className="text-2xl font-bold text-[#f6AE22]">DezyKode</h2>

              <p className="mt-4 text-sm text-[#cfcfcf] leading-relaxed">
                Dezykode IT Solutions Pvt Ltd <br />
                City Vista, A Wing, Office no- 08, <br />
                Second Floor, Fountain Road Downtown, <br />
                Ashoka Nagar, Kharadi, Pune-411014
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex gap-4 mt-5">
                <a href="#" target="_blank" className="icon">
                  <FaFacebookF />
                </a>
                <a href="#" target="_blank" className="icon">
                  <FaTwitter />
                </a>
                <a href="#" target="_blank" className="icon">
                  <FaLinkedinIn />
                </a>
                <a href="#" target="_blank" className="icon">
                  <FaInstagram />
                </a>
                <a href="#" target="_blank" className="icon">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div
            className={`${show ? "animate-fadeUp [animation-delay:0.4s]" : "opacity-0"}`}
          >
            <div>
              <h3 className="text-lg font-semibold text-[#f6AE22]">
                CONTACT US
              </h3>

              <div className="mt-4 space-y-2 text-sm text-[#cfcfcf]">
                <p>dezykode@dezykode.com</p>
                <p>info@dezykode.com</p>
                <p>+91 8793938874</p>
                <p>+91 9730822219</p>
              </div>
            </div>
          </div>
          {/* LINKS */}
          <div
            className={`${show ? "animate-fadeUp [animation-delay:0.9s]" : "opacity-0"}`}
          >
            <div>
              <h3 className="text-lg font-semibold text-[#f6AE22]">
                QUICK LINKS
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-[#cfcfcf]">
                <li className="hover:text-[#f6AE22] cursor-pointer transition">
                  <Link to={`/about`}>About Us</Link>
                </li>
                <li className="hover:text-[#f6AE22] cursor-pointer transition">
                  <Link to={`/services`}>Services</Link>
                </li>
                <li className="hover:text-[#f6AE22] cursor-pointer transition">
                  <Link to={`/courses`}>Industrial Training</Link>
                </li>
                <li className="hover:text-[#f6AE22] cursor-pointer transition">
                  <Link to={`/internship`}>Internship</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#3a3536] mt-10 pt-6 text-center text-sm text-[#cfcfcf]">
          Copyright © 2025 <span className="text-[#f6AE22]">DezyKode</span>. All
          Rights Reserved
        </div>
      </div>
    </footer>
  );
}
