import { Button, Form, Input, Textarea } from "@heroui/react";

export default function ContactSection() {
	return (
		<section
			className="min-h-[50vh] flex items-center py-16 bg-background"
			id="contact"
		>
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center text-text mb-12">
					Contactez-nous
				</h2>
				<Form className="max-w-lg mx-auto w-1/2 space-y-4">
					<Input type="text" id="name" placeholder="Votre nom" />
					<Input type="email" id="email" placeholder="Votre email" />
					<Textarea id="message" rows={5} placeholder="Votre message" />
					<Button type="submit" variant="solid" color="primary" className="w-full">
						Envoyer
					</Button>
				</Form>
			</div>
		</section>
	);
}
