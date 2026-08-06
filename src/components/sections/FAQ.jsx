import faq from "../../data/faq";

function FAQ() {
  return (
    <section
      id="faq"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            FAQ
          </p>

          <h2
            className="mt-5 text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-16 space-y-6">

          {faq.map((item, index) => (

            <div
              key={index}
              className="
                rounded-2xl
                border
                border-slate-200
                p-6
              "
            >

              <h3 className="text-xl font-semibold">
                {item.question}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.answer}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;