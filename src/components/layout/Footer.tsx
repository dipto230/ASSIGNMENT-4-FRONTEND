import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#f4f8f8] text-gray-700 pt-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-2xl text-green-600">❤</div>
            <h2 className="text-2xl font-bold text-gray-800">Vicodin</h2>
          </div>

          <p className="text-sm leading-6 mb-6">
            Lorem Ipsum is simply dummy text of the and typesetting industry.
            Lorem Ipsum is dummy of the printing.
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-green-600" />
              Brooklyn, New York, United States
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="text-green-600" />
              +0123-456789
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-green-600" />
              example@example.com
            </div>
          </div>

          <div className="flex gap-4 mt-6 text-gray-600 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>All Products</li>
            <li>Locations Map</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>

      
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Services</h3>
          <ul className="space-y-3 text-sm">
            <li>Order tracking</li>
            <li>Wish List</li>
            <li>Login</li>
            <li>My account</li>
            <li>Terms & Conditions</li>
            <li>Promotional Offers</li>
          </ul>
        </div>

      
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Customer Care</h3>
          <ul className="space-y-3 text-sm">
            <li>Login</li>
            <li>My account</li>
            <li>Wish List</li>
            <li>Order tracking</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none"
            />
            <button className="bg-green-600 text-white px-4">➤</button>
          </div>

          <h4 className="mt-6 font-semibold text-gray-800">We Accept</h4>
          <div className="flex gap-3 mt-3">
            <img src="/payments/paypal.png" alt="paypal" className="h-6" />
            <img src="/payments/visa.png" alt="visa" className="h-6" />
            <img src="/payments/discover.png" alt="discover" className="h-6" />
            <img src="/payments/mastercard.png" alt="mastercard" className="h-6" />
            <img src="/payments/amex.png" alt="amex" className="h-6" />
          </div>
        </div>
      </div>

     
      <div className="bg-[#1f2630] text-gray-200 mt-12 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>All Rights Reserved @ Company 2026</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <span>Terms & Conditions</span>
          <span>Claim</span>
          <span>Privacy & Policy</span>
        </div>
      </div>
    </footer>
  );
}
