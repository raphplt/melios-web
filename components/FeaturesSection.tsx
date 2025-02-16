import { Card, CardBody } from "@heroui/react";

export default function FeaturesSection() {
	const features = [
		{
			icon: "🎯",
			title: "Gamification",
			description:
				"Progressez avec un système de niveaux et débloquez des récompenses motivantes.",
		},
		{
			icon: "📊",
			title: "Suivi intelligent",
			description:
				"Visualisez vos progrès en un coup d'œil et ajustez vos routines facilement.",
		},
		{
			icon: "🎁",
			title: "Récompenses exclusives",
			description:
				"Obtenez des récompenses réelles et digitales en atteignant vos objectifs.",
		},
		{
			icon: "🌍",
			title: "Communauté engagée",
			description:
				"Échangez avec d'autres utilisateurs et trouvez l'inspiration pour progresser ensemble.",
		},
		{
			icon: "🔔",
			title: "Rappels intelligents",
			description:
				"Recevez des notifications personnalisées pour rester motivé et constant.",
		},
		{
			icon: "🧠",
			title: "Contenus enrichissants",
			description:
				"Accédez à des guides et articles spécialisés pour approfondir vos connaissances.",
		},
	];

	return (
		<section
			className="min-h-screen flex items-center py-16 bg-backgroundSecondary"
			id="features"
		>
			<div className="container mx-auto px-4">
				<h2
					className="text-4xl font-bold text-center text-text mb-12
				opacity-0 transition-opacity intersect-full intersect:opacity-100 intersect-once 
				intersect:motion-preset-blur-right"
					aria-label="Fonctionnalités clés de Melios"
				>
					Fonctionnalités clés de Melios
				</h2>
				<p
					className="text-center text-textTertiary max-w-2xl mx-auto mb-12
				opacity-0 transition-opacity intersect-full intersect:opacity-100 intersect-once 
				intersect:motion-preset-focus motion-delay-200 intersect:motion-delay-20
				"
					arial-label="Découvrez comment Melios vous aide à transformer vos habitudes et booster	
					votre développement personnel grâce à des fonctionnalités uniques."
				>
					Découvrez comment Melios vous aide à transformer vos habitudes et booster
					votre développement personnel grâce à des fonctionnalités uniques.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<FeatureCard
							key={index}
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
							delay={index * 50}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function FeatureCard({
	icon,
	title,
	description,
	delay,
}: {
	icon: string;
	title: string;
	description: string;
	delay: number;
}) {
	return (
		<Card
			className="p-8 text-center opacity-0 transition-opacity duration-500 
			intersect:motion-scale-in-[0.5] intersect:motion-translate-x-in-[-25%] intersect:motion-translate-y-in-[25%] 
			intersect:motion-opacity-in-[0%] intersect:motion-rotate-in-[-10deg] intersect:motion-blur-in-[5px] 
			intersect-full intersect:opacity-100 intersect-once  hover:scale-105"
			style={{
				animationDelay: `${delay}ms`,
			}}
		>
			<CardBody>
				<div className="text-6xl mb-4">{icon}</div>
				<h3 className="text-2xl font-bold text-text mb-2" aria-label={title}>
					{title}
				</h3>
				<p className="text-textTertiary" aria-label={description}>
					{description}
				</p>
			</CardBody>
		</Card>
	);
}
