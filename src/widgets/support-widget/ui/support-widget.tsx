'use client';

import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'motion/react';
import { useToggle, useClickOutside } from '@/shared/hooks';
import { WidgetContent, WidgetWrapper } from './support-widget.styled';
import { SupportWidgetButton } from './support-widget-button';

export const SupportWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isOpen, toggleOpen] = useToggle();

  useClickOutside(widgetRef, () => toggleOpen(false), ['#widget-button']);

  return (
    <>
      <SupportWidgetButton
        id={'widget-button'}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      />

      {isOpen &&
        createPortal(
          <AnimatePresence>
            <WidgetWrapper
              ref={widgetRef}
              initial={{
                opacity: 0,
                scale: 0.96,
                transformOrigin: 'bottom right',
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.15 }}
            >
              <div
                style={{
                  padding: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <h3>Чат</h3>
              </div>

              <WidgetContent>
                <p>adasdasdasd</p>
                <p>adasdasdasd</p>
              </WidgetContent>
            </WidgetWrapper>
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};
