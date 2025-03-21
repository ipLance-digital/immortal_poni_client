import { FC } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { WidgetButton } from './support-widget.styled';
import { MessageCircleMore } from 'lucide-react';

interface IProps {
  id?: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

export const SupportWidgetButton: FC<IProps> = ({ id, isOpen, toggleOpen }) => {
  return (
    <WidgetButton
      id={id}
      type={'button'}
      onClick={toggleOpen}
      animate={{
        width: isOpen ? 350 : 42,
      }}
      transition={{
        duration: 0.1,
      }}
    >
      <AnimatePresence mode='wait'>
        {!isOpen ? (
          <motion.span
            key='icon'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.1 }}
          >
            <MessageCircleMore />
          </motion.span>
        ) : (
          <motion.span
            key='text'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.1 }}
            style={{
              fontSize: 14,
            }}
          >
            Закрыть
          </motion.span>
        )}
      </AnimatePresence>
    </WidgetButton>
  );
};
