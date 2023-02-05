import { useEffect, useState } from 'react';
import SpaceImagesModel from '../../../models/SpaceImagesModel';
import SpaceImageCard from './SpaceImageCard';

export const APODList = () => {
  const [httpError, setHttpError] = useState(null);

  const [images, setImages] = useState<SpaceImagesModel[]>([]);
  const [isLoadingImages, setIsLoadingImages] = useState(true);
  const [newImages, setNewImages] = useState(false);

  useEffect(() => {
    const fetchSpaceImages = async () => {
      const imagesResponse = await fetch('https://api.blobplop.com/api/v1/apod');

      if (!imagesResponse.ok) {
        throw new Error('something went wrong in space!');
      }
      const imagesResponseJson = await imagesResponse.json();
      setImages(imagesResponseJson);
      setIsLoadingImages(false);
    };
    fetchSpaceImages().catch((error) => {
      setIsLoadingImages(false);
      setHttpError(error.message);
    });
  }, [newImages]);

  if (httpError) {
    return (
      <div>
        <p>{httpError}</p>
      </div>
    );
  }
  return (
    <div className='space-images-list'>
      <section className='space-images container-fluid' id='space-images'>
        <div className='row row-cols-1 row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-1'>
          {images.map((image) => (
            <SpaceImageCard key={image.url} image={image} />
          ))}
        </div>
        <button className='btn btn-primary' onClick={() => setNewImages(!newImages)}>
          New Images
        </button>
      </section>
    </div>
  );
};
