import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: parcels = [],
    refetch,
  } = useQuery({
    queryKey: ["myParcels", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const handleParceDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        ALL of my parcels: {parcels.length}
      </h2>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="table w-full">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th>Cons. ID</th>
              <th>Store</th>
              <th>Recipient Info</th>
              <th>Delivery Status</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((p) => (
              <tr key={p._id} className="hover:bg-gray-50">
                {/* Cons ID */}
                <td className="font-medium text-gray-700">
                  #{p._id.slice(-8).toUpperCase()}
                </td>

                {/* Store */}
                <td className="text-gray-600">Rafa Enterprise</td>

                {/* Recipient Info */}
                <td className="text-gray-700">
                  <p className="font-semibold">{p.receiverName}</p>
                  <p className="text-sm text-gray-500">
                    {p.receiverDistrict}, {p.receiverRegion}
                  </p>
                  <p className="text-sm text-gray-500">{p.receiverAddress}</p>
                  <p className="text-sm text-gray-500">{p.receiverPhone}</p>
                </td>

                {/* Delivery Status */}
                <td>
                  <span
                    className={`font-semibold ${
                      p.deliveryStatus === "Delivered"
                        ? "text-green-600"
                        : p.deliveryStatus === "Pending"
                        ? "text-yellow-600"
                        : p.deliveryStatus === "Cancelled"
                        ? "text-red-600"
                        : p.deliveryStatus === "Refunded"
                        ? "text-blue-600"
                        : "text-gray-500"
                    }`}
                  >
                    {p.deliveryStatus || "Pending"}
                  </span>
                </td>

                {/* Amount */}
                <td className="text-gray-700">
                  <p>COD ৳ {p.cod || 0}</p>
                  <p className="text-sm">Charge ৳ {p.cost || 0}</p>
                  <p className="text-sm">Discount ৳ {p.discount || 0}</p>
                </td>

                {/* Payment Status */}
                <td>
                  <span
                    className={`font-semibold ${
                      p.paymentStatus === "Paid"
                        ? "text-green-600"
                        : p.paymentStatus === "Unpaid"
                        ? "text-red-600"
                        : p.paymentStatus === "Refunded"
                        ? "text-blue-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {p.paymentStatus || "Unpaid"}
                  </span>
                </td>

                {/* Actions */}
                <td className="flex gap-2">
                  <button className="px-3 py-1 rounded-md bg-green-400 text-white hover:bg-green-500">
                    Edit
                  </button>

                  <button className="px-3 py-1 rounded-md bg-green-400 text-white hover:bg-green-500">
                    Pay
                  </button>

                  <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
                    View
                  </button>

                  <button
                    onClick={() => handleParceDelete(p._id)}
                    className="px-3 py-1 rounded-md bg-red-400 text-white hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
