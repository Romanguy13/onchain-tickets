"use server";

import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/google";
import { Event, WalletAddress } from "@prisma/client";

export async function createEvent(data: {
  name: string;
  description: string;
  acts: string[];
  date: string;
  time: string;
  address: string;
  walletAddress: string;
}): Promise<Event> {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const wallet = await prisma.walletAddress.findUnique({
    where: { id: data.walletAddress },
  });

  if (!wallet) {
    throw new Error("Wallet not found");
  }

  const event = await prisma.event.create({
    data: {
      name: data.name,
      description: data.description,
      acts: data.acts,
      date: new Date(data.date),
      time: data.time,
      address: data.address,
      organizer: { connect: { id: user.id } },
      walletAddress: { connect: { id: wallet.id } },
    },
  });

  return event;
}

export async function getEvents(organizerId: string): Promise<Event[]> {
  const events = await prisma.event.findMany({
    where: { organizerId },
  });

  if (!events) {
    throw new Error("Events not found");
  }

  return events;
}

export async function getAllEvents() {
  const events = await prisma.event.findMany({
    include: { walletAddress: true },
  });

  return events;
}

export async function createWalletAddress(data: {
  alias: string;
  address: string;
}): Promise<WalletAddress> {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const wallet = await prisma.walletAddress.create({
    data: {
      alias: data.alias,
      address: data.address,
      user: { connect: { id: user.id } },
    },
  });

  return wallet;
}

export async function getWalletAddresses(): Promise<WalletAddress[]> {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { walletAddresses: true },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user.walletAddresses;
}
