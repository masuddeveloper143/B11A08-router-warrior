import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { saveAppointment } from "../../utilities/localStorage";

import { toast } from "react-toastify";

const DoctorDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [doctor, setDoctor] = useState(null);

    const handleBookNow = () => {
        const success = saveAppointment(doctor.id);

        if (success) {
            toast.success(`${doctor.name} booked successfully`);
            navigate("/bookings");
        } else {
            toast.error("You already booked this doctor");
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
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800">
                    Doctor’s Profile Details
                </h1>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                    Get expert consultation and dependable healthcare from trusted
                    professionals dedicated to your well-being.
                </p>
            </div>

            <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6 md:flex gap-6">
                <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full md:w-64 h-64 object-cover rounded-2xl"
                />

                <div className="mt-5 md:mt-0 flex-1">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {doctor.name}
                    </h2>

                    <p className="text-gray-500 mt-1">{doctor.education}</p>

                    <p className="text-gray-500 mt-2">
                        Speciality: {doctor.speciality}
                    </p>

                    <p className="text-gray-500 mt-2">
                        Experience: {doctor.experience}
                    </p>

                    <p className="text-gray-500 mt-2">
                        Registration Number: {doctor.registrationNumber}
                    </p>

                    <p className="mt-4 text-lg font-semibold text-blue-600">
                        Consultation Fee: {doctor.fee} Taka
                    </p>
                </div>
            </div>

            <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800">
                    Book an Appointment
                </h3>

                <div className="mt-4 flex items-center justify-between border rounded-xl px-4 py-3">
                    <span className="font-medium text-gray-700">
                        Availability
                    </span>

                    <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
                        Doctor Available Today
                    </span>
                </div>

                <button
                    onClick={handleBookNow}
                    className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-full"
                >
                    Book Now
                </button>
            </div>
        </div>

    );
};

export default DoctorDetails;