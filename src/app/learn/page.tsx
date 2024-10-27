import Link from "next/link";

export default function LearnMore() {
  return (
    <div className="flex flex-col gap-8 items-start font-[family-name:var(--font-geist-mono)] h-full p-8 sm:p-20">
      <h1 className="text-4xl font-bold tracking-widest mx-auto">
        How It Works
      </h1>

      <section
        id="event-organizers"
        className="flex flex-col gap-4 items-start mx-auto"
      >
        <a href="#event-organizers" className="hover:underline">
          <h2 className="text-2xl tracking-wide"># Event Organizers</h2>
        </a>
        <div className="flex flex-col gap-4 items-start max-w-4xl border-l-4 border-blue-500 pl-4 my-4 tracking-wide">
          <h3 className="text-xl font-semibold">
            Direct Access to Ticket Revenue
          </h3>
          <p className="text-md tracking-wide">
            Enjoy real-time access to funds with ticket sales going directly to
            your walle. This approach accelerates cash flow, making it ideal for
            independent events where funds may be needed to cover expenses
            immediately.
          </p>
          <h3 className="text-xl font-semibold">
            Simple Event Management & Check-In
          </h3>
          <p className="text-md tracking-wide">
            Easily create, update, and manage events, with attendee wallets
            automatically registered upon purchase. At check-in, attendees
            simply scan their Phantom Wallet, allowing for seamless, paperless
            verification. No need to worry about issuing physical tickets or
            delays in ticket tracking.
          </p>
          <h3 className="text-xl font-semibold">Cost-Effective Solution</h3>
          <p className="text-md">
            Our blockchain-based platform minimizes transaction fees and
            eliminates the high service charges associated with traditional
            ticketing platforms, letting you keep more of your revenue and
            provide affordable ticket prices to your audience.
          </p>
        </div>
      </section>

      <section
        id="attendees"
        className="flex flex-col gap-4 items-start mx-auto"
      >
        <a href="#attendees" className="hover:underline">
          <h2 className="text-2xl tracking-wide"># Attendees</h2>
        </a>
        <div className="flex flex-col gap-4 items-start max-w-4xl border-l-4 border-blue-500 pl-4 my-4 tracking-wide">
          <h3 className="text-xl font-semibold">
            Quick and Simple Ticket Purchase
          </h3>
          <p className="text-md">
            With a Phantom Wallet and USDC on Solana, purchasing tickets is
            straightforward and low-cost. For those new to crypto,
            Phantom&apos;s onramp through Coinbase allows quick USDC funding
            with just a card number, making it easy to get started without
            lengthy verification.
          </p>
          <h3 className="text-xl font-semibold">Effortless Entry</h3>
          <p className="text-md">
            On event day, all you need is your wallet. A quick scan of your
            Phantom Wallet confirms your purchase, giving you immediate entry
            without physical tickets or waiting for email confirmations. The
            blockchain securely verifies your purchase, ensuring your payment
            goes directly to support the event.
          </p>
        </div>
      </section>

      <section
        id="technical-overview"
        className="flex flex-col gap-4 items-start mx-auto"
      >
        <a href="#technical-overview" className="hover:underline">
          <h2 className="text-2xl tracking-wide"># Technical Overview</h2>
        </a>
        <div className="flex flex-col gap-4 items-start max-w-4xl border-l-4 border-blue-500 pl-4 my-4 tracking-wide">
          <h3 className="text-xl font-semibold">Seamless Transaction Flow</h3>
          <p className="text-md">
            Once an attendee selects “Buy Ticket,” Solana Pay initiates the
            transaction, which routes funds directly to the organizer&apos;s
            wallet, securely confirming the wallet as an event attendee.
          </p>
          <h3 className="text-xl font-semibold">Solana and Phantom</h3>
          <p className="text-md">
            We have chosen Solana for its high throughput, low fees, and large
            community of developers. Phantom Wallet is the most popular Solana
            wallet, providing a seamless experience for attendees and organizers
            alike, but any Solana wallet can be used.
          </p>
        </div>
      </section>

      <Link href="/" className="mx-auto">
        <button className="px-4 py-2 text-white bg-black rounded-md border border-gray-700 hover:bg-gray-900">
          Return Home
        </button>
      </Link>
    </div>
  );
}
