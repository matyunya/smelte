import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/** Smelte includes convenience image component which is useful for lazyloading, but generally we recommend using [Svelte Image](https://github.com/matyunya/svelte-image). */
export default class Image extends SvelteTypedComponent<ImageProps, ImageEvents, ImageSlots> {
}
declare const _ImageProps: {
    /** Specifies an alternate text for an image.
     * 
     * Default: empty string
     */
    alt?: string;
    width?: string;
    height?: string;
    src?: string;
    /** Thumbnai can be showed while the real image is loading.
     * 
     * Default: empty string
     */
    thumbnail?: string;
} & SvelteAllProps;
declare const _ImageEvents: {};
declare const _ImageSlots: {
    loading: {};
};
export declare type ImageProps = typeof _ImageProps;
export declare type ImageEvents = typeof _ImageEvents;
export declare type ImageSlots = typeof _ImageSlots;
export {};
