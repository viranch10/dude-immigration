const Footer = () => {
    return (
        <div className="footer">
        <div className="footer-links">
              <div>
                <a href="./index.html">
                  <div className="logo-img">
                    <img src="/images/logo-white.png" alt="logo" className="img" />
                  </div>
                </a>
                <h6 className="f-link other">
                  19139 72 Avenue Surrey BC, V4N 6L1
                </h6>
              </div>
              <div className="inner-content">
                <div className="menu-link">
                  <h4 className="f-header">Information</h4>
                  <a href="./about.html">
                    <h4 className="f-link">About</h4>
                  </a>
                  <a href="./blog.html">
                    <h4 className="f-link">Blog</h4>
                  </a>
                  <a href="./contact.html">
                    <h4 className="f-link">Contact us</h4>
                  </a>
                </div>
              </div>
              <div className="inner-content">
                <div className="menu-link">
                  <h4 className="f-header">Helpful Links</h4>
                  <a href="javascript:void(0);">
                    <h4 className="f-link">Visiting visa</h4>
                  </a>
                  <a href="javascript:void(0);">
                    <h4 className="f-link">Student visa</h4>
                  </a>
                  <a href="javascript:void(0);">
                    <h4 className="f-link">Business Visa</h4>
                  </a>
                  <a href="javascript:void(0);">
                    <h4 className="f-link">Work permit</h4>
                  </a>

                  <a href="javascript:void(0);">
                    <h4 className="f-link">Permanent resident</h4>
                  </a>
                </div>
              </div>
              <div className="inner-content">
                <div className="form-group">
                  <h4>Get in touch</h4>
                  <div className="subscribe">
                    <input type="text" className="form-control" />
                    <h3 className="p-txt">Subscribe</h3>
                  </div>
                </div>
                <div className="socials-links">
                  <div className="links">
                    <img src="/images/social-icons.png" />
                  </div>
                    <a className="back-to-top" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">
                        Back To Top
                    </a>
                </div>
              </div>

        </div>
          <div className="footer-strip">
            <div className="left-strip">
              <span className="f-link other">Copyright Dude Immigration@Viranch Dave/8929933,Athulya Mary/8911939 ,2024</span>
            </div>
            <div className="right-strip">
              <span className="f-link other">Terms and conditions</span>
              <span className="f-link other">Privacy policies</span>
              <span className="f-link other">Cookies settings</span>
            </div>
          </div>
  </div>
    )
}

export default Footer