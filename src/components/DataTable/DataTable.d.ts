import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
import { DataTableSortFunction } from './sort';
/** A Data Table component visualizes data in a strucured form */
export default class DataTable<DataRow extends {[key:string]:any}> extends SvelteTypedComponent<DataTableProps<DataRow> & SvelteAllProps, DataTableEvents, DataTableSlots> {
}

export interface DataTableColumn<DataRow> {
    /** The label of the column. If empty, 'field' is shown  */
    label?: string;
    /** The column to be shown. Can supply 'value' function instead */
    field?: string;
    class?:string;
    /** Derive a cell from data input 
     * -- Warning -- uses unsafe svelte-@html-method, might be vulnerable to XSS attacks. See [svelte.dev/tutorial/html-tags](https://svelte.dev/tutorial/html-tags)
    */
    value?:(v:DataRow)=>any,
    /** A component to be shown in column.
     * 
     * Default: undefined */
    component?: any,
    /** Derive props to be passed to component.
     * 
     * Default: () => {} */
    componentProps?: (v: DataRow) => {[key: string]: any},
    /** Cells are Editable. Default: false */
    editable?: boolean,
    /** If editable is true and textarea is true, edit fiels is textarea (text in more than one row)
     * 
     * Default: false
     */
    textarea?: boolean,
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
    /** List of classes to remove from the component (blank space separated).
     * 
     * Default: empty string
     */
    headerRemove?: string;
    /** List of classes to add to the component (blank space separated).
     * 
     * Default: empty string
     */
    headerAdd?: string;
    /** List of classes to replace in the component.
     * 
     * Default: {}
     */
    headerReplace?: {[key:string]:string};
    /** Sets if sort arrow should be shown after header label.
     * 
     * Default: false
     */
    iconAfter?: boolean,
    /** Allow sorting by this column. 
     * 
     * Default: true */
    sortable?:boolean
}
export interface DataTableProps<DataRow extends {[key:string]:any}>{
    /** The input data to show
     * 
     * Default: []
     */
    data?: DataRow[];
    /** The column labels. "field" should match the keys of data.
     * 
     * Default: []
     */
    columns?: DataTableColumn<DataRow>[];
    /** Page state. Can be bound.
     * 
     * Default: 1
     */
    page?: number;
    /** Custom sort function for column headers */
    sort?: DataTableSortFunction<DataRow>;
    /** How many items to show per page.
     * 
     * Default 10
     */
    perPage?: number;
    /** Options for showing items per page.
     * 
     * Default [10, 20, 50]
     */
    perPageOptions?: number[];
    /** Sort Ascending state. Bindable */
    asc?: boolean;
    /** Table is loading state. Bindable. */
    loading?: boolean;
    /** Disable showing loading progress. 
     * 
     * Default: false
     */
    hideProgress?: boolean;
    /** Global switch, if editing is allowed.
     *  
     * Default: true   
     */
    editable?: boolean;
    /** Global switch for sortability.
     * 
     * Default: true
     */
    sortable?: boolean;
    /** Pagination wanted.
     * 
     * Defaul: true
     */
    pagination?: boolean;
    /** Should scroll to top on page change.
     * 
     * Default: false
     */
    scrollToTop?: boolean;
    
    /* todo: add example on how to use this */ 
    headerClasses?: (i: string) => string;
    paginationClasses?: (i: string) => string;
    editableClasses?: (i: string) => string;
    /**
     * Options spread to paginator buttons
     * 
     * Default: {
     *  color: "gray",
     *  text: true,
     *  flat: true,
     *  dark: true,
     *  remove: "px-4 px-3",
     *  iconClasses: (c) => c.replace("p-4", ""),
     *  disabledClasses: (c) => c
     *      .replace("text-white", "text-gray-200")
     *      .replace("bg-gray-300", "bg-transparent")
     *      .replace("text-gray-700", ""),
     * }
     */
    paginatorProps?: object|null;
    /** Classes.
     * 
     * Default: "flex justify-between items-center text-gray-700 text-sm w-full h-16"
     */
    classes?: string|((s:string)=>string);
}
declare const _DataTableEvents: {
    update: any;
};
declare const _DataTableSlots: {
    header: {};
    item: {};
    pagination: {};
    footer: {};
};
//export declare type DataTableProps = typeof _DataTableProps;
export declare type DataTableEvents = typeof _DataTableEvents;
export declare type DataTableSlots = typeof _DataTableSlots;
export {};
