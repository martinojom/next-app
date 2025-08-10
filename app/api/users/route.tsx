import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// Get - getting data
export async function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Martin" },
    { id: 2, name: "Jane Smith" },
  ]);
}

// Post - creating new data
export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.message, { status: 400 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
