import SpaceImagesModel from '../../../models/SpaceImagesModel';

interface SpaceImageCardProps {
  image: SpaceImagesModel;
}

export default function SpaceImageCard({ image }: SpaceImageCardProps) {
  if (image.media_type == 'image') {
    return (
      <div className='col'>
        <div className='card shadow text-bg-dark mb-3 g-3'>
          <img src={image.hdurl} alt={image.title} className='card-img-top' />
          <div className='card-body'>
            <h5 className='card-title'>{image.title}</h5>
            <h6 className='card-subtitle mb-2'>
              {image.date} {image.copyright}
            </h6>
            <p className='card-text'>{image.explanation}</p>
            <p>
              <a href={image.hdurl}>Link to original</a>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='col'>
        <div className='card shadow text-bg-dark mb-3 g-3'>
          <video src={image.hdurl} className='card-img-top' autoPlay loop></video>
          <div className='card-body'>
            <h5 className='card-title'>{image.title}</h5>
            <h6 className='card-subtitle mb-2'>
              {image.date} {image.copyright}
            </h6>
            <p className='card-text'>{image.explanation}</p>
            <p>
              <a href={image.hdurl}>Link to original</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
