import { SvelteTypedComponent } from 'svelte-typed-component';
/** Circular Progress Indicator
 * 
 * Props: progress, color, width, size
 */
export default class ProgressCircular extends SvelteTypedComponent<ProgressCircularProps, ProgressCircularEvents, ProgressCircularSlots> {
}
declare const _ProgressCircularProps: {
    /** Progress. If not is provided it becomes indefinite variant
     * 
     * Default: null
     */
    progress?: number|null;
    /** Color variant, accepts any of the main colors described in Tailwind config. 
     * 
     * Default: "primary" */
    color?: string;
    /** Width
     * 
     * Default: 3
     */
    width?: number;
    /** Size:
     * 
     * Default: 70
     */
    size?: number;
};
declare const _ProgressCircularEvents: {};
declare const _ProgressCircularSlots: {};
export declare type ProgressCircularProps = typeof _ProgressCircularProps;
export declare type ProgressCircularEvents = typeof _ProgressCircularEvents;
export declare type ProgressCircularSlots = typeof _ProgressCircularSlots;
export {};
