import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
import { ListItemBase } from '../List/ListItem';

export interface TreeViewListItem extends ListItemBase{
    /** Hide arrow Icon */
    hideArrow?: boolean,
    /** Sub-tree items */
    items?: TreeViewListItem[]
}
/** A tree view widget presents a hierarchical list.
 * 
 * Props: items, level, showExpandIcon, expandIcon, selectable, selected, selectedClasses
 * 
 * Slots: default
 */
export default class Treeview extends SvelteTypedComponent<TreeviewProps, TreeviewEvents, TreeviewSlots> {
    get value(): string;
    get text(): string;
    get dense(): boolean;
    get navigation(): boolean;
    get select(): boolean;
}
declare const _TreeviewProps: {
    /** Items
     * 
     * Default: []
     */
    items?: TreeViewListItem[];
    /** Subtree level.
     * 
     * Default: 0
     */
    level?: number;
    /** Show expand icon.
     * 
     * Default: true
     */
    showExpandIcon?: boolean;
    /** Expand Icon.
     * 
     * Default: "arrow_right"
     */
    expandIcon?: string;
    /** Selectable.
     * 
     * Default: true
     */
    selectable?: boolean;
    /** Selected item.
     * 
     * Default: null
     */
    selected?: TreeViewListItem|null;
    /** Selected classes
     * 
     * Default: "bg-primary-trans"
     */
    selectedClasses?: string|((s:string)=>string);
} & SvelteAllProps;
declare const _TreeviewEvents: {
    click: any;
    select: any;
} & {
    [evt: string]: CustomEvent<any>;
};
declare const _TreeviewSlots: {
    default: {};
};
export declare type TreeviewProps = typeof _TreeviewProps;
export declare type TreeviewEvents = typeof _TreeviewEvents;
export declare type TreeviewSlots = typeof _TreeviewSlots;
export {};
