"use client";

import { signIn } from "next-auth/react";
import { ReactNode } from "react";

export default function LoginButton({ children, style }: { children: ReactNode, style: string }) {
  return (
    <button onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })} className={style}>
      {children}
    </button>
  );
}
