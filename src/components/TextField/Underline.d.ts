import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/** Underline for TextField component */
export default class Underline extends SvelteTypedComponent<UnderlineProps, UnderlineEvents, UnderlineSlots> {
}
declare const _UnderlineProps: {
    /** No underline variant.
     * 
     * Default: false
     */
    noUnderline?: boolean;
    /** Outlined variant.
     * 
     * Default: false
     */
    outlined?: boolean;
    /** Focused variant:
     * 
     * Default: false
     */
    focused?: boolean;
    /** Error variant.
     * 
     * Default: false
     */
    error?: boolean;
    /** Color.
     * 
     * Default: "primary"
     */
    color?: string;
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
    lineClasses?: string|((s:string)=>string);
} & SvelteAllProps;
declare const _UnderlineEvents: {
    [evt: string]: CustomEvent<any>;
};
declare const _UnderlineSlots: {};
export declare type UnderlineProps = typeof _UnderlineProps;
export declare type UnderlineEvents = typeof _UnderlineEvents;
export declare type UnderlineSlots = typeof _UnderlineSlots;
export {};
