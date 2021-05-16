type _writable = import("svelte/store").Writable<[]>;

export default function notificationQueue(): {
    subscribe: typeof _writable.subscribe,
    notify: (message: string) => void,
    error: (message: string) => void,
    alert: (message: string) => void,
    remove: (index:number) => void
}
