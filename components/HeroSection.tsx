import { useEffect, useState } from "react";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import Arrow from "./icons/Arrow";
import Download from "./icons/Download";
import Apple from "./icons/Apple";
import Android from "./icons/Android";
import Link from "next/link";

function AnimatedBackground() {
	const [pos, setPos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		setPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
		const handleMouseMove = (e: MouseEvent): void => {
			setPos({ x: e.clientX, y: e.clientY });
			console.log(`Mouse position: x=${e.clientX}, y=${e.clientY}`);
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<>
			{/* Fond animé en dégradé */}
			<div className="absolute inset-0 z-[-2] animate-gradient" />

			{/* Effet radial qui suit le curseur */}
			<div
				className="absolute inset-0 z-[-1]"
				style={{
					backgroundImage: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.1), transparent 70%)`,
					transition: "background 0.1s ease-out",
				}}
			/>
		</>
	);
}

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<AnimatedBackground />

			<div className="relative z-10 text-white w-full sm:w-3/4 lg:w-1/2 flex flex-col gap-y-6 px-4 sm:px-6 lg:px-8">
				<div className="motion-preset-compress flex flex-col">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
						Commencez votre aventure avec
						<span className="ml-2 text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-primaryLight">
							Melios
						</span>
					</h1>
				</div>
				<p className="text-base sm:text-lg md:text-xl text-center mb-8 motion-preset-focus motion-delay-300 text-default-100">
					La nouvelle façon de gérer votre quotidien avec simplicité et efficacité.
				</p>
				<div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
					<Button
						variant="solid"
						color="primary"
						endContent={<Arrow />}
						as={Link}
						href="#features"
						className="motion-scale-in-[0.5] motion-translate-x-in-[-28%] motion-translate-y-in-[26%] 
              motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] 
              motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate 
              motion-duration-[0.63s]/rotate motion-delay-300"
					>
						Découvrir l&apos;application
					</Button>
					<Popover>
						<PopoverTrigger>
							<Button
								color="primary"
								variant="faded"
								endContent={<Download />}
								className="motion-scale-in-[0.5] motion-translate-x-in-[-28%] motion-translate-y-in-[26%] 
                  motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] 
                  motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate 
                  motion-duration-[0.63s]/rotate motion-delay-400"
							>
								Télécharger
							</Button>
						</PopoverTrigger>
						<PopoverContent>
							<div className="p-4">
								<p className="text-lg text-primary font-bold mb-2">
									Téléchargez l&apos;application
								</p>
								<p className="text-sm text-gray-600">Disponible sur Android et iOS</p>
								<div className="flex justify-center mt-4 gap-4">
									<Button
										variant="solid"
										color="primary"
										endContent={<Android />}
										href="https://play.google.com/store/apps/details?id=com.raphplt.melios&pcampaignid=web_share"
										as={Link}
										target="_blank"
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
									>
										iOS
									</Button>
								</div>
							</div>
						</PopoverContent>
					</Popover>
				</div>
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
