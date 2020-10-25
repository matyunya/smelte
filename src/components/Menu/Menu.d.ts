import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
import { ListItemBase } from '../List/ListItem';
import { ListProps } from '../List/List';
export default class Menu extends SvelteTypedComponent<MenuProps, MenuEvents, MenuSlots> {
}
declare const _MenuProps: {
    /** Items to be shown.
     * 
     * Default: []
     */
    items?: ListItemBase[];
    /** Open. Bindable.
     * 
     * Default: false
     */
    open?: boolean;
    /** Selected value of the list. Bindable
     * 
     * Default: null
     */
    value?: string|null;
    classes?: string|((s:string)=>string);
    listClasses?: string|((s:string)=>string);
    /** Additional props for the list component */
    listProps?: ListProps;
} & SvelteAllProps;
declare const _MenuEvents: {
    click: MouseEvent;
    change: any;
};
declare const _MenuSlots: {
    activator: {};
    menu: {};
};
export declare type MenuProps = typeof _MenuProps;
export declare type MenuEvents = typeof _MenuEvents;
export declare type MenuSlots = typeof _MenuSlots;
export {};
