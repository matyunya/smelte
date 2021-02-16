import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
import { RadioButtonProps } from './RadioButton';
/** Radio Button Selection Control
 * 
 * Props: classes, items, selected, name, disabled, color, buttonClasses
 */
export default class RadioButtonGroup extends SvelteTypedComponent<RadioButtonGroupProps, RadioButtonGroupEvents, RadioButtonGroupSlots> {
}
declare const _RadioButtonGroupProps: {
    classes?: string|((s:string)=>string);
    /** Props for the Radio Button items */
    items?: (RadioButtonProps|any)[];
    /** Selected state. Bindable.
     * 
     * Default: empty string
     */
    selected?: string;
    name?: string;
    /** Disabled variant.
     * 
     * Default: false
     */
    disabled?: boolean;
    /** Color variant, accepts any of the main colors described in Tailwind config. 
     * 
     * Default: "primary" */
    color?: string;
    buttonClasses?: string|((s:string)=>string);
    small?: boolean;
} & SvelteAllProps;
declare const _RadioButtonGroupEvents: {};
declare const _RadioButtonGroupSlots: {
    default: {
        item: RadioButtonProps|any;
    };
};
export declare type RadioButtonGroupProps = typeof _RadioButtonGroupProps;
export declare type RadioButtonGroupEvents = typeof _RadioButtonGroupEvents;
export declare type RadioButtonGroupSlots = typeof _RadioButtonGroupSlots;
export {};
