import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import './carousel.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const PosturaOriginal = () => {
  const originalProducts = [
    { src: "/assets/posters/postura originals/Verstappen.png", alt: "original1" },
    { src: "/assets/posters/postura originals/PORSCHE GT3.png", alt: "original2"  },
    { src: "/assets/posters/postura originals/Cin Cin.png", alt: "original3"  },
    { src: "/assets/posters/postura originals/good things take time.png", alt: "original4"  },
    { src: "/assets/posters/postura originals/delusional.png", alt: "original5"  },
    { src: "/assets/posters/postura originals/Radiohead.png", alt: "original6"  },
    { src: "/assets/posters/postura originals/space.png", alt: "original7"  },
    { src: "/assets/posters/postura originals/The Weeknd.png", alt: "original8"  },
    { src: "/assets/posters/postura originals/Ferrari F150.png", alt: "original9"  },
  ]

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-white">
      {/* Heading */}
      <div className="text-center pb-16 static">
        <h1 className="text-3xl font-helvetica-medium uppercase
          relative 
          after:content-[''] 
          after:absolute 
          after:left-1/2 
          after:bottom-0 
          after:-translate-x-1/2 
          after:h-[1px] 
          after:w-[290px] 
          after:bg-black
          tracking-wide
          pb-2">
          Postura Original
        </h1>
      </div>
      <div className="w-full max-w-[1500px] px-5">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          spaceBetween={-150}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          speed={1400}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
            scale: 0.85
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1.7,
              spaceBetween: -600,
            },
          }}
          className="postura-swiper"
        >
          {originalProducts.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group cursor-pointer mx-auto">
                <div className="w-full aspect-[2/3] max-w-sm mx-auto">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default PosturaOriginal;