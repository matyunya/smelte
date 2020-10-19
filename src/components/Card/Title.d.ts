import { SvelteTypedComponent , SvelteAllProps } from 'svelte-typed-component';
export default class Title extends SvelteTypedComponent<TitleProps, TitleEvents, TitleSlots> {
    get hover(): boolean;
}
declare const _TitleProps: {
    /** The title of the card.
     * 
     * Default: empty string
     */
    title?: string;
    /** The subtitle of the card
     * 
     * Default: empty string
     */
    subheader?: string;
    /** Url/Href of a picture.
     * 
     * Default: empty string
     */
    avatar?: string;
    /** String of root element classes.
     * 
     * Default: "flex px-4 py-2 items-center"
     */
    classes?: string|((s:string)=>string);
} & SvelteAllProps;
declare const _TitleEvents: {};
declare const _TitleSlots: {};
export declare type TitleProps = typeof _TitleProps;
export declare type TitleEvents = typeof _TitleEvents;
export declare type TitleSlots = typeof _TitleSlots;
export {};
