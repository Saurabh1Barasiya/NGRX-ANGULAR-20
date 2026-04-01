import { createFeatureSelector, createSelector } from "@ngrx/store";

//  ye counterReducer se value leta hai.
export const selectCounter = createFeatureSelector<number>('counter');

// createSelector takes initial selector 
// and function that read state. and return state.

export const selectCount = createSelector(
    selectCounter,
    (state)=>state
)