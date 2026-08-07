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
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p
            className="
              inline-flex
              rounded-full
              bg-blue-100
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-700
            "
          >
            Our Treatments
          </p>

          <h2
            className="mt-6 text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {activeTab === "dental"
              ? "Complete Dental Care"
              : "Facial Aesthetic Treatments"}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {activeTab === "dental"
              ? "Comprehensive dental treatments to restore oral health, improve function, and create confident smiles."
              : "Advanced facial aesthetic treatments designed to enhance your natural beauty, rejuvenate your skin, and boost your confidence."}
          </p>

        </div>

        {/* Treatment Tabs */}

        <div className="mt-14 mb-12 flex justify-center">

          <div className="flex rounded-full bg-slate-100 p-2 shadow-sm">

            <button
              onClick={() => setActiveTab("dental")}
              className={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${activeTab === "dental"
                ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-lg"
                : "text-slate-600 hover:text-blue-700"
                }`}
            >
              🦷 Dental Care
            </button>

            <button
              onClick={() => setActiveTab("facial")}
              className={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${activeTab === "facial"
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
            mt-20
            grid
            items-stretch
            gap-8
            md:grid-cols-2
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

              <div className="flex h-full flex-col p-10">

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

                <h3 className="mt-2 text-2xl font-bold">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-6 leading-8 text-slate-600">
                  {service.description}
                </p>

                {/* Benefits */}

                <ul className="mt-8 space-y-4">

                  {service.benefits.map((item, index) => (

                    <li
                      key={index}
                      className="flex items-center gap-3 text-slate-600"
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