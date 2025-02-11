import connect from "@/lib/connect";
import Tag from "@/Models/TagSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, clerkUserId } = await req.json();

    await connect();

    const tag = new Tag({
      name,
      clerkUserId,
    });

    const savedTag = await tag.save();

    return NextResponse.json({ tags: savedTag });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const clerkId = req.nextUrl.searchParams.get("clerkId");
    await connect();
    const tags = await Tag.find({ clerkUserId: clerkId });
    return NextResponse.json({ tags: tags });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const tagId = request.nextUrl.searchParams.get("tagId");
    const { name, clerkUserId } = await request.json();

    if (!tagId) {
      return NextResponse.json(
        { message: "tag ID is required" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connect();

    // Find the snippet by snippet and update it
    const updatedTag = await Tag.findOneAndUpdate(
      { _id: tagId },
      {
        $set: {
          name,
          clerkUserId,
        },
      },
      { returnDocument: "after" } // Return the updated document
    );

    // console.log(updatedTag);

    return NextResponse.json({
      note: updatedTag,
    });
  } catch (error) {
    console.error("Error updating the tag:", error);
    return NextResponse.json({ status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const tagId = url.searchParams.get("tagId");

    if (!tagId) {
      return NextResponse.json(
        { message: "tagId is required" },
        { status: 400 }
      );
    }

    const tagToDelete = await Tag.findOneAndDelete({ _id: tagId });

    if (!tagToDelete) {
      return NextResponse.json({ message: "tag not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "tag deleted successfully" });
  } catch (error) {
    console.error("Error deleting tag:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Failed to delete tag" },
      { status: 500 }
    );
  }
}
