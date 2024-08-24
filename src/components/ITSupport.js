import React, { Suspense, useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';

const ITSupport = () => {

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
                    <div data-aos="fade-right" style={{height:"100vh"}} class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 bg-white">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 data-aos="fade" class="theme-text container fw-bold">
                            IT Support
                            </h1>
                            <p data-aos="fade" class="lead container text-capitalize text-start ">
                            We offer comprehensive IT operations services tailored to your needs. Our services encompass servers and desktops patching, troubleshooting, and proficient management of cloud virtual machines on Azure, AWS, or any other platform. We also specialize in SharePoint and O365 management, along with website maintenance. Additionally, we provide robust support for user issues, including email delivery problems, desktop hardware and software issues, printer troubleshooting, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default ITSupport;

