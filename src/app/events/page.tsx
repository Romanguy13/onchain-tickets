import { getAllEvents } from "@/lib/actions";
import Link from "next/link";

export default async function Events() {
  const events = await getAllEvents();

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <main className="flex flex-col gap-8 items-center sm:items-start font-[family-name:var(--font-geist-mono)] h-full">
        <h1 className="text-4xl font-bold tracking-widest mb-6 text-gray-900">
          Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-4 border border-gray-300 rounded-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {event.name}
              </h3>
              <p className="text-md text-gray-800">{event.description}</p>
              <div className="flex flex-col gap-2 my-4">
                <div className="border-b border-gray-300"></div>
                {event.acts.map((act) => (
                  <p key={act} className="text-md text-gray-800">
                    {act}
                  </p>
                ))}
                <div className="border-b border-gray-300"></div>
              </div>
              <p className="text-md text-gray-800">
                {new Date(event.date).toDateString()}
              </p>
              <p className="text-md text-gray-800">{event.time}</p>
              <p className="text-md text-gray-800">{event.address}</p>
              <div className="flex flex-row-reverse">
                <button className="px-4 py-2 text-white bg-black rounded-md border border-gray-700 hover:bg-gray-900 mt-4">
                  Buy Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Link
            className="px-4 py-2 text-white bg-black rounded-md border border-gray-700 hover:bg-gray-900 mt-4 mx-auto fixed bottom-8"
            href="/"
          >
            Return Home
          </Link>
        </div>
      </main>
    </div>
  );
}
