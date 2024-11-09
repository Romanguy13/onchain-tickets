import { militaryTimeTo12Hour } from "@/lib/utils";

interface EventListProps {
  events: {
    id: string;
    name: string;
    description: string;
    date: Date;
    time: string;
    address: string;
    acts: string[];
  }[];
  buyTickets: boolean;
}

export default async function EventList({
  events,
  buyTickets,
}: EventListProps) {
  return (
    <div className="flex flex-col gap-8 sm:my-4 tracking-widest text-gray-800 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 border border-gray-900 rounded-md flex flex-col gap-4"
          >
            <div className="flex flex-col h-20 gap-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {event.name}
              </h3>
              <p className="text-md text-gray-800">{event.description}</p>
            </div>
            <div className="border-b border-gray-900"></div>
            <div className="h-24 flex flex-col gap-4">
              <div className="flex flex-row justify-between items-center">
                <p className="text-md text-gray-800">
                  {event.date.toDateString()}
                </p>
                <p className="text-md text-gray-800">
                  {militaryTimeTo12Hour(event.time)}
                </p>
              </div>
              <p className="text-md text-gray-800">{event.address}</p>
            </div>
            <div className="border-b border-gray-900"></div>
            <div className="flex flex-col h-40">
              {event.acts.map((act) => (
                <p
                  key={act}
                  className="text-md text-gray-800 mt-2 line-clamp-1"
                >
                  {act}
                </p>
              ))}
            </div>
            <button
              className={`px-4 py-2 text-white bg-black rounded-md border border-gray-700 hover:bg-gray-900 mt-4 ${
                buyTickets ? "" : "hidden"
              }`}
            >
              Buy Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
