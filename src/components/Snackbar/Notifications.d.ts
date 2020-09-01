import { SvelteTypedComponent } from 'svelte-typed-component';
import notificationQueue from "../../notification-queue";

export declare const notifier: ReturnType<typeof notificationQueue>;

/** Notifications */
export default class Notifications extends SvelteTypedComponent<NotificationsProps, NotificationsEvents, NotificationsSlots> {
}
declare const _NotificationsProps: {
    queue?: typeof notifier;
};
declare const _NotificationsEvents: {};
declare const _NotificationsSlots: {};
export declare type NotificationsProps = typeof _NotificationsProps;
export declare type NotificationsEvents = typeof _NotificationsEvents;
export declare type NotificationsSlots = typeof _NotificationsSlots;
export {};
