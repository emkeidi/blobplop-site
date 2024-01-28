import React from 'react';
import './RandomTagline.css';

type RandomTaglineProps = {
	word?: string;
};

const RandomTagline: React.FC<RandomTaglineProps> = ({ word = 'Blob' }) => {
	// Array of random taglines
	const taglines = [
		'All roads lead to',
		'Unlock the power of',
		'Embrace the magic of',
		'Discover the wonders of',
		'Experience the joy of',
		'Unleash your creativity with',
		'Find your inspiration in',
		'Navigate the chaos with',
		'Embrace the adventure with',
		'Transform your world with',
	];

	// Get a random tagline
	const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];

	return (
		<h1 className='text-4xl font-bold'>
			<span className=''>{randomTagline} </span>
			<span className='text-gradient'>{word}</span>
		</h1>
	);
};

export default RandomTagline;
