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
        "https://i.postimg.cc/zB8qKVPd/gardening-equipment-with-peat-pots-plant-gardening-gloves-wooden-table.jpg",
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
            className="h-full flex items-center justify-center text-white bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-opacity-50 p-6 rounded-lg text-center max-w-xl">
              <h2 className="text-3xl text-yellow-400 font-bold">
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
              <div className="my-4 text-lg leading-snug">
                {slide.desc.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <button className="mt-2 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
                Explore Event
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperBanner;
