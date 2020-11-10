import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
import { quadOut, quadIn } from "svelte/easing";
/** Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn’t interrupt the user experience, and they don’t require user input to disappear.
 * 
 * Frequency
 *   Only one snackbar may be displayed at a time.
 * 
 * Actions
 *   A snackbar can contain a single action. Because they disappear automatically, the action shouldn’t be “Dismiss” or “Cancel.”
 * 
 * Props: value, timeout, inProps, outProps, color, text, top, bottom, right, left
 * noAction, hash, classes
 * 
 * Slots: default, action
*/
export default class Snackbar extends SvelteTypedComponent<SnackbarProps, SnackbarEvents, SnackbarSlots> {
}
declare const _SnackbarProps: {
    /** Value. Bindable.
     * 
     * Default: false
     */
    value?: boolean;
    /** Timeout. How long show snackbar in milliseconds. If timeout=0, a "close" button is shown. 
     * 
     * Default: 2000
    */
    timeout?: number;
    /** In-animation props. "Scale"-Animation */
    inProps?: {
        delay?: number;
        duration?: number;
        easing?: typeof quadIn;
        start?: number;
        opacity?: number;
    }
    /** Out-animation props. "Fade"-Animation */
    outProps?: {
        duration?: number;
        easing?: typeof quadOut;
        delay?: number;
    };
    /** Color variant, accepts any of the main colors described in Tailwind config. 
     * 
     * Default: "gray" */
    color?: string;
    /** Text Color variant, accepts any of the main colors described in Tailwind config. 
     * 
     * Default: "white" */
    text?: string;
    /** Top variant.
     * 
     * Default: false
     */
    top?: boolean;
    /** Bottom variant.
     * 
     * Default: true
     */
    bottom?: boolean;
    /** Right variant.
     * 
     * Default: false
     */
    right?: boolean;
    /** Left variant.
     * 
     * Default: false
     */
    left?: boolean;
    /** No action variant.
     * 
     * Default: true
    */
    noAction?: boolean;
    /** Hash. Bindable. */
    hash?: string|boolean|null;
    classes?: string|((s:string)=>string);
} & SvelteAllProps;
declare const _SnackbarEvents: {
    finish:Event
};
declare const _SnackbarSlots: {
    default: {};
    action: {};
};
export declare type SnackbarProps = typeof _SnackbarProps;
export declare type SnackbarEvents = typeof _SnackbarEvents;
export declare type SnackbarSlots = typeof _SnackbarSlots;
export {};
