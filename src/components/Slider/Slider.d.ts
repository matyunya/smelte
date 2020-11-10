import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/** Sliders allow users to make selections from a range of values.
 * 
 * Props: value, label, color, disabled, min, max, step, classes
 */
export default class Slider extends SvelteTypedComponent<SliderProps, SliderEvents, SliderSlots> {
}
declare const _SliderProps: {
    /** Value.
     * 
     * Default: 0
     */
    value?: number;
    /** Label.
     * 
     * Default: empty string
     */
    label?: string;
    /** Color variant, accepts any of the main colors described in Tailwind config. 
     * 
     * Default: "primary" */
    color?: string;
    /** Disabled variant.
     * 
     * Default: false
     */
    disabled?: boolean;
    /** Minimum value.
     * 
     * Default: 0
     */
    min?: number;
    /** Maximum value.
     * 
     * Default: 100
     */
    max?: number;
    /** Step
     * 
     * Default: null
     */
    step?: number|null;
    classes?: string|((s:string)=>string);
} & SvelteAllProps;
declare const _SliderEvents: {
    change: Event;
};
declare const _SliderSlots: {};
export declare type SliderProps = typeof _SliderProps;
export declare type SliderEvents = typeof _SliderEvents;
export declare type SliderSlots = typeof _SliderSlots;
export {};
