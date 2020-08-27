export type ColumnSelector<T extends {[key:string]:any}> =    {sort:(data:T[])=>T[]} | 
                            {value:(item:T)=>number|string} |
                            {field: keyof T};
export type DataTableSortFunction<T extends {[key:string]:any}> = (data: T[], col: ColumnSelector<T>, asc?: boolean) => T[];

declare const sort : DataTableSortFunction<{[key:string]:any}>;

export default sort;
