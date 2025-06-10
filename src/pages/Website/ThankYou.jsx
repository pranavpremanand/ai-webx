import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../../components/Footer";

const ThankYou = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-[80vh] flex items-center justify-center py-16">
        <div className="wrapper">
          <div
            data-aos="fade-up"
            className="max-w-4xl mx-auto bg-white p-8 sm:p-10 shadow-large shadow-black/10 rounded-lg relative z-10 flex flex-col items-center"
          >
            {/* Success icon */}
            <div className="text-6xl text-secondary mb-6">
              <FaCheckCircle />
            </div>

            {/* Main content */}
            <h1 data-aos="fade-up" className="heading-2 text-center mb-4">
              Your Message Has Been Sent Successfully!
            </h1>
            <p data-aos="fade-up" className="text-center mb-8 max-w-2xl">
              We appreciate you contacting AI WebX. One of our team members will
              get back to you shortly. Have a great day!
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/" className="primary-btn">
                Return to Home
              </Link>
              <Link
                to="/services"
                className="px-5 py-3 text-white bg-secondary rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
