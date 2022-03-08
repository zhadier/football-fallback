export const loadState = (state) => {
  try {
    const serializedState = localStorage.getItem(state);
    if (!serializedState) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (item, state) => {
  try {
    const serializedState = JSON.stringify(item);
    localStorage.setItem(state, serializedState);
  } catch {
    // ignore write errors
  }
};
