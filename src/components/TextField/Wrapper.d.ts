import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
export default class Wrapper extends SvelteTypedComponent<WrapperProps, WrapperEvents, WrapperSlots> {
}
declare const _WrapperProps: {
    /** Error variant.
     * 
     * Default: false
     */
    error?: boolean;
    /** Select variant.
     * 
     * Default: false
     */
    select?: boolean;
    /** Autocomplete variant.
     * 
     * Default: false
     */
    autocomplete?: boolean;
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
declare const _WrapperEvents: {
    [evt: string]: CustomEvent<any>;
};
declare const _WrapperSlots: {
    default: {};
};
export declare type WrapperProps = typeof _WrapperProps;
export declare type WrapperEvents = typeof _WrapperEvents;
export declare type WrapperSlots = typeof _WrapperSlots;
export {};
