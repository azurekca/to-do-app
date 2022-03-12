import { useEffect, useState } from 'react';
/**
 * Use local storage to save state across sessions
 * adapted from https://www.joshwcomeau.com/snippets/react-hooks/use-sticky-state/
 * @param {any} initState default value
 * @param {string} localKey used for the local storage key
 * @returns {any}
 */
export default function useLocalState(initState, localKey) {
  const [state, setState] = useState(() => {
    const savedState = window.localStorage.getItem(localKey);

    if (savedState !== null) return JSON.parse(savedState);
    return initState;
  });

  useEffect(() => {
    window.localStorage.setItem(localKey, JSON.stringify(state))
  }, [localKey, state]);

  return [state, setState];
}