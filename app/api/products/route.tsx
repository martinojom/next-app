import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// Get - getting Product data
export function GET() {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 1.6 },
    { id: 2, name: "Bread", price: 2.6 },
    { id: 3, name: "Butter", price: 5.6 },
  ]);
}

// Post - creating new Product data
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  return NextResponse.json(
    { id: 10, name: body.name, price: body.price },
    { status: 201 }
  );
}
