import { getAssetURL } from "./image-util";

export default function preloadImageList(imageList) {
  const imageURL = imageList.map((image) => {
    return (new Image().src = getAssetURL(image));
  });
}
