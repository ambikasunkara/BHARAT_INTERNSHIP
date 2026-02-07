import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Images
const pmPoster = "https://i.postimg.cc/dQWnSN8s/pm-photo.jpg";
const sihLogo = "https://i.postimg.cc/MGRrC0zs/sih-logo.jpg";
const pmPhoto = "https://i.postimg.cc/HLc0Ws32/Whats-App-Image-2025-09-22-at-7-22-21-PM.jpg";

const companyDomains = [
  "ibm.com","microsoft.com","infosys.com","wipro.com","accenture.com",
  "tcs.com","oracle.com","google.com","amazon.com","facebook.com",
  "apple.com","cognizant.com","adobe.com","hpe.com","deloitte.com",
  "siemens.com","sap.com","hp.com","intel.com","qualcomm.com",
  "sony.com","samsung.com","twitter.com","linkedin.com","uber.com",
  "airbnb.com","netflix.com","paypal.com","stripe.com","salesforce.com",
  "zoom.us","spotify.com","slack.com","dropbox.com","github.com",
  "atlassian.com","tesla.com","nvidia.com","amd.com","redhat.com",
  "salesforce.com","square.com","oracle.com","mozilla.org","snap.com",
  "coinbase.com","binance.com","expedia.com","booking.com","airtel.in"
];

