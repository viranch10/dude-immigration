import React, { useState } from 'react';


const Home = () => {

    return (
        <>
  <div className="home-sec">
    <div className="container">
      <div className="main-content">
        <div className="first-sec">
          <div className="content">
            <div className="img-box">
              <img src="/images/home-first.png" className="img" alt="first-img" />
            </div>
            <h1 className="primary-header">
              Embrace new horizon<span className="white-txt">s. Discover </span>
              boundless possibilitie<span className="white-txt">s. Welcome </span>
              to a world of opportun<span className="white-txt">ity.</span>
            </h1>
            <button className="consultation-btn">Book A Consultation</button>
            <div className="bottom-boxes">
                <div className="f-box">
                  <h1 className="count">8+</h1>
                  <h6 className="p-txt">Countries Served</h6>
                </div>
                  <div className="f-box">
                    <h1 className="count">400+</h1>
                    <h6 className="p-txt">Visa Processed</h6>
                  </div>
                  <div className="f-box">
                    <h1 className="count">30+</h1>
                    <h6 className="p-txt">Visa Processed</h6>
                  </div>
              </div>
          </div>
        </div>
        <div className="second-sec only-desktop">
          <div className="box">
            <div className="img-box">
              <img src="/images/home-second.png" className="img" alt="sec-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="our-service">
    <div className="container">
      <div className="main-content">
        <h1 className="primary-header">Our Services</h1>
        <div className="service">
            <div className="img-box">
                <img src="/images/STUDENT VISA-3 .png " className="img" alt="service" />
            </div>

          <div className="content">
            <h1 className="para-header">Student Visa</h1>
            <p className="p-txt">
              A student visa is a crucial document that allows foreign
              nationals to study in another country. It offers aspiring
              students an incredible opportunity to pursue academic excellence
              and gain invaluable cultural experiences in an international
              setting. Obtaining a student visa entails meeting specific
              requirements, such as being accepted by a recognized educational
              institution, demonstrating financial stability to cover tuition
              fees and living expenses, and possessing valid health insurance.
            </p>
            <a href="./studentvisa.html"><button className="learn-more-btn">Learn More</button></a>
          </div>
        </div>

        <div className="service">
            <div className="content only-desktop">
                <h1 className="para-header">Work Permit</h1>
                <p className="p-txt">
                A work permit is an essential document that enables foreign
                nationals to legally work in another country. It serves as a
                gateway to exciting employment opportunities and allows
                individuals to contribute their skills and expertise to the host
                nation's workforce. Acquiring a work permit involves fulfilling
                specific criteria, including securing a job offer from a
                registered employer, demonstrating the necessary qualifications
                and experience, and meeting any language proficiency
                requirements.
                </p>
                <a href="./workpermit.html"> <button className="learn-more-btn">Learn More</button></a>
            </div>
            <div className="img-box">
                <img src="/images/WORK VISA 2.png" className="img" alt="service" />
            </div>
            <div className="content mobile-only">
                <h1 className="para-header">Work Permit</h1>
                <p className="p-txt">
                A work permit is an essential document that enables foreign
                nationals to legally work in another country. It serves as a
                gateway to exciting employment opportunities and allows
                individuals to contribute their skills and expertise to the host
                nation's workforce. Acquiring a work permit involves fulfilling
                specific criteria, including securing a job offer from a
                registered employer, demonstrating the necessary qualifications
                and experience, and meeting any language proficiency
                requirements.
                </p>
                <a href="./workpermit.html"> <button className="learn-more-btn">Learn More</button></a>
            </div>
        </div>

        <div className="service">
            <div className="img-box">
              <img src="/images/VISITOR VISA.webp" className="img" alt="service" />
            </div>
            <div className="content">
                <h1 className="para-header">Visiting Visa</h1>
                <p className="p-txt">
                A visiting visa is an important document that allows foreign
                nationals to visit another country for a temporary period. It
                provides an excellent opportunity to explore new cultures, visit
                loved ones, attend conferences, or engage in tourism activities.
                Obtaining a visiting visa involves meeting specific
                requirements, such as demonstrating sufficient financial means
                to cover travel expenses, having a valid passport, and providing
                a detailed itinerary of the visit.
                </p>
            <a href="./visitorvisa.html"><button className="learn-more-btn">Learn More</button> </a> 
            </div>
        </div>

        <div className="service">
            <div className="content only-desktop">
                <h1 className="para-header">Permanent Resident</h1>
                <p className="p-txt">
                Permanent residency, also known as a permanent resident status
                or a green card, is a highly sought-after immigration status
                that grants individuals the right to live and work permanently
                in a foreign country. It provides stability, security, and a
                pathway towards citizenship. Acquiring permanent residency
                typically involves meeting specific criteria, such as having a
                qualifying relationship, being sponsored by a family member or
                employer, or meeting certain skill or investment requirements.
                </p>
                <a href="./permanentresident.html"><button className="learn-more-btn">Learn More</button></a>
            </div>
            <div className="img-box">
                <img src="/images/PR 1.jpg" className="img" alt="service" />
            </div>
            <div className="content mobile-only">
                <h1 className="para-header">Permanent Resident</h1>
                <p className="p-txt">
                Permanent residency, also known as a permanent resident status
                or a green card, is a highly sought-after immigration status
                that grants individuals the right to live and work permanently
                in a foreign country. It provides stability, security, and a
                pathway towards citizenship. Acquiring permanent residency
                typically involves meeting specific criteria, such as having a
                qualifying relationship, being sponsored by a family member or
                employer, or meeting certain skill or investment requirements.
                </p>
                <a href="./permanentresident.html"><button className="learn-more-btn">Learn More</button></a>
            </div>
        </div>

        <div className="service">
            <div className="img-box">
              <img src="/images/service5.png" className="img" alt="service" />
            </div>
            <div className="content">
                <h1 className="para-header">Business Visa</h1>
                <p className="p-txt">
                A business visa is a crucial pathway for individuals seeking to
                explore new entrepreneurial opportunities or expand their
                existing ventures in a foreign country. It grants eligible
                applicants the authorization to engage in business-related
                activities, such as attending meetings, conferences, negotiating
                contracts, or establishing a new company. The business visa
                process involves meeting specific requirements, which may vary
                depending on the destination country's immigration laws and
                regulations.
                </p>
                <a href="./businessvisa.html"><button className="learn-more-btn">Learn More</button></a>
            </div>
        </div>

        <div className="service">
            <div className="content only-desktop">
                <h1 className="para-header">Super Visa</h1>
                <p className="p-txt">
                  The "Super Visa" typically refers to a type of visa program in Canada that allows parents and grandparents
                  of Canadian citizens or permanent residents to visit their family members in Canada for an extended period
                  of time. This visa program was designed to help families reunite by allowing eligible individuals to stay
                  in Canada for up to five years at a time without the need for renewal.
                </p>
                <a href="./visitorvisa.html"><button className="learn-more-btn">Learn More</button></a>
            </div>
            <div className="img-box">
                <img src="/images/service7.png" className="img" alt="service" />
            </div>
            <div className="content mobile-only">
                <h1 className="para-header">Super Visa</h1>
                <p className="p-txt">
                  The "Super Visa" typically refers to a type of visa program in Canada that allows parents and grandparents
                  of Canadian citizens or permanent residents to visit their family members in Canada for an extended period
                  of time. This visa program was designed to help families reunite by allowing eligible individuals to stay
                  in Canada for up to five years at a time without the need for renewal.
                </p>
                <a href="./visitorvisa.html"><button className="learn-more-btn">Learn More</button></a>
            </div>
        </div>
      </div>
    </div>
  </div>
        <div className="about">
          <div className="content">
            <h1 className="primary-header">About Us</h1>
            <p className="p-txt">
              Dude Immigration Services Ltd, based in Surrey, is a Canadian immigration consultancy firm. We, at, Dude
              Immigration truly believe in the fact that “Client is the soul of our business”.
              Our dedicated team of experts, strives hard to provide best results by giving full and undivided
              attention
              to each and every case from scratch to finish.
              We are one of the most preferred immigration consultants as we offer best quality services with no false
              commitments.
            </p>
            <a href="./about.html"><button className="consultation-btn">Who We Are</button></a>
          </div>
          <div className="img-block only-desktop">
            <div className="images-row">
                <div>
                    <div className="img-box">
                    <img src="/images/about1.png" className="img" alt="about1" />
                    </div>
                </div>

                <div>
                    <div className="img-box">
                    <img src="/images/about4.png" className="img" alt="about2" />
                    </div>
                </div>
            </div>
            <div className="images-row">
                <div>
                    <div className="img-box">
                      <img src="/images/about2.png" className="img" alt="about2" />
                    </div>
                  </div>
                <div>
                    <div className="img-box">
                    <img src="/images/about3.png" className="img" alt="about2" />
                    </div>
                </div>
            </div>
          </div>
        </div>
  <div className="choose-us">
        <div className="choose-us-block">
            <div className="img-box">
                <img src="/images/choose-us1.png" className="img" alt="choose-us" />
            </div>
            <div className="content">
                <h1 className="primary-header">Why should Choose Us</h1>
                <div className="inner-content">
                <div className="list">
                    <p className="p-txt">
                    Expertise you can
                    trust, backed by years of experience in our field.
                    </p>
                </div>
                <div className="list">
                    <p className="p-txt">
                    Personalized approach
                    tailored to your unique immigration goals need.
                    </p>
                </div>
                <div className="list">
                    <p className="p-txt">
                    Comprehensive
                    services covering all aspects of the immigration process.
                    </p>
                </div>
                <div className="list">
                    <p className="p-txt">
                    Trusted reputation
                    and affiliations with reputable immigration authorities.
                    </p>
                </div>
                </div>
            </div>
        </div>
  </div>

    <div className="cta">
        <img src="/images/about-bg.jpeg" className="img" alt="about-bg" />
        <div className="content">
            <h1 className="p-header">
              Explore your options with our Immigration Services
            </h1>
            <button className="learn-more-btn">Book A Consultation</button>
        </div>
    </div>
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
                <img className="blog-img" src="/images/blog1.jpg" alt="blog1.jpg" />

            </div>
            <div className="blog">
                <h3 className="p-txt">
                    "The Importance of Hiring an Immigration Lawyer"
                    </h3>
                <img className="blog-img" src="/images/blog2.jpg" alt="blog2.jpg" />

            </div>
            <div className="blog">
                <h3 className="p-txt">
                    "Common Immigration Mistakes to Avoid"
                </h3>
                <img className="blog-img" src="/images/blog3.jpg" alt="blog3.jpg" />

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
  <style jsx>{`   
    .home-sec .main-content {
        display: flex;
        margin-bottom: 60px;
    }

    .home-sec .primary-header {
        text-align: left;
    }

    .second-sec .img-box img {
        height: 600px;
    }

    .second-sec {
        width: 1000px;
        background-color: #FFCC09;
        text-align: end;
    }

    .first-sec .consultation-btn {
        padding: 16px;
    }

    .bottom-boxes {
        display: flex;
        justify-content: center;
        margin-top: 16px;
    }

    .f-box {
        background-color: #FCEBA4;
        border: 5px solid #000;
        border-radius: 10px;
        width: 100px;
        height: fit-content;
        padding: 8px;
        text-align: center;
        margin: 16px;
    }

    .primary-header {
        text-align: center;
    }

    .service, .about {
        display: flex;
        margin: 60px;
    }

    .service .img-box {
        margin: 16px;
    }
    .service .img-box img {
        border: 1px solid transparent;
        border-radius: 10px;
        width: 632px;
        height: 414px;
        object-fit: cover;
    }

    .service .content {
        margin: 16px;
    }

    .our-service {
        background-color: #FFFCCF;
        padding: 16px 0;
    }



    .about .consultation-btn {
        padding: 12px;
    }

    .about {
        background-color: #FFFCED;
    }

    .about h1 {
        text-align: left;
    }

    .img-block {
        display: flex;
        margin-left: 10px;
        width: 55%;
    }

    .choose-us {
        background-color: #F8F8F8;
        padding: 32px 16px;
    }

    .choose-us-block {
        display: flex;
        justify-content: space-around;
    }

    .check-icon {
        margin-right: 10px;
    }

    .choose-us-block h1 {
        text-align: left;
    }

    .choose-us-block .content {
        margin: auto 0;
    }

    .cta {
        background-color: #FCEBA4;
        padding: 32px;
        text-align: center;
        border: 1px solid transparent;
        border-radius: 10px;
    }

    .cta img {
        width: -webkit-fill-available;
    }

    .blog-row {
        display: flex;
        position: relative;
        justify-content: center;
    }

    .blogs {
        margin-bottom: 60px;
    }

    .blog {
        margin: 16px;
        width: 300px;
    }

    .blog-img {
        width: 300px;
        height: 400px;
        border: 1px solid;
        border-radius: 10px;
        object-fit: cover;
    }

    .blog .p-txt {
        position:absolute;
        bottom: 0;
        color: #FFF;
        padding: 10px;
        width: inherit;
    }

    .blog-row .learn-more-btn {
        text-align: center;
    }

    .view-btn {
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        .only-desktop {
            display: none;
        }

        .mobile-only {
            display: block;
        }

        .bottom-boxes {
            display: block;
            position: relative;
            bottom: unset;
            right: unset;
            margin: 30px auto;
        }

        .service {
            display: block;
            margin: 32px auto;
        }
        .service .img-box img {
            width: 100%;
            height: auto;
        }
        .service .content {
            text-align: center;
        }
        .about {
            margin: 30px;
        }
        .choose-us-block {
            display: block;
        }
        .choose-us-block .img-box img {
            width: 100%;
        }
        .blog-row {
            display: block;
        }
        .blog .p-txt {
            position: relative;
            color: #000;
            text-align: center;
            margin: 0;
            width: auto;
        }
        .blog {
            margin: auto;
        }
    }
  `}</style>
        </>
    );
};

export default Home;
