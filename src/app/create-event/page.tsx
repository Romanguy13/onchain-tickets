import {
  getWalletAddresses,
  createEvent,
  createWalletAddress,
} from "@/lib/actions";
import CreateEventForm from "@/components/CreateEventForm";
import { WalletAddress } from "@prisma/client";
import Link from "next/link";

export default async function CreateEvent() {
  const walletAddresses: WalletAddress[] = await getWalletAddresses();

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <main className="flex flex-col gap-8 items-center sm:items-center font-[family-name:var(--font-geist-mono)] h-full mx-auto">
        <h1 className="text-4xl font-bold tracking-widest mb-6 text-gray-900">
          Create Event
        </h1>
        <CreateEventForm
          walletAddresses={walletAddresses}
          createEvent={createEvent}
          createWalletAddress={createWalletAddress}
        />
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
