export default function CreateEventForm() {
  return (
    <div className="flex flex-col gap-8 sm:my-4 tracking-widest text-gray-800 pb-8">
      <h2 className="text-2xl font-semibold text-gray-900">Create New Event</h2>
      <p className="text-md leading-relaxed">
        Use the form below to create a new event. Fill in the details and click
        &quot;Create Event&quot; to add it to your list of events.
      </p>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Event Name"
          className="p-2 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Event Description"
          className="p-2 border border-gray-300 rounded-md"
        />
        <input type="date" className="p-2 border border-gray-300 rounded-md" />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-gray-900 rounded-md border border-gray-700 hover:bg-gray-900"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}
