import { Button } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function HeroSection() {
	return (
		<section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
			<div className="text-center text-white px-4 max-w-3xl">
				<h1 className="text-5xl md:text-7xl font-bold mb-4">
					Bienvenue chez Melios
				</h1>
				<p className="text-xl md:text-2xl mb-8">
					La nouvelle façon de gérer votre quotidien avec simplicité et efficacité.
				</p>
				<div className="flex justify-center gap-4">
					<Button
						variant="solid"
						color="primary"
						endContent={<Icon icon="akar-icons:arrow-right" width={24} />}
					>
						Découvrir l&apos;application
					</Button>
					<Button
						className="bg-white text-primary"
						color="primary"
						endContent={<Icon icon="akar-icons:arrow-right" width={24} />}
					>
						En savoir plus
					</Button>
				</div>
			</div>
		</section>
	);
}
