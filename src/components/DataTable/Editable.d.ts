import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
import { DataTableColumn } from './DataTable';
export default class Editable extends SvelteTypedComponent<EditableProps, EditableEvents, EditableSlots> {
}
declare const _EditableProps: {
    item?: object;
    column?: DataTableColumn<{[key:string]:any}>;
    editing?: boolean;
    classes?: string|((s:string)=>string);
} & SvelteAllProps;
declare const _EditableEvents: {
    change: any;
};
declare const _EditableSlots: {
    default: {};
};
export declare type EditableProps = typeof _EditableProps;
export declare type EditableEvents = typeof _EditableEvents;
export declare type EditableSlots = typeof _EditableSlots;
export {};
