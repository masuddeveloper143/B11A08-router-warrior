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

<div className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Our Doctors</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedDoctors.map((doctor) => (
            <div 
              key={doctor.id} 
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
            >
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold">{doctor.name}</h3>
              <p className="text-blue-600 font-medium">{doctor.specialty}</p>
              <p className="text-gray-600 text-sm mt-1">{doctor.education}</p>
              <p className="text-gray-500 text-sm mt-3 line-clamp-2">
                {doctor.experience}
              </p>
            </div>
          ))}
        </div>

        {!showAll && doctors.length > 6 && (
          <div className="text-center mt-10">
            <button 
              onClick={() => setShowAll(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium"
            >
              See All Doctors
            </button>
          </div>
        )}
      </div>
    </div>


        
    );
};

export default Home;