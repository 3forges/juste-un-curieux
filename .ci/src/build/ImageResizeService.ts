import type { ExternalImageService, ImageTransform, AstroConfig, ImageOutputFormat, ImageMetadata } from "astro";
export const justinFormat: ImageOutputFormat = `webp`

const justinImgMetaData: ImageMetadata = {
  src: `bidule`,
  format: "webp", // here {format} property of [ImageMetaData] Class, is an [Enum], not an [ImageOutputFormat]  
  height: 150,
  width: 150,
}
const defaultOptions: ImageTransform = {
  src: `bidule`, // it could be {justinImgMetaData}
  format: justinFormat,
  height: 150,
  width: 150,
  quality: "mid",
}
export interface JustinCurieuxImageConfig {
  service: {
    config: {
      bernard: string;
      maxWidth: number;
      options?: ImageTransform;
    }
  }
}
/**
 * export declare const VALID_OUTPUT_FORMATS: readonly ["avif", "png", "webp", "jpeg", "jpg", "svg"];
 */

/**
 * AstroConfig : It is exactly the JSON Object defined in your [astro.config.mjs]
 * AstroConfig['image'] : It is exactly this part in your [astro.config.mjs] : 
 * 
 *
 *   image: {
 *     service: {
 *       entrypoint: "src/build/imageResizeService.ts", // 'astro/assets/services/squoosh' | 'astro/assets/services/sharp' | string,
 *       config: {
 *         // ... service-specific config. Optional.
 *         bernard: `michel`
 *         maxWidth: 1280,
 *         options: {
 *              src: `bidule`,
 *              format: justinFormat,
 *              height: 150,
 *              width: 150,
 *              quality: "mid",
 *         }
 *       }
 *     }
 *   },
 */
export const imageResizingService: ExternalImageService = {
  validateOptions(options: ImageTransform, imageConfig: AstroConfig['image']) {
    const serviceConfig = imageConfig.service.config;
    console.log(`defaultOptions : `, defaultOptions)
    console.log(`justinFormat : `, justinFormat)
    console.log(`justinImgMetaData : `, justinImgMetaData)

    // Enforce the user set max width.
    const defaultWidth = options.width || 0
    if (defaultWidth > serviceConfig.maxWidth) { // 
      console.warn(`Image width ${options.width} exceeds max width ${serviceConfig.maxWidth}. Falling back to max width.`);
      options.width = serviceConfig.maxWidth;
    }

    return options;
  },
  // getURL(options, imageConfig) {
  /**
   * The image resize Hook to use for your <Image /> s [src] property // 
   * 
   * Example : 
   * 
   * <pre>
   *   ---
   *   import { Image } from 'astro:assets'
   *   import imageService from "~/src/build/imageResizingService"
   *   ---
   *   <Image src={imageService.getURL(myOptions, myImageConfig)} /> 
   * </pre>
   * 
   * @param options 
   * @param imageConfig must be a JSON object with the properties defined in the {@JustinCurieuxImageConfig } interface
   * @returns The URL of the processed image, with resized according 2 things: the global <code>imageConfig</code> defined in <code>[astro.config.mjs]</code>, and the <code>options</code>
   */
  getURL(options: ImageTransform, customImageConfig: AstroConfig['image']/*JustinCurieuxImageConfig*/) {
    // const astroConfiguredImageService = customImageConfig.service.config; // you can use that if you feel like implementing more refined behavior
    // `https://picsum.photos/id/866/200/300.jpg`
    // console.log(`defaultOptions : `, defaultOptions)
    // console.log(`justinFormat : `, justinFormat)
    // console.log(`justinImgMetaData : `, justinImgMetaData)

    console.log(` IMAGE RESIZE SERVICE : [getURL()] Hook - passed options : `, options)
    console.log(` IMAGE RESIZE SERVICE : [getURL()] Hook - FETCHING RESIZED IMAGE : https://picsum.photos/id/${options.src}/${options.width}/${options.height}.jpg`)
    // console.log(`justinImgMetaData : `, justinImgMetaData)
    return `https://picsum.photos/id/${options.src}/${options.width}/${options.height}.jpg`;
  },

  // getLoremPicsumURL(options: ImageTransform, customImageConfig: AstroConfig['image']/*JustinCurieuxImageConfig*/) {
  //   return `https://picsum.photos/id/866/200/300.jpg`
  // },

  // getURL(options: ImageTransform, customImageConfig: AstroConfig['image']/*JustinCurieuxImageConfig*/) {
  //   // const astroConfiguredImageService = customImageConfig.service.config; // you can use that if you feel like implementing more refined behavior
  //   return `https://mysupercdn.com/${options.src}?q=${options.quality}&w=${options.width}&h=${options.height}`;
  // },

  /*
  getSafeURL(options: ImageTransform, imageConfig: any) {
    return `https://mysupercdn.com/${options.src}?q=${options.quality}&w=${options.width}&h=${options.height}`;
  },
  */
  getHTMLAttributes(options, imageConfig) {
    const { src, format, quality, ...attributes } = options;
    return {
      ...attributes,
      loading: options.loading ?? 'lazy',
      decoding: options.decoding ?? 'async',
    };
  }
};


export default imageResizingService;
