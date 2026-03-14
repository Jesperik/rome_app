import "./index.css";

const days = [
  { key: "2026-04-20", label: "Mon 20 Apr" },
  { key: "2026-04-21", label: "Tue 21 Apr" },
  { key: "2026-04-22", label: "Wed 22 Apr" },
  { key: "2026-04-23", label: "Thu 23 Apr" },
  { key: "2026-04-24", label: "Fri 24 Apr" },
];

const bookings = [
  {
    title: "Flight arrival in Rome",
    day: "2026-04-20",
    start: "19:20",
    end: "20:20",
    details: "Arrive in Rome",
  },
  {
    title: "St. Peter’s Basilica",
    day: "2026-04-21",
    start: "10:00",
    end: "11:30",
    details: "Booked visit",
  },
  {
    title: "Tuesday afternoon booking",
    day: "2026-04-21",
    start: "15:30",
    end: "18:30",
    details: "Afternoon activity",
  },
  {
    title: "City walk",
    day: "2026-04-22",
    start: "20:00",
    end: "22:00",
    details: "Evening city walk",
  },
  {
    title: "Colosseum",
    day: "2026-04-24",
    start: "13:25",
    end: "16:25",
    details: "Booked entry",
  },
];

const startHour = 8;
const endHour = 23;
const hourHeight = 64;

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function formatTimeRange(start, end) {
  return `${start}–${end}`;
}

function getBookingStyle(start, end) {
  const startMinutes = timeToMinutes(start);
  const endMinutes = timeToMinutes(end);
  const top = ((startMinutes - startHour * 60) / 60) * hourHeight;
  const height = ((endMinutes - startMinutes) / 60) * hourHeight;

  return {
    top: `${top}px`,
    height: `${height}px`,
  };
}

function App() {
  const hours = [];
  for (let h = startHour; h <= endHour; h++) {
    hours.push(`${String(h).padStart(2, "0")}:00`);
  }

  return (
    <div className="page">
      <div className="shell">
        <header className="header">
          <p className="eyebrow">Rome Bookings</p>
          <h1>Trip calendar</h1>
          <p className="subtext">
            Only booked activities, laid out by day and time.
          </p>
        </header>

        <section className="summary">
          {bookings.map((booking) => (
            <div key={`${booking.day}-${booking.start}-${booking.title}`} className="summary-card">
              <div className="summary-day">
                {days.find((d) => d.key === booking.day)?.label}
              </div>
              <div className="summary-title">{booking.title}</div>
              <div className="summary-time">{formatTimeRange(booking.start, booking.end)}</div>
              <div className="summary-details">{booking.details}</div>
            </div>
          ))}
        </section>

        <section className="calendar-wrap">
          <div className="calendar">
            <div className="time-column">
              <div className="time-header" />
              {hours.slice(0, -1).map((hour) => (
                <div key={hour} className="time-slot">
                  {hour}
                </div>
              ))}
            </div>

            {days.map((day) => {
              const dayBookings = bookings.filter((booking) => booking.day === day.key);

              return (
                <div key={day.key} className="day-column">
                  <div className="day-header">{day.label}</div>

                  <div className="day-grid">
                    {hours.slice(0, -1).map((hour) => (
                      <div key={hour} className="hour-line" />
                    ))}

                    {dayBookings.map((booking) => (
                      <div
                        key={`${booking.day}-${booking.start}-${booking.title}`}
                        className="booking"
                        style={getBookingStyle(booking.start, booking.end)}
                      >
                        <div className="booking-time">
                          {formatTimeRange(booking.start, booking.end)}
                        </div>
                        <div className="booking-title">{booking.title}</div>
                        <div className="booking-details">{booking.details}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;