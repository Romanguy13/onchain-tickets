
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const email = searchParams.get('email');

  if (!firstName || !lastName || !email) {
    return NextResponse.error();
  }

  const prisma = new PrismaClient();
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
    },
  });


  return NextResponse.json(user);
}