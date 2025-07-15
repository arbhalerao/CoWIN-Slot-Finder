import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchCenters, fetchByPincode } from "../api";

export default function Centers() {
  const { districtId } = useParams();
  const [searchParams] = useSearchParams();
  const pin = searchParams.get("pin");

  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = districtId ? fetchCenters(districtId) : fetchByPincode(pin);
    load
      .then((data) => setSessions(data.sessions || []))
      .finally(() => setLoading(false));
  }, [districtId, pin]);

  if (loading) return <p className="loading">Loading centers...</p>;

  return (
    <div className="container">
      <h3>Available Center Details</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Center No.</th>
              <th>Center Name</th>
              <th>Block Name</th>
              <th>Pincode</th>
              <th>Timing</th>
              <th>Fee</th>
              <th>Available Capacity</th>
              <th>Min Age Limit</th>
              <th>Vaccine</th>
              <th>Date</th>
              <th>Slots</th>
            </tr>
          </thead>
          <tbody>
            {sessions.length > 0 ? (
              sessions.map((s, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.block_name}</td>
                  <td>{s.pincode}</td>
                  <td>
                    {s.from} - {s.to}
                  </td>
                  <td>Rs.{s.fee}</td>
                  <td>{s.available_capacity}</td>
                  <td>{s.min_age_limit}</td>
                  <td>{s.vaccine}</td>
                  <td>{s.date}</td>
                  <td>{s.slots?.join(", ") || "NA"}</td>
                </tr>
              ))
            ) : (
              <tr>
                {Array.from({ length: 11 }, (_, i) => (
                  <td key={i}>Not Available</td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
