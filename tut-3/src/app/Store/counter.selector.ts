import { createFeatureSelector, createSelector } from "@ngrx/store";

export const initialFeatureSelect = createFeatureSelector<number>('myCount');

export const selectCount = createSelector(
    initialFeatureSelect,
    (state)=>state
)

