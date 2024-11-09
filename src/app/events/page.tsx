import EventList from "@/components/EventList";
import { getAllEvents } from "@/lib/actions";

export default async function Events() {
  const events = await getAllEvents();

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <main className="flex flex-col gap-8 items-center sm:items-start font-[family-name:var(--font-geist-mono)] h-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-widest mb-6 text-gray-900">
          Events
        </h1>
        <EventList events={events} buyTickets={true} />
      </main>
    </div>
  );
}
