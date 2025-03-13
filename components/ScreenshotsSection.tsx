import Image from "next/image";
import { Sparkles, TrendingUp, Gift, Users } from "lucide-react";

const screenshots = [
	{
		title: "Accueil",
		description: "Gérez vos habitudes quotidiennes et suivez votre progression.",
		image: "/images/screenshots/Home.png",
		alt: "Melios home screen",
		icon: Sparkles,
	},
	{
		title: "Progression",
		description:
			"Suivez l'évolution de vos habitudes et atteignez vos objectifs.",
		image: "/images/screenshots/Progression.png",
		alt: "Melios progression screen",
		icon: TrendingUp,
	},
	{
		title: "Récompenses",
		description: "Débloquez des récompenses en atteignant vos objectifs.",
		image: "/images/screenshots/Rewards.png",
		alt: "Melios rewards screen",
		icon: Gift,
	},
	{
		title: "Communauté",
		description:
			"Interagissez avec d'autres utilisateurs et comparez vos progrès.",
		image: "/images/screenshots/Community.png",
		alt: "Melios agora screen",
		icon: Users,
	},
];

export default function ScreenshotsSection() {
	return (
		<section
			className="min-h-screen flex flex-col items-center py-16 bg-default-50 relative"
			id="screenshots"
		>
			<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
				<div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
			</div>
			<h2
				className="text-4xl font-bold text-center text-text mb-12
				opacity-0 transition-opacity intersect-full intersect:opacity-100 intersect-once 
				intersect:motion-preset-blur-right"
				aria-label="Aperçu de l'application"
			>
				Aperçu de l&apos;application
			</h2>

			<p className="text-center text-default-700 max-w-2xl mb-12 px-4">
				Découvrez l&apos;interface intuitive et élégante de Melios qui vous
				accompagne dans votre développement personnel. Notre application est conçue
				pour rendre votre progression visible et motivante.
			</p>
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
							intersect:motion-preset-confetti motion-duration-300"
						>
							<div className="flex items-center gap-4 mb-2">
								{screen.icon && <screen.icon className="w-6 h-6 text-primary" />}

								<h3
									className="text-2xl font-semibold  text-default-900"
									arial-label={screen.title}
								>
									{screen.title}
								</h3>
							</div>
							<p
								className="text-default-700 w-full md:w-2/3 mx-auto md:mx-0"
								arial-label={screen.description}
							>
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
							<div className="relative p-2 bg-white rounded-3xl shadow-lg ring-1 ring-default-200">
								<div className="absolute top-0 left-0 w-full h-8 bg-default-100 rounded-t-3xl flex items-center px-3">
									<div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
									<div className="w-3 h-3 rounded-full bg-green-400"></div>
								</div>
								<div className="pt-8 my-3">
									<Image
										src={screen.image}
										alt={screen.alt}
										width={256}
										height={512}
										className="mx-auto rounded-2xl"
										aria-label={screen.title + " screenshot"}
									/>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}