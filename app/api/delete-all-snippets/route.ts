import connect from "@/lib/connect";
import SingleSnippet from "@/Models/SnippetSchema";
import { NextResponse } from "next/server";

export async function DELETE() {
  try {
    await connect();

    const snippetToDelete = await SingleSnippet.deleteMany({
      isTrash: true,
    });

    if (!snippetToDelete) {
      return NextResponse.json(
        { message: "Snippets not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Snippets deleted successfully" });
  } catch (error) {
    console.error("Error deleting snippets:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Failed to delete all snippet" },
      { status: 500 }
    );
  }
}
