import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

// Get - getting Product data
export async function GET() {
  const products = await prisma.product.findMany();

  if (products.length < 1)
    return NextResponse.json(
      { message: "No users in the Database" },
      { status: 200 }
    );

  return NextResponse.json(products, { status: 200 });
}

// Post - creating new Product data
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  const product = await prisma.product.findUnique({
    where: { name: body.name },
  });

  if (product)
    return NextResponse.json(
      { error: "Product already exists" },
      { status: 400 }
    );

  const newProduct = await prisma.product.create({
    data: { name: body.name, price: body.price },
  });

  return NextResponse.json(newProduct, { status: 201 });
}
