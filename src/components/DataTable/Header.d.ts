import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
import { DataTableColumn } from './DataTable';
/** Header component for the Data Table */
export default class Header extends SvelteTypedComponent<HeaderProps, HeaderEvents, HeaderSlots> {
}
declare const _HeaderProps: {
    /** String of root element classes. */
    classes?: string|((s:string)=>string);
    /** Column information */
    column?: DataTableColumn<{[key:string]:any}>;
    /** Sort Ascending state. Bindable */
    asc?: boolean;
    sortBy?: DataTableColumn<{[key:string]:any}>|boolean;
    sortable?: boolean;
    editing?: boolean;
} & SvelteAllProps;
declare const _HeaderEvents: {};
declare const _HeaderSlots: {};
export declare type HeaderProps = typeof _HeaderProps;
export declare type HeaderEvents = typeof _HeaderEvents;
export declare type HeaderSlots = typeof _HeaderSlots;
export {};
