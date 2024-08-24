import React, { Suspense, useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const VOIP = () => {

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
                                VOIP Solution
                            </h1>
                            <p data-aos="fade" class="lead container text-capitalize text-start ">
                                We supply VOIP devices, including IP Phones and VOIP Headsets, equipped with cutting-edge noise cancellation technology to elevate your calling experience. As esteemed partners with renowned VOIP providers and manufacturers, we guarantee dependable service and top-notch products from:
                                <span className='d-block mt-2 mb-0'>

                                    <ul type="none">
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	Polycom (Plantronics)</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} /> Yealink</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	D-Link</li>
                                    </ul>
                                </span>
                                With our commitment to quality and innovation, we provide solutions that optimize communication efficiency and clarity for your business needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default VOIP;

