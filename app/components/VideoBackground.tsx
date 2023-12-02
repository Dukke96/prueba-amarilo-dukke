import React from 'react';

export default function VideoBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source
          src="https://media1.amarilo.com.co/website/s3fs-public/home/2023-08/hero-video-1.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta videos.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/70"></div>
    </div>
  );
}
