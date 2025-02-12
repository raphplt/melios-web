export default function TestimonialsSection() {
	return (
		<section className="min-h-screen flex items-center py-16 bg-backgroundSecondary">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center text-text mb-12">
					Ce que disent nos utilisateurs
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<TestimonialCard
						name="Jean Dupont"
						feedback="Melios a transformé ma façon d'organiser mes journées. Une application indispensable!"
					/>
					<TestimonialCard
						name="Marie Curie"
						feedback="L'interface est intuitive et les fonctionnalités sont vraiment innovantes."
					/>
				</div>
			</div>
		</section>
	);
}

function TestimonialCard({
	name,
	feedback,
}: {
	name: string;
	feedback: string;
}) {
	return (
		<div className="bg-card rounded-xl shadow-lg p-8">
			<p className="italic text-textTertiary mb-4">&quot;{feedback}&quot;</p>
			<p className="font-bold text-text text-right">- {name}</p>
		</div>
	);
}
