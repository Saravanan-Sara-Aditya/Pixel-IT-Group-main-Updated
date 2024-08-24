import React, { Suspense, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../swiper-bundle.css';
import '../navigation.min.css';
import '../pagination.min.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Col, Row } from 'react-bootstrap';
import hudson from "../assets/images/Hudson.jpg"
import customization from "../assets/images/247Hire.jpg"
import param from "../assets/images/ParamInfo.png"
import LazyImage from './LazyImage';
import que from "../assets/images/Qhub.jpg"
import kore from "../assets/images/Kore.jpg"
import homelane from "../assets/images/Homelane.jpg"
import tailored from "../assets/images/TailoredManagement.jpg"
const AutoReactSwiperSlider = () => {
  const swiperRef = useRef(null);

  const slides = [
    <>
      <Row>
        <Col lg={12}>
           <Suspense fallback={<div>Loading...</div>}>
           <div style={{height:"300px"}}>
        
            <LazyImage src={customization} />
           </div>
          </Suspense>
        </Col>
      </Row>
    </>,
    <>
      <Row>
      <Col lg={12}>
           <Suspense fallback={<div>Loading...</div>}>
           <div style={{height:"300px"}}>
            <LazyImage src={hudson} />
            </div>
          </Suspense>
        </Col>
      </Row>
    </>,
    <>
    <Row>
      <Col lg={12}>
           <Suspense fallback={<div>Loading...</div>}>
           <div style={{height:"300px"}}>
            <LazyImage src={param} />
            </div>
          </Suspense>
        </Col>
      </Row>
    </>,
    <>
     <Row>
      <Col lg={12}>
           <Suspense fallback={<div>Loading...</div>}>
           <div style={{height:"300px"}}>
            <LazyImage src={homelane} />
            </div>
          </Suspense>
        </Col>
      </Row>
    </>,
    <>
      <Row>
      <Col lg={12}>
           <Suspense fallback={<div>Loading...</div>}>
           <div style={{height:"300px"}}>
            <LazyImage src={tailored} />
            </div>
          </Suspense>
        </Col>
      </Row>
    </>,
     <>
     <Row>
      <Col lg={12}>
           <Suspense fallback={<div>Loading...</div>}>
           <div style={{height:"300px"}}>
            <LazyImage src={kore} />
            </div>
          </Suspense>
        </Col>
      </Row>
    </>,
    <>
      <Row>
      <Col lg={12}>
           <Suspense fallback={<div>Loading...</div>}>
           <div style={{height:"300px"}}>
            <LazyImage src={que} />
            </div>
          </Suspense>
        </Col>
      </Row>
    </>,
  ];


  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const interval = setInterval(() => {
      if (swiper) {
        if (swiper.activeIndex === swiper.slides.length - 1) {
          swiper.slideTo(0);
        } else {
          swiper.slideNext();
        }
      }
    }, 3000); // Adjust autoplay speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      {slides.map((slide) => (
        <SwiperSlide >
          <div className="pt-3 text-white">
            {slide}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AutoReactSwiperSlider;
