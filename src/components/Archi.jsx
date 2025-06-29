import React from "react";

import surati1 from "../assets/surati.png";
import surati2 from "../assets/surati2.png";
import surati3 from "../assets/surati3.png";
import surati4 from "../assets/surati4.png";
import surati5 from "../assets/surati5.png";
import surati6 from "../assets/surati6.png";
import surati7 from "../assets/surati7.png";

function MoreAboutUs() {
  const cards = [
    {
      image: surati1,
      text: `Georgian leading development company Archi has expanded its operations beyond state borders and started a new project in the
United States.

Recently, Archi announced the construction of a multi-functional residential complex on Pompano Beach near Miami, Florida, USA.
Named Archi Miami, the project is set to integrate up to 100 apartments, along with amenities such as a pool, versatile workspaces,
leisure areas, and sports centers. The ambitious project, with a total investment of $50 million, will be executed through a
collaboration between Archi and the American development company Elite Group.`,
    },
    {
      image: surati2,
      text: `"After years of dedicated efforts and successful implementation of high-level projects in Georgia, Archi is prepared to extend its
reach and establish a presence in international markets. While we remain committed to continuing our work in Georgia, with a

pipeline of projects planned for various regions, Archi is now directing its focus towards seizing opportunities in foreign markets."  Ilia Tsulaia, Archi’s partner and chairman of board.`,
    },
    {
      image: surati3,
      text: `The state of Florida, renowned for its appeal to tourists, with its vibrant tourism, diverse job market, business-friendly regulations,
strategic location, and robust infrastructure, stands out as an ideal location for the new Archi project.`,
    },
    {
      image: surati4,
      text: `"The state's popularity is underscored by a 14% increase in apartment rental prices over the past 24 months. The escalating migration
rate provides a compelling basis to anticipate a further surge in demand for residential apartments in the next 15-20 years.
Recognizing this trend, the local municipality is actively contributing to the urban development of Pompano Beach. I'm of the
opinion, that in a few years, this area will evolve into a distinctive and appealing destination, drawing the interest of both tourists and
prospective residents."  Giga Akirtava, partner of Elite Group.`,
    },
    {
      image: surati5,
      text: `The Architecture of "Archi Miami" will be outstanding, and its quality will fully meet the standards in America. The leading American
architectural company Deforma Studio worked on the visual side of the complex.

"During my twenty years of experience, this project is one of the most interesting. It will be a very modern, industrial-style complex
built with high-quality materials. Thanks to its distinctive and refined architectural design, the building will easily stand out from other
structures in this location" - project architect Javier Re Barrera.`,
    },
    {
      image: surati6,
      text: `The Archi Miami project is already in the final stage. The construction of the complex will start early next year and will be completed
in about two years, by 2026.  "Archi Miami" represents Archi's first global project, setting the stage for a series of upcoming ventures
worldwide. One of the company's priorities is to acquire other locations in the state of Florida and the American market in general.`,
    },
    {
      image: surati7,
      text: `"I joined Archi four years ago as a partner. Since then, we've consistently discussed transforming it into
a global entity, venturing into construction projects in major countries. It was my particular aspiration that the USA be our first international venture, given my 20
years of living and working experience here. Today marks a significant milestone as we lay the foundation for our first project abroad.
With unwavering confidence in our team's expertise, we will successfully realize Archi Miami and our forthcoming projects." Zaza
Pachulia partner of Archi.`,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-50">
      {/* კარტები */}
      <div className="space-y-16">
        {cards.map(({ image, text }, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-6 items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <img
              src={image}
              alt={`სურათი ${i + 1}`}
              className="w-full md:w-1/3 rounded-lg object-cover shadow-sm"
              style={{ maxHeight: 280 }}
            />
            <p className="text-gray-800 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-300 pt-8 text-center text-gray-600">
        <div className="flex justify-center items-center gap-3 mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="ANAGI Logo"
            className="w-10 h-10"
          />
          <span className="font-bold text-orange-500 text-2xl">ANAGI</span>
        </div>
        <p className="max-w-xl mx-auto text-sm leading-relaxed px-4">
          ANAGI is a Georgian construction company delivering high-quality projects internationally. We build with passion,
          integrity, and innovation.
        </p>
        <div className="mt-6 flex justify-center space-x-6 text-orange-500">
          {/* სოციალური და სხვა ღილაკები, სურვილისამებრ შეგიძლია აქ დაამატო */}
          <a
            href="#"
            className="hover:text-orange-600 transition"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.596 0 0 .597 0 1.333v21.334C0 23.404.596 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.596 1.324-1.333V1.333C24 .597 23.404 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-orange-600 transition"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2a3.75 3.75 0 00-3.75 3.75v8.5a3.75 3.75 0 003.75 3.75h8.5a3.75 3.75 0 003.75-3.75v-8.5a3.75 3.75 0 00-3.75-3.75h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-orange-600 transition"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5 1.11 1 2.5 1s2.48 1.119 2.48 2.5zM.22 8.03h4.97v13.97H.22V8.03zM8.22 8.03h4.77v1.89h.07c.66-1.25 2.28-2.57 4.7-2.57 5.04 0 5.97 3.32 5.97 7.63v8.05H18.1v-7.12c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.76v7.25H8.22V8.03z" />
            </svg>
          </a>
        </div>
        <p className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} ANAGI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default MoreAboutUs;
