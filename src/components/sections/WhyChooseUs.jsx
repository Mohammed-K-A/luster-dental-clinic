import whyChooseUs from "../../data/whyChooseUs";

function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Why Patients Trust Luster Dental Clinic
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto">
            We are committed to delivering exceptional dental care with
            advanced technology, experienced professionals, and a
            patient-first approach.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {whyChooseUs.map((item) => (

            <div key={item.id} className="border rounded-2xl p-6">

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;