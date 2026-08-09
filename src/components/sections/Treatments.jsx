import { useState } from "react";
import {
  dentalServices,
  facialServices,
} from "../../data/services";
import { FaTooth } from "react-icons/fa6";
import { Sparkles } from "lucide-react";

function Treatments() {

  const [activeTab, setActiveTab] = useState("dental");

  return (
    <section
      id="treatments"
      className="
        bg-slate-50
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
        "
      >

        {/* Heading */}

        <div className="text-center">

          <p
            className="
              inline-flex
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-blue-700
              sm:px-5
              sm:text-sm
              sm:tracking-[0.2em]
            "
          >
            Our Treatments
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              leading-tight
              sm:text-5xl
              lg:mt-6
            "
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {activeTab === "dental"
              ? "Complete Dental Care"
              : "Facial Aesthetic Treatments"}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            {activeTab === "dental"
              ? "Comprehensive dental treatments to restore oral health, improve function, and create confident smiles."
              : "Advanced facial aesthetic treatments designed to enhance your natural beauty, rejuvenate your skin, and boost your confidence."}
          </p>

        </div>

        {/* Treatment Tabs */}

        <div className="mt-10 mb-10 flex justify-center sm:mt-14 sm:mb-12">

          <div className="flex w-full max-w-md rounded-3xl bg-slate-100 p-2 shadow-sm sm:w-auto sm:max-w-none sm:rounded-full">

            <button
              onClick={() => setActiveTab("dental")}
              className={`rounded-full flex-1 px-4 py-3 text-sm sm:flex-none sm:px-8 sm:text-base font-semibold transition-all duration-300 ${activeTab === "dental"
                ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-lg"
                : "text-slate-600 hover:text-blue-700"
                }`}
            >
              🦷 Dental Care
            </button>

            <button
              onClick={() => setActiveTab("facial")}
              className={`rounded-full flex-1 px-4 py-3 text-sm sm:flex-none sm:px-8 sm:text-base font-semibold transition-all duration-300 ${activeTab === "facial"
                ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg"
                : "text-slate-600 hover:text-amber-600"
                }`}
            >
              ✨ Facial Aesthetics
            </button>

          </div>

        </div>

        {/* Cards */}

        <div
          key={activeTab}
          className="
            mt-12
            grid
            items-stretch
            gap-6
            sm:mt-16
            sm:gap-8
            md:grid-cols-2
            lg:mt-20
            lg:grid-cols-3
            animate-fade
          "
        >

          {(activeTab === "dental"
            ? dentalServices
            : facialServices
          ).map((service) => (

            <div
              key={service.id}
              className={`
                group
                flex
                min-h-[340px]
                flex-col
                rounded-[30px]
                border
                bg-white
                p-1
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl

                ${activeTab === "dental"
                  ? "border-blue-100 hover:border-blue-300"
                  : "border-amber-100 hover:border-amber-300"
                }
              `}
            >


              {/* Content */}

              <div className="flex h-full flex-col p-7 sm:p-8 lg:p-10">

                {/* Icon */}

                <div
                  className={`
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    text-3xl

                    ${activeTab === "dental"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-amber-100 text-amber-700"
                    }
                  `}
                >
                  {activeTab === "dental" ? (
                    <FaTooth size={30} />
                  ) : (
                    <Sparkles size={30} />
                  )}
                </div>

                {/* Title */}

                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
                  {service.description}
                </p>

                {/* Benefits */}

                <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                  {service.benefits.map((item, index) => (

                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:text-base"
                    >

                      <span
                        className={
                          activeTab === "dental"
                            ? "font-bold text-blue-700"
                            : "font-bold text-amber-700"
                        }
                      >
                        ✓
                      </span>

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Treatments;