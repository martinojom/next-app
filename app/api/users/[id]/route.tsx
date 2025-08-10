import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

// Get - getting user
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(user);
}

// Put - updating user
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}

// Delete - deleting user
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) {
  const { id } = await params;

  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(
    { message: "User deleted successfully" },
    { status: 200 }
  );
}
