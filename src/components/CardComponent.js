import React, { Suspense, useState } from 'react';
import FlipMove from 'react-flip-move';
import ImageSkeletonLoader from '../Layouts/Skeleton';
import LazyImage from './LazyImage';

const CardComponent = ({ title, imageSrc, instructions }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card-wrapper">
      <FlipMove>
        <div key="front" className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
          <div className="">
            {/* <img className="card-img-top"  alt="Card Front" />
            <div className="card-body">
              <h5 className="text-white"></h5>
            </div> */}
            <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
              <div class="card-img-top" >
                <Suspense fallback={<ImageSkeletonLoader />}>
                  <LazyImage class="img-fluid" src={imageSrc} />
                </Suspense>
              </div>
              <div class="card-img-overlay d-flex align-items-end">
                <div>
                  <h5 class="card-title text-white">{title}</h5>
                </div>
              </div>
            </div>

          </div>
          <div className="card-back">
            <div className="card-body h-100 bg-white">
              <p className="card-text">{instructions}</p>
            </div>
          </div>
        </div>
      </FlipMove>
    </div>
  );
};

export default CardComponent;
