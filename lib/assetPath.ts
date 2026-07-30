export function assetPath(path: string): string {
	if (!path) return "";
	if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) return path;
	const basePath =
		process.env.NEXT_PUBLIC_BASE_PATH ||
		(process.env.NODE_ENV === "production" ? "/melios-web" : "");
	const cleanPath = path.startsWith("/") ? path : `/${path}`;
	return `${basePath}${cleanPath}`;
}
