import gallery from "../../data/gallery";
import { FaExpand } from "react-icons/fa";

function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

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
            Clinic Gallery
          </p>

          <h2
            className="mt-6 text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Explore Our Clinic
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Discover our modern facilities, advanced dental technology,
            comfortable treatment rooms and welcoming environment.
          </p>

        </div>

        {/* Gallery */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {gallery.map((item) => (

            <div
              key={item.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                shadow-md
              "
            >

              <img
                src={item.image}
                alt={item.title}
                className="
                  h-80
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  items-center
                  justify-center
                  bg-blue-900/70
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              >

                <FaExpand
                  className="text-white"
                  size={28}
                />

                <h3 className="mt-5 text-2xl font-semibold text-white">
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