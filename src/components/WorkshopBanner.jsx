import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function WorkshopBanner({ banners = [] }) {
  if (!banners || banners.length === 0) return "No banners available";

  // Single banner (no slider needed)
  if (banners.length === 1) {
    const banner = banners[0];
    return (
      <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-sm">
        <img
          src={banner.image}
          alt={banner.alt || banner.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            {banner.title}
          </h2>
        </div>
      </div>
    );
  }

  // Slider for multiple banners
  return (
    <div className="mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-sm custom-workshop-slider">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={banner.image}
                alt={banner.alt || banner.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
                  {banner.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}