import { SvelteTypedComponent } from 'svelte-typed-component';
import { quadOut, quadIn } from "svelte/easing";
import {fade} from 'svelte/transition'
export default class Scrim extends SvelteTypedComponent<ScrimProps, ScrimEvents, ScrimSlots> {
}
declare const _ScrimProps: {
    /** Opacity, between 0 and 1.
     * 
     * Default: .5
     */
    opacity?: number;
    /** fade in props
     * 
     * Default: { duration: 200, easing: quadIn }
     */
    inProps?: {
        delay?:number;
        duration: number;
        easing: typeof quadIn;
    };
    /** fade out props   
     *  
     * Default: { duration: 200, easing: quadOut }
     */
    outProps?: {
        delay?:number;
        duration: number;
        easing: typeof quadOut;
    };
};
declare const _ScrimEvents: {
    click: MouseEvent;
};
declare const _ScrimSlots: {};
export declare type ScrimProps = typeof _ScrimProps;
export declare type ScrimEvents = typeof _ScrimEvents;
export declare type ScrimSlots = typeof _ScrimSlots;
export {};
