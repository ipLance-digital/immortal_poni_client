'use client';

import { RefObject, useEffect } from 'react';

/**
 * Тип для элементов, которые нужно игнорировать при клике вне основного элемента.
 * Может быть либо рефом на DOM-элемент, либо CSS-селектором.
 */
type IgnoreElement = RefObject<HTMLElement> | string;

/**
 * Хук для отслеживания кликов вне заданного элемента с учетом игнорируемых элементов.
 * Вызывает переданный обработчик, если клик произошел за пределами основного элемента
 * и не попал в игнорируемые элементы (рефы или селекторы).
 *
 * @template T - Тип DOM-элемента, на который ссылается основной ref.
 * @param {React.RefObject<T>} ref - Реф на основной элемент, клики внутри которого игнорируются.
 * @param {(event: MouseEvent | TouchEvent) => void} handler - Функция, вызываемая при клике вне элемента.
 * @param {Array<IgnoreElement>} [ignoreElements=[]] - Массив элементов для игнорирования (рефы или CSS-селекторы).
 * @returns {void}
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * const extraRef = useRef<HTMLDivElement>(null);
 * useClickOutside(ref, () => console.log('Clicked outside'), [extraRef, '#toast', '.react-datepicker']);
 *
 * @remarks
 * Обратите внимание, что `ref`, `handler` и `ignoreElements` добавлены в зависимости эффекта.
 * Поскольку переданный `handler` может быть новой функцией при каждом рендере, это вызовет
 * повторный запуск эффекта и очистки при каждом рендере. Это не критично, но для оптимизации
 * рекомендуется обернуть `handler` в `useCallback` перед передачей в хук.
 */
export function useClickOutside<T extends HTMLElement | null>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
  ignoreElements: Array<IgnoreElement> = []
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent): void => {
      if (
        !ref.current ||
        ref.current.contains(event.target as Node) ||
        (event.target as Element)?.closest('.Toastify__toast')
      ) {
        return;
      }

      const shouldIgnore = ignoreElements.some((element) => {
        if (typeof element === 'string') {
          return (event.target as Element)?.closest(element);
        }

        return element?.current?.contains(event.target as Node);
      });

      if (shouldIgnore) {
        return;
      }

      handler(event);
    };
    document.addEventListener('mouseup', listener);
    document.addEventListener('touchstart', listener);

    return (): void => {
      document.removeEventListener('mouseup', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, ignoreElements]);
}
