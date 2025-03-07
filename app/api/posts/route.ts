import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/api";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const page = Number(searchParams.get("page") || "1");
	const limit = Number(searchParams.get("limit") || "10");

	try {
		const posts = await getAllPosts(page, limit);
		return NextResponse.json(posts);
	} catch (error: unknown) {
		if (error instanceof Error)
			return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
