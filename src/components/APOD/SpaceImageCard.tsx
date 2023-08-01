import SpaceImagesModel from '../../models/SpaceImagesModel';
import './SpaceImageCard.css';

interface SpaceImageCardProps {
	image: SpaceImagesModel;
}

export default function SpaceImageCard({ image }: SpaceImageCardProps) {
	if (image.media_type === 'image') {
		return (
			<div className='col'>
				<div className='card shadow-xl bg-base-200  my-6'>
					<figure>
						<img src={image.url} alt={image.title} />
					</figure>
					<div className='card-body'>
						<details>
							<summary>
								<em>{image.title}</em>, {image.date}
								{image.copyright && <p>{image.copyright}</p>}
							</summary>
							{image.explanation ? (
								<p className='card-text'>{image.explanation}</p>
							) : (
								<p>No explanation detected 🔭🌚</p>
							)}
						</details>
						<p>
							<a href={image.hdurl} target='_blank' rel='noopener'>
								Link to original
							</a>
						</p>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className='col'>
				<div className='card shadow text-bg-dark mb-3 g-3'>
					<iframe src={image.url} allow='autoplay' />
					<div className='card-body'>
						<details>
							<summary>
								<h5 className='card-title'>{image.title}</h5>
								<h6 className='card-subtitle mb-2'>
									{image.date}
									{image.copyright && <p>{image.copyright}</p>}
								</h6>
							</summary>
							{image.explanation ? (
								<p className='card-text'>{image.explanation}</p>
							) : (
								<p>No explanation detected 🔭🌚</p>
							)}
						</details>
						<p>
							<a href={image.url} target='_blank' rel='noopener'>
								Link to original
							</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
}
