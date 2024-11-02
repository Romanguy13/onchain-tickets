import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import LoginButton from "@/components/LoginButton";

const links = [
  {
    href: "/learn",
    src: "/book.svg",
    alt: "Book icon",
    text: "Learn More",
  },
  {
    href: "/mission",
    src: "/globe.svg",
    alt: "Globe icon",
    text: "Mission Statement",
  },
];

export default async function Footer() {
  const session = await getServerSession();

  return (
    <footer className="row-start-3 flex flex-col sm:flex-row gap-6 flex-wrap sm:items-center justify-center font-[family-name:var(--font-geist-mono)] w-full text-sm font-semibold text-gray-600 p-4 sm:p-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image aria-hidden src={link.src} alt={link.alt} width={16} height={16} />
          {link.text}
        </Link>
      ))}
      {session ? (
        <Link
          href="/dashboard"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src="/user.svg"
            alt="User icon"
            width={16}
            height={16}
          />
          Dashboard
        </Link>
      ) : (
        <LoginButton style="flex items-center gap-2 hover:underline hover:underline-offset-4">
          <Image
            aria-hidden
            src="/calendar.svg"
            alt="Calendar icon"
            width={18}
            height={18}
          />
          Organize Events
        </LoginButton>
      )}
    </footer>
  );
}