import { FC } from 'react';
import { FullPageSpinnerWrapper } from './full-page-spinner.styled';
import { useAppearenceDelay } from '@/shared/lib/react';
import { Spinner } from '../spinner';

interface IProps {
  isPending: boolean;
}

export const FullPageSpinner: FC<IProps> = ({ isPending }) => {
  const show = useAppearenceDelay(isPending);

  if (show) return null;

  return (
    <FullPageSpinnerWrapper>
      <Spinner style={{ width: '24px', height: '24px' }} />
    </FullPageSpinnerWrapper>
  );
};
