export default function EventList() {
  const events = [
    { name: "Event 1", details: "Details about Event 1." },
    { name: "Event 2", details: "Details about Event 2." },
    { name: "Event 3", details: "Details about Event 3." },
  ];

  return (
    <div className="flex flex-col gap-8 sm:my-4 tracking-widest text-gray-800">
      <h2 className="text-2xl font-semibold text-gray-900">Your Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-md">
            <h3 className="text-lg font-semibold text-gray-900">
              {event.name}
            </h3>
            <p className="text-md text-gray-800">{event.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
