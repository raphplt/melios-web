"use client";
import React from "react";
import { Icon } from "@iconify/react";

export default function ArchiveBanner() {
	return (
		<div className="fixed top-0 left-0 right-0 h-10 bg-slate-950/90 backdrop-blur-md text-white text-xs sm:text-sm z-50 border-b border-indigo-500/30 flex items-center justify-center px-4">
			<div className="flex items-center justify-center gap-2 flex-wrap text-center">
				<span className="inline-flex items-center gap-1 bg-indigo-500/25 text-indigo-300 px-2 py-0.5 rounded-full text-[11px] font-bold border border-indigo-400/40 tracking-wider">
					<Icon icon="mdi:check-circle-outline" className="text-sm text-indigo-400" />
					PROJET TERMINÉ
				</span>
				<span className="text-gray-300">
					Melios est un projet finalisé. Le site reste en ligne à titre d&apos;archive et de présentation.
				</span>
			</div>
		</div>
	);
}
