import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/** Switch Selection Control
 * 
 * Props: value, label, color, disabled, trackClasses
 * thumbClasses, labelClasses, classes
 */
export default class Switch extends SvelteTypedComponent<SwitchProps, SwitchEvents, SwitchSlots> {
}
declare const _SwitchProps: {
    /** Input value. Bindable.
     * 
     * Default: false
     */
    value?: boolean;
    /** Input label.
     * 
     * Default: empty string
     */
    label?: string;
    /** Color variant, accepts any of the main colors described in Tailwind config.
     * 
     * Default: "primary"
     */
    color?: string;
    /** Disabled variant.
     * 
     * Default: false
     */
    disabled?: boolean;
    /** Track classes.
     * 
     * Default: "relative w-10 h-auto z-0 rounded-full overflow-visible flex items-center justify-center"
    */
    trackClasses?: string;
    /** Thumb classes.
     * 
     * Default: "rounded-full p-2 w-5 h-5 absolute elevation-3 duration-100"
    */
    thumbClasses?: string;
    /** Label classes.
     * 
     * Default: "pl-2 cursor-pointer"
     */
    labelClasses?: string;
    /** Classes to pass down to checkbox wrapper.
     * 
     * Default; `inline-flex items-center mb-2 cursor-pointer z-10` 
     */
    classes?: string;
} & SvelteAllProps;
declare const _SwitchEvents: {
    change: Event;
} & {
    [evt: string]: CustomEvent<any>;
};
declare const _SwitchSlots: {};
export declare type SwitchProps = typeof _SwitchProps;
export declare type SwitchEvents = typeof _SwitchEvents;
export declare type SwitchSlots = typeof _SwitchSlots;
export {};
