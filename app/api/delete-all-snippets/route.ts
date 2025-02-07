import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE() {
  try {
    // Delete all snippets where isTrash is true
    const deletedSnippets = await prisma.snippet.deleteMany({
      where: { isTrash: true },
    });

    if (deletedSnippets.count === 0) {
      return NextResponse.json(
        { message: "No trash snippets found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Snippets deleted successfully",
      deletedCount: deletedSnippets.count,
    });
  } catch (error) {
    console.error("Error deleting snippets:", error);
    return NextResponse.json(
      { message: "Failed to delete snippets" },
      { status: 500 }
    );
  }
}

