import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";
import BBContainer from "../core/BBContainer/BBContainer";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <BBContainer>
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo & Description */}
            <div>
              <Image
                src={logo}
                alt="Website Logo"
                width={50}
                height={50}
                className="mb-4 rounded-full"
              />
              <p className="text-sm">
                We provide the best services with quality and commitment. Join
                us to experience excellence.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h2 className="text-sm font-semibold text-white">Quick Links</h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-orange-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media & Contact */}
            <div>
              <h2 className="text-sm font-semibold text-white">
                Connect with Us
              </h2>
              <div className="mt-4 flex gap-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="hover:text-blue-500"
                >
                  <Facebook size={24} />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="hover:text-blue-400"
                >
                  <Twitter size={24} />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:text-pink-500"
                >
                  <Instagram size={24} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  <Linkedin size={24} />
                </Link>
              </div>
              <p className="mt-4 text-sm">
                Email: contact@yourwebsite.com <br />
                Phone: +123 456 7890
              </p>
            </div>
          </div>
        </div>
      </BBContainer>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} BiteBox All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
