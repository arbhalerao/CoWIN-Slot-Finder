import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchDistricts } from "../api";

export default function Districts() {
  const { stateId } = useParams();
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDistricts(stateId)
      .then((data) => setDistricts(data.districts || []))
      .finally(() => setLoading(false));
  }, [stateId]);

  if (loading) return <p className="loading">Loading districts...</p>;

  return (
    <div className="container">
      <h3>Select Your District</h3>
      <table>
        <thead>
          <tr>
            <th>District No.</th>
            <th>District Name</th>
            <th>Center Details</th>
          </tr>
        </thead>
        <tbody>
          {districts.length > 0 ? (
            districts.map((d, i) => (
              <tr key={d.district_id}>
                <td>{i + 1}</td>
                <td>{d.district_name}</td>
                <td>
                  <Link to={`/centers/${d.district_id}`}>Center Details</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Not Available</td>
              <td>Not Available</td>
              <td>Not Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
