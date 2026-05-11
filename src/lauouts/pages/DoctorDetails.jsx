import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { saveAppointment } from "../../utilities/localStorage";

const DoctorDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [doctor, setDoctor] = useState(null);

    const handleBookNow = () => {
        const success = saveAppointment(doctor.id);

        if (success) {
            alert(`${doctor.name} booked successfully`);
            navigate("/bookings");
        } else {
            alert("You already booked this doctor");
        }
    };

    useEffect(() => {
        fetch("/doctors.json")
            .then((res) => res.json())
            .then((data) => {
                const singleDoctor = data.find(
                    (item) => item.id === parseInt(id)
                );
                setDoctor(singleDoctor);
            });
    }, [id]);

    if (!doctor) {
        return <h2>Doctor not found</h2>;
    }

    return (
        <div>
            <img
                src={doctor.image}
                alt={doctor.name}
                style={{ width: "250px" }}
            />

            <h1>{doctor.name}</h1>
            <p>{doctor.education}</p>
            <p>{doctor.speciality}</p>
            <p>{doctor.experience}</p>
            <p>{doctor.registrationNumber}</p>
            <p>Fee: {doctor.fee} Taka</p>

            <button className="btn bg-green-500 " onClick={handleBookNow}>
                Book Now
            </button>
        </div>
    );
};

export default DoctorDetails;