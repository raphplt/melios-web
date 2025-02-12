export default function FeaturesSection() {
	return (
		<section className="min-h-screen flex items-center py-16 bg-backgroundSecondary">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center text-text mb-12">
					Fonctionnalités clés
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<FeatureCard
						icon="🚀"
						title="Rapidité"
						description="Profitez d'une expérience ultra rapide et fluide."
					/>
					<FeatureCard
						icon="🔒"
						title="Sécurité"
						description="Vos données sont protégées avec des standards de sécurité élevés."
					/>
					<FeatureCard
						icon="💡"
						title="Innovation"
						description="Des fonctionnalités innovantes pour simplifier votre quotidien."
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
		<div className="bg-card rounded-xl shadow-lg p-8 text-center">
			<div className="text-6xl mb-4">{icon}</div>
			<h3 className="text-2xl font-bold text-text mb-2">{title}</h3>
			<p className="text-textTertiary">{description}</p>
		</div>
	);
}
