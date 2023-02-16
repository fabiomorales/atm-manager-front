/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Ref, RefObject, useEffect, useRef } from 'react';

export function useShareForwardedRef<T>(forwardedRef: Ref<T>): RefObject<T> {
  // Final ref that will share value with forward ref. this is the one we will attach to components
  const innerRef = useRef<T>(null);

  useEffect(() => {
    // After every render - try to share current ref value with forwarded ref
    if (!forwardedRef || !Object.keys(forwardedRef).length) {
      return;
    }

    if (typeof forwardedRef === 'function') {
      forwardedRef(innerRef.current);
      return;
    } else {
      // @ts-ignore
      forwardedRef.current = innerRef.current;
    }
  }, [innerRef, forwardedRef]);

  return innerRef;
}
