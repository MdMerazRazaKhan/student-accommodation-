import { BASE_URL } from "./config"; // define your backend URL here

export const updateLocation = async (token, lat, lng) => {
  const res = await fetch(`${BASE_URL}/location/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ lat, lng })
  });

  return res.json();
};

export const getNearbyBuildings = async (token, lat, lng) => {
  const res = await fetch(`${BASE_URL}/buildings/nearby?lat=${lat}&lng=${lng}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.json();
};
