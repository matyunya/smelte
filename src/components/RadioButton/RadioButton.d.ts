import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/** Radio Button Selection Control
 * 
 * Props: selected, label, color, disabled,
 * name, value, classes, labelClasses
 * 
 * Slots: label
 */
export default class RadioButton extends SvelteTypedComponent<RadioButtonProps, RadioButtonEvents, RadioButtonSlots> {
}
declare const _RadioButtonProps: {
    /** Selected state. If selected===value then radiobutton is checked. Bindable
     * 
     * Default: ""
     */
    selected?: string;
    /** Text for the label.
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
    /** Name of the input field.
     * 
     * Default: empty string
     */
    name?: string;
    /** Input value */
    value?: string;
    classes?: string|((s:string)=>string);
    labelClasses?: (i: string) => string;
    small?: boolean;
} & SvelteAllProps;
declare const _RadioButtonEvents: {};
declare const _RadioButtonSlots: {
    label: {};
};
export declare type RadioButtonProps = typeof _RadioButtonProps;
export declare type RadioButtonEvents = typeof _RadioButtonEvents;
export declare type RadioButtonSlots = typeof _RadioButtonSlots;
export {};
