import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Instant Access to Funds",
    description:
      "Event organizers can access ticket revenue in real-time. We never hold your money, we simply connect the merchant to the buyer",
  },
  {
    name: "Effortless Event Management",
    description:
      "Addresses automatically register for the event upon sale, so attendees can scan their wallet at the door without the need for physical tickets",
  },
  {
    name: "No Hidden Fees",
    description:
      "Our platform leverages USDC on Solana to route 100% of the funds directly to the event organizer, cutting out all the fees",
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <main className="flex flex-col gap-8 row-start-2 items-center font-[family-name:var(--font-geist-mono)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl tracking-widest">
              On-Chain Ticketing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              A low cost, high performance ticketing system that connects event
              organizers directly with their audience
            </p>
          </div>
          <div className="mx-auto mt-16 sm:mt-24 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-12 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name}>
                <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-1 text-gray-800">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex flex-col sm:flex-row gap-6 flex-wrap sm:items-center justify-center font-[family-name:var(--font-geist-mono)] w-full text-sm font-semibold text-gray-600 p-4 sm:p-8">
        <Link
          href="/learn"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src="/book.svg"
            alt="Book icon"
            width={16}
            height={16}
          />
          Learn More
        </Link>
        <Link
          href="/mission"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Mission Statement
        </Link>
      </footer>
    </div>
  );
}
