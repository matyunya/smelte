import { SvelteTypedComponent } from 'svelte-typed-component';
export default class AppBar extends SvelteTypedComponent<AppBarProps, AppBarEvents, AppBarSlots> {
}
declare const _AppBarProps: {
    classes?: string|((s:string)=>string);
} & {
    class?:string;
};
declare const _AppBarEvents: {};
declare const _AppBarSlots: {
    default: {};
};
export declare type AppBarProps = typeof _AppBarProps;
export declare type AppBarEvents = typeof _AppBarEvents;
export declare type AppBarSlots = typeof _AppBarSlots;
export {};
