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
  // Here you would typically save the data to a database
  //   Validate
  // If invalid, return 400
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  //   Else, return Data
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
