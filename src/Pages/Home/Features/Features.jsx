import React from "react";
import { FiHeadphones, FiPackage, FiTruck } from "react-icons/fi";

const Features = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">

        {/* Feature 1 */}
        <div className="bg-white p-8 rounded-xl shadow flex gap-6 items-center">
          <FiTruck className="text-6xl text-primary" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Live Parcel Tracking</h3>
            <p className="text-gray-600">
              Stay updated in real-time with live parcel tracking. Monitor your shipment from pickup to delivery and get instant updates.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-8 rounded-xl shadow flex gap-6 items-center">
          <FiPackage className="text-6xl text-primary" />
          <div>
            <h3 className="text-xl font-semibold mb-2">100% Safe Delivery</h3>
            <p className="text-gray-600">
              We ensure your parcels are handled carefully and delivered securely—guaranteeing damage-free delivery every time.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-8 rounded-xl shadow flex gap-6 items-center">
          <FiHeadphones className="text-6xl text-primary" />
          <div>
            <h3 className="text-xl font-semibold mb-2">24/7 Call Center Support</h3>
            <p className="text-gray-600">
              Our dedicated support team is available 24/7 to assist you with updates, questions, or delivery concerns.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
