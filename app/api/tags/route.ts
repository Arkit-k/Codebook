import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ Create a new tag
export async function POST(req: Request) {
  try {
    const { name, clerkUserId } = await req.json();

    const savedTag = await prisma.tag.create({
      data: { name, clerkUserId, snippet: { connect: { id: "someSnippetId" } } },
    });

    return NextResponse.json({ tag: savedTag });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create tag" }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
}

// ✅ Get tags for a user
export async function GET(req: NextRequest) {
  try {
    const clerkId = req.nextUrl.searchParams.get("clerkId");
    if (!clerkId) return NextResponse.json({ error: "clerkId required" }, { status: 400 });

    const tags = await prisma.tag.findMany({ where: { clerkUserId: clerkId } });

    return NextResponse.json({ tags });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch tags" }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
}

// ✅ Update a tag
export async function PUT(request: NextRequest) {
  try {
    const tagId = request.nextUrl.searchParams.get("tagId");
    const { name, clerkUserId } = await request.json();

    if (!tagId) return NextResponse.json({ error: "tagId required" }, { status: 400 });

    const updatedTag = await prisma.tag.update({
      where: { id: tagId },
      data: { name, clerkUserId },
    });

    return NextResponse.json({ tag: updatedTag });
  } catch (error) {
    console.error("Error updating tag:", error);
    return NextResponse.json({ error: "Failed to update tag" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// ✅ Delete a tag
export async function DELETE(request: NextRequest) {
  try {
    const tagId = request.nextUrl.searchParams.get("tagId");

    if (!tagId) return NextResponse.json({ error: "tagId required" }, { status: 400 });

    await prisma.tag.delete({ where: { id: tagId } });

    return NextResponse.json({ message: "Tag deleted successfully" });
  } catch (error) {
    console.error("Error deleting tag:", error);
    return NextResponse.json({ error: "Failed to delete tag" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

