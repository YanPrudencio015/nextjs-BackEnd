import task from "@/app/lib/Model";
import connectMongoDB from "@/app/lib/MongoDBConnections";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { newTitle: title, newDescription: description } =
      await request.json();
    await connectMongoDB();
    await task.findByIdAndUpdate(
      id,
      { title, description },
      { returnDocument: "after" },
    );
    return NextResponse.json(
      { message: "Task updated successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json(
      { error: "Failed to update task" },
      { status: 500 },
    );
  }
}
