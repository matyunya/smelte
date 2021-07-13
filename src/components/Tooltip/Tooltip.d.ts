import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/** Tooltips display informative text when users hover over.
 * Use "activator" slot for element to be hovered, "default" slot for the message
 *
 * Props: classes, show, timeout, delayHide, delayShow
 *
 * Slots: activator, default
 */
export default class Tooltip extends SvelteTypedComponent<TooltipProps, TooltipEvents, TooltipSlots> {
}
declare const _TooltipProps: {
    /** Classes.
     *
     * Default: "tooltip whitespace-nowrap text-xs absolute mt-2 bg-gray-600 text-gray-50 rounded md:px-2 md:py-2 py-4 px-3 z-30"
     */
    classes?: string|((s:string)=>string);
    /** Show tooltip. Bindable.
     *
     * Default: false
     */
    show?: boolean;
    /** Timeout */
    timeout?: number|null;
    /** Delay hide tooltip in milliseconds.
     *
     * Default: 100
     */
    delayHide?: number;
    /** Delay show tooltip in milliseconds.
     *
     * Default: 100
     */
    delayShow?: number;
} & SvelteAllProps;
declare const _TooltipEvents: {
    mouseenter: MouseEvent;
    mouseleave: MouseEvent;
    mouseover: MouseEvent;
    mouseout: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
};
declare const _TooltipSlots: {
    activator: {};
    default: {};
};
export declare type TooltipProps = typeof _TooltipProps;
export declare type TooltipEvents = typeof _TooltipEvents;
export declare type TooltipSlots = typeof _TooltipSlots;
export {};
