import React from "react";
import AutoSwiper from "./AutoSwiper";

function Testimonials() {
  const testimonies = [
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/testimonials/testimoni4.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/testimonials/testimoni5.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/testimonials/testimoni6.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/testimonials/testimoni1.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/testimonials/testimoni2.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/testimonials/testimoni3.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/testimonials/testimoni4.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/testimonials/testimoni5.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/testimonials/testimoni6.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/testimonials/testimoni1.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/testimonials/testimoni2.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/testimonials/testimoni3.webp",
    },
    {
      image:
        "https://tv-flex.com/wp-content/themes/iptvfiesta/testimonials/testimoni4.webp",
    },
  ];

  return (
    <div className="max-w-7xl  mx-auto w-full  z-50 relative">
      <AutoSwiper slides={testimonies} />
    </div>
  );
}

export default Testimonials;
