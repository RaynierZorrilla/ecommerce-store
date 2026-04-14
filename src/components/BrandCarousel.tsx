import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const brands = [
  "/brand/audi.png",
  "/brand/bentley.png",
  "/brand/bmw.png",
  "/brand/ford.png",
  "/brand/mercedes.png",
  "/brand/porsche.png",
  "/brand/toyota.png",
]

export default function BrandCarousel() {
  return (
    <section className="py-14 bg-secondary/30" aria-label="Associated brands">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          loop
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={brand}>
              <img
                src={brand}
                alt={`brand-${index + 1}`}
                className="h-24 md:h-28 mx-auto object-contain transition"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
