import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact_sec-gap">
        <div className="container">
          <div className="main-content">
            <h1 className="primary-header">
              Unlock Your <span className="dream"> Dream.</span>
            </h1>
            <h6 className="p-txt">
              Your immigration goals matter to us. Get in touch with our team
              through the provided contact details, and let us help you navigate
              the complexities of the immigration process. We're here to support
              you every step of the way.
            </h6>

            <div className="contact-us">
              <form id="contact-form" method="get">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="experiences"
                    rows="6"
                    id="textarea"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <input type="submit" id="submit" value="Submit" />
              </form>
              <p className="additional-txt">
                Welcome to our Immigration Assistance Center! We understand that
                the journey of immigration can be both exciting and challenging,
                and we are here to provide the support and guidance you need.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact_sec-gap {
          padding: 50px 0;
          background-color: #fffced;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .main-content {
          text-align: center;
        }
        .primary-header {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .dream {
          color: #ffcc09;
        }
        .p-txt {
          font-size: 1.2rem;
          margin-bottom: 30px;
          color: #555;
        }
        .contact-us {
          margin-top: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          resize: none;
        }
        #submit {
          background-color: #ffcc09;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }
        #submit:hover {
          background-color: #ffcc10;
        }
        .additional-txt {
          margin-top: 20px;
          font-size: 1rem;
          color: #777;
        }
      `}</style>
    </div>
  );
};

export default Contact;
