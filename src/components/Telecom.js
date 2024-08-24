import React, { Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import softwareServices from '../assets/images/GIS.jpeg'
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faProjectDiagram, faCogs, faTasks, faNetworkWired, faBuilding, faExchangeAlt, faCog, faSignal, faServer, faWifi } from '@fortawesome/free-solid-svg-icons';
import LazyImage from './LazyImage';
import ImageSkeletonLoader from '../Layouts/Skeleton';

const Telecom = () => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({ duration: 1000 }); // Set the duration of animation
    }, []);

    return (
        <div className="software-services">
            {/*  */}
            <section class="py-0 overflow-hidden" id="banner" data-bs-theme="light">
                {/* <div class="bg-holder overlay bg-img-lnd"></div> */}
                <div class="">
                    <div class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 glassmorphism-bg-9">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 class="theme-text container fw-bold">
                                Empowering Connectivity Through Advanced Telecom Solutions
                            </h1>
                            <p class="lead container text-capitalize text-white opacity-75">
                                At ADV, we are committed to delivering cutting-edge telecom services that connect people, businesses, and devices seamlessly. Our comprehensive approach encompasses a robust work structure, innovative methods, state-of-the-art tools, and a team of skilled professionals adept at leveraging advanced technologies. Here's how we excel in providing top-notch telecom solutions:
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <Row className="pt-3 mt-3 mb-3 pb-3">
                    {/* <h1 className="fw-bold mt-3 mb-3 text-white" data-aos="fade-up">WHAT WE DO</h1> */}
                    <Col lg={6} className='mb-3' data-aos="fade-left">
                        <Suspense fallback={<ImageSkeletonLoader />}>
                            <LazyImage src={softwareServices} />
                        </Suspense>
                    </Col>
                    <Col lg={6} >
                        <div data-aos="fade-right">
                            <FontAwesomeIcon icon={faSignal} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                5G Networks
                            </h4>
                            <p className='lead opacity-75 text-white d-'>As pioneers in 5G technology, ADV leads the way in delivering next-generation wireless connectivity, offering unparalleled speed, reliability, and low latency for emerging applications and services.</p>
                        </div>
                        <div data-aos="fade-right">
                            <FontAwesomeIcon icon={faNetworkWired} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Software-Defined Networking (SDN)
                            </h4>
                            <p className='lead opacity-75 text-white'>Our SDN-enabled infrastructure empowers dynamic network management, agility, and scalability, enabling us to adapt to evolving customer demands and deliver customized solutions with ease.</p>
                        </div>
                        <div data-aos="fade-right">
                            <FontAwesomeIcon icon={faServer} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Network Function Virtualization (NFV)
                            </h4>
                            <p className='lead opacity-75 text-white '>
                                By virtualizing network functions, we optimize resource utilization, reduce costs, and accelerate service delivery, providing our clients with scalable and flexible telecom solutions tailored to their specific requirements.
                            </p>
                        </div>
                        <div data-aos="fade-right">
                            <FontAwesomeIcon icon={faWifi} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Internet of Things (IoT)
                            </h4>
                            <p className='lead opacity-75 text-white d-'>
                                ADV harnesses the power of IoT to enable innovative services and applications, facilitating smart city initiatives, industrial automation, and connected ecosystems that drive efficiency, productivity, and sustainability.
                            </p>
                        </div>
                    </Col>
                </Row>
                <div class="bg-all pb-3 white__bg-opacity-50">
                    <div class="container">
                        <h2 className="text-white text-center mt-4">What We Do</h2>
                    </div>
                    <div  data-aos="fade-left" className='d-flex flex-wrap justify-content-center'>
                        <div className="text-center p-4">
                            <FontAwesomeIcon icon={faNetworkWired} size={'3x'} color="lightblue" />
                            <h3 className='mt-2 text-white'>Routing & Switching</h3>
                        </div>
                        <div className="text-center p-4">
                            <FontAwesomeIcon icon={faCog} size={'3x'} color="lightblue" />
                            <h3 className='mt-2 text-white'>Qos Management</h3>
                        </div>
                        <div className="text-center p-4">
                            <FontAwesomeIcon icon={faBuilding} size={'3x'} color="lightblue" />
                            <h3 className='mt-2 text-white'>Service Providers</h3>
                        </div>
                        <div className="text-center p-4">
                            <FontAwesomeIcon icon={faTools} size={'3x'} color="lightblue" />
                            <h3 className='mt-2 text-white'>Support Maintenance</h3>
                        </div>
                        <div className="text-center p-4">
                            <FontAwesomeIcon icon={faExchangeAlt} size={'3x'} color="lightblue" />
                            <h3 className='text-white'>Data Transmission</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Telecom;
