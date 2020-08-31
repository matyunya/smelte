import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
import { quadOut } from "svelte/easing";
/** Hint for TextField component
 * 
 * 
 */
export default class Hint extends SvelteTypedComponent<HintProps, HintEvents, HintSlots> {
}
declare const _HintProps: {
    /** Error variant.
     * 
     * Default: false
     */
    error?: boolean;
    /** Hint text.
     * 
     * Default: empty string
     */
    hint?: string;
    /** List of classes to remove from the component (blank space separated).
     * 
     * Default: empty string
     */
    remove?: string;
    /** List of classes to add to the component (blank space separated).
     * 
     * Default: empty string
     */
    add?: string;
    /** List of classes to replace in the component.
     * 
     * Default: {}
     */
    replace?: {[key:string]:string};
    /** Fly transition props.
     * 
     * Default: { y: -10, duration: 100, easing: quadOut }
     */
    transitionProps?: {
        y?: number;
        duration?: number;
        easing?: typeof quadOut;
        delay?: number;
        x?: number;
        opacity?: number;
    };
} & SvelteAllProps;
declare const _HintEvents: {
    [evt: string]: CustomEvent<any>;
};
declare const _HintSlots: {};
export declare type HintProps = typeof _HintProps;
export declare type HintEvents = typeof _HintEvents;
export declare type HintSlots = typeof _HintSlots;
export {};