const companyLogos = companyDomains.map(
  domain => `https://logo.clearbit.com/${domain}`
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dashOpen, setDashOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen font-sans relative">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md fixed w-full z-50">
        <div className="text-2xl font-bold text-blue-900">Bharat Internship</div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/student-login")}
            className="px-4 py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800"
          >
            Sign In/Register
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-4 p-2 rounded-md bg-blue-700 hover:bg-blue-600 text-white"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-20 right-10 bg-blue-800 text-white flex flex-col p-4 space-y-3 rounded-md shadow-lg z-50">
            <Link
              to="/student-login"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Sign In/Register
            </Link>

           {/* Dashboards always go to login */}
            <button
              onClick={() => setDashOpen(!dashOpen)}
              className="text-left hover:underline font-semibold"
            >
              Dashboards ▼
            </button>

            
                {dashOpen && (
  <div className="flex flex-col pl-4 mt-2 space-y-2">
    <button
      onClick={() => {
        navigate("/student-login");
        setMenuOpen(false);
      }}
      className="text-left hover:underline font-semibold"
    >
      Student Dashboard
    </button>
    <button
      onClick={() => {
        navigate("/industry-login");
        setMenuOpen(false);
      }}
      className="text-left hover:underline"
    >
      Industry Dashboard
    </button>
    <button
      onClick={() => {
        navigate("/student-login");
        setMenuOpen(false);
      }}
      className="text-left hover:underline"
    >
      Admin Dashboard
    </button>
  </div>
)}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header
        className="flex flex-col items-center justify-center text-center px-6 bg-cover bg-center relative mt-24"
        style={{ backgroundImage: `url(${pmPoster})`, minHeight: "500px" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Bharat PM Internship</h1>
          <p className="text-xl italic max-w-3xl mb-6 drop-shadow-lg">
            "Internships are stepping stones to your future. Learn, explore, and discover your true potential."
          </p>
          <button
            onClick={() => navigate("/student-register")}
            className="px-8 py-3 bg-orange-500 text-white rounded-lg text-lg font-semibold hover:bg-orange-600 shadow-lg transition-all"
          >
            Find Your Dream Internship
          </button>
        </div>
      </header>

      {/* Partner Companies */}
      <section className="py-10 bg-white">
        <h2 className="text-xl font-semibold text-center mb-4">Our Partner Industries</h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left gap-6">
            {companyLogos.slice(0, 25).map((logo, idx) => (
              <div key={`top-${idx}`} className="flex items-center justify-center w-28 h-28 p-2 rounded-lg bg-gray-50 border border-gray-200">
                        <img src={logo} alt={`Company ${idx}`} onError={(e)=>{e.currentTarget.onerror=null;e.currentTarget.src=`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40'><rect width='100%' height='100%' fill='%23eef2ff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%233b82f6' font-family='Arial,Helvetica,sans-serif' font-size='12'>Company</text></svg>`}} loading="lazy" className="max-h-20 max-w-24 object-contain" />
              </div>
            ))}
            {companyLogos.slice(0, 25).map((logo, idx) => (
              <div key={`top2-${idx}`} className="flex items-center justify-center w-28 h-28 p-2 rounded-lg bg-gray-50 border border-gray-200">
                        <img src={logo} alt={`Company duplicate ${idx}`} onError={(e)=>{e.currentTarget.onerror=null;e.currentTarget.src=`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40'><rect width='100%' height='100%' fill='%23eef2ff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%233b82f6' font-family='Arial,Helvetica,sans-serif' font-size='12'>Company</text></svg>`}} loading="lazy" className="max-h-20 max-w-24 object-contain" />
              </div>
            ))}
          </div>
          <div className="flex animate-scroll-right gap-6 mt-4">
            {companyLogos.slice(25, 50).map((logo, idx) => (
              <div key={`bottom-${idx}`} className="flex items-center justify-center w-28 h-28 p-2 rounded-lg bg-gray-50 border border-gray-200">
                        <img src={logo} alt={`Company ${idx}`} onError={(e)=>{e.currentTarget.onerror=null;e.currentTarget.src=`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40'><rect width='100%' height='100%' fill='%23eef2ff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%233b82f6' font-family='Arial,Helvetica,sans-serif' font-size='12'>Company</text></svg>`}} loading="lazy" className="max-h-20 max-w-24 object-contain" />
              </div>
            ))}
            {companyLogos.slice(25, 50).map((logo, idx) => (
              <div key={`bottom2-${idx}`} className="flex items-center justify-center w-28 h-28 p-2 rounded-lg bg-gray-50 border border-gray-200">
                        <img src={logo} alt={`Company duplicate ${idx}`} onError={(e)=>{e.currentTarget.onerror=null;e.currentTarget.src=`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40'><rect width='100%' height='100%' fill='%23eef2ff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%233b82f6' font-family='Arial,Helvetica,sans-serif' font-size='12'>Company</text></svg>`}} loading="lazy" className="max-h-20 max-w-24 object-contain" />
              </div>
            ))}
          </div>
        </div>
        <style>
          {`
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes scroll-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-scroll-left {
              display: flex;
              width: max-content;
              animation: scroll-left 140s linear infinite;
            }
            .animate-scroll-right {
              display: flex;
              width: max-content;
              animation: scroll-right 140s linear infinite;
            }
          `}
        </style>
      </section>

      {/* PM Section */}
      <section className="py-12 bg-white flex flex-col md:flex-row items-center justify-center px-10 md:px-20 gap-10 border-t border-gray-200 shadow-sm">
        <div className="flex flex-col items-center text-center md:text-left">
          <img src={pmPhoto} alt="PM Narendra Modi" className="w-48 h-48 object-cover rounded-full shadow-md border-4 border-gray-200" />
          <p className="mt-4 text-lg font-bold text-blue-900">Shri Narendra Modi</p>
          <p className="text-sm text-gray-600 font-semibold">HONORABLE PRIME MINISTER</p>
        </div>
        <div className="max-w-xl text-gray-800">
          <p className="text-lg italic leading-relaxed">
            “Encouraging to see strong support for the PM Internship Scheme. 
            This is a big step towards empowering our youth and building a 
            future-ready workforce.”
          </p>
          <p className="mt-3 text-right font-semibold text-blue-900">— PM Modi</p>
        </div>
      </section>

      {/* Rajesh Nambiar Section */}
      <section className="py-12 bg-white flex flex-col md:flex-row items-center justify-center px-10 md:px-20 gap-10 border-t border-gray-200 shadow-sm">
        <div className="flex flex-col items-center text-center md:text-left">
          <img src="https://i.postimg.cc/76cVPS0B/Whats-App-Image-2025-09-22-at-7-58-29-PM.jpg" alt="Rajesh Nambiar" className="w-48 h-48 object-cover rounded-full shadow-md border-4 border-gray-200" />
          <p className="mt-4 text-lg font-bold text-blue-900">Shri Rajesh Nambiar</p>
          <p className="text-sm text-gray-600 font-semibold">VISIONARY LEADER IN INDIA'S IT INDUSTRY</p>
        </div>
        <div className="max-w-xl text-gray-800">
          <p className="text-lg italic leading-relaxed">
            “It’s inspiring to see initiatives like the PM Internship Scheme shaping the skills of our youth. 
            Such programs are essential for creating a future-ready workforce.”
          </p>
          <p className="mt-3 text-right font-semibold text-blue-900">— Rajesh Nambiar</p>
        </div>
      </section>

      {/* SIH Footer */}
      <footer className="bg-blue-900 py-10 text-center text-white mt-auto">
        <div className="flex flex-col items-center">
          <img src={sihLogo} alt="SIH Logo" className="w-20 mb-4 " />
          <h3 className="text-2xl font-bold">Smart India Hackathon</h3>
          <p className="mt-2 text-gray-200">Empowering Innovation • Driving Nation Building</p>
        </div>
      </footer>
    </div>
  );
}
