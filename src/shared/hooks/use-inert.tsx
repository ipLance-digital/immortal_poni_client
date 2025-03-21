'use client';

import { useCallback, useEffect } from 'react';

/**
 * Хук, который управляет атрибутом `inert` у корневого элемента.
 * Используется для блокировки взаимодействия с контентом за пределами активного состояния.
 *
 * @param {boolean} isActive - Флаг активности. Если `true`, атрибут `inert` добавляется к `rootSelector`, иначе удаляется.
 * @param {string} [selector='#main-wrapper'] - CSS-селектор корневого элемента, который нужно сделать `inert`. По умолчанию `#main-wrapper`.
 *
 * @example
 * // Заблокировать взаимодействие с контентом
 * useInert(true);
 *
 * @example
 * // Разблокировать взаимодействие
 * useInert(false);
 *
 * @example
 * // Сделает неактивным #custom-root
 * useInert(true, '#custom-id');
 */
export const useInert = (
  isActive: boolean,
  selector: string = '#main-wrapper'
) => {
  const manageInert = useCallback(() => {
    const rootElement = document.querySelector(selector);

    if (rootElement) {
      if (isActive) {
        rootElement.setAttribute('inert', 'true');
      } else {
        rootElement.removeAttribute('inert');
      }
    }
  }, [isActive, selector]);

  useEffect(() => {
    manageInert();

    return () => {
      const rootElement = document.querySelector(selector);
      rootElement?.removeAttribute('inert');
    };
  }, [manageInert, selector]);
};
