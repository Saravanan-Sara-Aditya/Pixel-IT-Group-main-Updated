import React, { Suspense, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageSkeletonLoader from '../Layouts/Skeleton';
import LazyImage from './LazyImage';
import contact from "../assets/images/contact.jpg"
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import ImageWithSkeleton from '../Layouts/Skeleton';

const Contact = () => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({ duration: 1000 }); // Set the duration of animation
    }, []);


    return (
        <Container className="pb-5">

            <h1 className="fw-bold mt-3 mb-3 theme-text" data-aos="fade-up">CONTACT US</h1>
            <Row>
                <Col md={6} data-aos="fade-left">
                    <ImageWithSkeleton
                        src={contact}
                        alt="Mobile Image"
                        style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
                        className=" w-100 h-100"
                    />
                </Col>
                <Col md={6} className='mt-3 mt-lg-0 theme-text' data-aos="fade-right">
                    <h2 className='theme-text'>Working Hours</h2>
                    <p className='lead'>09:00 - 18:00</p>
                    <h2 className='theme-text'>Address</h2>
                    <p className='lead'>Kukatpally, Hyderabad, Telangana</p>
                    <h2 className='theme-text'>Email</h2>
                    <p className='lead theme-black'><FontAwesomeIcon color='#219bda' icon={faEnvelope} flip={true} size='1x' /> contact@pixelitgroup.com </p>
                    <h2 className='theme-text'>Phone</h2>
                    <p className='lead theme-black'><FontAwesomeIcon color='#219bda' icon={faPhoneAlt} size='1x' flip={true} />+91 8977568611</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
