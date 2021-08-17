import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/** Select components are used for collecting user provided information from a list of options.
 * One may bind to a select via on:change event. 
 * 
 * Props: items, value, label, selectedLabel, color, outlined, placeholder, 
 * hint, error, append, dense, persistentHint, noUnderline, showList, classes, 
 * optionsClasses, inputWrapperClasses, apendClasses, labelClasses, inputClasses,
 * prependClasses, listClasses, selectedClasses, itemClasses, add, remove, replace
 * 
 * Slots: select, options
 * */
export default class Select extends SvelteTypedComponent<SelectProps, SelectEvents, SelectSlots> {
    get text(): string;
}
declare const _SelectProps: {
    /** Array of Items
     * 
     * Default: []
     */
    items?: ({value:string, text: string}|string)[];
    /** Selected Value. Bindable
     * 
     * Default: empty string
     */
    value?: string;
    /** Label of the TextField
     * 
     * Default: empty string
     */
    label?: string;
    /** Selected Label. Bindable.
     * 
     * Default: undefined
     */
    selectedLabel?: string;
    /** Color variant, accepts any of the main colors described in Tailwind config. 
     * 
     * Default: "primary" */
    color?: string;
    /** Outlined variant.
     * 
     * Default: false
     */
    outlined?: boolean;
    /** Placeholder Text.
     * 
     * Default: empty string
     */
    placeholder?: string;
    /** Hint 
     * 
     * Default: empty string
    */
    hint?: string;
    /** Error variant.
     * 
     * Default: false
     */
    error?: boolean;
    /** Append Icon.
     * 
     * Default: "arrow_drop_down"
     */
    append?: string;
    /** Dense variant.
     * 
     * Default: false
     */
    dense?: boolean;
    /** Persisten Hint variant.
     * 
     * Default: false
     */
    persistentHint?: boolean;
    /** Autocomplete variant.
     * 
     * Default: false
     */
    autocomplete?: boolean;
    /** No underline variant.
     * 
     * Default: false
     */
    noUnderline?: boolean;
    /** Show List. Bindable.
     * 
     * Default: false
     */
    showList?: boolean;
    classes?: string|((s:string)=>string);
    optionsClasses?: string|((s:string)=>string);
    inputWrapperClasses?: string|((s:string)=>string);
    appendClasses?: string|((s:string)=>string);
    labelClasses?: string|((s:string)=>string);
    inputClasses?: string|((s:string)=>string);
    prependClasses?: string|((s:string)=>string);
    listClasses?: string|((s:string)=>string);
    selectedClasses?: string|((s:string)=>string);
    itemClasses?: string|((s:string)=>string);
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
} & SvelteAllProps;
declare const _SelectEvents: {
    click: any;
    change: any;
};
declare const _SelectSlots: {
    select: {};
    options: {};
};
export declare type SelectProps = typeof _SelectProps;
export declare type SelectEvents = typeof _SelectEvents;
export declare type SelectSlots = typeof _SelectSlots;
export {};
