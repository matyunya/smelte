import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/**
 * Selection controls allow the user to select options.
 * 
 * Props: value, label, color, checked, disabled, classes, labelClasses
 * */
export default class Checkbox extends SvelteTypedComponent<CheckboxProps, CheckboxEvents, CheckboxSlots> {
}
declare const _CheckboxProps: {
    /** Input value. See also prop "checked".
     * 
     * Default: empty string
    */
    value?: string;
    /** For bind:group handling. Adds/remove prop "value" to the array when checked changes */
    group?: string[];
    /** Input label	
     * 
     * Default: empty string
     */
    label?: string;
    /** Color variant, accepts any of the main colors described in Tailwind config.
     * 
     * Default: "primary"
     */
    color?: string;
    /** Checked state.
     * 
     * Default; false
     */
    checked?: boolean;
    /** Disabled state.
     * 
     * Default: false
     */
    disabled?: boolean;
    /** Classes to pass down to checkbox wrapper.
     * 
     * Default: "inline-flex items-center mb-2 cursor-pointer z-10"
     */
    classes?: string|((s:string)=>string);
    labelClasses?: (i: any) => any;
} & SvelteAllProps;
declare const _CheckboxEvents: {
    change: Event;
};
declare const _CheckboxSlots: {
    label: {};
};
export declare type CheckboxProps = typeof _CheckboxProps;
export declare type CheckboxEvents = typeof _CheckboxEvents;
export declare type CheckboxSlots = typeof _CheckboxSlots;
export {};
