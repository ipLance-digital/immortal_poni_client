'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { createPortal } from 'react-dom';
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  useClick,
  useDismiss,
  useInteractions,
} from '@floating-ui/react';
import { Divider } from '@/shared/ui';
import { Text } from '../text';
import {
  ContentWrapper,
  DropdownWrapper,
  ItemWrapper,
  TriggerWrapper,
} from './dropdown.styled';
import { DropdownProps } from './dropdown.types';

export function Dropdown({
  items,
  trigger,
  isOpen: controlledIsOpen,
  onOpenChange,
}: DropdownProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const setIsOpen = (value: boolean) => {
    if (onOpenChange) onOpenChange(value);
    else setInternalIsOpen(value);
  };

  const { refs, floatingStyles, placement, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-end',
    middleware: [offset(8), flip({ fallbackPlacements: ['top-end'] }), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);

  // Хук для закрытия при клике вне Dropdown
  const dismiss = useDismiss(context, {
    outsidePress: true, // Закрывать при клике вне
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  return (
    <DropdownWrapper>
      <TriggerWrapper
        ref={refs.setReference}
        onClick={() => setIsOpen(!isOpen)}
        {...getReferenceProps()}
      >
        {trigger}
      </TriggerWrapper>

      {isOpen &&
        createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ContentWrapper
              ref={refs.setFloating}
              style={floatingStyles}
              data-placement={placement}
              {...getFloatingProps()}
            >
              {items.map((item, index) =>
                item.divider ? (
                  <Divider key={index} my={16} />
                ) : (
                  <ItemWrapper
                    key={index}
                    onClick={() => {
                      item.onClick?.();
                      setIsOpen(false);
                    }}
                  >
                    {typeof item.label === 'string' ? (
                      <Text variant='body-14'>{item.label}</Text>
                    ) : (
                      item.label
                    )}
                  </ItemWrapper>
                )
              )}
            </ContentWrapper>
          </motion.div>,
          document.body
        )}
    </DropdownWrapper>
  );
}
