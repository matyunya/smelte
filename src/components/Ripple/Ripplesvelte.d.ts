import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/** Ripple Component */
export default class Ripple extends SvelteTypedComponent<RippleProps, RippleEvents, RippleSlots> {
}
declare const _RippleProps: {
    /** Color variant, accepts any of the main colors described in Tailwind config. 
     * 
     * Default: "primary" */
    color?: string;
    /** No hover variant.
     * 
     * Default: false
     */
    noHover?: boolean;
} & SvelteAllProps;
declare const _RippleEvents: {};
declare const _RippleSlots: {
    default: {};
};
export declare type RippleProps = typeof _RippleProps;
export declare type RippleEvents = typeof _RippleEvents;
export declare type RippleSlots = typeof _RippleSlots;
export {};
