import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const SendParcel = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const serviceCenters = useLoaderData();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // Extract Unique Regions
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  // Watch sender & receiver region
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  // Filter district by region
  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  // --------------------------------------------------
  // 🔥 COST CALCULATION + SWEET ALERT + SAVE TO DATABASE
  // --------------------------------------------------
  const handleSendParcel = async (data) => {
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }

    // Confirm cost popup
    Swal.fire({
      title: "Agree with the Cost?",
      text: `You will be charged ${cost} taka.`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Agree",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          Swal.fire("Success!", "Parcel Booking Confirmed!", "success");
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-5xl border border-gray-300 rounded-lg p-8 shadow-sm">
        <h2 className="text-4xl font-bold text-secondary mb-6">
          Send A Parcel
        </h2>
        <p className="text-gray-600 mb-4">Enter your parcel details</p>

        <form onSubmit={handleSubmit(handleSendParcel)}>
          {/* Parcel Type */}
          <div className="mb-6">
            <p className="font-normal text-gray-500 mb-2">Parcel Type</p>
            <div className="flex gap-5">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("parcelType")}
                  value="document"
                  defaultChecked
                />
                Document
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("parcelType")}
                  value="non-document"
                />
                Non Document
              </label>
            </div>
          </div>

          {/* Parcel Info */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="text-gray-500 mb-1">Parcel Name</label>
              <input
                type="text"
                {...register("parcelName", { required: true })}
                className="border border-gray-300 rounded-lg px-3 py-2"
                placeholder="Parcel Name"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-500 mb-1">Parcel Weight (KG)</label>
              <input
                type="number"
                {...register("parcelWeight", { required: true })}
                className="border border-gray-300 rounded-lg px-3 py-2"
                placeholder="Weight in KG"
              />
            </div>
          </div>

          {/* Sender & Receiver */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Sender */}
            <div>
              <h3 className="font-semibold mb-3 text-lg">Sender Details</h3>

              <div className="flex flex-col mb-3">
                <label className="text-gray-500 mb-1">Sender Name</label>
                <input
                  {...register("senderName")}
                  defaultValue={user?.displayName}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>

              <div className="flex flex-col mb-3">
                <label className="text-gray-500 mb-1">Sender Email</label>
                <input
                  {...register("senderEmail")}
                  defaultValue={user?.email}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>

              {/* Sender Region */}
              <div className="flex flex-col mb-3">
                <label className="text-gray-500 mb-1">Sender Region</label>
                <select
                  {...register("senderRegion")}
                  className="border border-gray-300 rounded-lg px-3 py-2">
                  <option value="">Pick a region</option>
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sender District */}
              <div className="flex flex-col mb-3">
                <label className="text-gray-500 mb-1">Sender District</label>
                <select
                  {...register("senderDistrict")}
                  className="border border-gray-300 rounded-lg px-3 py-2">
                  <option value="">Pick a district</option>
                  {districtsByRegion(senderRegion)?.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col mb-3">
                <label className="text-gray-500 mb-1">Sender Address</label>
                <input
                  {...register("senderAddress")}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>

              <div className="flex flex-col mb-3">
                <label className="text-gray-500 mb-1">Sender Phone</label>
                <input
                  {...register("senderPhone")}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            {/* Receiver */}
            <div>
              <h3 className="font-semibold mb-3 text-lg">Receiver Details</h3>

              <div className="flex flex-col mb-3">
                <label className="text-gray-500 mb-1">Receiver Name</label>
                <input
                  {...register("receiverName")}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Receiver Name"
                />
              </div>

              <div className="flex flex-col mb-3">
                <label className="text-gray-500 mb-1">Receiver Email</label>
                <input
                  {...register("receiverEmail")}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>

              {/* Receiver Region */}
              <div className="flex flex-col mb-3">
                <label className="text-gray-500 mb-1">Receiver Region</label>
                <select
                  {...register("receiverRegion")}
                  className="border border-gray-300 rounded-lg px-3 py-2">
                  <option value="">Pick a region</option>
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* Receiver District */}
              <div className="flex flex-col mb-3">
                <label className="text-gray-500 mb-1">Receiver District</label>
                <select
                  {...register("receiverDistrict")}
                  className="border border-gray-300 rounded-lg px-3 py-2">
                  <option value="">Pick a district</option>
                  {districtsByRegion(receiverRegion)?.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col mb-3">
                <label className="text-gray-500 mb-1">Receiver Address</label>
                <input
                  {...register("receiverAddress")}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>

              <div className="flex flex-col mb-3">
                <label className="text-gray-500 mb-1">Receiver Phone</label>
                <input
                  {...register("receiverPhone")}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-green-600 transition">
            Proceed to Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
