import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
import { quadIn } from "svelte/easing";
/** Navigation drawers provide access to destinations in your app.
 * 
 * Props: right, persistent, elevation, show, classes, navClasses, borderClasses,
 * transitionProps
 */
export default class NavigationDrawer extends SvelteTypedComponent<NavigationDrawerProps, NavigationDrawerEvents, NavigationDrawerSlots> {
}
declare const _NavigationDrawerProps: {
    /** Put drawer to right side of screen.
     * 
     * Default: false
     */
    right?: boolean;
    /** Persistent. If false, drawer closes when clicked somewhere outside.
     * 
     * Default: false
     */
    persistent?: boolean;
    /** Elevated drawer.
     * 
     * Default: true
    */
    elevation?: boolean;
    /** Show drawer. Bindable.
     * 
     * Default: true
     */
    show?: boolean;
    
    classes?: string|((s:string)=>string);
    navClasses?: string|((s:string)=>string);
    borderClasses?: string|((s:string)=>string);
    /** Transition Props for "fly"(FlyParams)*/
    transitionProps?: {
        duration?: number;
        x?: number;
        y?: number;
        easing?: typeof quadIn;
        opacity?: number;
        delay?:number
    };
} & SvelteAllProps;
declare const _NavigationDrawerEvents: {};
declare const _NavigationDrawerSlots: {
    default: {};
};
export declare type NavigationDrawerProps = typeof _NavigationDrawerProps;
export declare type NavigationDrawerEvents = typeof _NavigationDrawerEvents;
export declare type NavigationDrawerSlots = typeof _NavigationDrawerSlots;
export {};
