import React, { useState } from "react";
import {
	Alert,
	Button,
	Form,
	Input,
	Select,
	SelectItem,
	Textarea,
} from "@heroui/react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface ContactForm {
	name: string;
	email: string;
	message: string;
	type: string;
}

const schema = z.object({
	name: z.string().nonempty("Le nom est requis"),
	email: z.string().email("L'email n'est pas valide"),
	message: z.string().nonempty("Le message est requis"),
	type: z.enum(["contact", "support", "partnership"]),
});

export default function ContactSection() {
	const [showAlert, setShowAlert] = useState(false);

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactForm>({
		defaultValues: {
			type: "contact",
			name: "",
			email: "",
			message: "",
		},
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<ContactForm> = async (data) => {
		try {
			const response = await fetch("https://formspree.io/f/mvgzwpvk", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				setShowAlert(true);
				setTimeout(() => setShowAlert(false), 2000);
				reset();
			} else {
				alert("Une erreur est survenue. Veuillez réessayer.");
			}
		} catch (error) {
			console.error("Erreur lors de l'envoi du formulaire:", error);
			alert("Une erreur est survenue. Veuillez réessayer.");
		}
	};

	return (
		<section
			className="min-h-[50vh] flex items-center py-16 lg:py-24 bg-background"
			id="contact"
		>
			<div className="container mx-auto px-4">
				<h2
					className="text-4xl font-bold text-center text-text mb-12 opacity-0 transition-opacity intersect-full intersect:opacity-100 intersect-once intersect:motion-preset-blur-right"
					aria-label="Contactez-nous"
				>
					Contactez-nous
				</h2>
				<p
					className="text-center text-default-700 mb-8 opacity-0 transition-opacity intersect-full intersect:opacity-100 intersect-once intersect:motion-preset-blur-right"
					aria-label="Une question, une suggestion ou un problème ? N'hésitez pas à nous contacter."
				>
					Une question, une suggestion ou un problème ? N&apos;hésitez pas à nous
					contacter.
				</p>
				<Form
					className="max-w-lg mx-auto w-11/12 lg:w-1/2 space-y-2"
					onSubmit={handleSubmit(onSubmit)}
				>
					<Controller
						name="type"
						control={control}
						render={({ field }) => (
							<Select
								title="Type de message"
								placeholder="Sélectionner un type de message"
								selectedKeys={new Set([field.value])}
								onSelectionChange={(keys) => {
									const selectedKey = keys.currentKey || "";
									field.onChange(selectedKey);
								}}
								errorMessage={
									errors.type ? "Veuillez sélectionner un type de message" : ""
								}
								isInvalid={Boolean(errors.type)}
								aria-label="Type de message"
							>
								<SelectItem key="contact" value="contact" aria-label="Contact">
									Contact
								</SelectItem>
								<SelectItem key="support" value="support" aria-label="Support">
									Support
								</SelectItem>
								<SelectItem
									key="partnership"
									value="partnership"
									aria-label="Partenariat"
								>
									Partenariat
								</SelectItem>
							</Select>
						)}
					/>

					<Input
						type="text"
						id="name"
						placeholder="Votre nom"
						{...register("name")}
						errorMessage={String(errors.name?.message)}
						isInvalid={Boolean(errors.name)}
						autoComplete="name"
						aria-label="Votre nom"
					/>

					<Input
						type="email"
						id="email"
						placeholder="Votre email"
						{...register("email")}
						errorMessage={String(errors.email?.message)}
						isInvalid={Boolean(errors.email)}
						aria-label="Votre email"
					/>

					<Textarea
						id="message"
						rows={5}
						placeholder="Votre message"
						{...register("message")}
						errorMessage={String(errors.message?.message)}
						isInvalid={Boolean(errors.message)}
						autoComplete="off"
						aria-label="Votre message"
					/>

					<Button
						type="submit"
						variant="solid"
						color="primary"
						className="w-full"
						aria-label="Envoyer"
					>
						Envoyer
					</Button>
				</Form>
				{showAlert && (
					<Alert className="mt-4 mx-auto" color="success">
						<p className="text-sm" aria-label="Formulaire envoyé !">
							Formulaire envoyé !
						</p>
					</Alert>
				)}
			</div>
		</section>
	);
}
