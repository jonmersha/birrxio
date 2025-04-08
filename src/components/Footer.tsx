const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Social Links */}
          <div className="col-md-4 mb-4">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.linkedin.com/in/jonmersha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="fab fa-linkedin me-2"></i> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jonmersha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="fab fa-github me-2"></i> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="fab fa-youtube me-2"></i> YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="fab fa-twitter me-2"></i> Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="mailto:info@birrx.io"
                  className="text-white text-decoration-none"
                >
                  <i className="fas fa-envelope me-2"></i> Email: info@birrx.io
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-white text-decoration-none"
                >
                  <i className="fas fa-phone-alt me-2"></i> Phone: +1 (234)
                  567-890
                </a>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div className="col-md-4 mb-4">
            <h4>Helpful Links</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://yohannes.besheger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="fas fa-external-link-alt me-2"></i>{" "}
                  yohannes.besheger.com
                </a>
              </li>
              <li>
                <a
                  href="https://besheger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="fas fa-external-link-alt me-2"></i> besheger.com
                </a>
              </li>
              <li>
                <a
                  href="https://newtechplc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="fas fa-external-link-alt me-2"></i>{" "}
                  newtechplc.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-3">
        <small>
          &copy; {new Date().getFullYear()} Hira Software PLC. All Rights
          Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
