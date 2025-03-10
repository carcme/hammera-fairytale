// Get the image from the assets folder

function getAssetURL(imageName) {
  const url = new URL(`../assets/${imageName}`, import.meta.url).href;
  return url;
}
function getAssetImageURL(imageName) {
  return new URL(`/image/${imageName}`, import.meta.url).href;
}
export { getAssetURL };
export { getAssetImageURL };
