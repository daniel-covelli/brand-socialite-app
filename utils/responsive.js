import { createMedia } from '@artsy/fresnel';

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    small: 450,
    tablet: 768,
    computer: 1000,
    largeScreen: 1200,
    fullScreen: 1400,
    widescreen: 1920
  }
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

export { mediaStyles, Media, MediaContextProvider };
