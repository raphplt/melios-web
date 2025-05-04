import React from "react";

export function PostPreviewHomePageLoader() {
	return (
		<div className="animate-pulse max-w-xl mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
			<div className="w-full h-40 bg-gray-300" />
			<div className="p-2">
				<div className="h-5 bg-gray-300 rounded w-3/4 mb-2" />
				<div className="h-3 bg-gray-200 rounded w-1/4 mb-2" />
				<div className="h-3 bg-gray-200 rounded w-full mb-2" />
				<div className="h-3 bg-gray-200 rounded w-5/6 mb-4" />
				<div className="mt-3 flex items-center justify-between">
					<div className="flex items-center">
						<div className="w-8 h-8 bg-gray-300 rounded-full" />
					</div>
					<div className="flex items-center gap-x-2">
						<div className="h-3 w-16 bg-gray-300 rounded" />
						<div className="h-4 w-4 bg-gray-300 rounded" />
					</div>
				</div>
			</div>
		</div>
	);
}
