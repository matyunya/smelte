import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
export default class Icon extends SvelteTypedComponent<IconProps, IconEvents, IconSlots> {
}
declare const _IconProps: {
    /** Small variant
     * 
     * Default: false
     */
    small?: boolean;
    /** Extra small variant
     * 
     * Default: false
     */
    xs?: boolean;
    /** Reverse variant
     * 
     * Default: false
     */
    reverse?: boolean;
    /** Tipped variant (rotated 90 degrees)
     * 
     * Default: false
    */
    tip?: boolean;
    /** Color 
     * 
     * Default: "default"
     */
    color?: string;
} & SvelteAllProps;
declare const _IconEvents: {
    click: MouseEvent;
};
declare const _IconSlots: {
    default: {};
};
export declare type IconProps = typeof _IconProps;
export declare type IconEvents = typeof _IconEvents;
export declare type IconSlots = typeof _IconSlots;
export {};
