'use client';

import {
  useContext,
  Context,
  createContext,
  useState,
  useEffect,
  startTransition,
  Children,
  isValidElement,
  createElement,
  useRef,
  useMemo,
} from 'react';

export const useStrictContext = <T,>(context: Context<T | null>) => {
  const value = useContext(context);

  if (value === null) {
    throw new Error('Strict context not passed');
  }

  return value as T;
};

export const createStrictContext = <T,>() => {
  return createContext<T | null>(null);
};

export const useAppearenceDelay = (
  show?: boolean,
  options = {} as {
    defaultValue?: boolean;
    appearanceDelay?: number;
    minDisplay?: number;
  },
) => {
  const {
    defaultValue = false,
    appearanceDelay = 300,
    minDisplay = 1000,
  } = options;

  const [delayedShow, setDelayedShow] = useState(defaultValue);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        startTransition(() => setDelayedShow(true));
      }, appearanceDelay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        startTransition(() => setDelayedShow(false));
      }, minDisplay);
      return () => clearTimeout(timer);
    }
  }, [appearanceDelay, minDisplay, show]);

  return delayedShow;
};

export const ComposeChildren = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const array = Children.toArray(children);
  const last = array.pop();

  return (
    <>
      {array.reduceRight(
        (child, element) =>
          isValidElement(element)
            ? createElement(element.type, element.props, child)
            : child,
        last,
      )}
    </>
  );
};

type Fn<ARGS extends Array<unknown>, R> = (...args: ARGS) => R;

export const useEventCallback = <A extends Array<unknown>, R>(
  fn: Fn<A, R>,
): Fn<A, R> => {
  const ref = useRef<Fn<A, R>>(fn);

  useEffect(() => {
    ref.current = fn;
  }, [fn]);

  return useMemo(
    () =>
      (...args: A): R => {
        const { current } = ref;
        return current(...args);
      },
    [],
  );
};
