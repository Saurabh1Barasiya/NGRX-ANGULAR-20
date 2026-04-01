import {  createAction, props } from "@ngrx/store";

export const increment = createAction("[COUNTER] Increment",
    props<{value:number}>()
);
export const decrement = createAction("[COUNTER] Decrement",
    props<{value:number}>()
);

export const reset = createAction("[COUNTER] Reset");