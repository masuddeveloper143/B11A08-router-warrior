import { useEffect, useState } from "react";
import { Link } from "react-router";
import CountUp from "react-countup";

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
      <h1>Our Best Doctors</h1>

      <div
       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {displayedDoctors.map((doctor) => (

          <Link key={doctor.id} to={`/doctors/${doctor.id}`}>



            <div
              key={doctor.id}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="rounded-2xl bg-[#EAF7F7] p-3">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-56 w-full rounded-xl object-cover"
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-green-50 px-3 py-1 text-green-600">
                  Available
                </span>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-600">
                  {doctor.experience}
                </span>
              </div>

              <h2 className="mt-4 text-xl font-bold text-gray-800">
                {doctor.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {doctor.education}
              </p>

              <p className="mt-3 border-t border-dashed pt-3 text-sm text-gray-500">
                Reg No: {doctor.registrationNumber}
              </p>

              <Link to={`/doctors/${doctor.id}`}>
                <button className="mt-4 w-full rounded-full border border-blue-400 py-3 text-sm font-medium text-blue-500 transition hover:bg-blue-500 hover:text-white">
                  View Details
                </button>
              </Link>
            </div>
          </Link>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-5">
          <button className="btn bg-blue-600 text-white" onClick={() => setShowAll(true)}>
            Show All
          </button>
        </div>
      )};







      
    </div>





  );
};

export default Home;