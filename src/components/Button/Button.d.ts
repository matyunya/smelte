import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/**
 * Buttons allow users to take actions, and make choices, with a single tap. 
 * 
 * props: value, outlined, text, block, disabled, icon, small, light, dark, flat,
 * iconClass, color, href, fab, remove, add, replace, classes, basicClasses, outlinedClasses, 
 * textClasses, iconClasses, fabClasses, smallClasses, disabledClasses, elevationClasses
*/
export default class Button extends SvelteTypedComponent<ButtonProps, ButtonEvents, ButtonSlots> {
}
declare const _ButtonProps: {
    /** Bound boolean value.
     * 
     * Default: false */
    value?: boolean;
    /** Outlined variant.
     * 
     * Default: false */
    outlined?: boolean;
    /** Text button variant (transparent background). 
     * 
     * Default: false*/
    text?: boolean;
    /** Full block width button. 
     * 
     * Default: false*/
    block?: boolean;
    /** Disabled state. 
     * 
     * Default: false */
    disabled?: boolean;
    /** Icon button variant. 
     * 
     * Default: null */
    icon?: string|null;
    /** Smaller size. 
     * 
     * Default: false */
    small?: boolean;
    /** Lighter variant. 
     * 
     * Default: false */
    light?: boolean;
    /** Darker variant. 
     * 
     * Default: false */
    dark?: boolean;
    /** Flat variant. 
     * 
     * Default: false */
    flat?: boolean;
    /** List of classes to pass down to icon(blank space separated). 
     * 
     * Default: empty string */
    iconClass?: string;
    /** Color variant, accepts any of the main colors described in Tailwind config. 
     * 
     * Default: "primary" */
    color?: string;
    /** if href is supplied, button is a link
     * 
     * Default: null
     */
    href?: string|null;
    /** Fab variant. 
     * 
     * Default: false */
    fab?: boolean;
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
    
    classes?: string;
    basicClasses?: string|((s:string)=>string);
    outlinedClasses?: string|((s:string)=>string);
    textClasses?: string|((s:string)=>string);
    iconClasses?: string|((s:string)=>string);
    fabClasses?: string|((s:string)=>string);
    smallClasses?: string|((s:string)=>string);
    disabledClasses?: string|((s:string)=>string);
    elevationClasses?: string|((s:string)=>string);
} & SvelteAllProps;
declare const _ButtonEvents: {
    click: MouseEvent;
    mouseover: MouseEvent;
    '*': any;
};
declare const _ButtonSlots: {
    default: {};
};
export declare type ButtonProps = typeof _ButtonProps;
export declare type ButtonEvents = typeof _ButtonEvents;
export declare type ButtonSlots = typeof _ButtonSlots;
export {};
