import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { services } from "../../../data/servicesData";
import "../Services.css";
import "swiper/css";
import "swiper/css/navigation";

import fallbackImg from "../../../assets/services/fallback.png";

const HomeServices = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const navigate = useNavigate();

    return (
        <section className="section services" id="home-services">
            <div className="container">

                {/* HEADER */}
                <div className="section-header-row">
                    <div className="section-header">
                        <div className="subtitle">Our Expertise</div>
                        <h2 className="title">
                            Premium <span className="text-gradient">Services</span>
                        </h2>
                    </div>
                </div>

                {/* SLIDER */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="services-swiper"
                >
                    {services.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="service-card">

                                {/* IMAGE */}
                                <div className="service-image">
                                    <img
                                        src={item.image || fallbackImg}
                                        alt={item.title}
                                    />
                                    <span className="badge">{item.category}</span>
                                </div>

                                {/* CONTENT */}
                                <div className="service-content">
                                    <div className="icon">{item.icon}</div>

                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>

                                    <button
                                        className="service-link"
                                        onClick={() => navigate(`/services/${item.id}`)}
                                    >
                                        Explore More <ArrowRight size={16} />
                                    </button>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                    {/* HEADER */}

                    {/* NAV BUTTONS */}
                    <div className="slider-controls">
                        <button ref={prevRef} className="slider-btn">
                            <ChevronLeft size={22} />
                        </button>
                        <button ref={nextRef} className="slider-btn">
                            <ChevronRight size={22} />
                        </button>
                    </div>
                </Swiper>


                {/* MAIN BUTTON */}
                <div className="center-btn">
                    <button
                        className="btn-primary"
                        onClick={() => navigate("/services")}
                    >
                        More Services
                    </button>
                </div>

            </div>
        </section>
    );
};

export default HomeServices;