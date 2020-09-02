import { SvelteTypedComponent } from 'svelte-typed-component';
/** Date picker component.
 * 
 * Props: label, open defaultIcon, value, locale, todayClasses, selectedClasses, 
 * closeOnSelect, appendClasses, dense
 * 
 * No Slots.
 */
export default class DatePicker extends SvelteTypedComponent<DatePickerProps, DatePickerEvents, DatePickerSlots> {
}
declare const _DatePickerProps: {
    /** Label.
     * 
     * Default: "Date"
     */
    label?: string;
    /** Open. Bindable.
     * 
     * Default: false
     */
    open?: boolean;
    /** Default icon for date button.
     * 
     * Default: "date_range"
     */
    defaultIcon?: string;
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
    /** Close on select variant.
     * 
     * Default: false
     */
    closeOnSelect?: boolean;
    appendClasses?: (i: string) => string;
    /** Dense variant.
     * 
     * Default: false
     */
    dense?: boolean;
};
declare const _DatePickerEvents: {
    change: any;
};
declare const _DatePickerSlots: {};
export declare type DatePickerProps = typeof _DatePickerProps;
export declare type DatePickerEvents = typeof _DatePickerEvents;
export declare type DatePickerSlots = typeof _DatePickerSlots;
export {};
