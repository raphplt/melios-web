export default function FeaturesSection() {
	return (
		<section className="min-h-screen flex items-center py-16 bg-backgroundSecondary">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center text-text mb-12">
					Fonctionnalités clés de Melios
				</h2>
				<p className="text-center text-textTertiary max-w-2xl mx-auto mb-12">
					Découvrez comment Melios vous aide à transformer vos habitudes et booster
					votre développement personnel grâce à des fonctionnalités uniques.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<FeatureCard
						icon="🎯"
						title="Gamification"
						description="Progressez avec un système de niveaux et débloquez des récompenses motivantes."
					/>
					<FeatureCard
						icon="📊"
						title="Suivi intelligent"
						description="Visualisez vos progrès en un coup d'œil et ajustez vos routines facilement."
					/>
					<FeatureCard
						icon="🎁"
						title="Récompenses exclusives"
						description="Obtenez des récompenses réelles et digitales en atteignant vos objectifs."
					/>
					<FeatureCard
						icon="🌍"
						title="Communauté engagée"
						description="Échangez avec d'autres utilisateurs et trouvez l'inspiration pour progresser ensemble."
					/>
					<FeatureCard
						icon="🔔"
						title="Rappels intelligents"
						description="Recevez des notifications personnalisées pour rester motivé et constant."
					/>
					<FeatureCard
						icon="🧠"
						title="Contenus enrichissants"
						description="Accédez à des guides et articles spécialisés pour approfondir vos connaissances."
					/>
				</div>
			</div>
		</section>
	);
}

function FeatureCard({
	icon,
	title,
	description,
}: {
	icon: string;
	title: string;
	description: string;
}) {
	return (
		<div className="bg-card rounded-xl shadow-lg p-8 text-center transition-transform transform hover:scale-105">
			<div className="text-6xl mb-4">{icon}</div>
			<h3 className="text-2xl font-bold text-text mb-2">{title}</h3>
			<p className="text-textTertiary">{description}</p>
		</div>
	);
}
