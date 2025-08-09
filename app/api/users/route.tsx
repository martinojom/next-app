import { NextRequest, NextResponse } from "next/server";

// Get - getting data
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]);
}
