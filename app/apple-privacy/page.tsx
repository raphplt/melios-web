/* eslint-disable react/no-unescaped-entities */
import React from "react";

const page = () => {
	return (
		<div>
			<h2 className="text-lg mb-4 mt-6">1. Introduction</h2>
			<p>
				Nous vous remercions d'avoir choisi d'utiliser notre application. La
				protection de votre vie privée est de la plus haute importance pour nous.
				C’est pourquoi nous tenons à vous informer que{" "}
				<strong>
					aucune de vos données personnelles ne sera utilisée à des fins commerciales
				</strong>
				.
			</p>

			<h2 className="text-lg mb-4 mt-6">2. Collecte de Données</h2>
			<p>
				Nous collectons uniquement les données nécessaires pour assurer le bon
				fonctionnement de l’application. Ces données peuvent inclure, mais ne sont
				pas limitées à :
			</p>
			<ul>
				<li>
					Les informations nécessaires à la création de votre compte (nom, adresse
					e-mail, etc.).
				</li>
				<li>
					Les données relatives à l'utilisation de l'application pour améliorer
					l'expérience utilisateur.
				</li>
			</ul>

			<h2 className="text-lg mb-4 mt-6">3. Utilisation des Données</h2>
			<p>
				Les données que nous collectons sont exclusivement utilisées pour les
				finalités suivantes :
			</p>
			<ul>
				<li>Assurer le bon fonctionnement de l'application.</li>
				<li>Améliorer les fonctionnalités et l'expérience utilisateur.</li>
				<li>Garantir la sécurité des informations et des transactions.</li>
			</ul>

			<h2 className="text-lg mb-4 mt-6">
				4. Non-utilisation à des Fins Commerciales
			</h2>
			<p>
				Nous nous engageons à ne jamais vendre, louer, ou partager vos données
				personnelles à des fins commerciales. Vos informations ne seront jamais
				utilisées pour des campagnes de marketing, de publicité, ou toute autre
				activité commerciale.
			</p>

			<h2 className="text-lg mb-4 mt-6">5. Partage de Données</h2>
			<p>
				Vos données personnelles ne seront jamais partagées avec des tiers, sauf si
				cela est requis par la loi ou si vous avez donné votre consentement
				explicite.
			</p>

			<h2 className="text-lg mb-4 mt-6">6. Sécurité des Données</h2>
			<p>
				Nous mettons en œuvre des mesures de sécurité techniques et
				organisationnelles appropriées pour protéger vos données contre tout accès
				non autorisé, toute divulgation, modification ou destruction.
			</p>

			<h2 className="text-lg mb-4 mt-6"> 7. Vos Droits</h2>
			<p>
				Vous avez le droit de consulter, corriger, ou supprimer vos données
				personnelles à tout moment. Pour exercer ces droits, veuillez nous contacter
				à l’adresse suivante :{" "}
				<a href="mailto:melios.customer@gmail.com">melios.customer@gmail.com</a>.
			</p>

			<h2 className="text-lg mb-4 mt-6">8. Modifications</h2>
			<p>
				Nous nous réservons le droit de modifier cet engagement de confidentialité à
				tout moment. En cas de modification, nous vous informerons via l'application
				ou par e-mail.
			</p>

			<h2 className="text-lg mb-4 mt-6">9. Contact</h2>
			<p>
				Si vous avez des questions ou des préoccupations concernant notre engagement
				de confidentialité, n'hésitez pas à nous contacter à{" "}
				<a href="mailto:melios.customer@gmail.com">melios.customer@gmail.com</a>.
			</p>
		</div>
	);
};

export default page;
