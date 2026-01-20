import { BASE_URL } from "./config";

export const updateLocation = async (token, lat, lng) => {
  const res = await fetch(`${BASE_URL}/users/location`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ lat, lng })
  });

  return await res.json();
};

export const getNearbyBuildings = async (token, lat, lng) => {
  const res = await fetch(
    `${BASE_URL}/buildings/nearby?lat=${lat}&lng=${lng}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return await res.json();
};
