import { SvelteTypedComponent } from 'svelte-typed-component';
/** Tab.
 * 
 * Props: selecte, id
 * 
 * Slots: default
 */
export default class Tab extends SvelteTypedComponent<TabProps, TabEvents, TabSlots> {
}
declare const _TabProps: {
    /** Selectd
     * 
     * Default: undefined
     */
    selected?: string;
    /** ID
     * 
     * Default: null
     */
    id?: string|null;
};
declare const _TabEvents: {
    [evt: string]: CustomEvent<any>;
};
declare const _TabSlots: {
    default: {};
};
export declare type TabProps = typeof _TabProps;
export declare type TabEvents = typeof _TabEvents;
export declare type TabSlots = typeof _TabSlots;
export {};
