import crop from 'jimp';

async function cropimage(image) {
  const image = await Jimp.read(image);
  await image.crop(50, 50, 150, 150);
  return;
}

export default cropimage;
