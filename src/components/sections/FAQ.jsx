import { useState } from "react";
import faq from "../../data/faq";
import { FaChevronDown } from "react-icons/fa";

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="faq"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-5xl px-6">

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
            Frequently Asked Questions
          </p>

          <h2
            className="mt-6 text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Got Questions?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Here are some of the most common questions our patients ask.
          </p>

        </div>

        {/* Accordion */}

        <div className="mt-16 space-y-5">

          {faq.map((item, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
            >

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <h3 className="text-lg font-semibold">
                  {item.question}
                </h3>

                <FaChevronDown
                  className={`transition duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {active === index && (

                <div className="px-6 pb-6">

                  <p className="leading-7 text-slate-600">
                    {item.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;