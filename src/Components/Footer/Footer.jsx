const Footer = () => {
  return (
    <footer className="p-10 bg-base-200 text-base-content mt-10">
      <div className="footer flex justify-between items-center">
        <div>
          <span className="footer-title">About</span>
          <p>eTuitionBD – A modern Tuition Management Platform</p>
        </div>

        <div>
          <span className="footer-title">Quick Links</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Tuitions</a>
          <a className="link link-hover">Tutors</a>
        </div>

        <div>
          <span className="footer-title">Contact</span>
          <p>Email: support@etuitionbd.com</p>
          <p>Phone: +880123456789</p>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>© {new Date().getFullYear()} eTuitionBD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
