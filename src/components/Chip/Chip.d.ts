import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/** Chips are compact elements that represent an input, attribute, or action.
 * 
 * Props: removable, icon, outlined, selected, selectable, color, 
 * remove, add, replace
 */
export default class Chip extends SvelteTypedComponent<ChipProps, ChipEvents, ChipSlots> {
}
declare const _ChipProps: {
    /** If true adds a x-marked button to remove.
     * 
     * Default: false
     */
    removable?: boolean;
    /** Add an icon.
     * 
     * Default: empty string
     */
    icon?: string;
    /** Outlined variant.
     * 
     * Default: false
     */
    outlined?: boolean;
    /** Selected state. Can be bound to.
     * 
     * Default: false
     */
    selected?: boolean;
    /** Selectable variant.
     * 
     * Default: true
     */
    selectable?: boolean;
    /** Color variant, accepts any of the main colors described in Tailwind config. 
     * 
     * Default: "primary" */
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
} & SvelteAllProps;
declare const _ChipEvents: {
    click: MouseEvent;
};
declare const _ChipSlots: {
    default: {};
};
export declare type ChipProps = typeof _ChipProps;
export declare type ChipEvents = typeof _ChipEvents;
export declare type ChipSlots = typeof _ChipSlots;
export {};
