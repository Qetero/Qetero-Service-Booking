import { MdLightbulb } from "react-icons/md";
import EtStateAndCities from "../../../data/et-state-and-cities.json";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LocationForm = ({ register, getValues, errors }) => {
  const [selectedState, setSelectedState] = useState([]);
  const center = {
    lat: 9.312,
    lng: 42.1261,
  };
  const mapTiles = {
    roadView:
      "https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}",
    sateliteView:
      "https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
  };
  return (
    <>
      <h1 className="text-2xl font-serif text-Qeteroblue border-b border-Qeteroblue w-full py-2 mb-5">
        Business Location Details
      </h1>
      <div className=" w-full">
        <div className="flex gap-4 ">
          <div className="flex-grow">
            <label htmlFor="state" className="block my-3 font-semibold">
              State
            </label>
            <input
              id="state"
              type="text"
              list="states"
              {...register("state")}
              onBlur={() =>
                setSelectedState(
                  EtStateAndCities.find(
                    (state) => state.name == getValues("state")
                  )
                )
              }
              className="w-full px-4 py-2 rounded-md border border-gray-400"
            />
            <datalist id="states">
              {EtStateAndCities.map((state, index) => (
                <option value={state.name} key={index}>
                  {state.name}
                </option>
              ))}
            </datalist>
          </div>
          <div className="flex-grow">
            <label htmlFor="city" className="block my-3 font-semibold">
              City
            </label>
            <input
              id="city"
              type="text"
              list="cities"
              {...register("city")}
              className="w-full px-4 py-2 rounded-md border border-gray-400"
            />
            <datalist id="cities">
              {selectedState?.cities?.map((city, index) => (
                <option value={city.name} key={index}>
                  {city.name}
                </option>
              ))}
            </datalist>
          </div>
        </div>
        <div>
          <label htmlFor="address" className="block my-3 font-semibold">
            Address
          </label>
          <input
            id="address"
            type="text"
            {...register("address")}
            className="w-full px-4 py-2 rounded-md border border-gray-400"
          />
        </div>
        <div>
          <label htmlFor="google-map-url" className="block my-3 font-semibold">
            Google Map Url
          </label>
          <input
            id="google-map-url"
            type="text"
            {...register("googleMapUrl")}
            className="w-full px-4 py-2 rounded-md border border-gray-400"
          />
          <p className="flex items-center gap-1 italic p-1">
            <MdLightbulb className="text-yellow-500 text-3xl md:text-base" />
            if your business is already on google maps, copy the link and paste
            it here.
          </p>
        </div>
      </div>
    </>
  );
};

export default LocationForm;
