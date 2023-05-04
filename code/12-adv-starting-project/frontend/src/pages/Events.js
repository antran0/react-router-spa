import { Link } from "react-router-dom";

const EVENTS = [
  { eventId: "e1", title: "Teddy Bear Exchange" },
  { eventId: "e2", title: "Chili Cook Off" },
  { eventId: "e3", title: "LOTR Helms Deep Re-enactment" },
];

const EventsPage = () => {
  const items = EVENTS;

  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {items.map((item) => (
          <li key={item.eventId}>
            <Link to={item.eventId}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
