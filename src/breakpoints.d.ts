declare function defaultCalc(width: number): "xl" | "lg" | "md" | "sm";
export default function breakpoint(calcBreakpoint?: typeof defaultCalc): import("svelte/store").Writable<string> | {
    subscribe: (run: (value: string) => void, invalidate?: (value?: string) => void) => () => void;
};
export {};
