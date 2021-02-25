import { createSelector } from 'reselect';

const selectMenu = state => state.menu;

export const selectMenuCollections = createSelector (
    [selectMenu],
    menu => menu.collections
);