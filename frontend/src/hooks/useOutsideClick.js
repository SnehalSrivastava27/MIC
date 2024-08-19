import { useEffect } from 'react';

/**
 * Hook to detect outside clicks.
 *
 * @param {React.RefObject<HTMLDivElement>} ref - The ref of the element to monitor clicks outside of.
 * @param {Function} callback - The function to call when an outside click is detected.
 */
export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback]);
};
