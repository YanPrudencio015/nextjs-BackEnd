import task from "@/app/lib/Model";
import connectMongoDB from "@/app/lib/MongoDBConnections";
import { request } from "http";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, description } = await request.json();
    await connectMongoDB();
    await task.create({ title, description });
    return NextResponse.json({ message: "task created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: `Error to create a task: ${error}` },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  try {
    await connectMongoDB();
    const alltask = await task.find();
    return NextResponse.json({ alltask });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to retrieve tasks" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await task.findByIdAndDelete(id);
    return NextResponse.json({ message: "Task deleted" }, { status: 200 });
  } catch (error) {
    console.log("error deleting task", error);
    return NextResponse.json(
      { message: "erro to delete task" },
      { status: 500 },
    );
  }
}
