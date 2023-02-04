import { useEffect, useState } from 'react';
import SpaceImagesModel from '../../models/SpaceImagesModel';

export const APODList = () => {
  const [httpError, setHttpError] = useState(null);

  const [images, setImages] = useState<SpaceImagesModel[]>([]);
  const [isLoadingImages, setIsLoadingImages] = useState(true);

  useEffect(() => {
    const fetchSpaceImages = async () => {
      const spaceImagesUrl = `https://api.nasa.gov/planetary/apod?api_key=${
        import.meta.env.NASA_API_KEY
      }&count=10`;

      const imagesResponse = await fetch(spaceImagesUrl);

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
  }, []);

  if (httpError) {
    return (
      <div>
        <p>{httpError}</p>
      </div>
    );
  }
  return <div></div>;
};
