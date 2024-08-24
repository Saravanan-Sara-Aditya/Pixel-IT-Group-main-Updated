import React, { Suspense, lazy, useState, useEffect } from 'react';
import AI from '../assets/images/IT_Services.jpg'
import utilities from '../assets/images/Router.avif'
import java from '../assets/images/Serv.jpg'
import about from '../assets/images/ourteam.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import softwareServices from '../assets/images/software.jpg'
import Testimonials from './Testimonial'
import Mobile from "../assets/images/target.jpg"
import Mobile1 from "../assets/images/MobileApp.jpg"
import Carousel from './Carousel'
import AutoReactSwiperSlider from './WhyChooseUs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faHandshake, faCut, faGraduationCap, faCog, faAward, faHandshakeAlt, faLightbulb, faTools, faStar } from '@fortawesome/free-solid-svg-icons';
// import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import APN from "../assets/images/APN.jpg"
import AOS from 'aos';
import { Link } from 'react-router-dom'
// import LazyImage from './LazyImage'
import ImageSkeletonLoader from '../Layouts/Skeleton'
import Cloud from "../assets/images/Cloud.jpg"
import HP from "../assets/images/Desktops_Laptops.jpg"
import ITSec from "../assets/images/ITSec.jpg"
import VOIP from "../assets/images/VOIP.jpeg"
import Support from "../assets/images/supportService.avif"
import Client from "../assets/images/Client_Banner.png"
import Contact from './Contactus'

import CardSkeleton from '../Layouts/Skeleton';
import ImageWithSkeleton from '../Layouts/Skeleton';
const LazyImage = lazy(() => import('./LazyImage'));

