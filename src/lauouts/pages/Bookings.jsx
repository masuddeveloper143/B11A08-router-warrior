import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    getStoredAppointments,
    removeAppointment,
} from "../../utilities/localStorage";

const Bookings = () => {
    const [bookedDoctors, setBookedDoctors] = useState([]);

    useEffect(() => {
        fetch("/doctors.json")
            .then((res) => res.json())
            .then((data) => {
                const storedIds = getStoredAppointments();

                const booked = data.filter((doctor) =>
                    storedIds.includes(doctor.id)
                );

                setBookedDoctors(booked);
            });
    }, []);

    const handleCancel = (id) => {
        removeAppointment(id);

        const remaining = bookedDoctors.filter(
            (doctor) => doctor.id !== id
        );

        setBookedDoctors(remaining);
    };

    if (bookedDoctors.length === 0) {
        return (
            <div>
                <h2>No Appointments Found</h2>

                <Link to="/">
                    <button>Go Home</button>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <h1>My Today Appointments</h1>

            {bookedDoctors.map((doctor) => (
                <div
                    key={doctor.id}
                    style={{
                        border: "1px solid gray",
                        padding: "15px",
                        marginBottom: "15px",
                        borderRadius: "10px",
                    }}
                >
                    <h3>{doctor.name}</h3>
                    <p>{doctor.education}</p>
                    <p>{doctor.speciality}</p>
                    <p>Fee: {doctor.fee}</p>

                    <button onClick={() => handleCancel(doctor.id)}>
                        Cancel Appointment
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Bookings;