import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

/* ===== Motion Variants ===== */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-green-100 w-full text-slate-700">
      {/* Content Wrapper */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-120px" }}
        className="max-w-8xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
      >
        {/* Brand */}
        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://i.ibb.co/1f2vNxWk/edited-photo-1.png"
              alt="logo"
              className="w-14 h-14 rounded-full object-cover"
            />
            <h2 className="text-2xl font-bold text-slate-900 ">E-TuitionBD</h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-900">
            We provide professional online tuition services connecting students and qualified tutors across Bangladesh.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp}>
          <h3 className="font-semibold mb-4 text-slate-900">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={item.path}
                  className="hover:text-green-900 transition"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp}>
          <h3 className="font-semibold mb-4 text-slate-900">Contact</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>support@etuitionbd.com</li>
            <li>+880 1764841333</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </motion.div>

        {/* Newsletter & Social */}
        <motion.div variants={fadeUp}>
          <h3 className="font-semibold mb-4 text-slate-900">Stay Connected</h3>
          
          {/* Newsletter */}
          <motion.form
            whileFocusWithin={{ scale: 1.03 }}
            className="flex mb-5"
          >
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm rounded-l-md bg-white border border-slate-300 outline-none"
            />
            <button
              className="px-4 py-2 bg-slate-800 text-sm text-white rounded-r-md hover:bg-slate-900 transition"
            >
              Subscribe
            </button>
          </motion.form>

          {/* Social Icons */}
         {/* Social Icons */}
<div className="flex gap-3">
  {[
    { icon: FaFacebookF, link: "https://www.facebook.com/md.shariyar.kobir.2024" },
    { icon: FaInstagram, link: "https://www.instagram.com/shariyar__kobir/" },
    { icon: FaLinkedinIn, link: "" },
    { icon: FaXTwitter, link: "" },
  ].map(({ icon: Icon, link }, i) => (
    <motion.a
      key={i}
      href={link}               
      target="_blank"          
      rel="noopener noreferrer" 
      whileHover={{ y: -4, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-slate-300 text-slate-700 hover:text-blue-700 shadow-sm"
    >
      <Icon />
    </motion.a>
  ))}
</div>

        </motion.div>
      </motion.div>

      {/* Bottom */}
      <div className="w-full bg-green-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="border-t border-green-200 py-4 text-center text-sm text-slate-600"
        >
          © {new Date().getFullYear()} E-TuitionBD. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
