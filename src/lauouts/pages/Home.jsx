import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import { data } from 'react-router';

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);


  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);


  const displayedDoctors = showAll ? doctors : doctors.slice(0, 6);


  return (
    <div>
      <Banner></Banner>

      <div className="w-56 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
        <div className="rounded-xl bg-[#EAF7F7] p-2">
          <img
            src={image}
            alt={name}
            className="h-32 w-full rounded-lg object-cover"
          />
        </div>

        <div className="mt-3 flex gap-2 text-[10px]">
          <span className="rounded-full bg-green-50 px-2 py-1 text-green-600">
            Available
          </span>
          <span className="rounded-full bg-blue-50 px-2 py-1 text-blue-600">
            {experience}
          </span>
        </div>

        <h2 className="mt-2 text-sm font-bold text-gray-800">
          {name}
        </h2>

        <p className="text-xs text-gray-500">
          {education}
        </p>

        <p className="mt-2 border-t border-dashed pt-2 text-[11px] text-gray-500">
          Reg No: {registrationNumber}
        </p>

        <Link to={`/doctors/${id}`}>
          <button className="mt-3 w-full rounded-full border border-blue-400 py-2 text-xs font-medium text-blue-500 transition hover:bg-blue-500 hover:text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>



  );
};

export default Home;