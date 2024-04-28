import {ApiContants} from '../contants';

// interface GetFlagIconProps {
//   code?: string;
//   style?: string;
//   size?: number;
// }

const getFlagIcon = (
  code: string = 'IN',
  style: string = ApiContants.COUNTRY_FLAG.STYLE.FLAT,
  size = ApiContants.COUNTRY_FLAG.SIZE[64],
): string =>
  `${ApiContants.COUNTRY_FLAG.BASE_URL}/${code}/${style}/${size}.png`;

const getLogo = (imageId: string): string =>
  `${ApiContants.STATIC_IMAGE.BASE_URL}/logo/${imageId}.png`;

interface GetPosterProps {
  imageId: string;
  quality?: string;
}

const getPoster = ({
  imageId,
  quality = ApiContants.STATIC_IMAGE.QUALITY.SD,
}: GetPosterProps): string =>
  `${ApiContants.STATIC_IMAGE.BASE_URL}/poster/${quality}/${imageId}.png`;

interface GetGalleryImageProps {
  imageId: string;
  size: number;
  quality?: string;
}

const getGalleryImage = ({
  imageId,
  size,
  quality = ApiContants.STATIC_IMAGE.QUALITY.SD,
}: GetGalleryImageProps): string =>
  `${ApiContants.STATIC_IMAGE.BASE_URL}/gallery/${size}/${quality}/${imageId}.png`;

export default {getFlagIcon, getLogo, getPoster, getGalleryImage};
