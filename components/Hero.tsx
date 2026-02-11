"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
	{
		id: 1,
		subtitle: "Definition of that era",
		title: "A Walk Through Time",
		description:
			"Hindu marriage processions are elaborate public celebrations with music, lamps, and community participation. The marriage procession of Mr. Hira Lal Jalan, son of Radha Krishna Jalan, reflects the city's rich mercantile culture and traditional wedding customs of the time.",
		image: "/hero/hero-1.jpg",
	},
	{
		id: 2,
		subtitle: "Organized to Honor",
		title: "Royal Melodies at Quila",
		description:
			"A ceremonial band performing at Patna's Quila House hiterto known as Sher Shah Suri's fort, set against the scenic backdrop of the River Ganga.",
		image: "/hero/hero-2.jpg",
	},
	{
		id: 3,
		subtitle: "WELCOME TO PLANET PATNA",
		title: "A City Once on the Bank of Ganga",
		description:
			"Patna, anciently known as Pataliputra, stands as one of the oldest continuously inhabited cities in the world. Once the seat of power for the mighty Mauryan and Gupta Empires, it was the epicenter of a civilization that stretched across the subcontinent.",
		image: "/hero/hero-3.jpg",
	},
];

export default function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 8000);
		return () => clearInterval(timer);
	}, []);

	// auto-advance handled in useEffect above; manual controls can be added later

	return (
		<div
			id="home"
			className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black"
		>
			{/* 1. BACKGROUND LAYER (The Stage) */}
			<AnimatePresence mode="wait">
				<motion.div
					key={currentSlide}
					className="absolute inset-0 z-0"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
				>
					<div className="relative w-full h-full">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={slides[currentSlide].image}
							alt=""
							className="absolute inset-0 w-full h-full object-cover scale-105"
						/>

						{/* --- CINEMATIC GRADIENTS (Crucial for "Image Centric" look) --- */}

						{/* Left Gradient: Darkens only behind the text, leaves right side bright */}
						<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10 w-[70%]" />

						{/* Bottom Gradient: Anchors the navigation */}
						<div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

						{/* Vignette: Subtle darkening of corners to focus eye on center */}
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] z-10" />
					</div>
				</motion.div>
			</AnimatePresence>

			{/* 2. TEXT LAYER (Typography Focused) */}
			<div className="absolute inset-0 z-20 flex items-center">
				<div className="container mx-auto px-6 md:px-16 lg:px-24">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentSlide}
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={{
								hidden: { opacity: 0 },
								visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
								exit: { opacity: 0, transition: { duration: 0.3 } },
							}}
							className="max-w-3xl"
						>
							{/* Subtitle */}
							<motion.div
								variants={{
									hidden: { opacity: 0, x: -20 },
									visible: { opacity: 1, x: 0 },
								}}
								className="flex items-center gap-4 mb-8"
							>
								<div className="h-[1px] w-16 bg-amber-500/80" />
								<span className="text-amber-500 text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
									{slides[currentSlide].subtitle}
								</span>
							</motion.div>

							{/* Title - Tighter leading for "Magazine" look */}
							<motion.h1
								variants={{
									hidden: { opacity: 0, y: 40 },
									visible: {
										opacity: 1,
										y: 0,
										transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
									},
								}}
								className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[0.9] tracking-tight mb-8 drop-shadow-2xl"
							>
								{slides[currentSlide].title}
							</motion.h1>

							{/* Description - Looser leading for readability and elegance */}
							<motion.p
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								className="text-white/80 text-base md:text-lg font-light leading-relaxed tracking-wide max-w-lg mb-12"
							>
								{slides[currentSlide].description}
							</motion.p>

							{/* Button - Minimalist & Glassy */}
							<motion.button
								variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
								className="group relative px-10 py-5 overflow-hidden rounded-full bg-white/5 backdrop-blur-md border border-white/20 transition-all duration-300 hover:border-amber-500/50 hover:bg-white/10"
							>
								<span className="relative z-10 flex items-center gap-4 text-white font-medium tracking-[0.2em] uppercase text-xs">
									Explore Exhibition
									<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
								</span>
							</motion.button>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>

			{/* 3. SLIDER DOT NAVIGATION */}
			<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
				{slides.map((slide, index) => (
					<button
						key={slide.id}
						type="button"
						onClick={() => setCurrentSlide(index)}
						className={`h-2.5 rounded-full border border-white/40 transition-all duration-300 ${
							currentSlide === index
								? "w-6 bg-amber-500 shadow-[0_0_0_4px_rgba(0,0,0,0.35)]"
								: "w-2.5 bg-white/20 hover:bg-white/40"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>

			{/* 4. NAVIGATION CONTROLS removed: stacked editorial cards moved to a standalone component below the hero. */}
		</div>
	);
}
