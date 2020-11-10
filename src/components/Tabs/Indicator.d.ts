import { SvelteTypedComponent } from 'svelte-typed-component';
/** Indicator.
 * 
 * Props: width, left, color
 * 
 * No Slots.
 */
export default class Indicator extends SvelteTypedComponent<IndicatorProps, IndicatorEvents, IndicatorSlots> {
}
declare const _IndicatorProps: {
    /** Width.
     * 
     * Default: 0
     */
    width?: number;
    /** Left.
     * 
     * Default: 0
     */
    left?: number;
    /** Color.
     * 
     * Default: "primary"
     */
    color?: string;
};
declare const _IndicatorEvents: {
    [evt: string]: CustomEvent<any>;
};
declare const _IndicatorSlots: {};
export declare type IndicatorProps = typeof _IndicatorProps;
export declare type IndicatorEvents = typeof _IndicatorEvents;
export declare type IndicatorSlots = typeof _IndicatorSlots;
export {};
