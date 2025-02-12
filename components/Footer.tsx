export default function Footer() {
	return (
		<footer className="bg-blueTertiary text-white py-6">
			<div className="container mx-auto px-4 text-center">
				<p>&copy; {new Date().getFullYear()} Melios. Tous droits réservés.</p>
			</div>
		</footer>
	);
}
