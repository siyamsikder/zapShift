import React from "react";
import {
  FaTruck,
  FaHome,
  FaWarehouse,
  FaUndo,
  FaGlobeAsia,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      icon: <FaTruck className="text-4xl text-secondary" />,
      highlight: false,
    },
    {
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      icon: <FaGlobeAsia className="text-4xl text-secondary" />,
      highlight: true, // Center green card
    },
    {
      title: "Fulfillment Solution",
      desc: "We offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      icon: <FaWarehouse className="text-4xl text-secondary" />,
      highlight: false,
    },
    {
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: <FaHome className="text-4xl text-secondary" />,
      highlight: false,
    },
    {
      title: "Corporate Service / Contract Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
      icon: <FaWarehouse className="text-4xl text-secondary" />,
      highlight: false,
    },
    {
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: <FaUndo className="text-4xl text-secondary" />,
      highlight: false,
    },
  ];

  return (
    <section className="bg-primary py-16 px-4 rounded-3xl w-full">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-gray-200 max-w-3xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl shadow-lg bg-white text-center 
            ${item.highlight ? "bg-[#C8E665]" : ""}`}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
