import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/api";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const page = Number(searchParams.get("page") || "1");
	const limit = Number(searchParams.get("limit") || "10");

	const posts = getAllPosts(page, limit);
	return NextResponse.json(posts);
}
