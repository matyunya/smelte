import { SvelteTypedComponent } from 'svelte-typed-component';
import {ButtonProps} from '../Button/Button';
/** Picker for DatePicker */
export default class Picker extends SvelteTypedComponent<PickerProps, PickerEvents, PickerSlots> {
}
declare const _PickerProps: {
    /** Open. Bindable.
     * 
     * Default: false
     */
    open?: boolean;
    /** Value. Bindable.
     * 
     * Default: null
     */
    value?: Date|null;
    /** Locale.
     * 
     * Default: "default"
     */
    locale?: string;
    todayClasses?: string;
    selectedClasses?: string;
    /** Close on select.
     * 
     * Default: false
     */
    closeOnSelect?: boolean;
    /** Dense variant.
     * 
     * Default: undefined
     */
    dense?: boolean;
    paginatorProps?: ButtonProps
};
declare const _PickerEvents: {};
declare const _PickerSlots: {};
export declare type PickerProps = typeof _PickerProps;
export declare type PickerEvents = typeof _PickerEvents;
export declare type PickerSlots = typeof _PickerSlots;
export {};
