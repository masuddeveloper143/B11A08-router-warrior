import { useEffect, useState } from "react";
import { Link } from "react-router";

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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {displayedDoctors.map((doctor) => (
            
            <Link key={doctor.id} to={`/doctors/${doctor.id}`}>
            
            
              
              <div
              style={{
                border: "1px solid gray",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                style={{ width: "100%" }}
              />
              <h3>{doctor.name}</h3>
              <p>{doctor.education}</p>
              <p>{doctor.speciality}</p>
              <p>{doctor.experience}</p>
              <p>{doctor.registrationNumber}</p>
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
        )}
      </div>

    
  );
};

export default Home;