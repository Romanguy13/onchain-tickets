"use client";

import { signOut } from "next-auth/react";
import { ReactNode } from "react";

export default function SignOut({ children, style }: { children: ReactNode, style: string }) {
  return (
    <button onClick={() => signOut({ callbackUrl: "/" })} className={style}>
      {children}
    </button>
  );
}
