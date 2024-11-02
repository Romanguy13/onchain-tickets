import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignOut from "@/components/SignOut";
import { redirect } from "next/navigation";
import Link from "next/link";
import CreateEventForm from "@/components/CreateEventForm";
import EventList from "@/components/EventList";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="max-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-mono)] bg-white text-gray-900">
      <div className="flex flex-row-reverse justify-between items-center">
        <SignOut style="bg-gray-900 text-white px-4 py-2 rounded-md sm:absolute top-8 right-8">
          Sign Out
        </SignOut>
      </div>
      <div className="flex flex-col gap-8 mt-4 max-w-4xl mx-auto">
        <div className="flex flex-col-reverse sm:flex-row justify-between sm:items-center">
          <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl tracking-widest leading-relaxed sm:leading-relaxed">
            Dashboard
          </h1>
          <Link
            href="/"
            className="text-gray-900 hover:underline mb-6 text-md tracking-widest mb-10 sm:mb-0 -my-10 sm:my-0"
          >
            Return Home
          </Link>
        </div>
        <div className="flex flex-col gap-8 sm:my-4 tracking-widest text-gray-800">
          <p className="text-md leading-relaxed">
            This is your dashboard. You can view your events, create new ones,
            and manage your ticket sales here.
          </p>
        </div>
        <EventList />
        <CreateEventForm />
      </div>
    </div>
  );
}
