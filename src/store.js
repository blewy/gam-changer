import { writable } from 'svelte/store';

export const multiSelectMenuStore = writable({
  moveMode: false,
  toSwitchMoveMode: false,
  subItemMode: null,
  setValue: null,
  step: 3,
  interpolationMode: 'inplace',
});

export const tooltipConfigStore = writable({});
