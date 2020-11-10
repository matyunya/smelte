import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/** Default Label for TextField */
export default class Label extends SvelteTypedComponent<LabelProps, LabelEvents, LabelSlots> {
}
declare const _LabelProps: {
    /** Focused variant.
     * 
     * Default: false
     */
    focused?: boolean;
    /** Error variant.
     * 
     * Default: false
     */
    error?: boolean;
    /** Outlined variant.
     * 
     * Default: false
     */
    outlined?: boolean;
    /** Label on top variant.
     * 
     * Default: false
     */
    labelOnTop?: boolean;
    /** Prepend variant.
     * 
     * Default: false
     */
    prepend?: boolean;
    /** Color.
     * 
     * Default: "primary"
     */
    color?: string;
    /** Background Color.
     * 
     * Default: "white"
     */
    bgColor?: string;
    /** Dense variant.
     * 
     * Default: false
     */
    dense?: boolean;
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
    labelClasses?: string|((s:string)=>string);
} & SvelteAllProps;
declare const _LabelEvents: {
    [evt: string]: CustomEvent<any>;
};
declare const _LabelSlots: {
    default: {};
};
export declare type LabelProps = typeof _LabelProps;
export declare type LabelEvents = typeof _LabelEvents;
export declare type LabelSlots = typeof _LabelSlots;
export {};
