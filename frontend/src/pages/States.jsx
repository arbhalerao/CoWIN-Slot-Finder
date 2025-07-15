import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchStates } from "../api";

export default function States() {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStates()
      .then((data) => setStates(data.states || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="loading">Loading states...</p>;

  return (
    <div className="container">
      <h3>SELECT STATE</h3>
      <table>
        <thead>
          <tr>
            <th>State No.</th>
            <th>State Name</th>
            <th>District Details</th>
          </tr>
        </thead>
        <tbody>
          {states.length > 0 ? (
            states.map((s) => (
              <tr key={s.state_id}>
                <td>{s.state_id}</td>
                <td>{s.state_name}</td>
                <td>
                  <Link to={`/districts/${s.state_id}`}>District Details</Link>
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
