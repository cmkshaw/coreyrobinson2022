import React, { useState, useEffect } from "react";

//https://betterprogramming.pub/create-a-scroll-to-top-arrow-using-react-hooks-18586890fedc

const ScrollArrow = () => {
  const white = "#fff",
    blue = "#2727E6";
  const [showScroll, setShowScroll] = useState(false);
  const [scrollColor, setScrollColor] = useState(blue);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  }, []);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 800) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset < 800) {
      setShowScroll(false);
    }

    // if (window.pageYOffset > 2700) {
    //     setScrollColor(blue);
    // } else {
    //     setScrollColor(white);
    // }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(showScroll);
  return (
    <div
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    >
      <svg
        width="24"
        height="96"
        viewBox="0 0 24 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8303 4.47593L10.8303 94.7337C10.8303 95.3791 11.3541 95.903 11.9996 95.903C12.645 95.903 13.1688 95.3791 13.1688 94.7337L13.1688 4.47593L22.0038 13.3109C22.4598 13.7669 23.2011 13.7669 23.6571 13.3109C24.1143 12.8549 24.1143 12.1136 23.6571 11.6575L11.9996 -8.15391e-06L0.342006 11.6575C-0.114007 12.1136 -0.114007 12.8549 0.342006 13.3109C0.799188 13.7669 1.53933 13.7669 1.99534 13.3109L10.8303 4.47593Z"
          fill={scrollColor}
        />
      </svg>
    </div>
  );
};

export default ScrollArrow;
