import { client } from "./sanity.js";
import { createImageUrlBuilder } from "@sanity/image-url";

const builder = createImageUrlBuilder( client );
export function urlFor(image){
    return builder.image(image);
}