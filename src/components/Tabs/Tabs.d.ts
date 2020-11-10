import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
import { TabButtonProps } from './TabButton';
/** Tabs can be used as navigation elements like the ones you see on the top right. You need to bind current pathname as value prop for active indicator to work correctly.
 * 
 * Props: selected, navigation, items, indicator, color, notSelectedColor,
 * loading, tabButtonClasses, classes
 * 
 * Slots (slot-props): item (color, item), content (selected)
 */
export default class Tabs extends SvelteTypedComponent<TabsProps, TabsEvents, TabsSlots> {
}
declare const _TabsProps: {
    /** Selected state. Bindable.
     * 
     * Default: null
     */
    selected?: string|null;
    /** Navigation variant.
     * 
     * Default: false
     */
    navigation?: boolean;
    /** Items */
    items?: TabButtonProps[];
    /** Indicator.
     * 
     * Default: true
     */
    indicator?: boolean;
    /** Color
     * 
     * Default: "white"
     */
    color?: string;
    /** Not Selected Color
     * 
     * Default: "white"
     */
    notSelectedColor?: string;
    /** Loading.
     * 
     * Default: false
     */
    loading?: boolean;
    tabButtonClasses?: string|((i: string) => string);
    /** Classes.
     * 
     * Default: "y-0 h-full items-center relative mx-auto z-20"
     */
    classes?: string|((s:string)=>string);
} & SvelteAllProps;
declare const _TabsEvents: {
    [evt: string]: CustomEvent<any>;
};
declare const _TabsSlots: {
    item: {
        color: string;
        item: any;
    };
    content: {
        selected: any;
    };
};
export declare type TabsProps = typeof _TabsProps;
export declare type TabsEvents = typeof _TabsEvents;
export declare type TabsSlots = typeof _TabsSlots;
export {};
