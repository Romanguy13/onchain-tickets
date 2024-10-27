import Link from "next/link";

export default function Mission() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <main className="flex flex-col gap-8 items-center sm:items-start font-[family-name:var(--font-geist-mono)] h-full">
        <div className="flex flex-col items-start max-w-2xl mx-auto h-full justify-between">
          <h1 className="text-4xl font-bold tracking-widest mb-6 text-gray-900">
            Mission Statement
          </h1>
          <div className="flex flex-col gap-8 sm:my-4 tracking-widest text-gray-800">
            <p className="text-md leading-relaxed">
              We want to connect event organizers with their audience directly,
              minus the headache associated with traditional ticketing
              platforms. We believe the future of ticketing is on-chain, where
              funds are routed directly to the event organizer, cutting out all
              the fees and delays.
            </p>
            <p className="text-md leading-relaxed">
              The online ticketing industry is worth billions, but plagued with
              high service fees and slow payouts. We aim to change that by
              empowering DIY music events with fast and and low-cost ticketing
              solutions.
            </p>
            <p className="text-md leading-relaxed">
              We support the independent music scene by bringing a new level of
              transparency and efficiency to ticketing. Our platform is designed
              to be accessible, user-friendly, and cost-effective.
            </p>
          </div>
          <Link href="/" className="mt-8 mx-auto">
            <button className="px-4 py-2 text-white bg-black rounded-md border border-gray-700 hover:bg-gray-900">
              Return Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
