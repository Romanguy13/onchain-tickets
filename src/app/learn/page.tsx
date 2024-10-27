import Link from "next/link";

export default function LearnMore() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <main className="flex flex-col gap-8 items-center sm:items-start font-[family-name:var(--font-geist-mono)] h-full">
        <h1 className="text-4xl font-bold tracking-widest mx-auto text-gray-900">
          How It Works
        </h1>

        <section id="event-organizers" className="flex flex-col gap-4 items-start mx-auto">
          <a href="#event-organizers" className="hover:underline">
            <h2 className="text-2xl tracking-wide text-gray-900"># Event Organizers</h2>
          </a>
          <div className="flex flex-col gap-4 items-start max-w-4xl border-l-4 border-blue-500 pl-4 my-4 tracking-wide text-gray-800">
            <h3 className="text-xl font-semibold">Direct Access to Ticket Revenue</h3>
            <p className="text-md tracking-wide">
              Get ticket sales revenue directly in your wallet in real-time. Ideal for events needing quick cash flow.
            </p>
            <h3 className="text-xl font-semibold">Simple Event Management & Check-In</h3>
            <p className="text-md tracking-wide">
              Manage events easily. Attendees scan their wallet for seamless, paperless check-in.
            </p>
            <h3 className="text-xl font-semibold">Cost-Effective Solution</h3>
            <p className="text-md">
              Minimize transaction fees and eliminate high service charges, keeping more of your revenue.
            </p>
          </div>
        </section>

        <section id="attendees" className="flex flex-col gap-4 items-start mx-auto">
          <a href="#attendees" className="hover:underline">
            <h2 className="text-2xl tracking-wide text-gray-900"># Attendees</h2>
          </a>
          <div className="flex flex-col gap-4 items-start max-w-4xl border-l-4 border-blue-500 pl-4 my-4 tracking-wide text-gray-800">
            <h3 className="text-xl font-semibold">Quick and Simple Ticket Purchase</h3>
            <p className="text-md">
              Buy tickets easily with a Phantom Wallet and USDC on Solana. Quick funding with a card number.
            </p>
            <h3 className="text-xl font-semibold">Effortless Entry</h3>
            <p className="text-md">
              Scan your wallet for instant entry. No physical tickets or email confirmations needed.
            </p>
          </div>
        </section>

        <section id="technical-overview" className="flex flex-col gap-4 items-start mx-auto">
          <a href="#technical-overview" className="hover:underline">
            <h2 className="text-2xl tracking-wide text-gray-900"># Technical Overview</h2>
          </a>
          <div className="flex flex-col gap-4 items-start max-w-4xl border-l-4 border-blue-500 pl-4 my-4 tracking-wide text-gray-800">
            <h3 className="text-xl font-semibold">Seamless Transaction Flow</h3>
            <p className="text-md">
              Solana Pay routes funds directly to the organizer's wallet, confirming the wallet as an event attendee.
            </p>
            <h3 className="text-xl font-semibold">Solana and Phantom</h3>
            <p className="text-md">
              Solana offers high throughput and low fees. Phantom Wallet provides a seamless experience for all users.
            </p>
          </div>
        </section>

        <Link href="/" className="mt-6 mx-auto">
          <button className="px-4 py-2 text-white bg-black rounded-md border border-gray-700 hover:bg-gray-900">
            Return Home
          </button>
        </Link>
      </main>
    </div>
  );
}