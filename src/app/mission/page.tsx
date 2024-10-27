import Link from "next/link";

export default function Mission() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start font-[family-name:var(--font-geist-mono)] h-full">
        <div className="flex flex-col items-start max-w-2xl mx-auto h-full justify-between">
          <h1 className="text-4xl font-bold tracking-widest mb-6">Mission Statement</h1>
          <div className="flex flex-col gap-4 sm:my-4 tracking-wide">
            <p className="text-md sm:text-lg leading-relaxed">
              Our mission is to transform the ticketing industry by harnessing
              the power of the Solana blockchain to create a seamless, low-cost,
              and high-performance ticketing platform. Our goal is to directly
              connect event organizers with their audiences, cutting out the
              middlemen, reducing fees, and delivering real-time settlements.
            </p>
            <p className="text-md sm:text-lg leading-relaxed">
              <a
                href="https://www.globenewswire.com/news-release/2024/07/18/2915545/0/en/Online-Event-Ticketing-Market-Size-is-Projected-to-Reach-US-107-1-Billion-by-2032-Driven-by-Convenience-and-Mobile-Ticketing-Research-by-SNS-Insider.html"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                The online ticketing industry is worth billions,
              </a>
              &#20;but it&apos;s plagued by high service fees, slow payout
              times, and user experiences that often disappoint. For nearly a
              decade, we&apos;ve seen the challenges that concertgoers face when
              buying tickets, as well as the repercussions on the artists and
              organizers behind the scenes.
            </p>
            <p className="text-md sm:text-lg leading-relaxed">
              We&apos;re focused on empowering small-scale, DIY music
              events—bringing faster payouts to performers, instant
              confirmations to fans, and easy, secure ticket management for
              everyone. We aim to support the independent music scene and bring
              artists and their audiences closer together, making events more
              accessible, rewarding, and efficient.
            </p>
          </div>
          <Link href="/" className="mt-6 mx-auto">
            <button className="px-4 py-2 text-white bg-black rounded-md border border-gray-700 hover:bg-gray-900">
              Return Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
