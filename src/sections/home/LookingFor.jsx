import { Code, Smartphone, Globe } from "lucide-react";
import trainingImg from "../../assets/images/Training.svg";
import internshipImg from "../../assets/images/Internship.svg";
import servicesImg from "../../assets/images/Services.svg";

export default function LookingFor() {
  return (
    <section className="bg-[#EFE6D5] text-[#BB9C87] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      {/* TITLE */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          What you Looking For?
        </h2>

        <div className="w-20 h-1 bg-[#a37e65] mx-auto mt-3 rounded-full"></div>

        <p className="mt-6 text-[#242725] max-w-2xl mx-auto">
          We offer a wide range of services to help you grow in the tech
          industry.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#F5F6F0] p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:bg-[#dde3ef] hover:shadow-[0_0_25px_rgba(246,174,34,0.3)]">
          <img
            src={trainingImg}
            alt="training"
            className="w-25 h-25 mx-auto object-contain"
          />
          <h3 className="mt-3 text-lg sm:text-xl text-[#272425] font-semibold">
            Looking for Training?
          </h3>
          <p className="mt-2 text-sm text-[#272425] leading-relaxed">
            We offer a variety of corporate level training programs tailored for
            both IT and Non-IT Professionals, catering to freshers as well as
            experienced candidates.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="bg-[#F6AE22] text-black px-5 py-2.5 rounded-lg font-medium hover:bg-[#e09c1f] transition">
              Know more
            </button>
          </div>
        </div>

        <div className="bg-[#F5F6F0] p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:bg-[#dde3ef] hover:shadow-[0_0_25px_rgba(246,174,34,0.3)]">
          <img
            src={internshipImg}
            alt="internship"
            className="w-25 h-25 mx-auto object-contain"
          />
          <h3 className="mt-3 text-lg sm:text-xl text-[#272425] font-semibold">
            Looking for Internship?
          </h3>
          <p className="mt-2 text-sm text-[#272425] leading-relaxed">
            We offer live project internships specifically designed for IT and
            Non-IT Professionals those looking to enhance their expertise and
            kickstart a career in IT.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="bg-[#F6AE22] text-black px-5 py-2.5 rounded-lg font-medium hover:bg-[#e09c1f] transition">
              Know more
            </button>
          </div>
        </div>

        <div className="bg-[#F5F6F0] p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:bg-[#dde3ef] hover:shadow-[0_0_25px_rgba(246,174,34,0.3)]">
          <img
            src={servicesImg}
            alt="services"
            className="w-25 h-25 mx-auto object-contain"
          />
          <h3 className="mt-3 text-lg sm:text-xl text-[#272425] font-semibold">
            Services looking for?
          </h3>
          <p className="mt-2 text-sm text-[#272425] leading-relaxed">
            As an IT professional company leveraging the latest technology, we
            provide comprehensive, budget-friendly solutions tailored to your
            needs.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="bg-[#F6AE22] text-black px-5 py-2.5 rounded-lg font-medium hover:bg-[#e09c1f] transition">
              Know more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
