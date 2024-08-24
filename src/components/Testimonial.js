import React, { Suspense, useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const DesktopsLaptops = () => {

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
                Desktops & Laptops
              </h1>
              <p data-aos="fade" class="lead container text-capitalize text-start ">
                We specialize in offering dependable and robust desktops and laptops designed for commercial use, backed by long-term support and competitive pricing. Our expertise lies in providing the best value compared to other vendors. We offer products from renowned companies, along with a comprehensive range of accessories and spare parts including HDDs, SSDs, RAM, batteries, headsets, monitors, printers, and more.
                We provide desktops and laptops from the following reputable brands:
                <span className='d-block mt-2 mb-0'>

                  <ul type="none">
                    <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	Dell</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} /> HP</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#219bda' }} />	Lenovo</li>
                  </ul>
                </span>
                With our commitment to quality, reliability, and affordability, we ensure that your business operations run smoothly while meeting your budgetary requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DesktopsLaptops;

