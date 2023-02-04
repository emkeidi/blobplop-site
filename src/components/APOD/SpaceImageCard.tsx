import SpaceImagesModel from '../../../models/SpaceImagesModel';

interface SpaceImageCardProps {
  image: SpaceImagesModel;
}

export default function SpaceImageCard({ image }: SpaceImageCardProps) {
  return (
    <div className='col'>
      <div className='card shadow m-2 p-2'>
        <img src={image.url} alt={image.title} className='card-img-top' />
        <div className='card-body'>
          <h5 className='card-title'>{image.title}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>{image.date}</h6>
          <p className='card-text'>{image.explanation}</p>
        </div>
      </div>
    </div>
  );
}
