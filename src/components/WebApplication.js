
import React, { Suspense, useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const WebApp = () => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({ duration: 1000 }); // Set the duration of animation
    }, []);

    return (
        <div className="software-servicesh">
            {/*  */}
            <section class="py-0 overflow-hidden" id="banner" data-bs-theme="light">
                <div class="bg-holder overlay bg-img-lnd"></div>
                <div class="">
                    <div data-aos="fade-left" style={{ height: "100vh" }} class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 bg-white">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 data-aos="fade" class="theme-text container fw-bold">
                            Web & Mobile Application Development
                            </h1>
                            <p data-aos="fade" class="lead container text-capitalize text-start ">
                            We understand the paramount importance of a robust online presence in today's digital landscape. Our tailored website development and support services are meticulously crafted to help businesses establish a compelling brand identity, enhance user engagement, and drive revenue growth. Here's how we excel in delivering top-notch solutions.
                                <span className='d-block mt-2 mb-0'>

                                    <ul type="none">
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	React.js</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	Angular</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	Next.js</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	MERN Stack</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	MEAN Stack</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	React Native</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	Node.js</li>
                                    </ul>
                                </span>
                                Efficiently design and develop your web and mobile applications with our expert team. We specialize in creating responsive and user-friendly interfaces tailored to your specific needs. Utilizing cutting-edge technologies, we ensure seamless integration, scalability, and robust functionality. Elevate your digital presence and engage your audience with our innovative solutions. Let's transform your ideas into exceptional digital experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default WebApp;

