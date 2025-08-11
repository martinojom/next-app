import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ productId: string }>;
  }
) {
  const { productId } = await params;
  console.log(productId);

  const product = await prisma.product.findUnique({
    where: { id: parseInt(productId) },
  });

  if (!product)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(product, { status: 200 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  const { productId } = await params;
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  const product = await prisma.product.findUnique({
    where: { id: parseInt(productId) },
  });

  if (!product)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const newProduct = await prisma.product.update({
    where: { id: product.id },
    data: { name: body.name, price: body.price },
  });

  return NextResponse.json(newProduct, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  const { productId } = await params;

  const product = await prisma.product.findUnique({
    where: { id: parseInt(productId) },
  });

  if (!product)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const deletedProduct = await prisma.product.delete({
    where: { id: product.id },
  });

  return NextResponse.json(
    { deletedProduct, message: "Product deleted successfully" },
    { status: 200 }
  );
}
