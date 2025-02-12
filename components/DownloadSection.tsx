export default function DownloadSection() {
	return (
		<section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
			<h2 className="text-4xl font-bold mb-6">Téléchargez Melios</h2>
			<p className="text-xl mb-8">Disponible sur iOS et Android</p>
			<div className="flex gap-4">
				<a
					href="#"
					className="bg-white text-primary font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
				>
					App Store
				</a>
				<a
					href="#"
					className="bg-white text-primary font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
				>
					Google Play
				</a>
			</div>
		</section>
	);
}
