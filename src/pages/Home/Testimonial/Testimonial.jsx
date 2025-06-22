import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import "./testimonial.css"; // Import the CSS override
import Heading from "../../shared/Heading";

const testimonials = [
  {
    name: "Shahadat Hossain",
    title: "Farmer, Bogura",
    text: "Since joining Croply, I've been able to connect directly with customers without any middlemen, which has significantly increased my profits. The platform is easy to use, and managing my vegetable stock online has saved me so much time and hassle.",
  },
  {
    name: "Anika Rahman",
    title: "Buyer, Dhaka",
    text: "I love that Croply delivers super fresh, locally grown produce right to my doorstep. Supporting local farmers while enjoying the freshest fruits and vegetables has been a game-changer for my family’s meals.",
  },
  {
    name: "Sajib Khan",
    title: "Delivery Agent, Comilla",
    text: "The delivery tracking system and route optimization in Croply make my daily work so much easier. I can deliver on time without confusion, and the clear instructions help me avoid any mistakes.",
  },
  {
    name: "Nurul Islam",
    title: "Farmer, Rajshahi",
    text: "Uploading my harvest and managing stock has never been easier. Croply’s intuitive dashboard helps me keep track of orders and stock levels in real-time, making my business more efficient and organized.",
  },
  {
    name: "Mithila Haque",
    title: "Buyer, Chattogram",
    text: "The transparent pricing on Croply combined with smooth order tracking gives me complete confidence every time I shop. It’s a hassle-free experience with fresh produce and excellent customer service.",
  },
  {
    name: "Arman Kabir",
    title: "Delivery Agent, Khulna",
    text: "Thanks to Croply, I have a steady income with clear daily delivery routes and real-time updates. The platform’s communication system ensures I’m always informed about order changes or special instructions.",
  },
  {
    name: "Tanvir Alam",
    title: "Admin",
    text: "Managing orders, users, and analytics from Croply’s dashboard gives me full control and insight into the business. The reports help me make data-driven decisions to improve service and increase growth.",
  },
  {
    name: "Nabila Sultana",
    title: "Buyer, Sylhet",
    text: "I finally found pesticide-free, verified produce on Croply that I can trust for my family’s health. The farmers’ profiles and reviews give me peace of mind about the quality of every purchase.",
  },
  {
    name: "Hasan Mahmud",
    title: "Farmer, Mymensingh",
    text: "My sales have doubled since I started using Croply. The platform’s user-friendly interface and customer outreach tools have truly transformed the way I sell my harvest.",
  },
  {
    name: "Sumaiya Zerin",
    title: "Buyer, Barisal",
    text: "Croply offers a clean and user-friendly interface with reliable service and amazing quality products. It’s now my go-to platform for fresh produce, and I highly recommend it to everyone.",
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);
  const cardsRef = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  const updateSlideClasses = (swiper) => {
    const slides = swiper.slides;
    const center = swiper.activeIndex;

    slides.forEach((slide) => {
      slide.style.transition = "transform 0.3s ease, opacity 0.3s ease";
      slide.style.opacity = "0.3";
      slide.style.transform = "scale(0.9)";
      slide.style.transformOrigin = "bottom";
    });

    if (slides[center]) {
      slides[center].style.opacity = "1";
      slides[center].style.transform = "scale(1)";
    }
    if (slides[center - 1]) {
      slides[center - 1].style.opacity = "0.6";
      slides[center - 1].style.transform = "translateY(30px)";
    }
    if (slides[center + 1]) {
      slides[center + 1].style.opacity = "0.6";
      slides[center + 1].style.transform = "translateY(30px)";
    }
    if (slides[center - 2]) {
      slides[center - 2].style.opacity = "0.2";
      slides[center - 2].style.transform = "translateY(60px)";
    }
    if (slides[center + 2]) {
      slides[center + 2].style.opacity = "0.2";
      slides[center + 2].style.transform = "translateY(60px)";
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      updateSlideClasses(swiperRef.current);
    }
  }, []);

  useEffect(() => {
    if (cardsRef.current.length) {
      let max = 0;
      cardsRef.current.forEach((card) => {
        if (card) {
          const height = card.getBoundingClientRect().height;
          if (height > max) max = height;
        }
      });
      setMaxHeight(max);
    }
  }, [maxHeight]);

  return (
    <div className="py-16 text-center">
      <Heading
        title={`Testimonials`}
        subtitle={`Trusted by farmers, buyers, and delivery heroes across the country.`}
      ></Heading>

      <Swiper
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateSlideClasses(swiper);
        }}
        onSlideChange={(swiper) => updateSlideClasses(swiper)}
        slidesPerView={1}
        centeredSlides
        loop
        spaceBetween={10}
        speed={500}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        className="mx-auto px-4 pb-8 mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2,
          },
          1536: {
            slidesPerView: 3,
          },
          1800: {
            slidesPerView: 4,
          },
        }}
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i} className="flex justify-center my-6 px-2">
            <div
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
              className="bg-base-200 rounded-2xl shadow-md shadow-primary/5 flex flex-col justify-center text-secondary relative flex-1"
            >
              <div className="absolute top-0 left-0 w-full h-full z-0">
                <FaQuoteLeft className="absolute top-4 left-4 text-primary/10 text-7xl pointer-events-none" />
              </div>

              <div className="relative z-10 px-8 py-10 h-full flex flex-col justify-between">
                <p className="border-b-4 border-dashed border-b-primary/40 pb-4 mt-8 text-left">
                  {item.text}
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20" />
                  <div className="text-left">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-secondary/60">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
