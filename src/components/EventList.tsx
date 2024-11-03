import { getEvents } from "@/lib/actions";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/google";

export default async function EventList() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  const events = await getEvents(session.user.id);

  return (
    <div className="flex flex-col gap-8 sm:my-4 tracking-widest text-gray-800">
      <h2 className="text-2xl font-semibold text-gray-900">Your Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 border border-gray-300 rounded-md">
            <h3 className="text-lg font-semibold text-gray-900">
              {event.name}
            </h3>
            <p className="text-md text-gray-800">{event.description}</p>
            <p className="text-md text-gray-800">{event.date.toDateString()}</p>
            <p className="text-md text-gray-800">{event.time}</p>
            <p className="text-md text-gray-800">{event.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
