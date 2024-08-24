import React, { useState } from "react";

const ImageWithSkeleton = ({ src, alt = "", style = {}, className = "" }) => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false); // Set loading to false once the image is fully loaded
    };

    return (
        <div style={{ ...style, position: "relative" }} className={className}>
            {loading && (
                <div
                    style={{
                        ...style,
                        backgroundColor: "#e0e0e0",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        borderRadius: "10px", // Match border radius
                    }}
                    className="skeleton-loader"
                ></div>
            )}
            <img
                src={src}
                alt={alt}
                style={{
                    ...style,
                    display: loading ? "none" : "block",
                    borderRadius: "10px", // Match border radius
                    objectFit: "cover",
                }}
                className={className}
                onLoad={handleImageLoad}
            />
        </div>
    );
};

export default ImageWithSkeleton;
