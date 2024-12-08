import React, { useState } from 'react';


const About = () => {
    return (
        <div>
          {/* Culture Section */}
          <div className="culture sec-gap">
            <div className="container">
              <div className="main-content">
                <h1 className="secondary-header">
                  Uniting cultures, embracing new beginnings.
                </h1>
              </div>
            </div>
          </div>
    
          {/* Flag Section */}
          <div className="flag-sec">
            <div className="img-box">
            <img src="/images/about-bg.jpeg" className="img-fluid" alt="flag" />

            </div>
          </div>
    
          {/* Our Story Section */}
          <div className="our-story">
            <div className="container">
              <div className="main-content">
                <div className="row">
                  <div className="img_section">
                    <div className="img-box">
                      <img
                        src="/images/our-story1.png"
                        className="img-fluid"
                        alt="story-1"
                      />
                    </div>
                  </div>
                  <div className="text_content">
                    <h1 className="para-header">Our Story</h1>
                    <h6 className="para-txt">
                      Dude Immigration Services Ltd, based in Surrey, is a Canadian
                      immigration consultancy firm. We, at, Dude Immigration truly
                      believe in the fact that “Client is the soul of our business”.
                      Our dedicated team of experts, strives hard to provide best
                      results by giving full and undivided attention to each and
                      every case from scratch to finish. We are one of the most
                      preferred immigration consultants as we offer best quality
                      services with no false commitments.
                    </h6>
                    <ul className="para-txt">
                      <li>Our Vision - Be the Best</li>
                      <li>Our Mission - Do the Best</li>
                      <li>Our Values - Give the Best</li>
                    </ul>
                    <h6 className="para-txt">
                      We are knowledgeable, experienced, efficient, ethical,
                      dedicated and affordable.
                      <br />
                      Our philosophy is simple, “Work harder but smarter” and “There
                      is no elevator to success”.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Our Goal Section */}
          <div className="our-goal">
            <div className="container">
              <div className="main-content">
                <div className="our_goal">
                  <h1 className="para-header">Our Goal</h1>
                  <h6 className="our_goal_text">
                    At our immigration agency, our goal is to make dreams a reality.
                    We are driven by a deep commitment to assisting individuals and
                    families in navigating the complex world of immigration. Our
                    dedicated team of experts strives to provide exceptional
                    services that ensure a smooth and successful transition to a new
                    country. We understand that each client has unique aspirations,
                    and we work diligently to personalize our approach, tailoring it
                    to their specific needs. Our ultimate objective is to empower
                    individuals to pursue opportunities, reunite with loved ones,
                    and build a brighter future.
                  </h6>
                </div>
              </div>
            </div>
          </div>
    
          {/* Call-to-Action Section */}
          <div className="cta">
            <div className="content">
              <h1 className="p-header">
                Explore your options with our Immigration Services
              </h1>
              <button className="learn-more-btn">Book A Consultation</button>
            </div>
          </div>
    
          {/* Blog Section */}
          <div className="blogs">
            <div className="container">
              <div className="main-content">
                <h1 className="primary-header">Blogs</h1>
                <div className="blog-row">
                  <div className="blog">
                    <h3 className="p-txt">
                      "Understanding the Different Types of Visas: A Comprehensive
                      Guide”
                    </h3>
                    <img
                      className="blog-img"
                      src="/images/blog1.jpg"
                      alt="blog1"
                    />
                  </div>
                  <div className="blog">
                    <h3 className="p-txt">
                      "The Importance of Hiring an Immigration Lawyer"
                    </h3>
                    <img
                      className="blog-img"
                      src="/images/blog2.jpg"
                      alt="blog2"
                    />
                  </div>
                  <div className="blog">
                    <h3 className="p-txt">"Common Immigration Mistakes to Avoid"</h3>
                    <img
                      className="blog-img"
                      src="/images/blog3.jpg"
                      alt="blog3"
                    />
                  </div>
                </div>
                <a href="./blog.html">
                  <div className="view-btn">
                    <button className="learn-more-btn">View All</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default About;