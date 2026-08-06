import gallery from "../../data/gallery";

function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Smile Gallery
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Inside Luster Dental Clinic
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600">
            Explore our modern clinic, advanced treatment facilities,
            comfortable environment, and commitment to quality patient care.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {gallery.map((item) => (

            <div key={item.id}>

              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-3xl"
              />

              <h3 className="mt-4 text-xl font-semibold">
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;