// Utility functions for localStorage operations

// Save state to localStorage
export const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("reduxState", JSON.stringify(state));
  } catch (error) {
    console.error("Could not save state to localStorage", error);
  }
};

// Load state from localStorage
export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Could not load state from localStorage", error);
    return undefined;
  }
};
