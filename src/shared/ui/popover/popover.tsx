'use client';

import { FC, useCallback, useState } from 'react';
import { PopoverProps } from './popover.types';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'motion/react';
import { ContentWrapper } from './popover.styled';

export const Popover: FC<PopoverProps> = ({
  children,
  trigger,
  isOpen: controlledIsOpen,
  onOpenChange,
  placement = 'bottom-end',
  offset: internalOffset = 8,
}) => {
  const [internalOpen, setInternalOpen] = useState<boolean>(false);
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;

  const setIsOpen = useCallback(
    (value: boolean) => {
      if (onOpenChange) {
        onOpenChange(value);
      } else {
        setInternalOpen(value);
      }
    },
    [onOpenChange]
  );

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      offset(internalOffset),
      flip({
        fallbackPlacements: ['top-end'],
      }),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context, { outsidePress: true });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  return (
    <>
      <div
        ref={refs.setReference}
        onClick={() => setIsOpen(!isOpen)}
        {...getReferenceProps()}
      >
        {trigger}
      </div>

      {isOpen &&
        createPortal(
          <AnimatePresence>
            <ContentWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
              }}
              {...getFloatingProps()}
            >
              {children}
            </ContentWrapper>
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};
