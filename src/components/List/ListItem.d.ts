import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
export default class ListItem extends SvelteTypedComponent<ListItemProps, ListItemEvents, ListItemSlots> {
    get item(): any;
    get items(): any[];
    get level(): any;
}
export interface ListItemBase{
    /** Item id.
     * 
     * Default: empty string
     */
    id?: string;
    /** href */
    to?: string;
    /** Selected item value.
     * 
     * Default: empty string
    */
   value?: string;
   /** Item text.
    * 
    * Default: empty string
    */
   text?: string;
}
declare const _ListItemProps: {
    /** Prepend item with icon.
     * 
     * Default: empty string
     */
    icon?: string;
    /** Item subheading.
     * 
     * Default: empty string
     */
    subheading?: string;
    /** Disabled state. Bindable.
     * 
     * Default: false
     */
    disabled?: boolean;
    /** Dense variant.
     * 
     * Default: false
     */
    dense?: boolean;
    /** Is selected. Bindable.
     * 
     * Default: false
     */
    selected?: boolean;
    /** Tab index.
     * 
     * default: null
     */
    tabindex?: number|null;
    /** Selected item classes */
    selectedClasses?: string|((s:string)=>string);
    /** Subheading item classes */
    subheadingClasses?: string|((s:string)=>string);
    
    /** Item wrapper classes */
    classes?: string|((s:string)=>string);
    /** --not implemented-- Is navigation item
     */
    navigation?:boolean
} & SvelteAllProps;
declare const _ListItemEvents: {
    click: MouseEvent;
};
declare const _ListItemSlots: {
    default: {};
};
export declare type ListItemProps = (typeof _ListItemProps) & ListItemBase;
export declare type ListItemEvents = typeof _ListItemEvents;
export declare type ListItemSlots = typeof _ListItemSlots;
export {};
