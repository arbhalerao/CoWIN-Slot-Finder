const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function fetchStates() {
  const res = await fetch(`${API_BASE}/api/states`);
  return res.json();
}

export async function fetchDistricts(stateId) {
  const res = await fetch(`${API_BASE}/api/districts/${stateId}`);
  return res.json();
}

export async function fetchCenters(districtId) {
  const res = await fetch(`${API_BASE}/api/centers/${districtId}`);
  return res.json();
}

export async function fetchByPincode(pin) {
  const res = await fetch(`${API_BASE}/api/pincode?pin=${pin}`);
  return res.json();
}
