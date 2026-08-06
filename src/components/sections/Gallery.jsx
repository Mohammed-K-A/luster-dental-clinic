import gallery from "../../data/gallery";

function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Smile Gallery
          </p>

          <h2
            className="mt-5 text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Explore Our Clinic
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Take a look inside Luster Dental Clinic and discover our
            modern facilities, advanced equipment, and welcoming
            environment.
          </p>

        </div>

        {/* Gallery */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {gallery.map((item) => (

            <div
              key={item.id}
              className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-md
              "
            >

              <img
                src={item.image}
                alt={item.title}
                className="
                  h-72
                  w-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-110
                "
              />

              <div className="p-5">

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;