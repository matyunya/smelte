import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/** Label component used by Checkbox */
export default class Label extends SvelteTypedComponent<LabelProps, LabelEvents, LabelSlots> {
}
declare const _LabelProps: {
    /** Classes to pass down to label wrapper.
     * 
     * Default: "pl-2 cursor-pointer 'text-gray-700 dark:text-gray-300'"
     */
    classes?: string|((s:string)=>string);
    /** Text of the label
     * 
     * Default: empty string
     */
    label?: string;
    /** Disabled state.
     * 
     * Default: false
     */
    disabled?: boolean;
    /** Classes to pass down to checkbox wrapper if disabled.
     * 
     * Default: "text-gray-500 dark:text-gray-600"
     */
    disabledClasses?: string|((s:string)=>string);
} & SvelteAllProps;
declare const _LabelEvents: {};
declare const _LabelSlots: {
    default: {};
};
export declare type LabelProps = typeof _LabelProps;
export declare type LabelEvents = typeof _LabelEvents;
export declare type LabelSlots = typeof _LabelSlots;
export {};
