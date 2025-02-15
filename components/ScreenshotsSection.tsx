import Image from "next/image";

const screenshots = [
	{
		title: "Accueil",
		description: "Gérez vos habitudes quotidiennes et suivez votre progression.",
		image: "/images/Home.png",
		alt: "Melios home screen",
	},
	{
		title: "Progression",
		description: "Suivez vos niveaux et objectifs par catégorie.",
		image: "/images/Progression.png",
		alt: "Melios progression screen",
	},
	{
		title: "Récompenses",
		description: "Débloquez des récompenses en atteignant vos objectifs.",
		image: "/images/Rewards.png",
		alt: "Melios rewards screen",
	},
	{
		title: "Communauté",
		description:
			"Interagissez avec d'autres utilisateurs et comparez vos progrès.",
		image: "/images/Community.png",
		alt: "Melios agora screen",
	},
];

export default function ScreenshotsSection() {
	return (
		<section
			className="min-h-screen flex flex-col items-center py-16 bg-default-50"
			id="screenshots"
		>
			<h2
				className="text-4xl font-bold text-center text-text mb-12
				opacity-0 transition-opacity intersect-full intersect:opacity-100 intersect-once 
				intersect:motion-preset-blur-right"
			>
				Aperçu de l&apos;application
			</h2>
			<div className="flex flex-col items-center gap-12 w-full px-4 md:px-0">
				{screenshots.map((screen, index) => (
					<div
						key={index}
						className={`flex flex-col md:flex-row items-center max-w-[90%] md:max-w-[70%] py-8 w-full gap-8 ${
							index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
						}`}
					>
						<div
							className="flex-1 w-full md:w-fit text-center md:text-left
							opacity-0 transition-opacity intersect-full intersect:opacity-100 intersect-once duration-400
							intersect:motion-preset-confetti motion-duration-300
						"
						>
							<h3 className="text-2xl font-semibold mb-2 text-default-900">
								{screen.title}
							</h3>
							<p className="text-default-700 w-full md:w-2/3 mx-auto md:mx-0">
								{screen.description}
							</p>
						</div>
						<div
							className={`flex-1 w-full md:w-auto
						opacity-0 transition-opacity intersect-half intersect:opacity-100 intersect-once duration-400
						intersect:motion-scale-in-[0.5] ${
							index % 2 === 0
								? "intersect:motion-rotate-in-[8deg]"
								: "intersect:motion-rotate-in-[-8deg]"
						}
						intersect:motion-duration-[0.50s] intersect:motion-delay-[0.50s]/rotate intersect:motion-delay-[0.50s]/blur
						}`}
						>
							<Image
								src={screen.image}
								alt={screen.alt}
								width={256}
								height={512}
								className=" mx-auto"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}