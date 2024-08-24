import React, { Suspense, useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const CloudSupport = () => {

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
                            Cloud Services
                            </h1>
                            <p data-aos="fade" class="lead container text-capitalize text-start ">
                            We specialize in implementing a wide array of cloud services, leveraging the expertise of our highly experienced and certified cloud engineers. Our team excels in seamlessly integrating cloud solutions into your infrastructure, including virtual machines, storage, virtual networks, load balancers, and establishing secure connections between on-premises networks and the cloud using technologies like Site-to-Site VPN. We offer comprehensive support and services across the following cloud platforms :
                            <span className='d-block mt-2 mb-0'>
                           
<ul type="none">
  <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	Microsoft Azure</li>
  <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} /> Amazon Web Services (AWS)</li>
  <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} /> Google Cloud</li>
  <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} /> Oracle Cloud Infrastructure</li>
</ul>
                            </span>
                            With our deep knowledge and hands-on experience across these leading cloud providers, we ensure that your cloud environment is optimized for performance, scalability, and security to meet your business objectives effectively.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default CloudSupport;

