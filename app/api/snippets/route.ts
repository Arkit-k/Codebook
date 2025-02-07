import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ Create a new snippet
export async function POST(req: Request) {
  try {
    const { title, isFavorite, clerkUserId, tags, description, code, language, creationDate, isTrash } = await req.json();

    const savedSnippet = await prisma.snippet.create({
      data: {
        title,
        isFavorite,
        clerkUserId,
        tags,
        description,
        code,
        language,
        creationDate: new Date(creationDate), // Ensure date format
        isTrash,
      },
    });

    return NextResponse.json({ snippet: savedSnippet });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Failed to create snippet" }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
}

// ✅ Get all snippets for a user
export async function GET(req: NextRequest) {
  try {
    const clerkId = req.nextUrl.searchParams.get("clerkId");
    if (!clerkId) return NextResponse.json({ error: "clerkId required" }, { status: 400 });

    const snippets = await prisma.snippet.findMany({ where: { clerkUserId: clerkId } });

    return NextResponse.json({ snippets });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Failed to fetch snippets" }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
}

// ✅ Update a snippet
export async function PUT(request: NextRequest) {
  try {
    const snippetId = request.nextUrl.searchParams.get("snippetId");
    const { title, isFavorite, clerkUserId, tags, description, code, language, creationDate, isTrash } = await request.json();

    if (!snippetId) return NextResponse.json({ error: "snippetId required" }, { status: 400 });

    const updatedSnippet = await prisma.snippet.update({
      where: { id: snippetId },
      data: {
        title,
        isFavorite,
        clerkUserId,
        tags,
        description,
        code,
        language,
        creationDate: new Date(creationDate), // Ensure valid date format
        isTrash,
      },
    });

    return NextResponse.json({ snippet: updatedSnippet });
  } catch (error) {
    console.error("Error updating snippet:", error);
    return NextResponse.json({ error: "Failed to update snippet" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// ✅ Delete a snippet
export async function DELETE(request: NextRequest) {
  try {
    const snippetId = request.nextUrl.searchParams.get("snippetId");

    if (!snippetId) return NextResponse.json({ error: "snippetId required" }, { status: 400 });

    await prisma.snippet.delete({ where: { id: snippetId } });

    return NextResponse.json({ message: "Snippet deleted successfully" });
  } catch (error) {
    console.error("Error deleting snippet:", error);
    return NextResponse.json({ error: "Failed to delete snippet" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

