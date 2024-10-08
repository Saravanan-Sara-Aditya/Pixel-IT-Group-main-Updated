import React, { Suspense, useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ITSecurity = () => {

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
                    <div
                        data-aos="fade-left"
                        className="row justify-content-center align-items-center pt-8 pt-lg-5 bg-dark"
                        style={{ minHeight: "100vh" }}
                    >    <div>
                            <h1 data-aos="fade" class="theme-text container fw-bold">
                                Infrastructure Security
                            </h1>
                            <p data-aos="fade" class="lead text-white container text-capitalize text-start ">
                                We specialize in safeguarding your infrastructure against attacks and ensuring the protection of sensitive data from exposure or leaks. Our services include deploying various hardware firewalls and implementing optimal configurations to secure your infrastructure effectively. We provide the following hardware devices, backed by long-term support and expertise:
                                <span className='d-block mt-2 mb-0'>

                                    <ul type="none">
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} /> Sophos</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} /> SonicWall</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} /> FortiGate</li>
                                    </ul>
                                </span>
                                With our solutions and support, you can trust that your infrastructure remains resilient against threats, allowing you to focus on your core business operations with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ITSecurity;

