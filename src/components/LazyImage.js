import React, { useState, useEffect } from 'react';
import ImageSkeletonLoader from '../Layouts/Skeleton';

const LazyImage = ({ src, alt }) => {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        let observer;
        let didCancel = false;

        const loadImage = () => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                if (!didCancel) {
                    setImageSrc(src);
                }
            };
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach((entry) => {
                if (!didCancel && (entry.isIntersecting || entry.intersectionRatio > 0)) {
                    loadImage();
                    observer.unobserve(entry.target);
                }
            });
        };

        if (IntersectionObserver) {
            observer = new IntersectionObserver(handleIntersect, {
                threshold: 0.01,
            });
            const target = document.querySelector('.lazy');
            if (target) {
                observer.observe(target);
            }
        } else {
            // Fallback for browsers that do not support IntersectionObserver
            loadImage();
        }

        return () => {
            didCancel = true;
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        };
    }, [src]);

    return<img src={imageSrc || ''} alt={alt} style={{ objectFit: "cover", borderRadius: "10px" }} className="lazy w-100 h-100" />
    
};

export default LazyImage;
