import { NextRequest, NextResponse } from "next/server";

// Get - getting data
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Martin" },
    { id: 2, name: "Jane Smith" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
