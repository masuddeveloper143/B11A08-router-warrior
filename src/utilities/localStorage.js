export const getStoredAppointments = () => {
  const stored = localStorage.getItem("appointments");

  if (stored) {
    return JSON.parse(stored);
  }

  return [];
};

export const saveAppointment = (id) => {
  const storedAppointments = getStoredAppointments();

  const exists = storedAppointments.find(
    (appointmentId) => appointmentId === id
  );

  if (exists) {
    return false;
  }

  storedAppointments.push(id);
  localStorage.setItem(
    "appointments",
    JSON.stringify(storedAppointments)
  );

  return true;
};