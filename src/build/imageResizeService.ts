import type { ExternalImageService, ImageTransform, AstroConfig } from "astro";

const service: ExternalImageService = {
  validateOptions(options: ImageTransform, imageConfig: AstroConfig['image']) {
    const serviceConfig = imageConfig.service.config;

    // Enforce the user set max width.
    if (options.width > serviceConfig.maxWidth) {
      console.warn(`Image width ${options.width} exceeds max width ${serviceConfig.maxWidth}. Falling back to max width.`);
      options.width = serviceConfig.maxWidth;
    }

    return options;
  },
  getURL(options, imageConfig) {
    return `https://mysupercdn.com/${options.src}?q=${options.quality}&w=${options.width}&h=${options.height}`;
  },
  getHTMLAttributes(options, imageConfig) {
    const { src, format, quality, ...attributes } = options;
    return {
      ...attributes,
      loading: options.loading ?? 'lazy',
      decoding: options.decoding ?? 'async',
    };
  }
};


export default service;