import Image from "next/image";

export default function ScreenshotsSection() {
	return (
		<section className="min-h-screen flex flex-col items-center py-16 bg-white">
			<h2 className="text-4xl font-bold text-center mb-12">
				Aperçu de l&apos;application
			</h2>
			<div className="flex flex-wrap justify-center gap-8">
				<Image
					src="/images/Home.png"
					alt="Home"
					width={256}
					height={512}
					className="w-64 h-auto rounded-lg shadow-lg"
				/>
				<Image
					src="/images/Progression.png"
					alt="Progression"
					width={256}
					height={512}
					className="w-64 h-auto rounded-lg shadow-lg"
				/>
				<Image
					src="/images/Rewards.png"
					alt="Rewards"
					width={256}
					height={512}
					className="w-64 h-auto rounded-lg shadow-lg"
				/>

				<Image
					src="/images/Community.png"
					alt="Community"
					width={256}
					height={512}
					className="w-64 h-auto rounded-lg shadow-lg"
				/>

				<Image
					src="/images/HabitDetail.png"
					alt="HabitDetail"
					width={256}
					height={512}
					className="w-64 h-auto rounded-lg shadow-lg"
				/>
				<Image
					src="/images/RewardDetail.png"
					alt="RewardDetail"
					width={256}
					height={512}
					className="w-64 h-auto rounded-lg shadow-lg"
				/>
			</div>
		</section>
	);
}