const Home = () => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({ duration: 1000 }); // Set the duration of animation
    }, []);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an API call or image load
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="">
            <div class="py-0 overflow-hidden" id="banner" data-bs-theme="light">

                <div class="">
                    <Carousel />
                </div>
            </div>

            <section id='about' class=" glasmorphism-bg-10 pt-2 pb-5 white__bg-opacity-50">
                {/* <Container> */}
                <Row className="pt-3  m-2">
                    <h1 className="fw-bold mt-3 mb-3 theme-text" data-aos="zoom-in">ABOUT US</h1>
                    <Col lg={12} className='mb-3' data-aos="zoom-in">
                        <div >
                            <ImageWithSkeleton
                                style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "300px" }}
                                src={about} />
                        </div>
                    </Col>
                    <Col lg={12} data-aos="zoom-in">
                        <div>
                            <p className='lead  text-black '>
                                Pixel IT Group providing IT Network Security Solutions & focuses on evolving technology-specific solutions. The way customer-specific solutions are provided is distinct and different.
                                Pixel IT Group enables technology companies to look at their day-to-day software and hardware challenges in a fresh light, and then apply inventiveness and intelligence to develop new and different approaches, all with less investment Pixel IT Group makes an in-depth assessment, designs, acquires, implements, manages and supports the clients’ software and hardware, less manpower and less hassles.
                            </p>
                        </div>
                    </Col>
                </Row>
                {/* </Container> */}
                <div class="bg-all pt-2 pb-5 white__bg-opacity-50">
                    <Container>
                        <h1 data-aos="zoom-out" class="fw-bold mt-3 text-end d-lg-block d-none text-uppercase mb-3 theme-text">Our Mission</h1>
                        <h1 data-aos="zoom-out" class="fw-bold mt-3 text-start d-lg-none d-block text-uppercase mb-3 theme-text">Our Mission</h1>
                        <Row className="pt-3">
                            <Col data-aos="zoom-out" className='order-2 order-lg-1' lg={6}>
                                <div>
                                    <FontAwesomeIcon icon={faBullseye} size='3x' color='#219bda' />
                                    <h4 className=' ms-2 fw-bold theme-text mb-3 d-inline'>
                                        Customer Focus:
                                    </h4>
                                    <p className='lead  theme-text'>We prioritize our customers' needs by proactively engaging with them and providing personalized solutions tailored to their requirements.</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faHandshake} size='3x' color='#219bda' />
                                    <h4 className=' ms-2 fw-bold theme-text mb-3 d-inline'>
                                        Collaboration:
                                    </h4>
                                    <p className='lead  theme-text d-'>Collaboration is at the heart of our methodology, as we believe in working closely with our clients as integrated partners to achieve mutual success.</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faStar} size='3x' color='#219bda' />
                                    <h4 className=' ms-2 fw-bold theme-text mb-3 d-inline'>
                                        Success:
                                    </h4>
                                    <p className='lead  theme-text d-'>We measure our success by the achievements of our clients, celebrating their milestones and victories as our own and striving to be catalysts for their continued growth and prosperity.</p>
                                </div>

                            </Col>
                            <Col data-aos="zoom-out" className='order-1 mb-3 order-lg-2' lg={6}>
                                <ImageWithSkeleton
                                    src={Mobile}
                                    alt="Mobile Image"
                                    style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                                    className=" w-100 h-100"
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>

            </section>
            {/*  */}

            {/*  */}
            <section id="services" class="bg-all pb-3 white__bg-opacity-50">
                <div class="container">
                    <h1 data-aos="fade-right" class="fw-bold mt-3 theme-text">OUR SERVICES</h1>
                    <div class="row">
                        <div class="col text-center">
                            {/* <h4 class="lead mb-0 text-uppercase theme-text">Our Services</h4> */}
                        </div>
                    </div>
                    <div class="row mt-3 mb-3">
                        <div data-aos="zoom-in" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/IT_Services">

                                    <div class="card-container shadow-lg" >
                                        <div class="card bg-white theme-text overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                            <div style={{ filter: "brightness(0.5)" }} class="card-img-top">
                                                <ImageWithSkeleton
                                                    src={AI}
                                                    alt="Mobile Image"
                                                    style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                                                    className=" w-100 image-fluid h-100"
                                                />
                                            </div>
                                            <div class="card-img-overlay d-flex align-items-end">
                                                <div>
                                                    <h5 class="card-title theme-text">IT Infrastructure Services</h5>
                                                </div>
                                            </div>
                                            <div class="card-overlay">
                                                <p className=''>Tap to Know More</p>
                                            </div>
                                        </div>
                                    </div>
                                 </Link>
                        </div>
                        <div data-aos="zoom-out" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/IT_Support">

                                    <div class="card-container shadow-lg" >
                                        <div class="card bg-white theme-text overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                            <div style={{ filter: "brightness(0.5)" }} class="card-img-top">
                                                <ImageWithSkeleton
                                                    src={Support}
                                                    alt="Mobile Image"
                                                    style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                                                    className=" w-100 image-fluid h-100"
                                                />
                                            </div>
                                            <div class="card-img-overlay d-flex align-items-end">
                                                <div>
                                                    <h5 class="card-title theme-text">IT Support</h5>
                                                </div>
                                            </div>
                                            <div class="card-overlay">
                                                <p className=''>Tap to Know More</p>
                                            </div>
                                        </div>
                                    </div>
                                 </Link>
                        </div>
                        <div data-aos="zoom-in" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/Cloud_Support">

                                    <div class="card-container shadow-lg" >
                                        <div class="card bg-white theme-text overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                            <div style={{ filter: "brightness(0.5)" }} class="card-img-top">
                                                <ImageWithSkeleton
                                                    src={Cloud}
                                                    alt="Mobile Image"
                                                    style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                                                    className=" w-100 image-fluid h-100"
                                                />
                                            </div>
                                            <div class="card-img-overlay d-flex align-items-end">
                                                <div>
                                                    <h5 class="card-title theme-text">Cloud Services</h5>
                                                </div>
                                            </div>
                                            <div class="card-overlay">
                                                <p className=''>Tap to Know More</p>
                                            </div>
                                        </div>
                                    </div>
                                 </Link>
                        </div>
                        <div data-aos="zoom-out" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/IT_Security">

                                    <div class="card-container shadow-lg" >
                                        <div class="card bg-white theme-text overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                            <div style={{ filter: "brightness(0.7)" }} class="card-img-top">
                                                <ImageWithSkeleton
                                                    src={ITSec}
                                                    alt="Mobile Image"
                                                    style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                                                    className=" w-100 image-fluid h-100"
                                                />
                                            </div>
                                            <div class="card-img-overlay d-flex align-items-end">
                                                <div>
                                                    <h5 class="card-title theme-text">Infrastructure Security</h5>
                                                </div>
                                            </div>
                                            <div class="card-overlay">
                                                <p className=''>Tap to Know More</p>
                                            </div>
                                        </div>
                                    </div>
                                 </Link>
                        </div>
                        <div data-aos="zoom-in" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/VOIP">

                                    <div class="card-container shadow-lg" >
                                        <div class="card bg-white theme-text overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                            <div style={{ filter: "brightness(0.8)" }} class="card-img-top">
                                                <ImageWithSkeleton
                                                    src={VOIP}
                                                    alt="Mobile Image"
                                                    style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                                                    className=" w-100 image-fluid h-100"
                                                />
                                            </div>
                                            <div class="card-img-overlay d-flex align-items-end">
                                                <div>
                                                    <h5 class="card-title theme-text">VOIP Solutions</h5>
                                                </div>
                                            </div>
                                            <div class="card-overlay">
                                                <p className=''>Tap to Know More</p>
                                            </div>
                                        </div>
                                    </div>
                                 </Link>
                        </div>
                        <div data-aos="zoom-out" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/Networking_Devices">

                                <div>
                                    {loading ? (
                                        <CardSkeleton />
                                    ) : (
                                        <div className="card-container shadow-lg">
                                            <div className="card bg-white theme-text overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                                <div style={{ filter: "brightness(0.8)" }} className="card-img-top">
                                                    <ImageWithSkeleton
                                                        src={utilities}
                                                        alt="Mobile Image"
                                                        style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                                                        className=" w-100 image-fluid h-100"
                                                    />
                                                </div>
                                                <div className="card-img-overlay d-flex align-items-end">
                                                    <div>
                                                        <h5 className="card-title theme-text">Networking Devices</h5>
                                                    </div>
                                                </div>
                                                <div className="card-overlay">
                                                    <p className=''>Tap to Know More</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </div>

                        <div data-aos="zoom-in" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/WebApplicaiton">

                                    <div class="card-container shadow-lg" >
                                        <div class="card bg-white theme-text overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                            <div style={{ filter: "brightness(0.8)" }} class="card-img-top">
                                                <ImageWithSkeleton
                                                    src={Mobile1}
                                                    alt="Mobile Image"
                                                    style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                                                    className=" w-100 image-fluid h-100"
                                                />
                                            </div>
                                            <div class="card-img-overlay d-flex align-items-end">
                                                <div>
                                                    <h5 class="card-title theme-text">Web & App Development</h5>
                                                </div>
                                            </div>
                                            <div class="card-overlay">
                                                <p className=''>Tap to Know More</p>
                                            </div>
                                        </div>
                                    </div>
                                 </Link>
                        </div>

                        <div data-aos="zoom-out" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/Servers">

                                    <div class="card-container shadow-lg" >
                                        <div class="card bg-white theme-text overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                            <div style={{ filter: "brightness(0.5)" }} class="card-img-top">
                                                <div >
                                                    <ImageWithSkeleton
                                                        src={"https://plus.unsplash.com/premium_photo-1682145189653-bb0b79db3415?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                                        alt="Mobile Image"
                                                        style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                                                        className=" w-100 image-fluid h-100"
                                                    />
                                                </div>
                                            </div>
                                            <div class="card-img-overlay d-flex align-items-end">
                                                <div>
                                                    <h5 class="card-title theme-text">Servers</h5>
                                                </div>
                                            </div>
                                            <div class="card-overlay">
                                                <p className=''>Tap to Know More</p>
                                            </div>
                                        </div>
                                    </div>
                                 </Link>
                        </div>
                        <div data-aos="zoom-in" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/Access_Points">

                                    <div class="card-container shadow-lg" >
                                        <div class="card bg-white theme-text overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                            <div style={{ filter: "brightness(0.5)" }} class="card-img-top">
                                            <ImageWithSkeleton
                                                    src={APN}
                                                    alt="Mobile Image"
                                                    style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                                                    className=" w-100 image-fluid h-100"
                                                />
                                            </div>
                                            <div class="card-img-overlay d-flex align-items-end">
                                                <div>
                                                    <h5 class="card-title theme-text">Access Points</h5>
                                                </div>
                                            </div>
                                            <div class="card-overlay">
                                                <p className=''>Tap to Know More</p>
                                            </div>
                                        </div>
                                    </div>
                                 </Link>
                        </div>

                        <div data-aos="zoom-in" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/Software_Solutions">

                                    <div class="card-container shadow-lg" >
                                        <div class="card bg-white theme-text overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                            <div style={{ filter: "brightness(0.5)" }} class="card-img-top">
                                            <ImageWithSkeleton
                                                    src={softwareServices}
                                                    alt="Mobile Image"
                                                    style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                                                    className=" w-100 image-fluid h-100"
                                                />
                                            </div>
                                            <div class="card-img-overlay d-flex align-items-end">
                                                <div>
                                                    <h5 class="card-title theme-text">Software Solutions</h5>
                                                </div>
                                            </div>
                                            <div class="card-overlay">
                                                <p className=''>Tap to Know More</p>
                                            </div>
                                        </div>
                                    </div>
                                 </Link>
                        </div>
                        <div data-aos="zoom-out" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/Desktops_Laptops">

                                    <div class="card-container shadow-lg" >
                                        <div class="card bg-white theme-text overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                            <div style={{ filter: "brightness(0.8)" }} class="card-img-top">
                                            <ImageWithSkeleton
                                                    src={HP}
                                                    alt="Mobile Image"
                                                    style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                                                    className=" w-100 image-fluid h-100"
                                                />
                                            </div>
                                            <div class="card-img-overlay d-flex align-items-end">
                                                <div>
                                                    <h5 class="card-title theme-text">Desktops & Laptops</h5>
                                                </div>
                                            </div>
                                            <div class="card-overlay">
                                                <p className=''>Tap to Know More</p>
                                            </div>
                                        </div>
                                    </div>
                                 </Link>
                        </div>
                    </div>
                </div >
            </section >
            {/*  */}
            <div id="our_clients" data-aos="fade-down" class="bg-all pt-2 pb-5 white__bg-opacity-50">
                <Container>
                    <h1 data-aos="fade-left" class="fw-bold mt-3 text-start d-lg-none d-block text-uppercase mb-3 theme-text">Our Clients</h1>
                    <h1 data-aos="fade-left" class="fw-bold mt-3 text-center d-none d-lg-block text-uppercase mb-3 theme-text">Our Clients</h1>
                    {/* <AutoReactSwiperSlider /> */}
                    <ImageWithSkeleton
                                                    src={Client}
                                                    alt="Mobile Image"
                                                    style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                                                    className=" w-100  h-100"
                                                />
                </Container>
            </div>

            {/* Contact Us */}
            <div id="contact_us">
                <Contact />
            </div>
        </div >
    )
}

export default Home
