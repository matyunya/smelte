import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/** Text fields let users enter and edit text.
 * 
 * Props: outlined, value, label, placeholder,
 * hint, error, append, prepend, persitentHint, textarea,
 * rows, select, dense, autocomplete, noUnderline, 
 * appendReverse, prependReverse, color, bgColor,
 * iconClass, disabled, add, remove, replace, inputClasses, classes,
 * appendClasses, prependClasses, extend, focused
 * 
 * Slots: label, append, prepend
 */
export default class TextField extends SvelteTypedComponent<TextFieldProps, TextFieldEvents, TextFieldSlots> {
}
declare const _TextFieldProps: {
    /** Outlined variant.
     * 
     * Default: false
     */
    outlined?: boolean;
    /** Input value. Bindable.
     * 
     * Default: null
     */
    value?: string|null;
    /** Input label.
     * 
     * Default: empty string
     */
    label?: string;
    /** Placeholder.
     * 
     * Default: empty string
     */
    placeholder?: string;
    /** Hint text appearing under the input.
     * 
     * Default: empty string
     */
    hint?: string;
    /** Error text under the input.
     * 
     * Default: false
     */
    error?: string|boolean;
    /** Append icon name.
     * 
     * Default: empty string
     */
    append?: string;
    /** Prepend icon name.
     * 
     * Default: empty string
     */
    prepend?: string;
    /** Always show hint, not only on focus.
     * 
     * Default: false
     */
    persistentHint?: boolean;
    /** Whether text field is textarea.
     * 
     * Default: false
     */
    textarea?: boolean;
    /** Rows count for textarea.
     * 
     * Default: 5
     */
    rows?: number;
    /** Whether text field is select.
     * 
     * Default: false
     */
    select?: boolean;
    /** Dense variant.
     * 
     * Default: false
     */
    dense?: boolean;
    /** Whether select field is autocomplete.
     * 
     * Default: false
     */
    autocomplete?: boolean;
    /** Hide focus underline element.
     * 
     * Default: false
     */
    noUnderline?: boolean;
    /** Reverse appended icon.
     * 
     * Default: false
     */
    appendReverse?: boolean;
    /** Reverse prepended icon
     * 
     * Default: false
     */
    prependReverse?: boolean;
    /** Color variant, accepts any of the main colors described in Tailwind config.
     * 
     * Default: "primary"
     */
    color?: string;
    /** Background color to match for outlined elevated label.
     * 
     * Default: "white"
     */
    bgColor?: string;
    /** Classes to pass down to icon component.
     * 
     * Default: empty string
     */
    iconClass?: string;
    /** Disabled variant.
     * 
     * Default: false
     */
    disabled?: boolean;
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
    inputClasses?: string|((s:string)=>string);
    classes?: string|((s:string)=>string);
    appendClasses?: string|((s:string)=>string);
    prependClasses?: string|((s:string)=>string);
    extend?: () => void;
    /** Focused. Bindable.
     * 
     * Default: false
     */
    focused?: boolean;
} & SvelteAllProps;
declare const _TextFieldEvents: {
    blur: FocusEvent;
    change: Event;
    input: Event;
    click: MouseEvent;
    focus: FocusEvent;
} & {
    [evt: string]: CustomEvent<any>;
};
declare const _TextFieldSlots: {
    label: {};
    append: {};
    prepend: {};
};
export declare type TextFieldProps = typeof _TextFieldProps;
export declare type TextFieldEvents = typeof _TextFieldEvents;
export declare type TextFieldSlots = typeof _TextFieldSlots;
export {};
