export default function App() {
  const trip = {
    title: "Rome Trip",
    subtitle: "Your personal travel dashboard",
    dates: "October 10–14, 2026",
    stay: "Monti, Rome",
    notes:
      "Keep your itinerary, reservations, restaurants, and daily plan in one place.",
  };

  const days = [
    {
      day: "Day 1",
      theme: "Historic Center",
      morning: ["Arrive and check in", "Coffee near Piazza Navona"],
      afternoon: ["Pantheon", "Trevi Fountain", "Lunch nearby"],
      evening: ["Spanish Steps", "Dinner reservation", "Gelato walk"],
    },
    {
      day: "Day 2",
      theme: "Ancient Rome",
      morning: ["Colosseum", "Roman Forum"],
      afternoon: ["Palatine Hill", "Capitoline Hill"],
      evening: ["Sunset walk", "Dinner in Trastevere"],
    },
    {
      day: "Day 3",
      theme: "Vatican + Trastevere",
      morning: ["Vatican Museums", "St. Peter’s Basilica"],
      afternoon: ["Castel Sant’Angelo", "Lunch stop"],
      evening: ["Trastevere stroll", "Final dinner"],
    },
  ];

  const reservations = [
    { label: "Flight", value: "Add details" },
    { label: "Hotel", value: "Add details" },
    { label: "Museum tickets", value: "Add details" },
    { label: "Restaurant bookings", value: "Add details" },
  ];

  const places = [
    "Best breakfast spot",
    "Pizza place",
    "Pasta dinner",
    "Gelato stop",
    "Sunset viewpoint",
    "Shopping street",
  ];

  const checklist = [
    "Passport / ID",
    "Wallet + cards",
    "Phone charger / power bank",
    "Walking shoes",
    "Museum confirmations",
    "Airport transfer details",
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.hero}>
          <div>
            <div style={styles.badge}>Rome Trip Dashboard</div>
            <h1 style={styles.h1}>{trip.title}</h1>
            <p style={styles.subtitle}>{trip.subtitle}</p>
          </div>

          <div style={styles.topGrid}>
            <div style={styles.infoCard}>
              <div style={styles.label}>Dates</div>
              <div style={styles.value}>{trip.dates}</div>
            </div>
            <div style={styles.infoCard}>
              <div style={styles.label}>Stay</div>
              <div style={styles.value}>{trip.stay}</div>
            </div>
          </div>

          <p style={styles.notes}>{trip.notes}</p>
        </header>

        <main style={styles.layout}>
          <section style={styles.mainColumn}>
            <div style={styles.sectionCard}>
              <h2 style={styles.h2}>Itinerary</h2>

              {days.map((d) => (
                <div key={d.day} style={styles.dayCard}>
                  <div style={styles.dayHeader}>
                    <h3 style={styles.h3}>{d.day}</h3>
                    <span style={styles.theme}>{d.theme}</span>
                  </div>

                  <div style={styles.dayGrid}>
                    <div style={styles.slot}>
                      <strong>Morning</strong>
                      <ul>
                        {d.morning.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div style={styles.slot}>
                      <strong>Afternoon</strong>
                      <ul>
                        {d.afternoon.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div style={styles.slot}>
                      <strong>Evening</strong>
                      <ul>
                        {d.evening.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.sectionCard}>
              <h2 style={styles.h2}>Saved Places</h2>
              <div style={styles.placeGrid}>
                {places.map((place) => (
                  <div key={place} style={styles.placeCard}>
                    <div style={styles.placeTitle}>{place}</div>
                    <div style={styles.placeText}>Replace with your real place name</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside style={styles.sideColumn}>
            <div style={styles.sectionCard}>
              <h2 style={styles.h2}>Reservations</h2>
              <div style={styles.stack}>
                {reservations.map((r) => (
                  <div key={r.label} style={styles.infoCard}>
                    <div style={styles.label}>{r.label}</div>
                    <div style={styles.value}>{r.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.sectionCard}>
              <h2 style={styles.h2}>Checklist</h2>
              <div style={styles.stack}>
                {checklist.map((item) => (
                  <label key={item} style={styles.checkItem}>
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div style={styles.sectionCard}>
              <h2 style={styles.h2}>Useful Links</h2>
              <div style={styles.stack}>
                <a style={styles.linkBtn} href="https://maps.google.com/?q=Rome" target="_blank" rel="noreferrer">
                  Open Rome in Maps
                </a>
                <a style={styles.linkBtn} href="https://www.google.com/travel/" target="_blank" rel="noreferrer">
                  Travel planning
                </a>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f5f5",
    color: "#111",
    fontFamily: "Inter, Arial, sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "32px 20px 60px",
  },
  hero: {
    background: "#fff",
    borderRadius: "24px",
    padding: "28px",
    boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
    marginBottom: "24px",
  },
  badge: {
    display: "inline-block",
    background: "#eee",
    borderRadius: "999px",
    padding: "6px 12px",
    fontSize: "14px",
    marginBottom: "12px",
  },
  h1: {
    margin: 0,
    fontSize: "40px",
    lineHeight: 1.1,
  },
  subtitle: {
    color: "#555",
    fontSize: "18px",
    marginTop: "8px",
  },
  topGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "12px",
    marginTop: "20px",
  },
  infoCard: {
    background: "#fafafa",
    borderRadius: "18px",
    padding: "16px",
    border: "1px solid #e7e7e7",
  },
  label: {
    color: "#666",
    fontSize: "14px",
  },
  value: {
    marginTop: "6px",
    fontWeight: 600,
  },
  notes: {
    marginTop: "18px",
    color: "#555",
    maxWidth: "800px",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "24px",
  },
  mainColumn: {
    display: "grid",
    gap: "24px",
  },
  sideColumn: {
    display: "grid",
    gap: "24px",
    alignSelf: "start",
  },
  sectionCard: {
    background: "#fff",
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
  },
  h2: {
    marginTop: 0,
    marginBottom: "16px",
    fontSize: "24px",
  },
  h3: {
    margin: 0,
    fontSize: "20px",
  },
  dayCard: {
    border: "1px solid #e7e7e7",
    borderRadius: "20px",
    padding: "18px",
    marginBottom: "16px",
  },
  dayHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    marginBottom: "14px",
    flexWrap: "wrap",
  },
  theme: {
    color: "#666",
    fontSize: "14px",
  },
  dayGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "12px",
  },
  slot: {
    background: "#fafafa",
    borderRadius: "16px",
    padding: "14px",
  },
  placeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "12px",
  },
  placeCard: {
    border: "1px solid #e7e7e7",
    borderRadius: "18px",
    padding: "16px",
  },
  placeTitle: {
    fontWeight: 600,
    marginBottom: "6px",
  },
  placeText: {
    color: "#666",
    fontSize: "14px",
  },
  stack: {
    display: "grid",
    gap: "12px",
  },
  checkItem: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    background: "#fafafa",
    borderRadius: "14px",
    padding: "12px",
    border: "1px solid #e7e7e7",
  },
  linkBtn: {
    display: "block",
    textDecoration: "none",
    color: "#111",
    background: "#fafafa",
    border: "1px solid #e7e7e7",
    borderRadius: "14px",
    padding: "12px 14px",
  },
};