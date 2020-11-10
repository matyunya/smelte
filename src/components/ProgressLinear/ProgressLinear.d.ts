import { SvelteTypedComponent } from 'svelte-typed-component';
/** Linear Progress Indicator
 * 
 * Props: app, progress, color
 */
export default class ProgressLinear extends SvelteTypedComponent<ProgressLinearProps, ProgressLinearEvents, ProgressLinearSlots> {
}
declare const _ProgressLinearProps: {
    /** class:fixed & class:z-50 wanted?
     * 
     * Default: false
     */
    app?: boolean;
    /** Progress. If not is provided it becomes indefinite variant.
     * 
     * Default: 0
    */
    progress?: number;
    /** Color variant, accepts any of the main colors described in Tailwind config. 
     * 
     * Default: "primary" */
    color?: string;
};
declare const _ProgressLinearEvents: {};
declare const _ProgressLinearSlots: {};
export declare type ProgressLinearProps = typeof _ProgressLinearProps;
export declare type ProgressLinearEvents = typeof _ProgressLinearEvents;
export declare type ProgressLinearSlots = typeof _ProgressLinearSlots;
export {};
