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
  return NextResponse.json(user, { status: 200 });
}

// Put - updating user
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const newUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: { name: body.name, email: body.email },
  });

  return NextResponse.json(newUser, { status: 201 });
}

// Delete - deleting user
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const deletedUser = await prisma.user.delete({
    where: { id: parseInt(id) },
  });

  return NextResponse.json(
    { deletedUser, message: "User deleted successfully" },
    { status: 200 }
  );
}
