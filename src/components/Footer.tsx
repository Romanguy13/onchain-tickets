import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";

export default async function Footer() {
  const session = await getServerSession();

  const links = [
    {
      href: "/learn",
      src: "/book.svg",
      alt: "Book icon",
      text: "Learn",
      size: 16,
    },
    {
      href: "/events",
      src: "/globe.svg",
      alt: "Globe icon",
      text: "Events",
      size: 16,
    },
  ];

  if (session) {
    links.push({
      href: "/dashboard",
      src: "/user.svg",
      alt: "User icon",
      text: "Dashboard",
      size: 15,
    });
  } else {
    links.push({
      href: `/api/auth/signin?callbackUrl=${encodeURIComponent("/dashboard")}`,
      src: "/calendar.svg",
      alt: "Sign in icon",
      text: "Organize",
      size: 18,
    });
  }

  return (
    <footer className="row-start-3 flex flex-col sm:flex-row gap-6 flex-wrap sm:items-center justify-center font-[family-name:var(--font-geist-mono)] w-full text-sm font-semibold text-gray-600 p-4 sm:p-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src={link.src}
            alt={link.alt}
            width={link.size}
            height={link.size}
          />
          {link.text}
        </Link>
      ))}
    </footer>
  );
}
