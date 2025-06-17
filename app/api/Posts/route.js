import Post, { connectDB } from "@/app/(models)/Post";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const postData = body.formData;

    await Post.create(postData);
    return NextResponse.json({ message: "Post Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { message: "Error", error: error.toString() },
      { status: 500 }
    );
  }
}
