import { createStore } from 'redux';

interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

export function enthusiasm(state, action): StoreState {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore<StoreState, any, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
});

export default store;
