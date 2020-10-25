import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
/** Tab Button
 * 
 * Props: classes, icon, id, text, to, selected, color, notSelectedColor, 
 * tabClasses
 * 
 * Slots: default
 */
export default class TabButton extends SvelteTypedComponent<TabButtonProps, TabButtonEvents, TabButtonSlots> {
}
declare const _TabButtonProps: {
    /** Classes
     * 
     * Default: "duration-100 relative overflow-hidden text-center w-full h-full p-4 cursor-pointer flex mx-auto items-center text-sm h-full"
     */
    classes?: string|((s:string)=>string);
    /** Icon to show at button.
     * 
     * Default: empty string
     */
    icon?: string;
    /** ID. To compare with "selected".
     * 
     * Default: empty string
     */
    id?: string;
    /** Text.
     * 
     * Default: empty string
     */
    text?: string;
    /** To Href. If set button will be a link.
     * 
     * Default: empty string
     */
    to?: string;
    /** Selected state.
     * 
     * Default: empty string
     */
    selected?: string;
        /** Color variant, accepts any of the main colors described in Tailwind config. 
     * 
     * Default: "primary" */
    color?: string;
    /** Not Selected Color.
     * 
     * Default: "white"
     */
    notSelectedColor?: string;
    /** Tab Classes.
     * 
     * Default: "flex flex-col items-center content-center mx-auto"
     */
    tabClasses?: string|((s:string)=>string);
} & SvelteAllProps;
declare const _TabButtonEvents: {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
};
declare const _TabButtonSlots: {
    default: {};
};
export declare type TabButtonProps = typeof _TabButtonProps;
export declare type TabButtonEvents = typeof _TabButtonEvents;
export declare type TabButtonSlots = typeof _TabButtonSlots;
export {};
