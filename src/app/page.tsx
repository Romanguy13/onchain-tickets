import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center  font-[family-name:var(--font-geist-mono)]">
        <div className="flex flex-col gap-4 items-start max-w-2xl h-full justify-between">
          <h1 className="text-4xl text-center font-bold mx-auto tracking-widest mb-4">Onchain Ticketing</h1>
          <p className="text-xl text-center tracking-wide leading-relaxed">
            Low cost, high performance ticketing system using the Solana
            blockchain
          </p>
          <div className="flex gap-4 my-4 mx-auto">
            <ul className="flex flex-col list-disc list-outside sm:list-inside mx-4 sm:mx-0 gap-y-2">
              <li>Connecting event organizers directly with their audience</li>
              <li>No middlemen, no fees, no waiting for payouts</li>
              <li>
                Real time settlement thanks to Solana&apos;s high throughput
              </li>
              <li>Scan your wallet&apos;s QR code at the door</li>
            </ul>
          </div>

          <div className="flex gap-4 mx-auto">
            <Link href="/learn">
              <button className="px-4 py-2 text-white bg-black rounded-md border border-gray-700 hover:bg-gray-900">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center font-[family-name:var(--font-geist-mono)]">
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
