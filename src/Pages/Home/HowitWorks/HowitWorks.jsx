import React, { useEffect, useState } from "react";
import {
  FaTruck,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaTruckLoading,
  FaBuilding,
} from "react-icons/fa";

const HowitWorks = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchedData = {
      title: "How it Works",
      steps: [
        {
          title: "Booking Pick & Drop",
          description:
            "From personal packages to business shipments — we deliver on time, every time.",
          icon: "pickdrop",
        },
        {
          title: "Cash On Delivery",
          description:
            "From personal packages to business shipments — we deliver on time, every time.",
          icon: "cod",
        },
        {
          title: "Delivery Hub",
          description:
            "From personal packages to business shipments — we deliver on time, every time.",
          icon: "hub",
        },
        {
          title: "Booking SME & Corporate",
          description:
            "From personal packages to business shipments — we deliver on time, every time.",
          icon: "corporate",
        },
      ],
    };

    setData(fetchedData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <section className="py-14">
      <h2 className="text-4xl font-bold text-secondary text-center mb-12 tracking-tight">
        {data.title}
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {data.steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-8 transition hover:shadow-xl"
          >
            <div className="flex justify-center mb-6">
              {step.icon === "pickdrop" && (
                <FaMapMarkerAlt className="text-5xl text-secondary" />
              )}
              {step.icon === "cod" && (
                <FaMoneyBillWave className="text-5xl text-secondary" />
              )}
              {step.icon === "hub" && (
                <FaTruckLoading className="text-5xl text-secondary" />
              )}
              {step.icon === "corporate" && (
                <FaBuilding className="text-5xl text-secondary" />
              )}
            </div>

            <h3 className="text-xl font-semibold text-center text-secondary mb-4">
              {step.title}
            </h3>

            <p className="text-center text-gray-500 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowitWorks;
