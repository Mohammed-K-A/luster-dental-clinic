import { useState } from "react";
import faq from "../../data/faq";
import { FaChevronDown } from "react-icons/fa";

function FAQ() {
  const [active, setActive] = useState(-1);

  return (
    <section
      id="faq"
      className="
        bg-slate-50
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-6">

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
            Frequently Asked Questions
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              leading-tight
              sm:mt-6
              sm:text-5xl
            "
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Got Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Here are some of the most common questions our patients ask.
          </p>

        </div>

        {/* Accordion */}

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-5">

          {faq.map((item, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
            >

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-4
                  p-5
                  text-left
                  transition-colors
                  duration-300
                  hover:bg-slate-50
                  sm:gap-6
                  sm:p-6
                "
              >

                <h3
                  className={`
                    text-base
                    font-semibold
                    leading-6
                    transition-colors
                    duration-300
                    sm:text-lg
                    ${active === index
                      ? "text-blue-700"
                      : "text-slate-900"
                    }
                  `}
                >
                  {item.question}
                </h3>

                <FaChevronDown
                  className={`
                    shrink-0
                    transition-all
                    duration-300
                    ${active === index
                      ? "rotate-180 text-blue-700"
                      : "text-slate-500"
                    }
                  `}
                />

              </button>

              <div
                className={`
                  grid
                  transition-all
                  duration-300
                  ease-in-out
                  ${active === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;