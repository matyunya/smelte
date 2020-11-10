import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';


export default class Pagination extends SvelteTypedComponent<PaginationProps, PaginationEvents, PaginationSlots> {
}
declare const _PaginationProps: {
    /** String of root element classes. */
    classes?: string|((s:string)=>string);
    perPage?: number;
    page?: number;
    offset?: number;
    pagesCount?: number;
    perPageOptions?: number;
    scrollToTop?: boolean;
    /** Reference to table html element */
    table?: {scrollIntoView:(x:{behavior:"smooth"})=>void}|null;
    total?: number;
    /** See paginator props on DataTable */
    paginatorProps?: object|boolean;
} & SvelteAllProps;



declare const _PaginationEvents: {};
declare const _PaginationSlots: {};
export declare type PaginationProps = typeof _PaginationProps;
export declare type PaginationEvents = typeof _PaginationEvents;
export declare type PaginationSlots = typeof _PaginationSlots;
export {};
