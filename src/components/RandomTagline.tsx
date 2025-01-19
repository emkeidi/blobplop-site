import React from "react";
import "./RandomTagline.css";

type RandomTaglineProps = {
	word?: string;
	extraWord?: string;
};

const RandomTagline: React.FC<RandomTaglineProps> = ({ word = "Blob", extraWord = "Blobbington" }) => {
	// Array of random taglines
	const taglines = [
		"All roads lead to ${word}",
		"Unlock the power of ${word}",
		"Embrace the magic of ${word}",
		"Discover the wonders of ${word}",
		"Experience the joy of ${word}",
		"Unleash your creativity with ${word}",
		"Find your inspiration in ${word}",
		"Navigate the chaos with ${word}",
		"Embrace the adventure with ${word}",
		"Transform your world with ${word}",
		"${word} is the key to success",
		"${word} is the answer",
		"${word} is the way",
		"${word} ${word} ${word}",
		"${word} ${extraWord} called me last night, do you know what he wanted?",
		"Moving to ${extraWord} was the best decision I ever made",
	];

	// Function to get a random text gradient class
	const getRandomGradientClass = () => {
		const classes = ["text-gradient hover:blur-sm", "text-gradient-2 hover:blur-sm", "text-gradient-3 hover:blur-sm"];
		return classes[Math.floor(Math.random() * classes.length)];
	};

	// Get a random tagline
	let randomTagline = taglines[Math.floor(Math.random() * taglines.length)];

	// Replace all instances of ${word} and ${extraWord} with spans containing the word and random gradient class
	const wordSpan = `<span class="${getRandomGradientClass()}">${word}</span>`;
	const extraWordSpan = `<span class="${getRandomGradientClass()}">${extraWord}</span>`;
	randomTagline = randomTagline.replace(/\${word}/g, wordSpan);
	randomTagline = randomTagline.replace(/\${extraWord}/g, extraWordSpan);

	return <h1 className="text-4xl font-bold" dangerouslySetInnerHTML={{ __html: randomTagline }} />;
};

export default RandomTagline;
