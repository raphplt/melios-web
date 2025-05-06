import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import Arrow from "./icons/Arrow";
import Download from "./icons/Download";
import Apple from "./icons/Apple";
import Android from "./icons/Android";
import Link from "next/link";
import ArticlesPreview from "./ArticlesPreview";

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-[-2] bg-gradient-to-t from-primary to-primaryLight"
			>
				<source src="/images/bg-video.mp4" type="video/mp4" />
			</video>

			<div className="relative z-10 text-white w-full sm:w-3/4 lg:w-10/12 flex flex-col gap-y-10 px-4 sm:px-6 lg:px-8 mt-28">
				<div className="motion-preset-compress flex flex-col">
					<h1
						className="text-4xl sm:text-5xl md:text-6xl font-bold text-center"
						aria-label="Commencez votre aventure avec Melios"
					>
						Commencez votre aventure avec
						<span className="ml-2 text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-primary to-primaryLight">
							Melios
						</span>
					</h1>
				</div>
				<p
					className="text-base sm:text-lg md:text-lg text-center mb-6 motion-preset-focus motion-delay-300 text-default-200 w-11/12 mx-auto"
					aria-label="La nouvelle façon de gérer votre quotidien avec simplicité et efficacité."
				>
					La nouvelle façon de gérer votre quotidien avec simplicité et efficacité.
				</p>
				<div className="flex flex-col sm:flex-row justify-center gap-3 lg:gap-6 ">
					<Button
						variant="solid"
						color="primary"
						endContent={<Arrow />}
						size="lg"
						as={Link}
						href="#features"
						className="motion-scale-in-[0.5] motion-translate-x-in-[-28%] motion-translate-y-in-[26%] 
              motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] 
              motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate 
              motion-duration-[0.63s]/rotate motion-delay-300"
						aria-label="Découvrir l'application"
					>
						Découvrir l&apos;application
					</Button>
					<Popover>
						<PopoverTrigger>
							<Button
								size="lg"
								variant="solid"
								endContent={<Download />}
								className="motion-scale-in-[0.5] motion-translate-x-in-[-28%] motion-translate-y-in-[26%] 
                  motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] 
                  motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate 
                  motion-duration-[0.63s]/rotate motion-delay-400"
								aria-label="Télécharger"
							>
								Télécharger
							</Button>
						</PopoverTrigger>
						<PopoverContent>
							<div className="p-4">
								<p
									className="text-lg text-primary font-bold mb-2"
									aria-label="Téléchargez l'application"
								>
									Téléchargez l&apos;application
								</p>
								<p
									className="text-sm text-gray-600"
									aria-label="Disponible sur Android et iOS"
								>
									Disponible sur Android et iOS
								</p>
								<div className="flex justify-center mt-4 gap-4">
									<Button
										variant="solid"
										color="primary"
										endContent={<Android />}
										href="https://play.google.com/store/apps/details?id=com.raphplt.melios&pcampaignid=web_share"
										as={Link}
										target="_blank"
										arial-label="Télécharger sur Android"
									>
										Android
									</Button>
									<Button
										variant="ghost"
										endContent={<Apple />}
										color="primary"
										href="https://apps.apple.com/fr/app/melios/id6664069292?platform=iphone"
										as={Link}
										target="_blank"
										arial-label="Télécharger sur iOS"
									>
										iOS
									</Button>
								</div>
							</div>
						</PopoverContent>
					</Popover>
				</div>
				<ArticlesPreview />
			</div>

			<style jsx global>{`
				@keyframes gradient {
					0% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
					100% {
						background-position: 0% 50%;
					}
				}
				.animate-gradient {
					background: linear-gradient(270deg, #ff7e5f, #feb47b, #86a8e7, #91eae4);
					background-size: 800% 800%;
					animation: gradient 20s ease infinite;
				}
			`}</style>
		</section>
	);
}
