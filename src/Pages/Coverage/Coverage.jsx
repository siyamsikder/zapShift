import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useRef } from "react";

const Coverage = () => {
  const position = [23.684994, 90.356331];
  const servicCenter = useLoaderData();
  //   console.log(servicCenter);
  const mapRef = useRef(null);

  const handeleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    console.log(location);
    const district = servicCenter.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log(coord, district);
      mapRef.current.flyTo(coord,14)
    }
  };
  return (
    <div className="my-10">
      <h2 className="my-10 text-center font-bold text-secondary text-4xl">
        We are available in 64 districts
      </h2>
      <form onSubmit={handeleSearch}>
        <div className="join my-6">
          <div>
            <label className="input validator join-item">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="search"
                name="location"
                placeholder="search"
                required
              />
            </label>
          </div>
          <button className="btn bg-primary join-item">Search</button>
        </div>
      </form>
      <div className="border-2 border-primary w-full h-[800px]">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRef}
          >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {servicCenter.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>
                  {center.district}
                  <br />
                  Service Area: {center.covered_area.join(", ")}
                </strong>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
