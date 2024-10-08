import React, { Suspense, useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Servers = () => {

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
                <div data-aos="fade-left" style={{minHeight:"100vh"}} class="row flex-center pt-8 pt-lg-5 bg-dark">
                    
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 data-aos="fade" class="theme-text container fw-bold">
                                Servers
                            </h1>
                            <p data-aos="fade" class="lead text-white container text-capitalize text-start ">
                            We offer a diverse range of servers from top-tier brands, which we customize to align perfectly with your unique requirements. Our expert team not only tailors each server solution to your specifications but also provides informed recommendations on capacity based on your needs. The brands we provide include:
                               <span className='d-block mt-2 mb-0'>

                                    <ul type="none">
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	HP</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	Dell</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	Lenovo</li>
                                    </ul>
                                </span>
                                With our dedication to delivering tailored server solutions and our commitment to meeting your capacity needs precisely, you can trust in the reliability and performance of your server infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Servers;

