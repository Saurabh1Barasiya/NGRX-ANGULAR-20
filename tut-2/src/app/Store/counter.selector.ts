import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCounterFeature = createFeatureSelector<number>('counterExample');

export const selectCount = createSelector(
    selectCounterFeature,
    (state)=>state
)