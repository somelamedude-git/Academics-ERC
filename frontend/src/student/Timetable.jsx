import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import "../Styles/Timetable.css";

const Timetable = () => {
  const [timetable, setTimetable] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadTimetable = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/student/timetable");
        if (!response.ok) {
          throw new Error(`Failed to load timetable (${response.status})`);
        }

        const data = await response.json();
        if (isMounted) {
          setTimetable(data && typeof data === "object" ? data : {});
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load timetable.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadTimetable();

    return () => {
      isMounted = false;
    };
  }, []);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div className="tt-page">
      <Navbar />
      <main className="tt-container">
        <header className="tt-header">
          <div>
            <h1>Timetable</h1>
            <p>Your weekly class schedule</p>
          </div>
        </header>

        {loading && <p className="tt-muted">Loading timetable...</p>}
        {!loading && error && <p className="tt-error">{error}</p>}

        {!loading && !error && (
          <div className="tt-grid">
            {days.map((day) => (
              <section key={day} className="tt-card">
                <h3>{day}</h3>
                {Array.isArray(timetable?.[day]) && timetable[day].length > 0 ? (
                  <ul className="tt-list">
                    {timetable[day].map((item) => (
                      <li key={`${item.time}-${item.course}`} className="tt-item">
                        <div>
                          <strong>{item.time}</strong>
                          <p>{item.course}</p>
                        </div>
                        <span className="tt-room">{item.room}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="tt-empty">No classes scheduled.</p>
                )}
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Timetable;
