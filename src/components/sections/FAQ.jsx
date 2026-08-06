import faq from "../../data/faq";

function FAQ() {
  return (
    <section className="py-20">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <p className="text-blue-700 font-semibold uppercase">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-12 space-y-8">

          {faq.map((item, index) => (

            <div key={index} className="border rounded-xl p-6">

              <h3 className="font-semibold">
                {item.question}
              </h3>

              <p className="mt-3 text-slate-600">
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