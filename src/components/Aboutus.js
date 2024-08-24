import React, { Suspense, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import founder from "../assets/images/training.jpg"
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import LazyImage from './LazyImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faHandshake, faCut, faGraduationCap, faCog, faAward, faHandshakeAlt, faLightbulb, faTools, faStar } from '@fortawesome/free-solid-svg-icons';


const AboutUs = () => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({ duration: 1000 }); // Set the duration of animation
    }, []);

    return (
        <Container className="my-7">
            <h1 className="fw-bold mt-3 mb-3 text-center text-white" data-aos="fade-up">ABOUT US</h1>
            <Row>
                <Col data-aos="fade-left" md={6} className="mb-4">
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage alt={"Founder"} src={founder} />
                    </Suspense>
                </Col>
                <Col data-aos="fade-right " md={6}>
                        <div>
                            <FontAwesomeIcon icon={faAward} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                            Functional Excellence
                            </h4>
                            <p className='lead opacity-75 text-white'>Our relentless pursuit of excellence in every aspect of our operations ensures that we consistently deliver high-quality solutions that exceed expectations and drive tangible results.</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faHandshakeAlt} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                            Trust
                            </h4>
                            <p className='lead opacity-75 text-white d-'>Trust forms the foundation of our relationships with clients, partners, and stakeholders, as we believe in transparency, integrity, and reliability in all our interactions.</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTools} size='3x' color='lightblue' />
                            <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                Support
                            </h4>
                            <p className='lead opacity-75 text-white d-'>Our dedicated support team is committed to providing timely assistance and resolving any issues or concerns to ensure a seamless experience for our clients throughout their journey with us.</p>
                        </div>

                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
