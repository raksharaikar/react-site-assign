import React from "react";
import "./test.css";

function Testimonials() {
  return (
    <>
      <section className="test-section-padding section-testimonial">
        <p className="title">Testimonials</p>
        <div className="grid-test-container">
          <div className="grid-test-item">
            {" "}
            <div class="testimonial">
              <div className="testimonial-content">
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  dapibus nisi nec rutrum gravida. Nullam ornare sed libero non
                  viverra. Quisque auctor cursus purus.
                </p>
              </div>
              <div className="testimonial-profile">
                <div className="pic">
                  <img src="/images/test-icon.png" />
                </div>
                <h3 className="title">
                  CLIENT NAME
                  <span class="post">Position, ORG</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="grid-test-item">
            {" "}
            <div class="testimonial">
              <div className="testimonial-content">
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  dapibus nisi nec rutrum gravida. Nullam ornare sed libero non
                  viverra. Quisque auctor cursus purus. Donec lacinia elementum
                  justo sit amet vulputate. Phasellus varius sapien sed.
                </p>
              </div>
              <div className="testimonial-profile">
                <div className="pic">
                  <img src="/images/test-icon.png" />
                </div>
                <h3 className="title">
                  CLIENT NAME
                  <span class="post">Position, ORG</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="grid-test-item">
            {" "}
            <div class="testimonial">
              <div className="testimonial-content">
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  dapibus nisi nec rutrum gravida. Nullam ornare sed libero non
                  viverra. Quisque auctor cursus purus. Donec lacinia elementum
                  justo sit amet 
                </p>
              </div>
              <div className="testimonial-profile">
                <div className="pic">
                  <img src="/images/test-icon.png" />
                </div>
                <h3 className="title">
                  CLIENT NAME
                  <span class="post">Position, ORG</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
