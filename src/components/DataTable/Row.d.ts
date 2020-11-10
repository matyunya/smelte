import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
import { DataTableColumn } from './DataTable';
export default class Row extends SvelteTypedComponent<RowProps, RowEvents, RowSlots> {
}
declare const _RowProps: {
    classes?: string;
    item?: {};
    columns?: DataTableColumn<{[key:string]:any[]}>;
    editing?: boolean;
    editable?: boolean;
    index?: number;
    editableClasses?: (i: string) => string;
} & SvelteAllProps;
declare const _RowEvents: {};
declare const _RowSlots: number;
export declare type RowProps = typeof _RowProps;
export declare type RowEvents = typeof _RowEvents;
export declare type RowSlots = typeof _RowSlots;
export {};
