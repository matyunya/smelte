import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
import { ListItemBase } from './ListItem';


export default class List extends SvelteTypedComponent<ListProps, ListEvents, ListSlots> {
    get level(): any;
    get text(): string;
    get item(): {};
    get to(): any;
    get selectedClasses(): (i: string) => string;
    get itemClasses(): (i: string) => string;
}
declare const _ListProps: {
    items?: ListItemBase[];
    /** Selected item value, Bindable.
     * 
     * Default: empty string
     */
    value?: string;
    /** Dense variant.
     * 
     * Default: false
     */
    dense?: boolean;
    /** Is dropdown select.
     * 
     * Default false
     */
    select?: boolean;
    classes?: string|((s:string)=>string);
    /** -not implemented - Is navigation drawer list	 */
    navigation?:boolean;
} & SvelteAllProps;
declare const _ListEvents: {
    change: any;
    click: any;
};
declare const _ListSlots: {
    item: {
        item: ListItemBase;
        dense: boolean;
        value: string;
    };
    items: {
        dense: boolean;
        value: string;
    };
};
export declare type ListProps = typeof _ListProps;
export declare type ListEvents = typeof _ListEvents;
export declare type ListSlots = typeof _ListSlots;
export {};
