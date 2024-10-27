import Link from "next/link";

const sections = [
  {
    id: "event-organizers",
    heading: "Event Organizers",
    content: [
      {
        subheading: "Instant Access to Ticket Revenue",
        description:
          "Get ticket sales revenue directly in your wallet in real-time. Ideal for events needing quick cash flow.",
      },
      {
        subheading: "Simple Event Management",
        description:
          "Manage events easily. Attendees scan their wallet for seamless, paperless check-in.",
      },
      {
        subheading: "Cost-Effective Solution",
        description:
          "Minimize transaction fees and eliminate high service charges, keeping more of your revenue.",
      },
    ],
  },
  {
    id: "attendees",
    heading: "Attendees",
    content: [
      {
        subheading: "Quick and Simple Ticket Purchase",
        description:
          "Buy tickets easily with USDC on Solana using your Phantom Wallet. Phantom provides a USDC on-ramp, enabling users to fund their wallet with a credit card.",
      },
      {
        subheading: "Effortless Check In",
        description:
          "Scan your wallet for instant entry. No physical tickets or email confirmations needed. Phantom provides a QR code representing your wallet address, which is scanned at the door.",
      },
    ],
  },
  {
    id: "technical-overview",
    heading: "Technical Overview",
    content: [
      {
        subheading: "Seamless Transaction Flow",
        description:
          "Solana Pay routes funds directly to the organizer's wallet, confirming the wallet as an event attendee.",
      },
      {
        subheading: "Solana and Phantom",
        description:
          "Solana offers high throughput and low fees. Phantom Wallet provides a seamless experience for all users.",
      },
    ],
  },
];

export default function LearnMore() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <main className="flex flex-col gap-8 items-start font-[family-name:var(--font-geist-mono)] h-full">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-4xl font-bold tracking-widest text-gray-900 text-left">
            How It Works
          </h1>
        </div>

        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="flex flex-col gap-4 items-start mx-auto"
          >
            <a href={`#${section.id}`} className="hover:underline">
              <h2 className="text-xl font-semibold tracking-wide text-gray-900">
                {section.heading}
              </h2>
            </a>
            <div className="flex flex-col gap-4 items-start max-w-4xl border-l-2 border-blue-500 pl-4 my-4 tracking-wide text-gray-800 -mx-4">
              {section.content.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold tracking-wide text-gray-800 mb-1">
                    {item.subheading}
                  </h3>
                  <p className="text-md tracking-wide">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <Link href="/" className="mt-6 mx-auto">
          <button className="px-4 py-2 text-white bg-black rounded-md border border-gray-700 hover:bg-gray-900">
            Return Home
          </button>
        </Link>
      </main>
    </div>
  );
}
