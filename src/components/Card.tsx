import { BadgeDollarSign, CheckCircle } from "lucide-react";
import React from "react";

type ServiceProps = {
  title: string;
  description: string;
  features: string[];
  price: string;
  phone: string;
};

const Card = ({ title, description, features, price, phone }: ServiceProps) => {
  const waLink = `https://wa.me/${phone}?text=Halo,%20saya%20ingin%20pesan%20layanan%20${encodeURIComponent(
    title
  )}`;
  return (
    <div className="bg-white rounded-2xl shadow-md border p-6 flex flex-col justify-between hover:shadow-xl transition">
      <div>
        <h3 className="font-bold text-2xl">{title}</h3>

        {/* <p className="text-gray-600 mb-4">{description}</p> */}
        <ul className="space-y-2 mt-8">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-start gap-2 text-gray-700"
            >
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-6 boder-gray-200" />

      <div className="flex flex-col gap-3">
        <div className="mt-6  text-green-700 font-semibold text-lg flex items-center justify-center">
          <BadgeDollarSign className="w-5 h-5 mr-1" />
          <span>{price}</span>
        </div>

        {/* <button className="bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg font-semibold transition cursor-pointer">
          Pesan Sekarang
        </button> */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg font-semibold transition cursor-pointer flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M16.79 14.37c-.27-.13-1.58-.78-1.83-.87s-.42-.13-.6.13c-.18.26-.69.87-.85 1.05-.16.17-.31.2-.58.07-.27-.13-1.15-.42-2.19-1.32-.81-.72-1.36-1.61-1.52-1.88s-.02-.42.11-.55c.11-.11.26-.29.39-.43.13-.15.17-.25.26-.42.08-.17.04-.31-.02-.43-.07-.13-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.47-.15-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.26-.87.85-.87 2.06 0 1.2.89 2.36 1.02 2.52.13.17 1.75 2.66 4.24 3.72.59.25 1.05.4 1.41.52.59.19 1.13.17 1.56.1.48-.07 1.58-.65 1.8-1.28.22-.63.22-1.18.15-1.28-.06-.1-.24-.15-.51-.28z" />
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.91.54 3.7 1.46 5.23L2 22l4.89-1.43C8.28 21.46 10.1 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.67 0-3.21-.51-4.48-1.38l-.32-.21-2.9.85.89-2.82-.21-.33C4.51 15.21 4 13.67 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          Pesan Sekarang
        </a>
      </div>
    </div>
  );
};

export default Card;
