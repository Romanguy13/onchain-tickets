import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/google";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import EventList from "@/components/EventList";
import { getEvents } from "@/lib/actions";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/");
  }

  const events = await getEvents(session.user.id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="max-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-mono)] bg-white text-gray-900">
        <div className="flex flex-row-reverse justify-between items-center">
          <Link href="/api/auth/signout" className="sm:absolute top-8 right-8">
            Sign Out
          </Link>
        </div>
        <div className="flex flex-col gap-8 mt-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-widest text-gray-900">
            Welcome, {session.user.name.split(" ")[0]}!
          </h1>
          <div className="flex flex-col gap-8 sm:my-4 tracking-widest text-gray-800">
            <p className="text-md leading-relaxed">
              This is your dashboard. You can view your events, create new ones,
              and manage your ticket sales here.
            </p>
          </div>
          <div className="border-b border-gray-900"></div>
          <div className="flex w-full justify-between items-center align-middle">
            <h2 className="text-2xl font-semibold text-gray-900 tracking-widest w-full">
              Your Events
            </h2>
            <Link href="/create-event">
              <div className="flex flex-row items-center gap-2">
                <span className="text-lg text-gray-900 tracking-widest w-48 text-center">
                  Create Event
                </span>
                <Image
                  src="/plus.svg"
                  alt="Create Event"
                  width={8}
                  height={8}
                  className="h-8 w-8"
                />
              </div>
            </Link>
          </div>
          <EventList events={events} buyTickets={false} />
        </div>
      </main>
    </div>
  );
}
