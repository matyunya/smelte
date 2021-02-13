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
    /** Track classes. Can be set directly or function to modify the default, eg. s=>s.replace("justify-center","justify-left").
     *
     * Default: "relative w-10 h-auto z-0 rounded-full overflow-visible flex items-center justify-center"
    */
    trackClasses?: string|((s:string)=>string);
    /** Thumb classes. Can be set directly or function to modify the default, eg. s=>s.replace("duration-100","duration-500").
     *
     * Default: "rounded-full p-2 w-5 h-5 absolute shadow duration-100"
    */
    thumbClasses?: string|((s:string)=>string);
    /** Label classes. Can be set directly or function to modify the default, eg. (s=>s + " w10").
     *
     * Default: "pl-2 cursor-pointer"
     */
    labelClasses?: string|((s:string)=>string);
    /** Classes to pass down to checkbox wrapper. Can be set directly or function to modify the default, eg. s=>s.replace("mb-2","mb-4").
     *
     * Default; `inline-flex items-center mb-2 cursor-pointer z-10`
     */
    classes?: string|((s:string)=>string);
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
