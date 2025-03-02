import { NextResponse } from "next/server";
import { getPinnedPosts } from "@/lib/api";

export async function GET() {
	const pinnedPosts = getPinnedPosts();
	return NextResponse.json(pinnedPosts);
}
