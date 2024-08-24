import React, { Suspense, useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';

const ITServices = () => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({ duration: 1000 }); // Set the duration of animation
    }, []);

    return (
        <div className="software-servicesh">
            {/*  */}
            <section  class="py-0 overflow-hidden" id="banner" data-bs-theme="light">
                <div class="bg-holder overlay bg-img-lnd"></div>
                <div class="">
                    <div data-aos="fade-down" style={{height:"100vh"}} class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 bg-white">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 data-aos="fade" class="theme-text container fw-bold">
                            IT Infrastructure Services
                            </h1>
                            <p data-aos="fade" class="lead container text-capitalize text-start ">
                                We specialize in crafting comprehensive network infrastructures, encompassing the setup of essential servers such as ADDS, DNS, DHCP, etc., across both Windows and Linux platforms. Our expertise extends to meticulous cabling work for network configurations, as well as fixing racks for network devices and servers, seamlessly integrating managed and unmanaged switches. Additionally, we excel in deploying advanced security measures, including firewall installations and access point setups, ensuring robust protection for your network environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default ITServices;

