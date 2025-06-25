import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

const SwiperBanner = () => {
  const slides = [
    {
      title: "Plant Care Workshop",
      desc: [
        "Learn from expert gardeners live.",
        "Understand soil health and watering routines.",
        "Boost your plant's growth with proper care.",
      ],
      image:
        "https://i.postimg.cc/sD0ZzS6Q/gardening-tools-rope-watering-can-gloves-concrete-backdrop-against-wooden-wall.jpg",
    },
    {
      title: "Green Thumb Meetup",
      desc: [
        "Join the gardening community today.",
        "Network with plant lovers across the city.",
        "Get free seeds and hands-on sessions.",
      ],
      image:
        "https://i.postimg.cc/1zZS18P9/gardening-tools-rope-watering-can-gloves-concrete-backdrop-against-wooden-wall.jpg",
    },
    {
      title: "Botanical Garden Tour",
      desc: [
        "Experience rare and exotic plants.",
        "A guided walk through lush greenery.",
        "Capture memories in nature’s lap.",
      ],
      image: "https://i.postimg.cc/fTw0Dbzf/plants-pot-with-watering-can.jpg",
    },
  ];

  return (
    <Swiper
      navigation={true}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      className="h-[400px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative h-full flex items-center justify-center text-white bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Blackish Overlay */}
            <div className="absolute  z-0"></div>

            {/* Content on top */}
            <div className="relative p-6 rounded-lg text-center max-w-xl z-10 space-y-4">
              <h2 className="text-3xl text-yellow-400 font-bold transition-all duration-300 hover:text-4xl ">
                <Typewriter
                  words={[slide.title]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={60}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h2>
              <div className="text-lg leading-snug space-y-1">
                {slide.desc.map((line, i) => (
                  <p
                    key={i}
                    className="transition-all text-yellow-200 duration-300 hover:scale-105 text-2xl"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperBanner;
