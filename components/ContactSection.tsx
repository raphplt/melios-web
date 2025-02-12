import { Button, Input, Textarea } from "@heroui/react";

export default function ContactSection() {
	return (
		<section className="min-h-screen flex items-center py-16 bg-background">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center text-text mb-12">
					Contactez-nous
				</h2>
				<form className="max-w-lg mx-auto">
					<div className="mb-6">
						<Input
							type="text"
							id="name"
							placeholder="Votre nom"
							className="w-full border border-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
						/>
					</div>
					<div className="mb-6">
						<Input
							type="email"
							id="email"
							placeholder="Votre email"
							className="w-full border border-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
						/>
					</div>
					<div className="mb-6">
						<Textarea
							id="message"
							rows={5}
							placeholder="Votre message"
							className="w-full border border-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
						/>
					</div>
					<Button
						type="submit"
						variant="solid"
						className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primaryLight transition"
					>
						Envoyer
					</Button>
				</form>
			</div>
		</section>
	);
}
