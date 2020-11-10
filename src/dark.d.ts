export declare let darkMode: import("svelte/store").Writable<boolean>|undefined;

export default function dark(value?: boolean, bodyClasses?: string): import("svelte/store").Writable<boolean> | {
    subscribe: typeof darkMode.subscribe;
    set: (v: boolean) => void;
};
